import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { quizService } from '../../services/quizService';
import type { QuizPaciente } from '../../services/quizService';

const ESTADIOS = [1, 2, 3, 4];
const EXTENSIONES = ['Localizada', 'Generalizada'];
const GRADOS = ['A', 'B', 'C'];

function ImagePlaceholder({ label, small }: { label: string; small?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 text-center border-2 border-dashed border-border-light rounded-xl bg-bg-light text-text-light ${
        small ? 'min-h-[120px] p-3' : 'min-h-[220px] p-6'
      }`}
    >
      <span className={small ? 'text-xl' : 'text-3xl'}>🖼️</span>
      <p className={`font-semibold ${small ? 'text-xs' : 'text-sm'}`}>{label}</p>
      <p className="text-xs">Imagen pendiente</p>
    </div>
  );
}

export function QuizFinalInteractivo() {
  const { user } = useAuth();
  const [pacientes, setPacientes] = useState<QuizPaciente[]>([]);
  const [loading, setLoading] = useState(true);
  const [indice, setIndice] = useState(0);

  const [estadio, setEstadio] = useState<number | null>(null);
  const [extension, setExtension] = useState<string | null>(null);
  const [grado, setGrado] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const [mostrandoResultado, setMostrandoResultado] = useState(false);
  const [ultimoResultado, setUltimoResultado] = useState<boolean | null>(null);
  const [puntuacion, setPuntuacion] = useState(0);
  const [completado, setCompletado] = useState(false);

  useEffect(() => {
    quizService.getPacientes().then((data) => {
      setPacientes(data);
      setLoading(false);
    });
  }, []);

  const pacienteActual = pacientes[indice];

  const handleDiagnosticar = async () => {
    if (!estadio || !extension || !grado) {
      setValidationError('Seleccioná Estadio, Extensión y Grado antes de continuar.');
      return;
    }
    setValidationError(null);

    const esCorrecta =
      estadio === pacienteActual.estadio_correcto &&
      extension === pacienteActual.extension_correcta &&
      grado === pacienteActual.grado_correcto;

    setUltimoResultado(esCorrecta);
    setMostrandoResultado(true);
    if (esCorrecta) setPuntuacion((p) => p + 1);

    if (user?.id) {
      await quizService.submitIntento(user.id, pacienteActual.id, estadio, extension, grado, esCorrecta);
    }
  };

  const handleSiguiente = () => {
    if (indice < pacientes.length - 1) {
      setIndice((i) => i + 1);
      setEstadio(null);
      setExtension(null);
      setGrado(null);
      setMostrandoResultado(false);
      setUltimoResultado(null);
    } else {
      setCompletado(true);
    }
  };

  const handleReintentar = () => {
    setIndice(0);
    setEstadio(null);
    setExtension(null);
    setGrado(null);
    setMostrandoResultado(false);
    setUltimoResultado(null);
    setPuntuacion(0);
    setCompletado(false);
  };

  if (loading) {
    return (
      <div className="text-center py-16">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="rounded-full h-12 w-12 border-4 border-unicoc-red border-t-transparent mx-auto mb-4"
        />
        <p className="text-text-light">Cargando casos clínicos...</p>
      </div>
    );
  }

  if (pacientes.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <p className="text-text-dark font-medium">
          Todavía no hay casos cargados. Ejecutá <code>npm run insert:quizfinal</code> para sembrarlos.
        </p>
      </div>
    );
  }

  if (completado) {
    const porcentaje = Math.round((puntuacion / pacientes.length) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-10 shadow-lg text-center max-w-md mx-auto"
      >
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-2xl font-bold text-unicoc-red mb-4">Quiz completado</h2>
        <p className="text-lg text-text-dark font-semibold mb-1">
          {puntuacion} de {pacientes.length} correctos
        </p>
        <p className="text-text-light mb-8">{porcentaje}%</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReintentar}
          className="bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition"
        >
          Reintentar
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <p className="text-text-light font-semibold mb-2">
          Caso {indice + 1} de {pacientes.length}
        </p>
        <div className="h-2 bg-border-light rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-unicoc-red to-unicoc-red-dark"
            animate={{ width: `${((indice + 1) / pacientes.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Columna 1: datos del paciente */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-unicoc-red">{pacienteActual.nombre}</h3>
            <p className="text-sm text-text-light">
              {pacienteActual.edad} años · {pacienteActual.ocupacion}
            </p>
          </div>

          <div className="bg-bg-light border-l-4 border-unicoc-red-light rounded-r-lg p-3">
            <p className="text-xs font-bold text-text-dark uppercase tracking-wide mb-1">Razón de consulta</p>
            <p className="text-sm text-text-dark italic">"{pacienteActual.razon_consulta}"</p>
          </div>

          <div className="bg-bg-light rounded-lg p-3 space-y-1.5">
            <p className="text-xs font-bold text-text-dark uppercase tracking-wide mb-1">Antecedentes</p>
            <p className="text-sm text-text-dark"><strong>Sistémicos:</strong> {pacienteActual.antecedentes_sistemicos || 'Ninguno relevante'}</p>
            <p className="text-sm text-text-dark"><strong>Medicamentos:</strong> {pacienteActual.medicamentos || 'No refiere'}</p>
            <p className="text-sm text-text-dark"><strong>Hábitos:</strong> {pacienteActual.habitos || 'No especificados'}</p>
          </div>

          <div className="bg-bg-light rounded-lg p-3">
            <p className="text-xs font-bold text-text-dark uppercase tracking-wide mb-1">Hallazgos principales</p>
            <p className="text-sm text-text-dark leading-relaxed">{pacienteActual.hallazgos_principales}</p>
          </div>

          <div className="bg-bg-light rounded-lg p-3">
            <p className="text-xs font-bold text-text-dark uppercase tracking-wide mb-2">Datos clínicos clave</p>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-border-light"><td className="py-1 font-semibold text-text-dark">CAL máximo</td><td className="py-1 text-right">{pacienteActual.cal_maximo} mm</td></tr>
                <tr className="border-b border-border-light"><td className="py-1 font-semibold text-text-dark">BOP</td><td className="py-1 text-right">{pacienteActual.bop_porcentaje}%</td></tr>
                <tr className="border-b border-border-light"><td className="py-1 font-semibold text-text-dark">PPS máximo</td><td className="py-1 text-right">{pacienteActual.pps_maximo} mm</td></tr>
                <tr className="border-b border-border-light"><td className="py-1 font-semibold text-text-dark">RBL estimado</td><td className="py-1 text-right">{pacienteActual.rbl_estimado}</td></tr>
                <tr className="border-b border-border-light"><td className="py-1 font-semibold text-text-dark">Dientes presentes</td><td className="py-1 text-right">{pacienteActual.dientes_presentes}</td></tr>
                <tr className="border-b border-border-light"><td className="py-1 font-semibold text-text-dark">Dientes ausentes</td><td className="py-1 text-right">{pacienteActual.dientes_ausentes}</td></tr>
                <tr><td className="py-1 font-semibold text-text-dark">Movilidad</td><td className="py-1 text-right">{pacienteActual.movilidad || '—'}</td></tr>
              </tbody>
            </table>
          </div>

          {pacienteActual.otros_hallazgos && Object.keys(pacienteActual.otros_hallazgos).length > 0 && (
            <div className="bg-bg-light rounded-lg p-3">
              <p className="text-xs font-bold text-text-dark uppercase tracking-wide mb-2">Hallazgos adicionales</p>
              <div className="space-y-1">
                {Object.entries(pacienteActual.otros_hallazgos).map(([key, value]) => (
                  <p key={key} className="text-sm text-text-dark">
                    <strong className="capitalize">{key.replace(/_/g, ' ')}:</strong> {String(value)}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Columna 2: imágenes */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <div>
            <p className="text-xs font-bold text-text-dark uppercase tracking-wide mb-2">Periodontograma</p>
            {pacienteActual.periodontograma_url ? (
              <img
                src={pacienteActual.periodontograma_url}
                alt={`Periodontograma de ${pacienteActual.nombre}`}
                className="w-full rounded-xl border border-border-light max-h-[400px] object-contain"
              />
            ) : (
              <ImagePlaceholder label="Periodontograma" />
            )}
          </div>

          <div>
            <p className="text-xs font-bold text-text-dark uppercase tracking-wide mb-2">Radiografías</p>
            <div className="space-y-3">
              {pacienteActual.radiografia_panoramica_url && (
                <div>
                  <p className="text-xs font-semibold text-text-light mb-1">Panorámica</p>
                  <img
                    src={pacienteActual.radiografia_panoramica_url}
                    alt="Radiografía panorámica"
                    className="w-full rounded-lg border border-border-light max-h-[220px] object-contain"
                  />
                </div>
              )}
              {[
                { label: 'Sextante I — Vestibular', url: pacienteActual.radiografia_sextante_1_vestibular },
                { label: 'Sextante I — Palatino', url: pacienteActual.radiografia_sextante_1_palatino },
                { label: 'Sextante II — Vestibular', url: pacienteActual.radiografia_sextante_2_vestibular },
              ].map((rad) => (
                <div key={rad.label}>
                  <p className="text-xs font-semibold text-text-light mb-1">{rad.label}</p>
                  {rad.url ? (
                    <img src={rad.url} alt={rad.label} className="w-full rounded-lg border border-border-light max-h-[200px] object-contain" />
                  ) : (
                    <ImagePlaceholder label={rad.label} small />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna 3: selectores + resultado */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">
          <h4 className="text-lg font-bold text-text-dark">Tu diagnóstico</h4>

          <div>
            <p className="text-sm font-semibold text-text-dark mb-2">Estadio</p>
            <div className="flex flex-wrap gap-2">
              {ESTADIOS.map((s) => (
                <button
                  key={s}
                  type="button"
                  disabled={mostrandoResultado}
                  onClick={() => setEstadio(s)}
                  className={`flex-1 min-w-[70px] px-3 py-2 rounded-lg border-2 font-semibold text-sm transition disabled:cursor-not-allowed disabled:opacity-50 ${
                    estadio === s ? 'bg-unicoc-red text-white border-unicoc-red' : 'border-border-light text-text-dark hover:border-unicoc-red hover:text-unicoc-red'
                  }`}
                >
                  Estadio {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-dark mb-2">Extensión</p>
            <div className="flex flex-wrap gap-2">
              {EXTENSIONES.map((ext) => (
                <button
                  key={ext}
                  type="button"
                  disabled={mostrandoResultado}
                  onClick={() => setExtension(ext)}
                  className={`flex-1 min-w-[100px] px-3 py-2 rounded-lg border-2 font-semibold text-sm transition disabled:cursor-not-allowed disabled:opacity-50 ${
                    extension === ext ? 'bg-unicoc-red text-white border-unicoc-red' : 'border-border-light text-text-dark hover:border-unicoc-red hover:text-unicoc-red'
                  }`}
                >
                  {ext}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-dark mb-2">Grado</p>
            <div className="flex flex-wrap gap-2">
              {GRADOS.map((g) => (
                <button
                  key={g}
                  type="button"
                  disabled={mostrandoResultado}
                  onClick={() => setGrado(g)}
                  className={`flex-1 min-w-[70px] px-3 py-2 rounded-lg border-2 font-semibold text-sm transition disabled:cursor-not-allowed disabled:opacity-50 ${
                    grado === g ? 'bg-unicoc-red text-white border-unicoc-red' : 'border-border-light text-text-dark hover:border-unicoc-red hover:text-unicoc-red'
                  }`}
                >
                  Grado {g}
                </button>
              ))}
            </div>
          </div>

          {validationError && (
            <p className="text-sm text-red-600 font-medium">{validationError}</p>
          )}

          {!mostrandoResultado && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDiagnosticar}
              className="w-full bg-gradient-to-r from-unicoc-red to-unicoc-red-dark text-white py-3 rounded-lg font-bold hover:shadow-lg transition"
            >
              Diagnosticar
            </motion.button>
          )}

          <AnimatePresence>
            {mostrandoResultado && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-xl p-4 border-2 ${
                  ultimoResultado ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
                }`}
              >
                <p className={`font-bold mb-2 ${ultimoResultado ? 'text-green-800' : 'text-red-800'}`}>
                  {ultimoResultado ? '✓ ¡Correcto!' : '✗ Incorrecto'}
                </p>
                {!ultimoResultado && (
                  <p className="text-sm text-red-800 mb-2">
                    Correcto: Estadio {pacienteActual.estadio_correcto}, {pacienteActual.extension_correcta}, Grado {pacienteActual.grado_correcto}.
                  </p>
                )}
                {pacienteActual.notas_diagnostico && (
                  <p className="text-sm text-text-dark leading-relaxed bg-white/60 rounded-lg p-3 mb-3">
                    {pacienteActual.notas_diagnostico}
                  </p>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSiguiente}
                  className="w-full bg-unicoc-red text-white py-2.5 rounded-lg font-bold hover:bg-unicoc-red-dark transition"
                >
                  {indice < pacientes.length - 1 ? 'Siguiente caso →' : 'Ver resultados'}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
