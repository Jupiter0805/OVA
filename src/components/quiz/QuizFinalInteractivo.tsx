import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { quizService } from '../../services/quizService';
import type { QuizPaciente } from '../../services/quizService';

const ESTADIOS = [1, 2, 3, 4];
const EXTENSIONES = ['Localizada', 'Generalizada'];
const GRADOS = ['A', 'B', 'C'];
const NUMEROS_ROMANOS: Record<number, string> = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV' };
const romano = (n: number) => NUMEROS_ROMANOS[n] ?? String(n);

function SeccionExpandible({ titulo, children }: { titulo: string; children: ReactNode }) {
  const [abierta, setAbierta] = useState(false);
  return (
    <div className="bg-bg-light rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setAbierta((a) => !a)}
        className="w-full flex items-center justify-between p-3 text-left"
      >
        <span className="text-xs font-bold text-text-dark uppercase tracking-wide">{titulo}</span>
        <span className={`text-text-light transition-transform ${abierta ? 'rotate-180' : ''}`}>▼</span>
      </button>
      <AnimatePresence initial={false}>
        {abierta && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="px-3 pb-3"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ZoomableImage({
  src,
  alt,
  className,
  onZoom,
}: {
  src: string;
  alt: string;
  className: string;
  onZoom: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onZoom}
      className="group relative w-full cursor-zoom-in"
      aria-label={`Ampliar imagen: ${alt}`}
    >
      <img src={src} alt={alt} className={className} />
      <span className="absolute bottom-2 right-2 flex items-center justify-center w-7 h-7 rounded-full bg-black/60 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        🔍
      </span>
    </button>
  );
}

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [interacting, setInteracting] = useState(false);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const dragState = useRef<{ startOffset: { x: number; y: number }; startPoint: { x: number; y: number } } | null>(null);
  const pinchState = useRef<{ startDist: number; startScale: number } | null>(null);

  const clamp = (s: number) => Math.min(6, Math.max(1, s));

  const applyScale = (next: number) => {
    const clamped = clamp(next);
    setScale(clamped);
    if (clamped === 1) setOffset({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    applyScale(scale - e.deltaY * 0.0025);
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    applyScale(scale > 1 ? 1 : 2.5);
  };

  const getDistance = () => {
    const pts = Array.from(pointers.current.values());
    if (pts.length < 2) return 0;
    return Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    setInteracting(true);
    if (pointers.current.size === 2) {
      pinchState.current = { startDist: getDistance(), startScale: scale };
      dragState.current = null;
    } else if (pointers.current.size === 1 && scale > 1) {
      dragState.current = { startOffset: offset, startPoint: { x: e.clientX, y: e.clientY } };
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2 && pinchState.current) {
      const dist = getDistance();
      if (pinchState.current.startDist > 0) {
        applyScale(pinchState.current.startScale * (dist / pinchState.current.startDist));
      }
    } else if (dragState.current) {
      const dx = e.clientX - dragState.current.startPoint.x;
      const dy = e.clientY - dragState.current.startPoint.y;
      setOffset({ x: dragState.current.startOffset.x + dx, y: dragState.current.startOffset.y + dy });
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinchState.current = null;
    if (pointers.current.size === 0) {
      dragState.current = null;
      setInteracting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-hidden"
    >
      <div
        className={scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onDoubleClick={handleDoubleClick}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ touchAction: 'none' }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl select-none"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transition: interacting ? 'none' : 'transform 0.15s ease-out',
          }}
        />
      </div>

      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => applyScale(scale - 0.5)}
          aria-label="Alejar"
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg font-bold transition-colors"
        >
          −
        </button>
        <span className="text-white/80 text-sm w-14 text-center select-none">{Math.round(scale * 100)}%</span>
        <button
          type="button"
          onClick={() => applyScale(scale + 0.5)}
          aria-label="Acercar"
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg font-bold transition-colors"
        >
          +
        </button>
        {scale > 1 && (
          <button
            type="button"
            onClick={() => applyScale(1)}
            className="px-3 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
          >
            Restablecer
          </button>
        )}
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Cerrar imagen ampliada"
        className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-colors"
      >
        ✕
      </button>

      <p className="absolute top-4 left-4 right-16 text-white/70 text-sm">{alt}</p>
    </motion.div>
  );
}

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
  const [imagenAmpliada, setImagenAmpliada] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    quizService.getPacientes().then((data) => {
      setPacientes(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!imagenAmpliada) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setImagenAmpliada(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imagenAmpliada]);

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
        <div key={indice} className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
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

          {pacienteActual.dificultad_caso && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-text-dark uppercase tracking-wide">Dificultad del caso:</span>
              <span className="text-xs font-bold px-2 py-1 rounded-full bg-unicoc-red/10 text-unicoc-red">
                {pacienteActual.dificultad_caso}
              </span>
            </div>
          )}

          {pacienteActual.valores_comorbilidades && Object.keys(pacienteActual.valores_comorbilidades).length > 0 && (
            <SeccionExpandible titulo="Valores y comorbilidades">
              <div className="space-y-1">
                {Object.entries(pacienteActual.valores_comorbilidades).map(([key, value]) => (
                  <p key={key} className="text-sm text-text-dark">
                    <strong className="capitalize">{key.replace(/_/g, ' ')}:</strong> {String(value)}
                  </p>
                ))}
              </div>
            </SeccionExpandible>
          )}

          {pacienteActual.datos_sextantes && Object.keys(pacienteActual.datos_sextantes).length > 0 && (
            <SeccionExpandible titulo="Datos por sextante">
              <div className="space-y-2">
                {Object.entries(pacienteActual.datos_sextantes).map(([key, sext]) => (
                  <div key={key} className="bg-white border border-border-light rounded-lg p-2.5">
                    <p className="text-sm font-bold text-unicoc-red mb-1">{sext.nombre}</p>
                    <p className="text-xs text-text-dark">
                      CAL {sext.cal_maximo}mm · BOP {sext.bop}% · PPS {sext.pps_maximo}mm
                    </p>
                    <p className="text-xs text-text-light mt-1 leading-relaxed">{sext.hallazgos}</p>
                  </div>
                ))}
              </div>
            </SeccionExpandible>
          )}

          {(pacienteActual.fenotipo_gingival || pacienteActual.recesion_gingival) && (
            <SeccionExpandible titulo="Fenotipo gingival y recesión">
              <div className="space-y-1">
                {pacienteActual.fenotipo_gingival && (
                  <p className="text-sm text-text-dark"><strong>Fenotipo:</strong> {pacienteActual.fenotipo_gingival}</p>
                )}
                {pacienteActual.recesion_gingival && (
                  <p className="text-sm text-text-dark">
                    <strong>Recesión:</strong>{' '}
                    {pacienteActual.recesion_gingival.presente
                      ? pacienteActual.recesion_gingival.zonas
                      : 'No presente'}
                  </p>
                )}
              </div>
            </SeccionExpandible>
          )}

          {(pacienteActual.trauma_oclusal_primario || pacienteActual.trauma_oclusal_secundario || pacienteActual.furcacion_presente !== null) && (
            <SeccionExpandible titulo="Trauma oclusal y furcación">
              <div className="space-y-1">
                {pacienteActual.trauma_oclusal_primario && (
                  <p className="text-sm text-text-dark"><strong>Trauma oclusal primario:</strong> {pacienteActual.trauma_oclusal_primario}</p>
                )}
                {pacienteActual.trauma_oclusal_secundario && (
                  <p className="text-sm text-text-dark"><strong>Trauma oclusal secundario:</strong> {pacienteActual.trauma_oclusal_secundario}</p>
                )}
                <p className="text-sm text-text-dark">
                  <strong>Furcación:</strong>{' '}
                  {pacienteActual.furcacion_presente ? (pacienteActual.furcacion_detalle || 'Presente') : 'No presente'}
                </p>
              </div>
            </SeccionExpandible>
          )}

          {(pacienteActual.hallazgos_radiograficos || pacienteActual.patron_perdida_osea || pacienteActual.ligamento_periodontal_estado) && (
            <SeccionExpandible titulo="Hallazgos radiográficos descriptivos">
              <div className="space-y-1.5">
                {pacienteActual.patron_perdida_osea && (
                  <p className="text-sm text-text-dark"><strong>Patrón de pérdida ósea:</strong> {pacienteActual.patron_perdida_osea}</p>
                )}
                {pacienteActual.ligamento_periodontal_estado && (
                  <p className="text-sm text-text-dark"><strong>Ligamento periodontal:</strong> {pacienteActual.ligamento_periodontal_estado}</p>
                )}
                {pacienteActual.hallazgos_radiograficos && (
                  <p className="text-sm text-text-dark leading-relaxed">{pacienteActual.hallazgos_radiograficos}</p>
                )}
              </div>
            </SeccionExpandible>
          )}
        </div>

        {/* Columna 2: imágenes */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <div>
            <p className="text-xs font-bold text-text-dark uppercase tracking-wide mb-2">Periodontograma</p>
            {pacienteActual.periodontograma_urls && pacienteActual.periodontograma_urls.length > 0 ? (
              <div className={pacienteActual.periodontograma_urls.length > 1 ? 'grid grid-cols-2 gap-2' : ''}>
                {pacienteActual.periodontograma_urls.map(({ label, url }) => (
                  <div key={url}>
                    <p className="text-xs font-semibold text-text-light mb-1">{label}</p>
                    <ZoomableImage
                      src={url}
                      alt={`${label} de ${pacienteActual.nombre}`}
                      className="w-full rounded-xl border border-border-light max-h-[380px] object-contain"
                      onZoom={() => setImagenAmpliada({ src: url, alt: `${label} de ${pacienteActual.nombre}` })}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <ImagePlaceholder label="Periodontograma" />
            )}
          </div>

          <div>
            <p className="text-xs font-bold text-text-dark uppercase tracking-wide mb-2">Radiografías</p>
            {(() => {
              const radiografias = pacienteActual.radiografia_urls ?? [];
              if (radiografias.length === 0) return <ImagePlaceholder label="Radiografía" />;
              return (
                <div className={radiografias.length > 1 ? 'grid grid-cols-2 gap-2' : ''}>
                  {radiografias.map(({ label, url }) => (
                    <div key={url}>
                      {radiografias.length > 1 && (
                        <p className="text-xs font-semibold text-text-light mb-1">{label}</p>
                      )}
                      <ZoomableImage
                        src={url}
                        alt={`${label} de ${pacienteActual.nombre}`}
                        className="w-full rounded-lg border border-border-light max-h-[220px] object-contain"
                        onZoom={() => setImagenAmpliada({ src: url, alt: `${label} de ${pacienteActual.nombre}` })}
                      />
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          {pacienteActual.fotos_clinicas_urls && pacienteActual.fotos_clinicas_urls.length > 0 && (
            <div>
              <p className="text-xs font-bold text-text-dark uppercase tracking-wide mb-2">Fotografías clínicas</p>
              {(() => {
                const fotos = pacienteActual.fotos_clinicas_urls;
                return (
                  <div className={fotos.length > 1 ? 'grid grid-cols-2 gap-2' : ''}>
                    {fotos.map(({ label, url }) => (
                      <div key={url}>
                        {fotos.length > 1 && (
                          <p className="text-xs font-semibold text-text-light mb-1">{label}</p>
                        )}
                        <ZoomableImage
                          src={url}
                          alt={`${label} de ${pacienteActual.nombre}`}
                          className="w-full rounded-lg border border-border-light max-h-[220px] object-contain"
                          onZoom={() => setImagenAmpliada({ src: url, alt: `${label} de ${pacienteActual.nombre}` })}
                        />
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          )}
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
                  Estadio {romano(s)}
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
                    Correcto: Estadio {romano(pacienteActual.estadio_correcto)}, {pacienteActual.extension_correcta}, Grado {pacienteActual.grado_correcto}.
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

      <AnimatePresence>
        {imagenAmpliada && (
          <Lightbox
            key={imagenAmpliada.src}
            src={imagenAmpliada.src}
            alt={imagenAmpliada.alt}
            onClose={() => setImagenAmpliada(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
