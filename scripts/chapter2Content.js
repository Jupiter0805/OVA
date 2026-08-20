// Content for Chapter 2 ("Diagnosticando en 3 pasos"), based on
// MEGA_PROMPT_CAPITULO_2_DIAGNOSTICO.md. Consumed by insertChapter2.js.

export const lessons = [
  {
    lesson_number: 1,
    order_index: 1,
    title: 'La tríada diagnóstica y la anamnesis',
    content_html: `<div class="lesson-container">
  <h2>🔍 Diagnosticar en 3 pasos</h2>
  <p>El diagnóstico correcto de periodontitis no es solo "examen clínico + radiografía". Es un proceso sistemático de tres pasos:</p>

  <div class="evidence-cards">
    <div class="card">
      <h3>1. Anamnesis</h3>
      <p>¿Quién es el paciente y qué riesgos tiene? Historia y factores modificables.</p>
    </div>
    <div class="card">
      <h3>2. Examen clínico exhaustivo</h3>
      <p>¿Qué hallazgos periodontales tengo? Sondaje, CAL, BOP, furcación, movilidad.</p>
    </div>
    <div class="card">
      <h3>3. Evaluación radiográfica</h3>
      <p>¿Confirmación de destrucción ósea? RBL, patrones, dinámica temporal.</p>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 Principio clave</h3>
    <p>Un diagnóstico incorrecto → tratamiento incorrecto → pronóstico pobre. La precisión diagnóstica es responsabilidad clínica máxima.</p>
  </div>

  <h3>Estructura de entrevista recomendada</h3>
  <p><strong>Abrir con preguntas amplias:</strong> "¿Cuál es tu mayor preocupación con tus dientes hoy?", "¿Has notado cambios recientes en tus encías?", "¿Alguien te ha dicho que tengas problemas de encías?"</p>

  <p><strong>Profundizar con preguntas específicas:</strong></p>
  <table>
    <tr><th>Área</th><th>Pregunta clínica</th><th>Por qué importa</th></tr>
    <tr><td>Síntomas</td><td>¿Sangrado al cepillar? ¿Espontáneo?</td><td>Indica actividad inflamatoria actual</td></tr>
    <tr><td></td><td>¿Movilidad dentaria progresiva?</td><td>Signo de destrucción avanzada</td></tr>
    <tr><td></td><td>¿Halitosis?</td><td>Metabolitos anaerobios; presencia de Pg probable</td></tr>
    <tr><td>Historia dental</td><td>¿Tratamiento periodontal previo? ¿Problemas persistentes tras la terapia?</td><td>Posible Grado C</td></tr>
    <tr><td>Higiene oral</td><td>¿Cepillado? ¿Hilo dental? ¿Enjuague?</td><td>Punto de partida del control de biofilm</td></tr>
    <tr><td>Familiares</td><td>¿Familiares con "problemas de encías"? ¿Perdieron dientes?</td><td>Susceptibilidad genética</td></tr>
    <tr><td>Salud sistémica</td><td>Diabetes (pedir HbA1c reciente), hipertensión, autoinmunes, VIH</td><td>Modificadores críticos de Grado</td></tr>
    <tr><td>Medicaciones</td><td>Ciclosporina, nifedipina (hiperplasia), bisfosfonatos (riesgo de osteonecrosis)</td><td>Efectos secundarios relevantes</td></tr>
    <tr><td>Tabaquismo</td><td>¿Cigarrillos/día? ¿Años? ¿Deseo de dejar?</td><td>Modificador #1; dosis-respuesta</td></tr>
    <tr><td>Estrés</td><td>¿Cambios recientes en la vida? ¿Depresión/ansiedad diagnosticada?</td><td>Estrés crónico → citocinas; escalada de Grado</td></tr>
    <tr><td>Embarazo</td><td>¿Posibilidad de embarazo próximo?</td><td>Cambios hormonales; planificación de terapia</td></tr>
  </table>

  <h3>Evaluación de Riesgo Periodontal (PRA) — Lang &amp; Tonetti 2003</h3>
  <p>El PRA (Periodontal Risk Assessment) es un diagrama funcional de 6 parámetros, pensado originalmente para pacientes en mantenimiento post-terapia, pero útil también como marco de referencia en la anamnesis inicial: ningún parámetro por sí solo predice el riesgo — se evalúan los 6 en conjunto.</p>
  <table>
    <tr><th>Parámetro</th><th>Riesgo bajo</th><th>Riesgo moderado</th><th>Riesgo alto</th></tr>
    <tr><td>% de sitios con sangrado al sondaje (BOP)</td><td>&lt;10%</td><td>10-25%</td><td>&gt;25%</td></tr>
    <tr><td>Bolsas residuales ≥5mm</td><td>≤4</td><td>5-8</td><td>&gt;8</td></tr>
    <tr><td>Dientes perdidos (de 28, sin terceros molares)</td><td>≤4</td><td>5-8</td><td>&gt;8</td></tr>
    <tr><td>Pérdida ósea / edad (% RBL en el sitio posterior más afectado ÷ edad)</td><td>&lt;0.5</td><td>0.5-1.0</td><td>&gt;1.0</td></tr>
    <tr><td>Factores sistémicos/genéticos conocidos (ej. diabetes, IL-1 genotipo positivo)</td><td>Ausentes</td><td>—</td><td>Presentes</td></tr>
    <tr><td>Tabaquismo</td><td>No fumador / ex-fumador &gt;5 años</td><td>Ocasional (&lt;10 cig/día) o moderado (10-19 cig/día)</td><td>&gt;20 cig/día (&gt;1 paquete/día)</td></tr>
  </table>
  <p style="font-size:0.9rem;color:var(--text-light);"><strong>Clasificación global:</strong> PRA bajo = todos los parámetros en riesgo bajo, o como máximo uno en moderado · PRA moderado = al menos dos parámetros en moderado, como máximo uno en alto · PRA alto = al menos dos parámetros en alto. Valor clínico: guía la intensidad del monitoreo post-terapia y la expectativa de pronóstico.</p>

  <h3>🚩 Señales de alarma que requieren referencia urgente</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Hallazgos de alarma inmediata</h3>
      <ul>
        <li><strong>Sangrado espontáneo</strong> de encías — posible periodontitis muy activa</li>
        <li><strong>Supuración subgingival</strong> — absceso periodontal, alta carga bacteriana</li>
        <li><strong>Ulceración gingival necrótica</strong> — enfermedad necrotizante, posible VIH</li>
        <li><strong>Edad &lt;30 con CAL detectable</strong> — inicio temprano, probable Grado C</li>
        <li><strong>Múltiples pérdidas dentarias recientes</strong> — progresión rápida, Grado C probable</li>
        <li><strong>Discrepancia edad/daño</strong> — joven con Estadio IV.</li>
      </ul>
    </div>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti et al. 2018; Kornman &amp; Papapanou 2020; Lang &amp; Tonetti 2003 (Periodontal Risk Assessment); guías de anamnesis periodontal AAP/EFP
  </div>
</div>`,
  },
  {
    lesson_number: 2,
    order_index: 2,
    title: 'Sondaje periodontal: técnica de precisión para PPS y CAL',
    content_html: `<div class="lesson-container">
  <h2>📏 La sonda como instrumento de medición, no de limpieza</h2>
  <p>Técnica incorrecta = datos inútiles. La precisión del sondaje determina la precisión de todo el diagnóstico posterior.</p>

  <h3>Posicionamiento correcto de la sonda</h3>
  <div class="evidence-cards">
    <div class="card">
      <h3>1. Ángulo de inserción</h3>
      <p>60-90° respecto al eje largo del diente (perpendicular a la superficie radicular). <strong>Error común:</strong> angulación de 45° produce mediciones falsamente elevadas.</p>
    </div>
    <div class="card">
      <h3>2. Punto de inserción</h3>
      <p>Directamente en el surco/bolsa subgingival. La sonda desciende bajo su propio peso (aproximadamente 25g) — nunca forzar. Detenerse al contactar el fondo de la bolsa.</p>
    </div>
    <div class="card">
      <h3>3. Presión correcta</h3>
      <p>0.25N (±0.05N). Demasiada presión (&gt;0.5N) penetra tejido intacto (PPS falsamente alto); muy poca (&lt;0.15N) no llega al fondo (subestimación).</p>
    </div>
    <div class="card">
      <h3>4. Movimiento</h3>
      <p>Desplazamiento gentil bucal-lingual o mesial-distal, sin "raspar". Permitir que la sonda siga el contorno óseo y tomar la medición en el punto máximo.</p>
    </div>
  </div>

  <figure class="embedded-figure">
    <img src="/sonda-periodontal.jpeg" alt="Sonda periodontal insertada en el surco gingival mesial entre dos incisivos superiores, mostrando las marcas milimétricas de la sonda." />
    <figcaption>Sonda periodontal insertada en el surco gingival mesial, mostrando las marcas milimétricas usadas para leer la profundidad de sondaje. <strong>Imagen de dominio público.</strong></figcaption>
  </figure>

  <h3>Sitios de registro por diente</h3>
  <table>
    <tr><th>Sitio</th><th>Ubicación</th><th>Técnica</th></tr>
    <tr><td>Mesiobucal (MB)</td><td>Ángulo mesial de la cara bucal</td><td>Ángulo aproximado de 45° hacia el punto de contacto mesial</td></tr>
    <tr><td>Bucal (B)</td><td>Línea media bucal</td><td>Sonda perpendicular; desplazamiento M-D</td></tr>
    <tr><td>Distobucal (DB)</td><td>Ángulo distal de la cara bucal</td><td>Ángulo aproximado de 45° hacia el punto de contacto distal</td></tr>
    <tr><td>Mesiolingual (ML)</td><td>Ángulo mesial de la cara lingual</td><td>Sonda desde lingual, ángulo hacia mesial</td></tr>
    <tr><td>Lingual (L)</td><td>Línea media lingual</td><td>Sonda desde lingual, "vuelta" alrededor</td></tr>
    <tr><td>Distolingual (DL)</td><td>Ángulo distal de la cara lingual</td><td>Sonda desde lingual, ángulo hacia distal</td></tr>
  </table>
  <p style="font-size:0.9rem;color:var(--text-light);">6 sitios/diente siempre — registro periodontal completo, sin excepciones por tipo de diente.</p>

  <div class="calc-box">
    <p><strong>Fórmula de CAL (pérdida clínica de inserción)</strong></p>
    <p class="formula">Si hay recesión (margen apical a la CEJ): CAL = PPS + Recesión</p>
    <p class="formula">Si NO hay recesión (margen coronal a la CEJ): CAL = PPS − margen gingival</p>
    <p><strong>Ejemplo A:</strong> PPS 6mm, margen gingival 2mm coronal a la CEJ (sin recesión) → CAL = 6 − 2 = <span class="result">4mm</span></p>
    <p><strong>Ejemplo B:</strong> PPS 5mm + recesión 2mm → CAL = <span class="result">7mm</span></p>
    <p><strong>Ejemplo C:</strong> PPS 4mm, margen gingival 1mm coronal a CEJ → CAL = 4 − 1 = <span class="result">3mm</span></p>
  </div>

  <div class="key-principle">
    <h3>🎯 Importancia crítica</h3>
    <p><strong>CAL, no PPS, determina el Estadio de periodontitis.</strong> PPS es un descriptor secundario — dos pacientes con el mismo PPS pueden tener CAL completamente distinto según su recesión.</p>
  </div>

  <h3>Registro de BOP (sangrado al sondaje)</h3>
  <p>Después de medir PPS, observar el surco durante 30 segundos y registrar sí/no.</p>
  <ul>
    <li><strong>BOP &gt;10% de sitios:</strong> posible inflamación activa</li>
    <li><strong>BOP ausente de forma sistemática:</strong> Periodonto sano.</li>
  </ul>
  <p style="font-size:0.9rem;color:var(--text-light);"><strong>Nota clínica:</strong> la ausencia de BOP no excluye periodontitis — un periodonto reducido quiescente puede tener CAL significativo sin sangrar pero debe tener mínimo una bolsa de &gt;4mm.</p>

  <div class="reference">
    📚 Basado en: técnica de sondaje AAP/EFP; Tonetti et al. 2018
  </div>
</div>`,
  },
  {
    lesson_number: 3,
    order_index: 3,
    title: 'BOP, furcación y movilidad dentaria',
    content_html: `<div class="lesson-container">
  <h2>🦷 Tres hallazgos que cambian el Estadio</h2>

  <h3>Clasificación de furcación (Hamp &amp; Nyman, modificada)</h3>
  <table>
    <tr><th>Grado</th><th>Definición</th><th>Técnica diagnóstica</th><th>Implicación</th></tr>
    <tr><td><strong>0</strong></td><td>Sin afectación</td><td>No penetra.</td><td>Normal</td></tr>
    <tr><td><strong>1</strong></td><td>Entrada a furcación</td><td>&lt;3mm de la pérdida de inserción horizontal</td><td>Temprana; tratamiento conservador posible</td></tr>
    <tr><td><strong>2</strong></td><td>Comunicación parcial</td><td>&gt;3mm de la pérdida de inserción horizontal</td><td>Moderado; cirugía probablemente necesaria</td></tr>
    <tr><td><strong>3</strong></td><td>Comunicación completa</td><td>La penetración es completa.</td><td>Severo; pronóstico pobre para ese diente</td></tr>
  </table>

  <div class="decision-tree">
    <h3>🧭 Implicación de la furcación para el Estadio</h3>
    <ul>
      <li>Furcación Grado I → puede ser en <span class="outcome">todos los estadios</span></li>
      <li>Furcación Grado II y III → solo se encuentran en <span class="outcome">Estadio III y IV</span></li>
    </ul>
  </div>

  <figure class="embedded-figure">
    <img src="/sonda-naber.jpeg" alt="Sonda de Naber, sonda curva de doble extremo usada para explorar furcaciones" />
    <figcaption>Sonda de Naber — su extremo curvo permite acceder al espacio interradicular de la furcación, algo que una sonda periodontal recta convencional no logra.</figcaption>
  </figure>

  <p><strong>Técnica de sondaje de furcación:</strong> usar sonda Naber, acceso desde bucal (mesial y distal), presión gentil sin forzar. Registrar el grado máximo encontrado entre todos los accesos.</p>

  <h3>Movilidad dentaria (clasificación de Miller)</h3>
  <table>
    <tr><th>Grado</th><th>Descripción</th><th>Medida</th><th>Implicación</th></tr>
    <tr><td><strong>0</strong></td><td>Normal</td><td>&lt;0.5mm</td><td>Periodonto sano</td></tr>
    <tr><td><strong>1</strong></td><td>Leve</td><td>0.5-1mm horizontal</td><td>Compensable con terapia</td></tr>
    <tr><td><strong>2</strong></td><td>Moderada</td><td>1-2mm horizontal</td><td>Interfiere con la masticación</td></tr>
    <tr><td><strong>3</strong></td><td>Severa</td><td>&gt;2mm horizontal + movimiento vertical</td><td>Pronóstico pobre</td></tr>
  </table>

  <figure class="embedded-figure">
    <img src="/tecnica-miller.jpg" alt="Técnica de evaluación de movilidad dentaria: movilidad vertical con presión desde oclusal, movilidad horizontal con dos instrumentos rígidos" />
    <figcaption>Evaluación de la movilidad dentaria: movilidad vertical (presión desde oclusal) y movilidad horizontal (dos instrumentos rígidos a ambos lados de la corona).</figcaption>
  </figure>

  <p style="font-size:0.9rem;color:var(--text-light);"><strong>Técnica:</strong> presión lateral gentil con dos instrumentos rígidos (mesial-distal a la corona, nunca en el borde incisal). Comparar siempre con el diente contralateral.</p>

  <div class="definition-box">
    <p><strong>Señal de alarma post-terapia:</strong> movilidad Grado 2-3 que persiste 6 meses después del tratamiento sugiere trauma oclusal concurrente, Grado C no respondiendo, o ambos — considerar ajuste oclusal, férula, o extracción.</p>
  </div>

  <div class="reference">
    📚 Basado en: Hamp &amp; Nyman (clasificación de furcación); Miller (clasificación de movilidad); Tonetti et al. 2018
  </div>
</div>`,
  },
  {
    lesson_number: 4,
    order_index: 4,
    title: 'Recesión, pseudobolsa y evaluación radiográfica',
    content_html: `<div class="lesson-container">
  <h2>🎯 Distinguir lo que parece periodontitis de lo que realmente lo es</h2>

  <h3>Recesión gingival vs. pseudobolsa</h3>
  <table>
    <tr><th>Aspecto</th><th>Recesión gingival</th><th>Pseudobolsa (edema)</th></tr>
    <tr><td>Margen gingival</td><td>Apical a la CEJ</td><td>Coronal a la CEJ</td></tr>
    <tr><td>PPS</td><td>Normal o aumentada</td><td>Aumentada (5-10mm+)</td></tr>
    <tr><td>CAL</td><td>Presente por definición</td><td>Ausente (PPS ≠ CAL)</td></tr>
    <tr><td>Etiología</td><td>Trauma, cirugía previa, inflamación crónica</td><td>Inflamación aguda activa (gingivitis)</td></tr>
    <tr><td>Reversibilidad</td><td>No</td><td>Sí, con control de biofilm</td></tr>
  </table>

  <div class="calc-box">
    <p><strong>Ejemplo — diente 41:</strong> recesión 3mm (margen gingival 3mm apical a CEJ), PPS 4mm desde el margen actual.</p>
    <p class="formula">CAL = 4 + 3 = <span class="result">7mm</span></p>
    <p>Aunque el PPS actual sea "solo" 4mm, la pérdida de inserción real (CEJ al fondo de la bolsa) es de 7mm.</p>
  </div>

  <h3>Otros hallazgos clínicos relevantes</h3>
  <table>
    <tr><th>Hallazgo</th><th>Implicación</th></tr>
    <tr><td>Supuración (pus)</td><td>Absceso periodontal, infección activa, Grado C probable</td></tr>
    <tr><td>Úlcera gingival necrótica</td><td>Enfermedad necrotizante — rara en gingivitis</td></tr>
    <tr><td>Textura de la encía (punteado vs. edematosa)</td><td>Punteado = salud; edema = inflamación activa</td></tr>
    <tr><td>Cálculo subgingival</td><td>Retención de biofilm — debe removerse</td></tr>
    <tr><td>Implantes presentes</td><td>Mayor riesgo de periimplantitis si hay periodontitis activa</td></tr>
  </table>

  <h3>Evaluación radiográfica: midiendo el RBL</h3>
  <div class="calc-box">
    <p class="formula">RBL (%) = [(altura radicular total − altura ósea remanente) / altura radicular total] × 100</p>
    <p><strong>Ejemplo A:</strong> altura radicular 15mm; hueso visible hasta 5mm apical a la CEJ → RBL = (15-5)/15 = <span class="result">66% (severa)</span></p>
    <p><strong>Ejemplo B:</strong> altura radicular 12mm; hueso 9mm desde CEJ → RBL = (12-9)/12 = <span class="result">25% (leve)</span></p>
  </div>

  <p><strong>Preferencia técnica:</strong> rayo paralelo (0-10° al eje del diente) minimiza la distorsión y visualiza mejor el RBL que la técnica de bisectriz clásica (que puede acortar/alargar la imagen ósea).</p>

  <h3>Patrones radiográficos de pérdida ósea</h3>
  <div class="evidence-cards">
    <div class="card">
      <h3>Horizontal</h3>
      <p>Pérdida similar en dientes adyacentes, generalizada. Asociado a tabaquismo e higiene deficiente difusa. Menor complejidad regenerativa.</p>
    </div>
    <div class="card">
      <h3>Vertical (angular)</h3>
      <p>Pérdida desigual, defectos de 1-3 paredes. Asociado a Pg localizada elevada. Mayor complejidad quirúrgica pero mejor potencial regenerativo.</p>
    </div>
    <div class="card">
      <h3>Circunferencial</h3>
      <p>Pérdida alrededor de toda la raíz ("moat"). Típico de Grado C, alto riesgo de extracción.</p>
    </div>
  </div>

  <div class="definition-box">
    <p><strong>Comparación temporal (para el Grado):</strong> tasa anual RBL = (RBL actual − RBL previo) / años entre radiografías. Ejemplo: RBL 20% (2022) → 35% (2025), 3 años → tasa = 5%/año → Grado B probable (3-20% anual).</p>
  </div>

  <div class="reference">
    📚 Basado en: técnica radiográfica periodontal AAP/EFP; Tonetti et al. 2018
  </div>
</div>`,
  },
  {
    lesson_number: 5,
    order_index: 5,
    title: 'Síntesis diagnóstica: caso y Estadificación',
    content_html: `<div class="lesson-container">
  <h2>🧩 De los datos sueltos al diagnóstico completo</h2>

  <div class="decision-tree">
    <h3>🧭 Árbol de decisión: ¿es un caso de periodontitis?</h3>
    <ul>
      <li>¿CAL interdental ≥1-2mm en ≥2 dientes no adyacentes?
        <ul>
          <li>SÍ → ¿la pérdida se puede atribuir a causa no periodontal (trauma, caries, endodoncia, fractura)?
            <ul>
              <li>SÍ → <span class="outcome" style="background:#9ca3af;">No es periodontitis</span></li>
              <li>NO → <span class="outcome">CASO DE PERIODONTITIS</span> → ir a Estadificación</li>
            </ul>
          </li>
          <li>NO → ¿CAL vestibular ≥3mm con PPS &gt;3mm en ≥2 dientes?
            <ul>
              <li>SÍ → <span class="outcome">CASO DE PERIODONTITIS</span></li>
              <li>NO → ¿RBL radiográfica ≥3mm absolutos en cualquier sitio?
                <ul>
                  <li>SÍ → <span class="outcome">CASO DE PERIODONTITIS</span></li>
                  <li>NO → <span class="outcome" style="background:#9ca3af;">No es periodontitis</span> (gingivitis o periodonto sano/reducido)</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <h3>Los cuatro Estadios, uno por uno</h3>
  <p>La estadificación traduce la gravedad acumulada de la destrucción periodontal y la complejidad del manejo clínico en una categoría diagnóstica. Responde a dos preguntas: cuánto daño existe y qué tan difícil será conservar o rehabilitar esa dentición. Por diseño, el Estadio <strong>no</strong> describe la velocidad de progresión — esa es función del Grado (Capítulo 3).</p>

  <div class="cases">
    <div class="case-card">
      <h3>Estadio I — periodontitis inicial</h3>
      <p>Es un error frecuente minimizarlo por parecer "leve". Su importancia real está en que marca el punto exacto en que una gingivitis inducida por biofilm deja de ser reversible y se convierte en pérdida real de inserción. Diferenciarlo de gingivitis exige sondaje correcto, ubicar la unión amelocementaria (UAC) y correlación radiográfica prudente — no basta con "hay bolsas".</p>
    </div>
    <div class="case-card">
      <h3>Estadio II — periodontitis establecida</h3>
      <p>El daño ya no es incipiente: la pérdida de inserción es moderada y la pérdida ósea radiográfica más evidente, pero todavía sin los elementos de complejidad mayor que definen los Estadios III y IV. No significa enfermedad "simple" — significa daño claro que aún no compromete de forma importante la arquitectura periodontal ni la futura rehabilitación.</p>
    </div>
    <div class="case-card">
      <h3>Estadio III — severa, con riesgo real de pérdida adicional</h3>
      <p>Aquí no basta con decir "hay bolsas profundas". El punto central es la aparición de signos anatómicos de mayor complejidad: defectos infraóseos, compromiso de furca, movilidad, pérdida dentaria limitada por periodontitis, y lesiones que se extienden al tercio medio radicular o más allá. Es el punto donde el manejo deja de ser predominantemente básico y exige planeación quirúrgica, pronóstico por diente, y con frecuencia la integración de otras disciplinas.</p>
    </div>
    <div class="case-card">
      <h3>Estadio IV — no es "Estadio III pero más grande"</h3>
      <p>La diferencia con el Estadio III es <strong>funcional</strong>, no solo cuantitativa. Además de la destrucción severa, la dentición ya perdió estabilidad global y puede requerir rehabilitación compleja para restaurar función masticatoria, dimensión vertical, soporte posterior, o controlar el colapso oclusal. El juicio clínico aquí no puede apoyarse en un solo parámetro — debe considerar la totalidad del caso y su necesidad de rehabilitación integral.</p>
    </div>
  </div>

  <h3>Tabla de decisión Estadio (integrando todos los hallazgos)</h3>
  <table>
    <tr><th>Estadio</th><th>CAL</th><th>RBL</th><th>Furcación</th><th>Movilidad</th><th>Pérdida dentaria</th></tr>
    <tr><td><strong>I</strong></td><td>1-2mm</td><td>&lt;15%</td><td>0</td><td>0</td><td>No</td></tr>
    <tr><td><strong>II</strong></td><td>3-4mm</td><td>15-33%</td><td>0-1</td><td>0</td><td>No</td></tr>
    <tr><td><strong>III</strong></td><td>≥5mm</td><td>33-50%</td><td>≥2</td><td>0-2</td><td>No (define IV si presente)</td></tr>
    <tr><td><strong>IV</strong></td><td>≥5mm</td><td>&gt;50%</td><td>3</td><td>2-3</td><td><strong>Sí</strong></td></tr>
  </table>

  <div class="reference">
    📚 Basado en: Tonetti et al. 2018 (marco oficial); Kornman &amp; Papapanou 2020
  </div>
</div>`,
  },
  {
    lesson_number: 6,
    order_index: 6,
    title: 'Diagnóstico diferencial: ¿qué NO es periodontitis?',
    content_html: `<div class="lesson-container">
  <h2>🔬 Seis condiciones que se parecen a periodontitis sin serlo (o sin serlo del todo)</h2>

  <div class="cases">
    <div class="case-card">
      <h3>Gingivitis vs. periodontitis</h3>
      <details>
        <summary>Ver diferenciación práctica</summary>
        <p>Paciente con PPS 5-6mm y BOP: si <strong>CAL = 1mm</strong> → pseudobolsa, probable gingivitis hipertrófica. Si <strong>CAL = 5mm</strong> → verdadera bolsa periodontal. La radiografía ayuda: cresta ósea normal con lámina dura visible sugiere gingivitis; RBL visible con pérdida de lámina dura confirma periodontitis.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Periodonto reducido sano vs. periodontitis activa</h3>
      <details>
        <summary>Ver diferenciación práctica</summary>
        <p>Un paciente con pérdida ósea <strong>antigua</strong> (10-20 años atrás) ya tratada, ahora sin inflamación ni progresión, tiene "periodonto reducido sano" — no periodontitis activa.</p>
        <table>
          <tr><th>Aspecto</th><th>Periodonto reducido sano</th><th>Periodontitis activa</th></tr>
          <tr><td>BOP</td><td>Ausente o &lt;10%</td><td>Presente, generalizado</td></tr>
          <tr><td>RBL</td><td>Presente pero estable vs. 2 años previos</td><td>Presente y progresivo</td></tr>
          <tr><td>Pronóstico</td><td>Excelente si mantiene higiene</td><td>Variable según Grado</td></tr>
        </table>
        <p>Se documenta como "periodontitis previa, actualmente quiescente" — no se clasifica como Estadio activo si está bien controlada. Monitoreo cada 6-12 meses.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Trauma oclusal vs. periodontitis</h3>
      <details>
        <summary>Ver diferenciación práctica</summary>
        <table>
          <tr><th>Hallazgo</th><th>Solo trauma oclusal</th><th>Solo periodontitis</th><th>Ambos</th></tr>
          <tr><td>Movilidad</td><td>Grado 2-3</td><td>Leve o ausente al inicio</td><td>Severa, Grado 3</td></tr>
          <tr><td>PPS</td><td>&lt;3mm (normal)</td><td>5-10mm+</td><td>7-10mm+</td></tr>
          <tr><td>CAL</td><td>Ausente</td><td>Presente</td><td>Presente</td></tr>
          <tr><td>Radiografía</td><td>Cresta ósea redondeada (U)</td><td>RBL en patrones</td><td>RBL + ensanchamiento del ligamento</td></tr>
        </table>
        <p>Si hay duda, diagnosticar ambos y tratar ambos: ajuste oclusal + terapia periodontal.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Lesión endodóntica vs. periodontal</h3>
      <details>
        <summary>Ver diferenciación práctica</summary>
        <table>
          <tr><th>Aspecto</th><th>Endodóntica</th><th>Periodontal</th><th>Combinada</th></tr>
          <tr><td>Vitalidad pulpar</td><td>Negativa</td><td>Positiva</td><td>Negativa</td></tr>
          <tr><td>Sinus tract</td><td>Sí, hacia el ápice</td><td>No</td><td>Ambos</td></tr>
          <tr><td>RBL</td><td>Localizado al ápice</td><td>Generalizado / vertical</td><td>Generalizado</td></tr>
        </table>
        <p>La prueba de vitalidad pulpar es el diferenciador clave — pero recordar que la pulpa puede necrosarse secundariamente por periodontitis severa ("marcha" apical de la enfermedad).</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Periodontitis como manifestación sistémica</h3>
      <details>
        <summary>Ver condiciones a sospechar</summary>
        <table>
          <tr><th>Condición</th><th>Diferenciador</th></tr>
          <tr><td>Diabetes severa no diagnosticada</td><td>Screening de glucosa/HbA1c</td></tr>
          <tr><td>Leucemia aguda</td><td>Hemograma: leucocitosis anormal, trombocitopenia</td></tr>
          <tr><td>VIH/SIDA (CD4 &lt;200)</td><td>Prueba de VIH; periodontitis necrotizante</td></tr>
          <tr><td>Síndrome de Sjögren</td><td>Xerostomía severa; prueba de Schirmer</td></tr>
        </table>
        <p><strong>Sospechar</strong> cuando los hallazgos "no encajan": Estadio IV en paciente de 25 años sin factores de riesgo obvios, o progresión fulminante en semanas.</p>
      </details>
    </div>
  </div>

  <div class="reference">
    📚 Basado en: diagnóstico diferencial periodontal AAP/EFP 2018
  </div>
</div>`,
  },
  {
    lesson_number: 7,
    order_index: 7,
    title: 'Pruebas adjuntas, documentación y comunicación',
    content_html: `<div class="lesson-container">
  <h2>🧪 Cuándo pedir más, y cómo documentarlo bien</h2>

  <h3>Microbiología periodontal: ¿cuándo ordenarla?</h3>
  <ul>
    <li>Falta de respuesta esperada a terapia (PPS &gt;5mm residual tras RAR + 6-8 semanas)</li>
    <li>Periodontitis en paciente joven (&lt;35 años) con Estadio III+ — confirma agresividad, guía antibiótico</li>
    <li>Periodontitis "refractaria" histórica — para descartar patógenos resistentes</li>
  </ul>
  <table>
    <tr><th>Método</th><th>Ventaja</th><th>Costo aprox.</th></tr>
    <tr><td>PCR</td><td>Rápido, específico Pg/Tf/Td</td><td>$200-400</td></tr>
    <tr><td>qPCR</td><td>Cuantifica carga bacteriana</td><td>$400-600</td></tr>
    <tr><td>16S rRNA</td><td>Perfil completo de microbiota</td><td>$600-1000</td></tr>
  </table>
  <p style="font-size:0.9rem;color:var(--text-light);">Pg+ presente en 50-80% de periodontitis; Pg+Tf+Td+ es hallazgo de máxima virulencia, sugiere Grado C.</p>

  <h3>CBCT: ¿cuándo es útil?</h3>
  <p>Defectos óseos complejos pre-quirúrgicos (Estadio III/IV), planificación de regeneración, diferenciación de lesiones combinadas endo-periodontales, pre-implantología. <strong>No es rutinario</strong> para el diagnóstico inicial de periodontitis — la radiografía convencional es suficiente, y el CBCT implica mayor radiación (30-100 µSv vs. 5 µSv de una periapical).</p>

  <h3>Documentación correcta</h3>
  <div class="definition-box">
    <p><strong>Correcto:</strong> "Periodontitis Estadio II, Grado B" · "Periodontitis Estadio IV, Grado C, modificadores: tabaquismo fuerte + diabetes HbA1c 9.2%"</p>
    <p><strong>Incorrecto (términos abandonados):</strong> "Periodontitis crónica generalizada moderada" · "Periodontitis agresiva" · "Enfermedad periodontal severa"</p>
  </div>

  <h3>Comunicación con el paciente</h3>
  <p><strong>Evitar:</strong> "Tienes periodontitis Estadio III Grado B con modificadores."</p>
  <p><strong>Preferir:</strong> "Tienes una enfermedad de encías moderadamente severa que está progresando a un ritmo moderado. El hueso está bajando poco a poco. El cigarrillo lo está empeorando — si lo dejas, vas a mejorar mucho."</p>
  <p>Estructura de la explicación: ¿qué tiene? → ¿qué tan grave (Estadio)? → ¿qué tan rápido progresa (Grado)? → ¿qué lo causó? → ¿qué podemos hacer? → ¿qué necesitas hacer vos?</p>

  <h3>Checklist de diagnóstico completo</h3>
  <ul class="checklist">
    <li>Historia dental/periodontal documentada, con tabaquismo, diabetes (HbA1c), antecedente familiar</li>
    <li>Odontograma completo: PPS, CAL, BOP, furcación, movilidad por diente</li>
    <li>CAL máxima y % de BOP calculados</li>
    <li>Radiografías obtenidas, RBL máxima documentada, patrón óseo descrito</li>
    <li>Comparación temporal si hay radiografías previas</li>
    <li>Definición de caso confirmada, Estadio y Grado asignados con justificación</li>
    <li>Modificadores listados con su impacto explicado</li>
    <li>Diagnóstico diferencial considerado</li>
    <li>Plan de tratamiento basado en Estadio/Grado</li>
  </ul>

  <div class="reference">
    📚 Basado en: protocolos de documentación AAP/EFP 2018
  </div>
</div>`,
  },
  {
    lesson_number: 8,
    order_index: 8,
    title: 'Casos clínicos desafiantes de diagnóstico',
    content_html: `<div class="lesson-container">
  <h2>🕵️ Cinco casos donde el diagnóstico obvio no es el correcto</h2>

  <div class="cases">
    <div class="case-card">
      <h3>Caso 1 — Gingivitis vs. periodontitis en paciente joven</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p>Mujer 28a, "sangro cuando cepillo", sin comorbilidades, no fuma. Encía inflamada y enrojecida, BOP generalizado, PPS 4-6mm, biofilm visible. Radiografía: cresta ósea normal, lámina dura intacta.</p>
        <p><strong>Investigación:</strong> CAL medido meticulosamente resulta &lt;1mm → pseudobolsa pura.</p>
        <p><strong>Diagnóstico:</strong> Gingivitis inducida por biofilm, NO periodontitis.</p>
        <p><strong>Lección:</strong> medir CAL correctamente es el diferenciador crítico — muchos jóvenes con pseudobolsas no son Estadio I periodontitis.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 2 — Progresión rápida en paciente "de bajo riesgo"</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p>Varón 36a, sin diabetes, no fuma, sin estrés reportado inicialmente. Examen hace 2 años "normal"; hoy CAL 5-7mm, RBL 40%, movilidad Grado 1-2.</p>
        <p><strong>Investigación:</strong> microbiología revela Pg+++Tf+++Td+++; al profundizar la historia aparece desempleo reciente + depresión no diagnosticada; antecedente familiar (padre perdió dientes en los 40s).</p>
        <p><strong>Diagnóstico:</strong> Estadio III, Grado C — multifactorial (disbiosis severa + predisposición genética + estrés psicosocial).</p>
        <p><strong>Lección:</strong> la ausencia de factores de riesgo OBVIOS no excluye Grado C — siempre profundizar en genética, estrés y microbiología.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 3 — Pseudobolsa simulando periodontitis severa</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p>Mujer 55a en perimenopausia, le dijeron "periodontitis severa" por PPS 6-7mm. Radiografía: cresta ósea normal, RBL &lt;15%. Encía muy edematosa.</p>
        <p><strong>Investigación:</strong> CAL 0-1mm con PPS 7mm → 6mm de diferencia es pseudobolsa pura, causada por hiperplasia gingival relacionada con estrógeno.</p>
        <p><strong>Diagnóstico:</strong> Gingivitis hormonal, NO periodontitis.</p>
        <p><strong>Lección:</strong> muchas PPS profundas son pseudobolsas por edema, no todas son periodontitis — la medición de CAL lo decide.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 4 — Lesión combinada endodóntico-periodontal</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p>Varón 48a, diabético (HbA1c 7.8%), dolor y movilidad en el 16. PPS 8-9mm generalizado, CAL 7-8mm, sinus tract mesial, respuesta térmica negativa. Radiografía: RBL 35-40% generalizado + radiolucencia perirradicular apical.</p>
        <p><strong>Investigación:</strong> vitalidad pulpar definitivamente negativa (endodóntica), pero el RBL generalizado circunferencial es típicamente periodontal.</p>
        <p><strong>Diagnóstico:</strong> Periodontitis Estadio III, Grado B + necrosis pulpar — lesión combinada.</p>
        <p><strong>Plan:</strong> endodoncia (RCT) + RAR general + optimización de diabetes.</p>
        <p><strong>Lección:</strong> las lesiones combinadas son comunes en pacientes con comorbilidades — no asumir causa única.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 5 — "Rechazo aparente" a terapia previa</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p>Varón 52a, fumador 18/día × 30 años. "Tuve limpieza hace 1 año y mejoró poco." Radiografía comparativa: RBL 35% (hace 1 año) → 45% (hoy) = 10% en 1 año = &gt;20% anual.</p>
        <p><strong>Investigación:</strong> la terapia previa fue una sola sesión de RAR sin antibióticos; el paciente sigue fumando, nunca usó hilo dental.</p>
        <p><strong>Diagnóstico:</strong> Estadio III, Grado C confirmado por la progresión documentada — la terapia previa fue inadecuada, pero incluso con terapia óptima el tabaquismo activo habría limitado el resultado.</p>
        <p><strong>Lección:</strong> el "fallo" de terapia puede deberse a terapia inadecuada, falta de cumplimiento, o Grado C genuino — investigar los tres antes de ajustar el plan.</p>
      </details>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 El hilo común</h3>
    <p>En los cinco casos, la respuesta correcta dependía de <strong>medir CAL con precisión</strong> y de <strong>profundizar más allá de la primera impresión</strong> — historia, microbiología, radiografías comparativas. El diagnóstico rápido y superficial es la fuente más común de error.</p>
  </div>

  <div class="reference">
    📚 Casos clínicos basados en presentaciones típicas de consulta periodontal general
  </div>
</div>`,
  },
];

export const pretestQuestions = [
  {
    question_text: '¿Cuál es el objetivo principal del estadio en la clasificación de periodontitis?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Calcular la razón pérdida ósea/edad del paciente' },
      { key: 'b', text: 'Clasificar la severidad, extensión y complejidad del caso periodontal' },
      { key: 'c', text: 'Medir solamente el sangrado al sondaje' },
      { key: 'd', text: 'Diagnosticar caries cervicales' },
    ],
    correct_answer: 'b',
    explanation: 'El estadio no se limita a decir si hay periodontitis o no. Su función es ubicar al paciente en una etapa clínica según el daño periodontal presente y la dificultad del tratamiento. Por eso considera pérdida de inserción, pérdida ósea, dientes perdidos y factores de complejidad.',
    order_index: 1,
  },
  {
    question_text: '¿Cuál de los siguientes datos es un criterio primario para determinar la severidad del estadio de periodontitis?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Sangrado al sondaje (BOP)' },
      { key: 'b', text: 'Edad del paciente' },
      { key: 'c', text: 'Pérdida de inserción clínica (CAL)' },
      { key: 'd', text: 'Profundidad de sondaje periodontal (PPS)' },
    ],
    correct_answer: 'c',
    explanation: 'La pérdida de inserción clínica (CAL), valorada en el sitio interdental con mayor pérdida, es el criterio primario para orientar la severidad del estadio. CAL refleja la pérdida acumulada, no el estado inflamatorio actual (PPS).',
    order_index: 2,
  },
  {
    question_text: 'Un paciente con CAL interdental de 1-2mm, pérdida ósea limitada al tercio coronal menor al 15% y sin pérdida dentaria por periodontitis corresponde principalmente a:',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Estadio I' },
      { key: 'b', text: 'Estadio II' },
      { key: 'c', text: 'Estadio III' },
      { key: 'd', text: 'Estadio IV' },
    ],
    correct_answer: 'a',
    explanation: 'Estadio I corresponde a periodontitis inicial. Se caracteriza por pérdida de inserción leve (1-2mm), pérdida ósea limitada (<15%) y ausencia de pérdida dentaria atribuible a periodontitis.',
    order_index: 3,
  },
  {
    question_text: '¿Qué factor de complejidad puede elevar un caso hacia estadio III aunque la severidad inicial sugiera un estadio menor?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'PPS máxima de 5mm con pérdida horizontal' },
      { key: 'b', text: 'Furcación clase II o III' },
      { key: 'c', text: 'RBL de 20% limitada al tercio coronal' },
      { key: 'd', text: 'CAL interdental máxima de 4mm' },
    ],
    correct_answer: 'b',
    explanation: 'La furcación clase II o III es un factor de complejidad importante. Según la clasificación AAP/EFP 2018, estos factores pueden modificar el estadio hacia una etapa más avanzada porque complican significativamente el manejo clínico.',
    order_index: 4,
  },
  {
    question_text: '¿Cuál característica orienta más claramente hacia estadio IV?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'RBL de 25% limitada al tercio coronal' },
      { key: 'b', text: 'CAL interdental máxima de 4mm' },
      { key: 'c', text: 'Disfunción masticatoria o colapso de mordida' },
      { key: 'd', text: 'PPS máxima de 6mm sin compromiso funcional' },
    ],
    correct_answer: 'c',
    explanation: 'Estadio IV implica periodontitis avanzada con impacto funcional sistémico. La presencia de disfunción masticatoria, colapso de mordida, movilidad severa, migración dentaria o menos de 20 dientes remanentes orienta claramente hacia este estadio.',
    order_index: 5,
  },
];

export const posttestQuestions = [
  {
    question_text: 'Caso clínico 1: paciente de 35 años con CAL interdental máxima de 2mm, pérdida ósea radiográfica limitada al tercio coronal, profundidad de sondaje máxima de 3mm, pérdida ósea principalmente horizontal, y sin pérdida dentaria por periodontitis. ¿Cuál es el estadio más apropiado?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Estadio I' },
      { key: 'b', text: 'Estadio II' },
      { key: 'c', text: 'Estadio III' },
      { key: 'd', text: 'Estadio IV' },
    ],
    correct_answer: 'a',
    explanation: 'Este caso corresponde a periodontitis inicial. La CAL de 1-2mm, la pérdida ósea <15%, la profundidad de sondaje máxima de ≤4mm y la ausencia de pérdida dentaria por periodontitis son criterios compatibles con Estadio I. No hay factores de complejidad que eleven el caso a Estadio III o IV.',
    order_index: 1,
  },
  {
    question_text: 'Caso clínico 2: paciente de 48 años con CAL interdental máxima de 4mm, pérdida ósea radiográfica de 25% en tercio coronal, profundidad de sondaje de 4-5mm, pérdida ósea principalmente horizontal, y sin pérdida dentaria por periodontitis. ¿Cuál es el estadio más apropiado?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Estadio I' },
      { key: 'b', text: 'Estadio II' },
      { key: 'c', text: 'Estadio III' },
      { key: 'd', text: 'Estadio IV' },
    ],
    correct_answer: 'b',
    explanation: 'El caso corresponde a Estadio II (moderado). La CAL de 3-4mm, la pérdida ósea radiográfica de 15-33%, la profundidad de sondaje máxima de 5mm son criterios típicos de Estadio II. No hay pérdida dentaria por periodontitis ni factores de complejidad avanzada.',
    order_index: 2,
  },
  {
    question_text: 'Caso clínico 3: paciente de 52 años con CAL interdental de 5mm, pérdida ósea que se extiende hasta el tercio medio de la raíz, bolsas periodontales de 6mm, un defecto vertical de 4mm en un molar, pérdida de DOS dientes por periodontitis, y función masticatoria adecuada conservada. ¿Cuál es el estadio más apropiado?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Estadio I' },
      { key: 'b', text: 'Estadio II' },
      { key: 'c', text: 'Estadio III' },
      { key: 'd', text: 'Estadio IV' },
    ],
    correct_answer: 'c',
    explanation: 'Este caso corresponde a Estadio III (severa con potencial de deterioro). La CAL ≥5mm, la pérdida ósea hasta tercio medio, las bolsas de 6mm, el defecto vertical >3mm y la pérdida de hasta 4 dientes son criterios compatibles con Estadio III. NO es Estadio IV porque todavía conserva función masticatoria adecuada y no presenta colapso de mordida.',
    order_index: 3,
  },
  {
    question_text: 'Caso clínico 4: paciente de 61 años con CAL interdental máxima de 6mm, pérdida ósea radiográfica hasta tercio medio y apical de múltiples raíces, movilidad dental Grado 2 en varios dientes, migración dentaria anterior, colapso de mordida posterior, dificultad marcada para masticar, y pérdida de SEIS dientes por periodontitis. ¿Cuál es el estadio más apropiado?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Estadio I' },
      { key: 'b', text: 'Estadio II' },
      { key: 'c', text: 'Estadio III' },
      { key: 'd', text: 'Estadio IV' },
    ],
    correct_answer: 'd',
    explanation: 'Este caso corresponde a Estadio IV (severa avanzada). Aunque comparte criterios de severidad con Estadio III (CAL ≥5mm, pérdida ósea tercio medio+), la presencia de pérdida ≥5 dientes por periodontitis, movilidad Grado 2, migración dentaria, colapso de mordida y disfunción masticatoria orienta claramente a Estadio IV, que implica impacto funcional sistémico.',
    order_index: 4,
  },
  {
    question_text: 'Caso clínico 5: paciente de 45 años con CAL interdental máxima de 4mm, pérdida ósea radiográfica principalmente horizontal en tercio coronal, furcación clase II en el primer molar, sin pérdida dentaria por periodontitis, y sin disfunción masticatoria. ¿Cuál es el estadio más apropiado?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Estadio I' },
      { key: 'b', text: 'Estadio II' },
      { key: 'c', text: 'Estadio III' },
      { key: 'd', text: 'Estadio IV' },
    ],
    correct_answer: 'c',
    explanation: 'Aunque la CAL de 4mm y la pérdida ósea coronal podrían sugerir Estadio II, la presencia de furcación clase II es un factor de complejidad que eleva el diagnóstico a Estadio III. La complejidad de manejo justifica esta clasificación más severa.',
    order_index: 5,
  },
];
