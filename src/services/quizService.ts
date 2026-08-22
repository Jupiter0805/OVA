import { supabase } from './supabase';

export interface QuizPaciente {
  id: string;
  caso_numero: number;
  nombre: string;
  edad: number;
  sexo: string | null;
  ocupacion: string | null;
  razon_consulta: string | null;
  antecedentes_sistemicos: string | null;
  medicamentos: string | null;
  habitos: string | null;
  antecedentes_quirurgicos: string | null;
  alergias: string | null;
  hallazgos_principales: string | null;
  cal_maximo: number | null;
  bop_porcentaje: number | null;
  pps_maximo: number | null;
  rbl_estimado: string | null;
  movilidad: string | null;
  dientes_presentes: number | null;
  dientes_ausentes: number | null;
  otros_hallazgos: Record<string, string | number> | null;
  periodontograma_url: string | null;
  radiografia_panoramica_url: string | null;
  radiografia_sextante_1_vestibular: string | null;
  radiografia_sextante_1_palatino: string | null;
  radiografia_sextante_2_vestibular: string | null;
  estadio_correcto: number;
  extension_correcta: string;
  grado_correcto: string;
  notas_diagnostico: string | null;
}

export interface QuizIntento {
  id: string;
  usuario_id: string;
  paciente_id: string;
  estadio_seleccionado: number;
  extension_seleccionada: string;
  grado_seleccionado: string;
  es_correcta: boolean;
  attempted_at: string;
}

export const quizService = {
  async getPacientes(): Promise<QuizPaciente[]> {
    try {
      const { data, error } = await supabase
        .from('quiz_pacientes')
        .select('*')
        .order('caso_numero', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching quiz pacientes:', error);
      return [];
    }
  },

  async submitIntento(
    userId: string,
    pacienteId: string,
    estadio: number,
    extension: string,
    grado: string,
    esCorrecta: boolean,
  ): Promise<QuizIntento | null> {
    try {
      const { data, error } = await supabase
        .from('quiz_intentos')
        .insert({
          usuario_id: userId,
          paciente_id: pacienteId,
          estadio_seleccionado: estadio,
          extension_seleccionada: extension,
          grado_seleccionado: grado,
          es_correcta: esCorrecta,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error guardando intento del quiz:', error);
      return null;
    }
  },
};
