// Content for Chapter 1 ("El cambio que transformó la periodoncia").
// Consumed by insertChapter1.js. Kept as plain data (no logic) so the
// runner script stays readable.

export const lessons = [
  {
    lesson_number: 1,
    order_index: 1,
    title: '1989-2018: La evolución de la clasificación',
    content_html: `<div class="lesson-container">
  <h2>🕰️ 1989 → 1999 → 2018: Tres sistemas, tres formas de pensar la periodontitis</h2>

  <div class="timeline-interactive">
    <div class="timeline-item">
      <h3>1989 — Clasificación de Armitage (Workshop AAP)</h3>
      <p><strong>Qué se usaba:</strong> Categorías basadas casi exclusivamente en la edad de aparición: periodontitis del adulto, de inicio temprano (prepuberal, juvenil, rápidamente progresiva), refractaria y ulcerativa necrosante.</p>
      <details>
        <summary>Ver limitaciones descubiertas</summary>
        <ul>
          <li>❌ La edad de aparición es difícil de determinar con precisión clínica</li>
          <li>❌ Categorías con criterios de diagnóstico superpuestos entre sí</li>
          <li>❌ No consideraba factores de riesgo sistémicos ni conductuales</li>
        </ul>
      </details>
    </div>

    <div class="arrow">↓ 10 años de uso clínico revelan los problemas ↓</div>

    <div class="timeline-item">
      <h3>1999 — Clasificación de Caton (International Workshop)</h3>
      <p><strong>Qué se usaba:</strong> Simplificación a "Chronic periodontitis" vs. "Aggressive periodontitis", con subtipos localizado/generalizado.</p>
      <details>
        <summary>Ver limitaciones descubiertas</summary>
        <ul>
          <li>❌ Distinción crónica/agresiva demasiado binaria para la variabilidad real observada en consulta</li>
          <li>❌ No capturaba complejidad de tratamiento ni riesgo de progresión futura</li>
          <li>❌ Ignoraba la evidencia emergente de conexión con enfermedades sistémicas</li>
        </ul>
      </details>
    </div>

    <div class="arrow">↓ Evidencia acumulada 1999-2017 (Kornman, Tonetti, Sanz) ↓</div>

    <div class="timeline-item">
      <h3>2018 — Clasificación de Tonetti / Caton / Chapple (World Workshop AAP-EFP)</h3>
      <p><strong>Qué se usa hoy:</strong> Dos dimensiones independientes — <strong>Stage I-IV</strong> (severidad + complejidad actual) y <strong>Grade A-C</strong> (velocidad de progresión + riesgo sistémico).</p>
      <details>
        <summary>Ver qué resuelve</summary>
        <ul>
          <li>✅ Separa "qué tan grave está" de "qué tan rápido va a empeorar"</li>
          <li>✅ Incorpora modificadores de riesgo objetivos (tabaco, diabetes)</li>
          <li>✅ Guía directamente el nivel de complejidad del tratamiento requerido</li>
        </ul>
      </details>
    </div>
  </div>

  <div class="photo-grid">
    <div class="photo-placeholder">
      <span class="icon">🦷</span>
      <span class="caption">Foto clínica: caso clasificado bajo el sistema 1999 (Chronic periodontitis)</span>
    </div>
    <div class="photo-placeholder">
      <span class="icon">🦷</span>
      <span class="caption">Foto clínica: el mismo tipo de caso reclasificado bajo Stage/Grade 2018</span>
    </div>
  </div>

  <div class="reference">
    📚 Basado en: Armitage 1999 (workshop de 1989 retrospectivo); Caton et al. 1999; Tonetti, Greenwell &amp; Kornman 2018 (J Periodontol/J Clin Periodontol)
  </div>
</div>`,
  },
  {
    lesson_number: 2,
    order_index: 2,
    title: '¿Por qué FALLÓ la clasificación 1999?',
    content_html: `<div class="lesson-container">
  <h2>⚠️ Cuatro problemas que hicieron insostenible el sistema de 1999</h2>

  <div class="cases">
    <div class="case-card">
      <h3>Problema 1: "Chronic vs Aggressive" es BINARIA — la realidad es un espectro</h3>
      <details>
        <summary>Ver evidencia y cita</summary>
        <blockquote>Caton et al. 1999: "Consensus report recognized aggressive periodontitis as a distinct entity, but acknowledged significant overlap in clinical presentation with chronic forms."</blockquote>
        <p><strong>Limitación:</strong> Muchos pacientes caían en un punto intermedio que no encajaba limpiamente en ninguna de las dos categorías.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Problema 2: NO capturaba la COMPLEJIDAD del tratamiento</h3>
      <details>
        <summary>Ver ejemplo clínico</summary>
        <p>Paciente Stage II con furcación Clase III <em>vs.</em> paciente Stage II con bone loss horizontal simple.</p>
        <p><strong>Ambos "moderados" en 1999 — pero con complejidad de tratamiento muy diferente.</strong> El primero requiere periodoncista; el segundo puede manejarse en práctica general.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Problema 3: NO diferenciaba SEVERIDAD de PROGRESIÓN</h3>
      <details>
        <summary>Ver evidencia y cita</summary>
        <blockquote>Kornman 2020: "~20-25% de pacientes tienen una trayectoria diferente a la esperada según su severidad actual."</blockquote>
        <ul>
          <li>Un paciente con mucha pérdida (severo) puede llevar años <strong>estable</strong></li>
          <li>Un paciente con poca pérdida (incipiente) puede estar progresando <strong>rápido</strong></li>
        </ul>
      </details>
    </div>

    <div class="case-card">
      <h3>Problema 4: NO capturaba el RIESGO SISTÉMICO</h3>
      <details>
        <summary>Ver evidencia y cita</summary>
        <p>La evidencia emergente entre 2010 y 2018 estableció conexiones consistentes con enfermedad cardiovascular y diabetes.</p>
        <blockquote>Tonetti et al. 2018: "Current evidence indicates that periodontitis is a multifactorial disease influenced by systemic conditions that must inform its clinical classification."</blockquote>
      </details>
    </div>
  </div>

  <h3 style="margin-top:2rem;">📊 Comparación directa: 1999 vs. 2018</h3>
  <table>
    <tr>
      <th>Aspecto</th>
      <th>1999</th>
      <th>2018</th>
    </tr>
    <tr>
      <td>Clasificación base</td>
      <td>Chronic / Aggressive</td>
      <td>Stage I-IV</td>
    </tr>
    <tr>
      <td>Dimensión de progresión</td>
      <td>No existe</td>
      <td>Grade A-C</td>
    </tr>
    <tr>
      <td>Riesgo sistémico</td>
      <td>Ignorado</td>
      <td>Incluido (modificadores)</td>
    </tr>
    <tr>
      <td>Complejidad de tratamiento</td>
      <td>Implícita</td>
      <td>Explícita</td>
    </tr>
    <tr>
      <td>Modificadores de riesgo</td>
      <td>No</td>
      <td>Smoking, Diabetes</td>
    </tr>
  </table>

  <div class="reference">
    📚 Basado en: Caton et al. 1999; Kornman &amp; Papapanou 2020 (J Periodontol)
  </div>
</div>`,
  },
  {
    lesson_number: 3,
    order_index: 3,
    title: 'La EVIDENCIA que forzó el cambio',
    content_html: `<div class="lesson-container">
  <h2>🔬 Los cuatro hallazgos que hicieron inevitable el rediseño</h2>

  <div class="evidence-cards">
    <div class="card">
      <h3>Hallazgo 1: Variabilidad en progresión</h3>
      <p>Kornman 2020 y Billings et al. 2018 compararon ~150,000 pacientes con periodontitis crónica frente a 370,000 controles.</p>
      <details>
        <summary>Ver cita y dato exacto</summary>
        <blockquote>"...suggest that specific segments of the population exhibit different levels of disease progression..."</blockquote>
        <p><strong>Encontrado:</strong> 20-25% de los pacientes no sigue la trayectoria "esperada" según su severidad inicial.</p>
        <p><strong>Implicación:</strong> Necesitábamos una dimensión de GRADE independiente para capturar la progresión individual.</p>
      </details>
    </div>

    <div class="card">
      <h3>Hallazgo 2: Multifactorialidad</h3>
      <p>Tonetti et al. 2018 consolidó evidencia de que la periodontitis no es solo una infección bacteriana.</p>
      <details>
        <summary>Ver factores identificados</summary>
        <ul>
          <li>🚬 <strong>Smoking:</strong> &lt;10 cig/día = sin modificador; ≥10 cig/día = modificador de Grade (A→B o B→C). Mecanismo: reduce la respuesta inmune y aumenta la destrucción tisular.</li>
          <li>🩺 <strong>Diabetes:</strong> No controlada (HbA1c &gt;7.0%) = Grade C automático. Mecanismo: amplifica la respuesta inflamatoria.</li>
          <li>🧬 <strong>Genética:</strong> Genotipo IL-1, polimorfismos IL-6 — predisponen pero no determinan por sí solos.</li>
        </ul>
      </details>
    </div>

    <div class="card">
      <h3>Hallazgo 3: Complejidad ≠ Severidad</h3>
      <p>Fine et al. 2018 mostró que dos pacientes con el mismo nivel de attachment loss pueden requerir niveles de atención completamente distintos.</p>
      <details>
        <summary>Ver los dos casos comparados</summary>
        <p><strong>Paciente A:</strong> Stage II (CAL 3-4mm) + furcación Clase III + defectos verticales + movilidad Grado 2 → <strong>complejidad ALTA</strong> (especialista, múltiples sesiones).</p>
        <p><strong>Paciente B:</strong> Stage III (CAL ≥5mm) + bone loss horizontal + sin furcación → <strong>complejidad MODERADA</strong> (manejable en práctica general).</p>
        <p><strong>Implicación:</strong> Stage necesita un descriptor de extensión y distribución (localizado vs. generalizado, patrones específicos).</p>
      </details>
    </div>

    <div class="card">
      <h3>Hallazgo 4: Riesgo sistémico</h3>
      <p>Sanz et al. 2018 y Dregan et al. 2019 cuantificaron el riesgo asociado en bases de datos clínicas masivas.</p>
      <details>
        <summary>Ver cifras y cita</summary>
        <ul>
          <li>Enfermedad cardiovascular (CVD): riesgo 1.2-1.5x</li>
          <li>Stroke (ACV): riesgo 1.3x</li>
          <li>Diabetes tipo 2: mayor progresión si coexiste con periodontitis</li>
        </ul>
        <blockquote>"Substantial evidence from large clinical databases involving &gt;150,000 patients... indicate that presence of certain chronic inflammatory diseases influences likelihood of second chronic disease..."</blockquote>
      </details>
    </div>
  </div>

  <div class="reference">
    📚 Basado en: Kornman &amp; Papapanou 2020; Billings et al. 2018; Tonetti et al. 2018; Fine et al. 2018; Sanz et al. 2018; Dregan et al. 2019
  </div>
</div>`,
  },
  {
    lesson_number: 4,
    order_index: 4,
    title: 'Definición clínica de PERIODONTITIS (AAP/EFP 2018)',
    content_html: `<div class="lesson-container">
  <h2>📋 ¿Cuándo un paciente ES, clínicamente, un caso de periodontitis?</h2>

  <div class="definition-box">
    <p><strong>Definición oficial (Tonetti et al. 2018):</strong></p>
    <blockquote>
      "A patient is a periodontitis case in the context of clinical care if: (1) interdental CAL is detectable at ≥2 non-adjacent teeth, OR (2) buccal or oral CAL ≥3 mm with pocketing &gt;3 mm is detectable at ≥2 teeth" — AND "the observed CAL cannot be ascribed to non-periodontal causes."
    </blockquote>
  </div>

  <h3>Causas NO periodontales que EXCLUYEN el diagnóstico</h3>
  <ul>
    <li>Recesión gingival de origen traumático</li>
    <li>Caries dental en el área cervical</li>
    <li>Presencia de CAL solo distal a un segundo molar (posible extracción o tercer molar mal posicionado)</li>
    <li>Lesión endodóntica en drenaje</li>
    <li>Fractura radicular vertical</li>
  </ul>

  <h3>¿Cómo se mide el CAL?</h3>
  <p>Sondaje suave (25 gramos de presión) en 6 sitios por diente (mesial, distal, bucal, lingual y sus puntos medios), tomando como referencia la unión cemento-esmalte (CEJ).</p>
  <p style="font-weight:700;">CAL = Profundidad de sondaje (PD) + Recesión gingival (si existe)</p>

  <div class="calc-box">
    <p><strong>Ejemplo de cálculo — Diente #16:</strong></p>
    <p class="formula">PD mesial: 4 mm &nbsp;+&nbsp; Recesión: 0 mm &nbsp;=&nbsp; CAL = <span class="result">4 mm</span> ✅ Cuenta</p>
    <p><strong>Ejemplo de cálculo — Diente #26:</strong></p>
    <p class="formula">PD bucal: 3 mm &nbsp;+&nbsp; Recesión: 2 mm &nbsp;=&nbsp; CAL = <span class="result">5 mm</span> ✅ Cuenta</p>
  </div>

  <h3>Gray zones (Kornman 2020)</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Caso: Paciente radiográficamente intacto, pero con CAL localizado</h3>
      <details>
        <summary>Ver resolución</summary>
        <p>Paciente de 65 años, radiográficamente íntegro, pero con CAL de 2mm en 2 sitios no adyacentes.</p>
        <p>✅ <strong>SÍ tiene periodontitis</strong> (cumple CAL ≥2mm en ≥2 dientes no adyacentes).</p>
        <p>✅ <strong>Stage I</strong> (porque no hay bone loss radiográfico visible).</p>
        <p><strong>Lección:</strong> Ausencia de bone loss visible ≠ ausencia de periodontitis.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Caso: Periodontitis "franca" en un solo diente (localizada)</h3>
      <details>
        <summary>Ver resolución</summary>
        <p>¿Es Stage I aunque el diente afectado esté severamente comprometido? <strong>No necesariamente</strong> — porque Stage se asigna a nivel de paciente, no de diente.</p>
        <p>Se describe como, por ejemplo, "localized Stage II", combinando el Stage del paciente con la distribución del hallazgo.</p>
      </details>
    </div>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti, Greenwell &amp; Kornman 2018 (J Periodontol); Kornman &amp; Papapanou 2020
  </div>
</div>`,
  },
  {
    lesson_number: 5,
    order_index: 5,
    title: 'STAGE I-IV: Severidad + Complejidad',
    content_html: `<div class="lesson-container">
  <h2>📐 Stage I-IV: cómo se asigna, paso a paso</h2>

  <table>
    <tr>
      <th>STAGE</th>
      <th>CAL</th>
      <th>Radiographic BL</th>
      <th>Tooth Loss</th>
      <th>Complexity</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td><strong>I</strong></td>
      <td>1-2 mm</td>
      <td>Coronal third (&lt;15%)</td>
      <td>No</td>
      <td>Minimal</td>
      <td>Initial periodontitis</td>
    </tr>
    <tr>
      <td><strong>II</strong></td>
      <td>3-4 mm</td>
      <td>Coronal third (15-33%)</td>
      <td>No</td>
      <td>Moderate</td>
      <td>Moderate periodontitis</td>
    </tr>
    <tr>
      <td><strong>III</strong></td>
      <td>≥5 mm</td>
      <td>Mid-third or beyond</td>
      <td>≤4 dientes</td>
      <td>Moderate-High</td>
      <td>Severe, con riesgo de pérdida dentaria adicional</td>
    </tr>
    <tr>
      <td><strong>IV</strong></td>
      <td>≥5 mm</td>
      <td>Mid-third or beyond</td>
      <td>≥5 dientes</td>
      <td>High</td>
      <td>Severe, con riesgo de pérdida de la dentición</td>
    </tr>
  </table>

  <h3>Complejidad LOCAL (Fine et al. 2018)</h3>
  <div class="evidence-cards">
    <div class="card">
      <h3>Stage I / II</h3>
      <p>Profundidad de sondaje máxima ≤4 mm, bone loss horizontal.</p>
    </div>
    <div class="card">
      <h3>Stage III además requiere</h3>
      <ul>
        <li>Probing depth ≥6 mm</li>
        <li>Bone loss vertical ≥3 mm</li>
        <li>Furcación Clase II o III</li>
        <li>Defecto de reborde moderado</li>
      </ul>
    </div>
    <div class="card">
      <h3>Stage IV además requiere</h3>
      <ul>
        <li>Necesidad de rehabilitación compleja</li>
        <li>Disfunción masticatoria</li>
        <li>Trauma oclusal secundario</li>
        <li>Defectos de reborde severos, colapso de mordida</li>
        <li>&lt;20 dientes remanentes (10 pares en oclusión)</li>
      </ul>
    </div>
  </div>

  <h3>Extensión y distribución</h3>
  <p>Cada Stage se describe además como <strong>Localized</strong> (&lt;30% de dientes involucrados), <strong>Generalized</strong> (≥30%), o con <strong>patrón molar/incisivo</strong> (específico para Stage I en pacientes jóvenes).</p>

  <div class="decision-tree">
    <h3>🧭 Algoritmo de asignación de Stage</h3>
    <p><strong>START:</strong> ¿Tiene periodontitis?</p>
    <ul>
      <li>NO → <span class="outcome" style="background:#9ca3af;">No es caso</span></li>
      <li>SÍ →
        <ul>
          <li>¿CAL ≤2mm y bone loss &lt;15%? → <span class="outcome">STAGE I</span></li>
          <li>¿CAL 3-4mm y bone loss 15-33%? → <span class="outcome">STAGE II</span></li>
          <li>¿CAL ≥5mm, mid-third bone loss, tooth loss ≤4? → <span class="outcome">STAGE III</span></li>
          <li>¿CAL ≥5mm, bone loss extenso, tooth loss ≥5? → <span class="outcome">STAGE IV</span></li>
        </ul>
      </li>
    </ul>
  </div>

  <h3>Casos clínicos visuales</h3>
  <div class="photo-grid">
    <div class="photo-placeholder"><span class="icon">🦷</span><span class="caption">Stage I: attachment loss mínimo, evidencia radiográfica temprana</span></div>
    <div class="photo-placeholder"><span class="icon">🦷</span><span class="caption">Stage II: enfermedad establecida, bone loss horizontal</span></div>
    <div class="photo-placeholder"><span class="icon">🦷</span><span class="caption">Stage III: bolsas profundas, defectos verticales, movilidad temprana</span></div>
    <div class="photo-placeholder"><span class="icon">🦷</span><span class="caption">Stage IV: avanzado, con pérdida dentaria y riesgo de pérdida de la dentición</span></div>
  </div>

  <div class="reference">
    📚 Tonetti et al. 2018 (J Periodontol), Tabla 3 — Staging Framework; Fine et al. 2018
  </div>
</div>`,
  },
  {
    lesson_number: 6,
    order_index: 6,
    title: 'GRADE A-C: Progresión + Riesgo',
    content_html: `<div class="lesson-container">
  <h2>📈 Grade A-C: qué tan rápido avanza y qué tan riesgoso es</h2>

  <table>
    <tr>
      <th>GRADE</th>
      <th>Velocidad</th>
      <th>Primary Criteria</th>
      <th>% BL/Age</th>
      <th>Interpretación</th>
    </tr>
    <tr>
      <td><strong>A</strong></td>
      <td>Slow</td>
      <td>Sin pérdida evidente en 5 años</td>
      <td>&lt;0.25</td>
      <td>Estable, responde bien a cuidado estándar</td>
    </tr>
    <tr>
      <td><strong>B</strong></td>
      <td>Moderate</td>
      <td>&lt;2 mm en 5 años</td>
      <td>0.25-1.0</td>
      <td>Respuesta esperada con tratamiento estándar</td>
    </tr>
    <tr>
      <td><strong>C</strong></td>
      <td>Rapid</td>
      <td>≥2 mm en 5 años</td>
      <td>&gt;1.0</td>
      <td>Alto riesgo, requiere intervención intensiva</td>
    </tr>
  </table>

  <h3>¿Cómo calcular el Grade sin radiografías antiguas?</h3>
  <p>Método RBL (Kornman 2020, Fine et al. 2018): <strong>Radiographic Bone Loss / Age ratio</strong>.</p>

  <div class="calc-box">
    <p class="formula">RBL = (% bone loss en el diente más afectado) ÷ (edad del paciente en años)</p>
    <p><strong>Ejemplo:</strong> Paciente de 50 años. Radiografía: diente #16 muestra 60% de bone loss de la longitud radicular.</p>
    <p class="formula">RBL = 60% ÷ 50 = <span class="result">1.2</span></p>
    <p>RBL 1.2 &gt; 1.0 → <strong>GRADE C</strong> (progresión rápida)</p>
  </div>

  <h3>Tabla de referencia rápida (Kornman 2020)</h3>
  <table>
    <tr>
      <th>Bone loss %</th>
      <th>Edad 50</th>
      <th>Edad 60</th>
      <th>Edad 70</th>
      <th>Grade</th>
    </tr>
    <tr><td>30%</td><td>0.60</td><td>0.50</td><td>0.43</td><td>A</td></tr>
    <tr><td>40%</td><td>0.80</td><td>0.67</td><td>0.57</td><td>A/B</td></tr>
    <tr><td>50%</td><td>1.00</td><td>0.83</td><td>0.71</td><td>B</td></tr>
    <tr><td>60%</td><td>1.20</td><td>1.00</td><td>0.86</td><td>C</td></tr>
  </table>

  <h3>Grade Modifiers — cambian el grado automáticamente</h3>
  <div class="modifier-grid">
    <div class="modifier-box">
      <h4>🚬 Smoking</h4>
      <ul>
        <li>No fumador → sin modificador</li>
        <li>Fumador &lt;10 cig/día → sin modificador</li>
        <li>Fumador ≥10 cig/día → sube de grado (A→B, B→C)</li>
      </ul>
      <p style="font-size:0.85rem;color:var(--text-light);">Mecanismo: la nicotina suprime la respuesta inmune y retrasa la cicatrización.</p>
    </div>
    <div class="modifier-box">
      <h4>🩺 Diabetes</h4>
      <ul>
        <li>Normoglucémico / sin diagnóstico → sin modificador</li>
        <li>HbA1c &lt;7.0% en pacientes diagnosticados → sin modificador, se mantiene</li>
        <li>HbA1c 7.0-8.0% → posible ascenso a B/C</li>
        <li>HbA1c &gt;8.0% → asciende a Grade C</li>
      </ul>
      <p style="font-size:0.85rem;color:var(--text-light);">Mecanismo: la hiperglucemia amplifica la respuesta inflamatoria.</p>
    </div>
  </div>

  <p style="font-size:0.9rem;color:var(--text-light);"><strong>Otros factores considerados</strong> (no son modificadores automáticos, pero influyen): edad, factores genéticos (polimorfismos IL-1, IL-6), estrés, y cumplimiento de higiene oral.</p>

  <div class="reference">
    📚 Tonetti et al. 2018 (J Periodontol), Tabla 4 — Grading Framework; Kornman &amp; Papapanou 2020; Fine et al. 2018
  </div>
</div>`,
  },
  {
    lesson_number: 7,
    order_index: 7,
    title: 'GRAY ZONES: Cómo Kornman resuelve casos ambiguos',
    content_html: `<div class="lesson-container">
  <h2>🌫️ Cuando la clasificación mecánica no alcanza</h2>

  <div class="definition-box">
    <p><strong>Gray Zone (Kornman &amp; Papapanou 2020):</strong> "Situación donde aplicar los criterios de clasificación de forma mecánica NO produce una respuesta clara. Requiere el juicio de un clínico informado y experimentado para llegar al Stage y Grade correctos."</p>
  </div>

  <h3>Las 5 reglas fundamentales de Kornman</h3>
  <div class="cases">
    <div class="case-card">
      <h3>1. Stage es PATIENT-BASED, no tooth-based</h3>
      <p>No puedes decir "Stage III en el diente #16 y Stage I en el #24". Se asigna el Stage <strong>máximo</strong> del paciente, y se describe dónde está localizado en la narrativa del caso.</p>
      <p style="font-size:0.9rem;color:var(--text-light);">Ejemplo: paciente con bone loss moderado generalizado (Stage II) pero un diente con defecto vertical severo → se asigna Stage II y se describe "generalized Stage II con defectos verticales localizados en #14-15".</p>
    </div>
    <div class="case-card">
      <h3>2. Stage puede subir, pero NO baja tras la terapia</h3>
      <p>El daño ya ocurrido permanece, aunque la enfermedad esté controlada. Excepción: la regeneración exitosa puede mejorar el CAL/RBL de ese diente específico, pero el Stage registrado del paciente se mantiene, describiéndose como "Stage III con attachment mejorado" en el seguimiento.</p>
    </div>
    <div class="case-card">
      <h3>3. Los factores de complejidad se evalúan COLECTIVAMENTE</h3>
      <p>No: "tiene furcación Clase II → automáticamente Stage III". Sí: "¿hay furcación + defectos verticales + movilidad juntos? → entonces Stage III". Una furcación aislada, sin otros marcadores, no sube el Stage por sí sola.</p>
    </div>
    <div class="case-card">
      <h3>4. Los modificadores de Grado se aplican con prudencia</h3>
      <p>No: "fuma 15 cig/día → Grade C sin importar la evidencia". Sí: "fuma ≥10 cig/día + evidencia de progresión rápida → Grade C". El modificador se aplica, pero se interpreta junto con la evidencia clínica disponible.</p>
    </div>
    <div class="case-card">
      <h3>5. Las gray zones requieren documentar el razonamiento clínico</h3>
      <p>En la narrativa del caso, explica por qué asignaste ese Stage/Grade citando hallazgos específicos, no generalizaciones.</p>
    </div>
  </div>

  <h3>7 casos clínicos reales para practicar</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Caso 1 — Radiográficamente íntegro, pero CAL localizado</h3>
      <details>
        <summary>Ver caso y resolución</summary>
        <p><strong>Paciente:</strong> M, 65 años. Radiografía periapical intacta en la mayoría de sitios. CAL de 2mm en sitios interproximales #25-26.</p>
        <p><strong>Pregunta:</strong> ¿Stage I o "no periodontitis"?</p>
        <p>✅ Stage I (cumple CAL ≥2mm en 2 dientes no adyacentes) · ✅ Grade A (radiografía intacta = sin progresión visible)</p>
        <p><em>Describe:</em> "Localized Stage I periodontitis, sin evidencia radiográfica de bone loss."</p>
        <p><strong>Lección:</strong> la presencia de CAL pesa más que la ausencia de bone loss radiográfico.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 2 — Severidad con estabilidad</h3>
      <details>
        <summary>Ver caso y resolución</summary>
        <p><strong>Paciente:</strong> F, 50 años. RBL en #16: 50% de la longitud radicular. Radiografías sin cambio en 8 años.</p>
        <p><strong>Pregunta:</strong> ¿Grade C por el 50% de bone loss, o Grade A por la estabilidad?</p>
        <p>✅ Grade A (criterio primario: "sin pérdida evidente en 5 años"). RBL = 50/50 = 1.0 sugeriría B/C, pero la evidencia directa (8 años estable) pesa más que el cálculo indirecto.</p>
        <p><em>Describe:</em> "Stage III, Grade A — progresión lenta y estable pese a la pérdida significativa."</p>
        <p><strong>Lección:</strong> evidencia directa (radiografías seriadas) &gt; cálculo indirecto (RBL).</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 3 — Diabetes no controlada, enfermedad incipiente</h3>
      <details>
        <summary>Ver caso y resolución</summary>
        <p><strong>Paciente:</strong> M, 45 años, diabetes tipo 2 (HbA1c 8.8%). Enfermedad Stage I (CAL 1-2mm). Sin radiografías antiguas para calcular RBL.</p>
        <p><strong>Pregunta:</strong> ¿Grade C por la diabetes, aunque sea Stage I?</p>
        <p>✅ Stage I (criterio clínico objetivo) · ✅ Grade C (modificador automático por HbA1c &gt;7.0%)</p>
        <p><em>Describe:</em> "Stage I, Grade C — pese a la severidad mínima, ALTO RIESGO de progresión rápida por diabetes no controlada." Plan: referencia a endocrinología + control de placa agresivo + monitoreo frecuente.</p>
        <p><strong>Lección:</strong> un paciente Stage I Grade C necesita intervención inmediata.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 4 — Furcación sin movilidad severa</h3>
      <details>
        <summary>Ver caso y resolución</summary>
        <p><strong>Paciente:</strong> F, 55 años. Furcación Clase II (entrada) en #14. Movilidad Grado 1 (leve, no Grado 2). Bone loss coronal, 20%.</p>
        <p><strong>Pregunta:</strong> ¿Stage III o IV por la furcación?</p>
        <p>✅ Stage II (radiográficamente ≤33%, sin defectos verticales). La furcación Clase II, sin otros marcadores, no sube el Stage automáticamente.</p>
        <p><em>Describe:</em> "Localized Stage II con compromiso de furcación Clase II."</p>
        <p><strong>Lección:</strong> la furcación no es determinante por sí sola — evalúa la complejidad total.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 5 — Periodontitis "franca" en un solo diente</h3>
      <details>
        <summary>Ver caso y resolución</summary>
        <p><strong>Paciente:</strong> M, 35 años. Dolor periapical en #26. CAL 6mm, probing depth 7mm SOLO en este diente. Resto de la boca perfectamente sano. Bone loss circunscrito (~40% de la raíz).</p>
        <p><strong>Pregunta:</strong> ¿Stage I (por ser 1 diente) o Stage III (por la severidad)?</p>
        <p>✅ Stage I (patient-based: solo 1 diente con attachment loss) · ✅ Grade C (evidencia clara de progresión rápida en ese sitio)</p>
        <p><em>Describe:</em> "LOCALIZED Stage I periodontitis afectando un único diente."</p>
        <p><strong>Lección:</strong> el Stage se basa en la distribución, no en la severidad de un sitio individual. Plan: endodoncia + posible exodoncia, o regeneración si es viable.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 6 — Edad avanzada con radiografía antigua</h3>
      <details>
        <summary>Ver caso y resolución</summary>
        <p><strong>Paciente:</strong> M, 72 años. Radiografía 2008: 40% bone loss en #16. Radiografía 2024: 50%. RBL histórico: (50-40)/16 años = 0.625. RBL actual: 50/72 = 0.69.</p>
        <p><strong>Pregunta:</strong> ¿Grade A o B?</p>
        <p>✅ Grade A (evidencia directa: &lt;1mm de progresión en 16 años = lento). El RBL puntual no es determinante cuando hay evidencia longitudinal directa.</p>
        <p><em>Describe:</em> "Stage III, Grade A — progresión lenta y estable durante 16 años."</p>
        <p><strong>Lección:</strong> pacientes mayores con bone loss crónico no son automáticamente Grade C si están estables.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 7 — Furcación Clase III con movilidad</h3>
      <details>
        <summary>Ver caso y resolución</summary>
        <p><strong>Paciente:</strong> F, 58 años. Furcación Clase III (pasante) en #14. Movilidad Grado 2 (por trauma oclusal). 3 dientes perdidos previamente. Defectos de reborde moderados.</p>
        <p><strong>Pregunta:</strong> ¿Stage III o IV?</p>
        <p>✅ Stage IV (furcación Clase III + movilidad Grado 2 + historial de pérdida dentaria = riesgo inminente de pérdida de dientes remanentes).</p>
        <p><em>Describe:</em> "Generalized Stage IV con furcaciones Clase III y trauma oclusal secundario." Plan: equipo multidisciplinario (prostodoncia + periodoncia).</p>
        <p><strong>Lección:</strong> la complejidad total — no solo la furcación — determina el Stage.</p>
      </details>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 Principio fundamental de Kornman</h3>
    <blockquote>"Stage es patient-based, not tooth-based. Un solo Stage se asigna al paciente TOTAL. La complejidad se DESCRIBE de forma localizada o generalizada."</blockquote>
  </div>

  <div class="reference">
    📚 Basado en: Kornman &amp; Papapanou 2020 (J Periodontol) — Clinical application, Ground Rules, Clarifications and "Gray Zones"
  </div>
</div>`,
  },
  {
    lesson_number: 8,
    order_index: 8,
    title: 'Impacto clínico REAL: Cómo cambia TODO',
    content_html: `<div class="lesson-container">
  <h2>🩺 De la teoría a la silla: cómo cambia el diagnóstico, el plan y el mensaje al paciente</h2>

  <h3>Comparación 1999 vs. 2018 en diagnóstico</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Paciente A — M, 48 años</h3>
      <p>CAL generalizado moderado (3-4mm), bone loss coronal, sin pérdida dentaria, fumador (12 cig/día).</p>
      <p><strong>Diagnóstico 1999:</strong> "Chronic periodontitis" → Tratamiento: SRP estándar + mantenimiento.</p>
      <p><strong>Diagnóstico 2018:</strong> "Stage II, Grade C (modificador por tabaco)" → Tratamiento: cese de tabaco inmediato + control de placa agresivo + SRP con antibiótico adyuvante (minociclina) + revisión mensual los primeros 3 meses + considerar referencia si hay múltiples factores de riesgo.</p>
      <p style="font-weight:700;color:var(--unicoc-red);">Diferencia: de "crónico = estable" a "Grade C = alto riesgo = intervención urgente".</p>
    </div>

    <div class="case-card">
      <h3>Paciente B — F, 42 años</h3>
      <p>CAL severo (≥5mm), bone loss mid-third, 2 dientes perdidos, defectos verticales, furcación Clase II — pero radiografías antiguas muestran estabilidad durante 10 años.</p>
      <p><strong>Diagnóstico 1999:</strong> "Aggressive periodontitis" (por severidad) → Tratamiento muy agresivo, intento de "rescate", referencia hospitalaria.</p>
      <p><strong>Diagnóstico 2018:</strong> "Stage III, Grade A" → Tratamiento: SRP estándar (sin antibiótico agresivo) + mantenimiento cada 3-4 meses + regeneración si los defectos son viables. Pronóstico: excelente (progresor lento).</p>
      <p style="font-weight:700;color:var(--unicoc-red);">Diferencia: de "agresivo = mal pronóstico" a "Grade A = buen pronóstico a pesar de la severidad".</p>
    </div>
  </div>

  <h3>Impacto en la complejidad del tratamiento</h3>
  <table>
    <tr>
      <th>Complejidad</th>
      <th>Quién trata</th>
      <th>Seguimiento</th>
    </tr>
    <tr>
      <td>Mínima (Stage I)</td>
      <td>Odontólogo general</td>
      <td>Anual</td>
    </tr>
    <tr>
      <td>Moderada (Stage II simple)</td>
      <td>General / higienista supervisado</td>
      <td>Cada 6 meses</td>
    </tr>
    <tr>
      <td>Moderada-alta (Stage III con defectos óseos)</td>
      <td>Periodoncista</td>
      <td>Cada 3 meses</td>
    </tr>
    <tr>
      <td>Alta (Stage IV)</td>
      <td>Periodoncista + prostodoncista + ortodoncista</td>
      <td>Seguimiento indefinido</td>
    </tr>
  </table>

  <h3>Impacto en el pronóstico y la comunicación con el paciente</h3>
  <div class="evidence-cards">
    <div class="card">
      <h3>1999: mensaje vago</h3>
      <p>"Tiene periodontitis crónica." Plan: "Limpiezas regulares."</p>
    </div>
    <div class="card">
      <h3>2018: mensaje específico y accionable</h3>
      <ul>
        <li>"Stage II pero Grade A" → "Progresa lento. Con mantenimiento, retiene sus dientes."</li>
        <li>"Stage I pero Grade C (por fumar)" → "Es leve AHORA, pero progresa rápido. Dejar de fumar es la prioridad #1."</li>
        <li>"Stage III pero Grade A" → "Hay pérdida significativa, pero está estable. Con cuidado, retiene sus dientes."</li>
      </ul>
    </div>
  </div>

  <div class="key-principle">
    <h3>🌐 Impacto sistémico</h3>
    <p>Periodontitis Stage III/IV + Grade C se asocia a mayor riesgo cardiovascular y mayor progresión si coexiste diabetes — lo que justifica una referencia activa a endocrinología o cardiología, no solo un registro pasivo en la historia clínica.</p>
  </div>

  <div class="reference">
    📚 Síntesis del capítulo — Tonetti et al. 2018; Kornman &amp; Papapanou 2020; Sanz et al. 2018
  </div>
</div>`,
  },
];

export const pretestQuestions = [
  {
    question_text: 'La clasificación de 1999 (Chronic vs Aggressive) y la de 2018 (Stage/Grade) miden básicamente lo mismo, solo con otro nombre.',
    question_type: 'true_false',
    options: null,
    correct_answer: 'false',
    explanation: '2018 separa dos dimensiones independientes (severidad actual y velocidad de progresión) que 1999 nunca distinguía.',
    order_index: 1,
  },
  {
    question_text: '¿Qué crees que describe mejor el problema central del sistema de 1999?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Tenía demasiadas categorías' },
      { key: 'b', text: 'No diferenciaba severidad actual de velocidad de progresión futura' },
      { key: 'c', text: 'No consideraba la edad del paciente' },
    ],
    correct_answer: 'b',
    explanation: 'Ese es exactamente el hallazgo de Kornman 2020: hasta 25% de los pacientes progresa distinto a lo que su severidad actual sugiere.',
    order_index: 2,
  },
  {
    question_text: 'Si un paciente tiene mucho hueso perdido pero lleva años sin empeorar, ¿qué Grade (A/B/C) esperarías?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Grade A' },
      { key: 'b', text: 'Grade B' },
      { key: 'c', text: 'Grade C' },
    ],
    correct_answer: 'a',
    explanation: 'Grade mide velocidad de progresión, no severidad acumulada — un paciente severo pero estable es Grade A.',
    order_index: 3,
  },
  {
    question_text: 'El diagnóstico de periodontitis siempre requiere ver pérdida ósea visible en la radiografía.',
    question_type: 'true_false',
    options: null,
    correct_answer: 'false',
    explanation: 'La definición 2018 se basa en CAL detectable, no en bone loss radiográfico — un paciente puede ser Stage I con radiografía intacta.',
    order_index: 4,
  },
];

export const posttestQuestions = [
  {
    question_text: 'Según la definición oficial de Tonetti et al. 2018, ¿cuándo es un paciente un caso de periodontitis?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Cuando hay cualquier sangrado al sondaje' },
      { key: 'b', text: 'CAL interdental detectable en ≥2 dientes no adyacentes, o CAL bucal/oral ≥3mm con bolsa >3mm en ≥2 dientes, sin causa no periodontal' },
      { key: 'c', text: 'Cuando la radiografía muestra bone loss visible' },
      { key: 'd', text: 'Cuando hay movilidad dentaria de cualquier grado' },
    ],
    correct_answer: 'b',
    explanation: 'Esa es la definición clínica exacta del World Workshop 2018, y excluye explícitamente causas no periodontales del CAL.',
    order_index: 1,
  },
  {
    question_text: '¿Cuál es la fórmula del RBL (radiographic bone loss/age ratio)?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: '% de bone loss del diente más afectado ÷ edad del paciente' },
      { key: 'b', text: 'CAL total ÷ número de dientes' },
      { key: 'c', text: 'Profundidad de sondaje ÷ número de sitios' },
      { key: 'd', text: 'Edad del paciente ÷ años desde el diagnóstico' },
    ],
    correct_answer: 'a',
    explanation: 'RBL = % bone loss / edad. Un RBL >1.0 sugiere Grade C cuando no hay radiografías antiguas para comparar directamente.',
    order_index: 2,
  },
  {
    question_text: '¿A partir de cuántos cigarrillos por día se aplica el modificador de Grade por tabaco?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: '≥5 cigarrillos/día' },
      { key: 'b', text: '≥10 cigarrillos/día' },
      { key: 'c', text: '≥20 cigarrillos/día' },
      { key: 'd', text: 'Cualquier consumo, sin umbral' },
    ],
    correct_answer: 'b',
    explanation: 'El umbral es ≥10 cigarrillos/día. Por debajo de eso no se aplica el modificador automático.',
    order_index: 3,
  },
  {
    question_text: 'Un paciente diagnosticado con diabetes y HbA1c de 8.5% recibe automáticamente el modificador de Grade C, sin importar la evidencia clínica de progresión.',
    question_type: 'true_false',
    options: null,
    correct_answer: 'false',
    explanation: 'Kornman 2020 es explícito: el modificador se aplica, pero se interpreta junto con la evidencia clínica disponible, no en aislamiento mecánico.',
    order_index: 4,
  },
  {
    question_text: 'Según las Ground Rules de Kornman, ¿cómo se deben evaluar los factores de complejidad (furcación, defectos verticales, movilidad)?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Cada factor por separado sube el Stage automáticamente' },
      { key: 'b', text: 'Colectivamente — un solo factor aislado no determina el Stage por sí solo' },
      { key: 'c', text: 'Solo cuentan si el paciente es mayor de 60 años' },
      { key: 'd', text: 'Solo se consideran en Stage IV' },
    ],
    correct_answer: 'b',
    explanation: 'Ground rule 3: los factores de complejidad se evalúan en conjunto, no en aislamiento.',
    order_index: 5,
  },
  {
    question_text: 'El Stage de un paciente puede bajar espontáneamente después de una terapia periodontal exitosa.',
    question_type: 'true_false',
    options: null,
    correct_answer: 'false',
    explanation: 'El daño histórico permanece en el registro; el Stage no baja tras la terapia (salvo la descripción puntual de mejora en un diente regenerado).',
    order_index: 6,
  },
  {
    question_text: 'Un paciente de 35 años tiene periodontitis severa (CAL 6mm) pero limitada a un solo diente, con el resto de la boca sana. ¿Cómo se clasifica el Stage?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Stage III, porque la severidad local es alta' },
      { key: 'b', text: 'Stage I, localizado a ese diente, porque Stage es patient-based' },
      { key: 'c', text: 'Stage IV, por el riesgo de pérdida dentaria' },
      { key: 'd', text: 'No se puede clasificar con un solo diente afectado' },
    ],
    correct_answer: 'b',
    explanation: 'El caso 5 de Kornman es exactamente este: Stage se basa en distribución (cuántos dientes), no en la severidad de un sitio aislado.',
    order_index: 7,
  },
  {
    question_text: 'Un paciente Stage I con diabetes no controlada (HbA1c 8.8%) es clasificado como Grade C. ¿Qué implica esto clínicamente?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'No requiere tratamiento porque el Stage es mínimo' },
      { key: 'b', text: 'Requiere intervención inmediata pese a la baja severidad actual, por el alto riesgo de progresión' },
      { key: 'c', text: 'Se debe esperar a que suba de Stage antes de tratar' },
      { key: 'd', text: 'El Grade C solo aplica si también sube el Stage' },
    ],
    correct_answer: 'b',
    explanation: 'Stage I + Grade C es precisamente el caso que ilustra por qué separar severidad de riesgo cambia la práctica clínica: enfermedad leve pero riesgo alto exige actuar ya.',
    order_index: 8,
  },
];
