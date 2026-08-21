export interface GlossaryEntry {
  term: string;
  fullName: string;
  meaning: string;
}

export const glossaryEntries: GlossaryEntry[] = [
  {
    term: 'CAL',
    fullName: 'Clinical Attachment Loss / Pérdida de inserción clínica',
    meaning:
      'Medida que refleja la pérdida real del soporte periodontal. Es uno de los criterios principales para diagnosticar y estadificar la periodontitis.',
  },
  {
    term: 'BOP',
    fullName: 'Bleeding on Probing / Sangrado al sondaje',
    meaning:
      'Presencia de sangrado tras introducir suavemente la sonda periodontal en el surco o bolsa. Indica inflamación gingival o periodontal.',
  },
  {
    term: 'PPD',
    fullName: 'Periodontal Probing Depth / Profundidad de sondaje periodontal',
    meaning:
      'Término clínico equivalente a PD, usado para describir la profundidad de las bolsas periodontales. En el documento aparece como criterio de complejidad de los estadios.',
  },
  {
    term: 'RBL',
    fullName: 'Radiographic Bone Loss / Pérdida ósea radiográfica',
    meaning:
      'Pérdida de soporte óseo observada en radiografías. Se utiliza para estadificar periodontitis cuando la CAL no está disponible, y para calcular la razón pérdida ósea/edad en la gradificación.',
  },
  {
    term: 'CEJ',
    fullName: 'Cemento-Enamel Junction / Unión amelocementaria',
    meaning:
      'Punto anatómico donde termina el esmalte y comienza el cemento radicular. Sirve como referencia para medir la pérdida de inserción clínica.',
  },
  {
    term: 'HbA1c',
    fullName: 'Hemoglobina glucosilada',
    meaning:
      'Marcador del control glucémico en pacientes con diabetes. En la clasificación periodontal, una HbA1c igual o mayor a 7% puede modificar el grado hacia C.',
  },
  {
    term: 'AAP/EFP',
    fullName: 'American Academy of Periodontology / European Federation of Periodontology',
    meaning: 'Organizaciones vinculadas al consenso y difusión de la clasificación periodontal de 2018.',
  },
  {
    term: 'OVA',
    fullName: 'Objeto Virtual de Aprendizaje',
    meaning:
      'Recurso educativo digital estructurado para enseñar, practicar y evaluar contenidos; en este caso, la clasificación periodontal AAP/EFP 2018.',
  },
  {
    term: 'COL gingival',
    fullName: 'Col o valle gingival interproximal',
    meaning:
      'Área de encía interproximal ubicada bajo el punto de contacto entre dientes posteriores. Se menciona al explicar la susceptibilidad de las zonas interproximales.',
  },
];
