// Content for Chapter 3 ("Clasificando: Estadio y Grado"), fully rebuilt
// 2026-08-21 from the "Capítulo III Grados" reference document (a real
// academic manuscript with embedded editorial review comments, [Ui7]-[Ui10]).
// Consumed by insertChapter3.js. See project-context.md for what changed
// and why.

export const lessons = [
  {
    lesson_number: 1,
    order_index: 1,
    title: 'Qué es el Grado: fundamentos y objetivos',
    content_html: `<div class="lesson-container">
  <h2>🧭 La dimensión pronóstica y biológica de la clasificación</h2>
  <p>Mientras el <strong>Estadio</strong> mira principalmente el daño acumulado y la complejidad actual, el <strong>Grado</strong> intenta responder una pregunta distinta: ¿a qué velocidad ha progresado o es probable que progrese la periodontitis en ese paciente? Por eso incorpora evidencia de progresión, la relación entre destrucción y edad, y modificadores de riesgo sistémico o conductual como el tabaquismo y la diabetes.</p>

  <div class="key-principle">
    <h3>🎯 Por qué el Grado genera más confusión que el Estadio</h3>
    <p>El Estadio se basa en "qué veo": mediciones directas del daño presente. El Grado exige un paso más — pasar del "qué veo" al "qué inferencia puedo hacer". No siempre existe una radiografía antigua para documentar progresión real; muchas veces el clínico debe usar evidencia indirecta, especialmente la razón pérdida ósea/edad. El Grado no es una etiqueta arbitraria, sino una <strong>hipótesis clínica razonada</strong> sobre el comportamiento biológico del caso.</p>
  </div>

  <h3>Objetivos de este capítulo</h3>
  <div class="evidence-cards">
    <div class="card">
      <h3>1. Comprender el Grado como estimación biológica</h3>
      <p>Entender por qué el Grado representa una estimación razonada de progresión biológica, y no un simple complemento administrativo del diagnóstico.</p>
    </div>
    <div class="card">
      <h3>2. Diferenciar los tres tipos de evidencia</h3>
      <p>Distinguir evidencia directa de progresión, evidencia indirecta (RBL/edad), y modificadores de riesgo — y saber cuál usar según lo que hay disponible.</p>
    </div>
    <div class="card">
      <h3>3. Calcular e interpretar RBL/edad</h3>
      <p>Interpretar la pérdida ósea radiográfica como porcentaje de la longitud radicular y relacionarla correctamente con la edad del paciente.</p>
    </div>
    <div class="card">
      <h3>4. Reconocer tabaco y diabetes como modificadores clínicos</h3>
      <p>Aplicar el tabaquismo y la diabetes como modificadores clínicamente relevantes del Grado, con sus umbrales concretos — no como observaciones anecdóticas.</p>
    </div>
  </div>

  <h3>Qué evalúa realmente el Grado</h3>
  <p>El Grado busca estimar tres aspectos interrelacionados:</p>
  <ul>
    <li><strong>La velocidad de progresión</strong> de la enfermedad.</li>
    <li><strong>La probabilidad de una respuesta menos favorable</strong> al tratamiento convencional.</li>
    <li><strong>El posible impacto del caso</strong> sobre la salud general del paciente.</li>
  </ul>
  <p>En la práctica, esto significa que dos pacientes con el <strong>mismo Estadio</strong> pueden tener <strong>Grados diferentes</strong> si la tasa de destrucción, la edad o los factores de riesgo sugieren comportamientos biológicos distintos.</p>

  <div class="definition-box">
    <p><strong>El punto de partida:</strong> la clasificación propone comenzar desde <strong>Grado B</strong> como supuesto inicial, y luego desplazar el caso hacia A o hacia C solo si existe evidencia suficiente. El Grado no se asigna por intuición ni por la simple impresión clínica de "se ve agresivo" — debe apoyarse en datos comparables o en inferencias estructuradas.</p>
  </div>

  <h3>Panorama general: de A a C</h3>
  <div class="decision-tree">
    <h3>🧭 El paso de Grado A a Grado C expresa tres cosas a la vez</h3>
    <ul>
      <li><span class="outcome" style="background:#16a34a;">Grado A</span> → progresión lenta esperada, mejor respuesta esperada al tratamiento, menor peso de modificadores</li>
      <li><span class="outcome" style="background:#d97706;">Grado B</span> → progresión moderada, respuesta variable, modificadores presentes pero controlados</li>
      <li><span class="outcome">Grado C</span> → progresión rápida probable, peor respuesta esperada, mayor peso de modificadores de riesgo</li>
    </ul>
  </div>
  <p style="font-size:0.9rem;color:var(--text-light);">No es una escala de severidad (eso es el Estadio) — es una escala de <strong>comportamiento biológico esperado</strong>: qué tan rápido avanza y qué tan bien va a responder.</p>

  <div class="reference">
    📚 Basado en: Tonetti, Greenwell &amp; Kornman 2018 (J Periodontol); Kornman &amp; Papapanou 2020
  </div>
</div>`,
  },
  {
    lesson_number: 2,
    order_index: 2,
    title: 'Cómo se determina el Grado',
    content_html: `<div class="lesson-container">
  <h2>📐 Evidencia directa, evidencia indirecta y modificadores</h2>
  <p>El Grado se determina cruzando tres columnas de evidencia. No hace falta que las tres coincidan — basta con que <strong>una</strong> alcance el umbral de Grado C para desplazar el caso hacia arriba. Cuando hay evidencia directa disponible, <strong>tiene prioridad</strong> sobre la estimación indirecta.</p>

  <table>
    <tr><th>Grado</th><th>Evidencia directa de progresión</th><th>Evidencia indirecta (RBL/edad)</th><th>Modificadores</th></tr>
    <tr><td><strong>A</strong> — lenta</td><td>Sin pérdida detectable en 5 años</td><td>&lt;0.25</td><td>No fumador; normoglucemia o ausencia de diabetes</td></tr>
    <tr><td><strong>B</strong> — moderada</td><td>&lt;2mm de pérdida en 5 años</td><td>0.25 a 1.0</td><td>Fumador &lt;10 cigarrillos/día; HbA1c &lt;7% en paciente con diabetes</td></tr>
    <tr><td><strong>C</strong> — rápida</td><td>≥2mm de pérdida en 5 años</td><td>&gt;1.0</td><td>Fumador ≥10 cigarrillos/día; HbA1c ≥7% en paciente con diabetes</td></tr>
  </table>

  <h3>Evidencia directa: comparar en el tiempo</h3>
  <p>Es el "patrón oro" para estimar velocidad de progresión: comparar radiografías o mediciones clínicas (CAL) tomadas en momentos distintos del mismo paciente. Una radiografía de hace 5 años frente a una actual, o un registro periodontal previo frente al actual, muestran directamente si hubo pérdida — y cuánta.</p>

  <h3>Evidencia indirecta: la razón RBL/edad</h3>
  <p>Cuando no hay registros previos, se estima la velocidad probable con la relación entre la pérdida ósea radiográfica y la edad del paciente.</p>
  <div class="calc-box">
    <p><strong>Fórmula</strong></p>
    <p class="formula">RBL/edad = % de pérdida ósea radiográfica (en el sitio más afectado) ÷ edad del paciente</p>
    <p><strong>Ejemplo:</strong> RBL máxima 40% en un paciente de 30 años → 40 ÷ 30 = <span class="result">1.33</span> → supera 1.0, orienta a Grado C.</p>
    <p>El mismo 40% de pérdida ósea en un paciente de 65 años → 40 ÷ 65 = <span class="result">0.62</span> → se aproxima a Grado B.</p>
    <p style="font-size:0.9rem;color:var(--text-light);">Misma pérdida ósea, interpretación completamente distinta — por eso la edad es decisiva en la lectura del Grado.</p>
  </div>

  <div class="key-principle">
    <h3>🎯 El Grado es una hipótesis clínica, no una etiqueta automática</h3>
    <p>No siempre existe una radiografía antigua para documentar progresión real — en muchos casos el clínico debe apoyarse en evidencia indirecta y en el fenotipo del caso. El Grado es una inferencia razonada sobre el comportamiento biológico probable del paciente, no una casilla que se marca mecánicamente.</p>
  </div>

  <h3>Tres casos para practicar la lógica del Grado</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Caso 1 — desproporción entre edad y daño, sin modificadores evidentes</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Paciente de 27 años, Estadio III, 35% de pérdida ósea máxima, sin radiografías previas comparables. No fuma, sin diabetes.</p>
        <p><strong>RBL/edad</strong> = 35 ÷ 27 = <span class="result">1.30</span> → supera 1.0.</p>
        <p><strong>Grado C.</strong> A pesar de no tener modificadores conductuales, la desproporción entre la edad y el daño acumulado por sí sola orienta hacia progresión rápida.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Caso 2 — misma severidad, edad mayor y modificadores leves</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Paciente de 58 años, Estadio III, 30% de pérdida ósea máxima, fumador de 5 cigarrillos/día, HbA1c 6.7%.</p>
        <p><strong>RBL/edad</strong> = 30 ÷ 58 = <span class="result">0.52</span> → dentro del rango 0.25-1.0.</p>
        <p><strong>Grado B.</strong> Los modificadores (tabaquismo leve, HbA1c bien controlada) también caen dentro del rango B, sin evidencia que empuje el caso hacia C.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Caso 3 — evidencia directa que prevalece sobre la severidad actual</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Paciente de 46 años, Estadio II. Radiografía comparativa muestra ≥2mm de progresión de pérdida ósea en los últimos 5 años.</p>
        <p>Aunque la severidad actual no es extrema (Estadio II), la <strong>evidencia directa</strong> (≥2mm de pérdida en 5 años) es, por definición, criterio de Grado C — y la evidencia directa siempre tiene prioridad sobre la estimación indirecta cuando está disponible.</p>
      </details>
    </div>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti, Greenwell &amp; Kornman 2018 (J Periodontol)
  </div>
</div>`,
  },
  {
    lesson_number: 3,
    order_index: 3,
    title: 'Grado A, B y C: interpretación clínica',
    content_html: `<div class="lesson-container">
  <h2>⚖️ Tres velocidades, tres lecturas clínicas distintas</h2>

  <div class="cases">
    <div class="case-card">
      <h3 style="color:#16a34a;">Grado A — progresión lenta</h3>
      <p>Es la categoría de menor velocidad esperada y requiere evidencia que sustente ausencia de progresión, o una relación pérdida ósea/edad muy baja. En el examen clínico, estos pacientes muestran una destrucción acorde — o incluso inferior — a la esperable para su edad, sin grandes modificadores de riesgo.</p>
      <details>
        <summary>Ejemplo</summary>
        <p>Varón 68a, sin comorbilidades, no fuma. CAL 5-6mm, RBL 40%; radiografía de hace 5 años ya mostraba RBL 37% — apenas 3 puntos porcentuales de cambio en 5 años. RBL/edad = 40/68 = 0.59 (por sí solo sugeriría Grado B), pero la <strong>evidencia directa de estabilidad</strong> tiene prioridad → <strong>Grado A</strong>.</p>
      </details>
    </div>
    <div class="case-card">
      <h3 style="color:#d97706;">Grado B — progresión moderada</h3>
      <p>Es la categoría basal de trabajo — el punto de partida recomendado antes de buscar evidencia que desplace el caso. Se asigna cuando la destrucción observada guarda una relación razonable con el tiempo biológico del paciente, y no existen pruebas suficientes para afirmar ni una resistencia excepcional a la enfermedad ni una aceleración marcada.</p>
      <details>
        <summary>Ejemplo</summary>
        <p>Mujer 48a, fuma 8 cig/día, HbA1c 6.8%. CAL 3-4mm, RBL 26%. RBL/edad = 26/48 = 0.54, dentro del rango 0.25-1.0; los modificadores (tabaquismo leve, glucemia controlada) también caen en rango B → <strong>Grado B</strong>.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Grado C — progresión rápida</h3>
      <p>No significa únicamente "caso severo": significa que la destrucción ha sido desproporcionada para la edad, o que existen datos directos de progresión rápida, además de modificadores potentes como tabaquismo intenso o diabetes insuficientemente controlada. En otras palabras, el Grado C capta la dimensión de <strong>susceptibilidad y aceleración</strong>, no solo de daño acumulado.</p>
      <details>
        <summary>Ejemplo</summary>
        <p>Varón 27a, Estadio III, RBL 35%, sin modificadores conductuales evidentes. RBL/edad = 35/27 = 1.30, supera 1.0 → <strong>Grado C</strong> por la sola desproporción edad/daño, sin necesidad de que exista tabaquismo o diabetes.</p>
      </details>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 El punto de partida es Grado B</h3>
    <p>El estudiante no debe "buscar" evidencia para justificar un Grado que le parece intuitivo. El procedimiento correcto es asumir Grado B, y solo desplazar hacia A o C cuando la evidencia directa, indirecta, o los modificadores lo sustenten con claridad.</p>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti, Greenwell &amp; Kornman 2018 (J Periodontol); Kornman &amp; Papapanou 2020
  </div>
</div>`,
  },
  {
    lesson_number: 4,
    order_index: 4,
    title: 'Modificadores de riesgo: tabaquismo y diabetes',
    content_html: `<div class="lesson-container">
  <h2>🚬🩸 Por qué no son simples anexos del diagnóstico</h2>
  <p>El tabaquismo y la diabetes se incorporaron explícitamente al Grado porque su relación con la progresión de la periodontitis y con la respuesta al tratamiento cuenta con sustento clínico robusto — no son observaciones anecdóticas del historial del paciente.</p>

  <div class="evidence-cards">
    <div class="card">
      <h3>🚬 Por qué el cigarrillo empeora el pronóstico</h3>
      <p>En quien fuma mucho, la enfermedad puede avanzar sin dar tantas señales de alarma. El cigarrillo reduce el sangrado visible, así que las encías pueden verse "menos inflamadas" de lo que el daño real sugiere — el clínico puede subestimar la actividad de la enfermedad si se guía solo por lo que ve.</p>
    </div>
    <div class="card">
      <h3>🩸 Por qué la diabetes mal controlada empeora el pronóstico</h3>
      <p>Cuando el azúcar en sangre está mal controlada, se dificulta que las encías cicatricen y que el cuerpo controle la inflamación. El ambiente que genera la hiperglucemia es desfavorable tanto para frenar la destrucción como para responder bien al tratamiento.</p>
    </div>
  </div>

  <h3>Umbrales que modifican el Grado</h3>
  <table>
    <tr><th>Modificador</th><th>Grado A</th><th>Grado B</th><th>Grado C</th></tr>
    <tr><td>Tabaquismo</td><td>No fumador</td><td>&lt;10 cigarrillos/día</td><td>≥10 cigarrillos/día</td></tr>
    <tr><td>Diabetes (HbA1c)</td><td>Normoglucemia o ausencia de diabetes</td><td>&lt;7% en paciente con diabetes</td><td>≥7% en paciente con diabetes</td></tr>
  </table>

  <div class="definition-box">
    <p style="font-size:0.9rem;">Un punto pedagógico importante: estos modificadores <strong>no deben usarse como "atajos automáticos"</strong> sin pensamiento clínico. Funcionan como modificadores del riesgo y del pronóstico, pero el juicio del clínico sigue siendo central — especialmente cuando la evidencia directa e indirecta parece no encajar perfectamente con lo que sugiere el modificador. La clasificación moderna exige razonamiento, no solo casillas marcadas.</p>
  </div>

  <h3>Cuando el modificador y la razón RBL/edad no coinciden</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — modificador fuerte, ratio moderado</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 42a, fuma 22 cig/día, HbA1c 9.1%. CAL 3-4mm generalizado, RBL 28%. RBL/edad = 28/42 = 0.67 — por sí solo, Grado B. Pero el tabaquismo intenso (≥10 cig/día) y la HbA1c muy elevada (≥7%) son, ambos, modificadores de Grado C que superan ampliamente el umbral. <strong>Diagnóstico:</strong> Grado C — dos modificadores potentes desplazan la clasificación aunque la razón indirecta por sí sola no llegara a 1.0.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Caso — modificador aislado, sin suficiente peso para cambiar la clasificación</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 52a, HbA1c 8.2% (≥7%, modificador de Grado C), pero muy adherente al tratamiento. RBL 46%, RBL/edad = 46/52 = 0.885, dentro del rango de Grado B. La HbA1c elevada es una señal de alarma que exige vigilancia estrecha y referencia endocrinológica — pero, en conjunto con el resto de la evidencia, la clasificación se mantiene en <strong>Grado B</strong>. Si la HbA1c mejora a &lt;7%, el modificador deja de pesar hacia C.</p>
      </details>
    </div>
  </div>
  <p style="font-size:0.9rem;color:var(--text-light);">Estos dos casos ilustran el mismo punto desde ángulos opuestos: los modificadores importan, pero no sustituyen el razonamiento del caso completo.</p>

  <div class="reference">
    📚 Basado en: Tonetti, Greenwell &amp; Kornman 2018 (J Periodontol); Kornman &amp; Papapanou 2020
  </div>
</div>`,
  },
  {
    lesson_number: 5,
    order_index: 5,
    title: 'Pérdida ósea radiográfica: de la imagen al número',
    content_html: `<div class="lesson-container">
  <h2>🩻 Leer la radiografía como proporción, no como impresión visual</h2>
  <p>La pérdida ósea radiográfica debe interpretarse como <strong>proporción de soporte perdido en relación con la longitud radicular</strong>, y no solo como impresión visual de "más" o "menos" hueso. Esta es una de las destrezas técnicas más importantes del capítulo, porque de ella depende tanto la correcta estadificación como la inferencia indirecta del Grado.</p>
  <p>En términos simples: el observador debe estimar qué porcentaje del soporte óseo radicular ya se ha perdido desde la unión amelo-cementaria (UAC) hacia apical.</p>

  <div class="calc-box">
    <p><strong>Fórmula de RBL</strong></p>
    <p class="formula">RBL (%) = (altura radicular perdida ÷ altura radicular total) × 100</p>
    <p>En estadios iniciales predomina la pérdida en el <strong>tercio coronal</strong>; cuando la destrucción alcanza el <strong>tercio medio</strong> o incluso más apical, la lectura se vuelve compatible con Estadios III o IV.</p>
  </div>

  <p style="font-size:0.9rem;color:var(--text-light);">La radiografía nunca debe leerse aislada: hay que correlacionarla con el sondaje, la localización del margen gingival, la presencia de defectos verticales y los antecedentes de pérdida dentaria.</p>

  <h3>Dos patrones de pérdida ósea</h3>
  <div class="evidence-cards">
    <div class="card">
      <h3>Pérdida ósea horizontal</h3>
      <p>Describe una reducción relativamente paralela del nivel crestal entre dientes vecinos. Suele asociarse con Estadios más tempranos o moderados.</p>
    </div>
    <div class="card">
      <h3>Pérdida ósea vertical (angular)</h3>
      <p>Expresa una arquitectura más compleja, con defectos infraóseos localizados que suelen elevar la complejidad del caso.</p>
    </div>
  </div>

  <ul>
    <li>La radiografía es excelente para estimar la <strong>magnitud acumulada</strong> de pérdida ósea, pero no sustituye la medición clínica de inserción (CAL).</li>
    <li>La comparación longitudinal entre radiografías de buena calidad constituye <strong>evidencia directa</strong> de progresión cuando muestra cambios reproducibles en el tiempo.</li>
  </ul>

  <h3>Por qué la edad es decisiva en esta lectura</h3>
  <p>Desde la lógica del Grado, la edad es decisiva porque una misma cantidad de pérdida ósea no significa lo mismo en un paciente de 24 años que en uno de 68. Esa es la razón por la cual la clasificación utiliza la razón <strong>pérdida ósea/edad</strong>. Una pérdida ósea importante a edad temprana sugiere susceptibilidad o velocidad biológica mayor, mientras que una pérdida similar a edad avanzada puede ser compatible con progresión más lenta, acumulada a lo largo de décadas.</p>

  <div class="calc-box">
    <p><strong>Ejemplo de cálculo indirecto</strong></p>
    <p>Si la radiografía sugiere una pérdida ósea máxima equivalente al 40% de la longitud radicular y el paciente tiene 30 años, la razón RBL/edad es <span class="result">1.33</span>. Esa cifra supera 1.0 y orienta hacia Grado C, siempre que la atribución diagnóstica sea válida y no existan razones para relativizar la lectura.</p>
    <p>Si el mismo 40% se observara en un paciente de 65 años, la razón sería <span class="result">0.62</span> y se aproximaría a Grado B.</p>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti, Greenwell &amp; Kornman 2018 (J Periodontol); Papapanou et al.
  </div>
</div>`,
  },
  {
    lesson_number: 6,
    order_index: 6,
    title: 'Estadio I y II: aplicando el Grado',
    content_html: `<div class="lesson-container">
  <h2>🌱 Misma severidad, tres velocidades muy distintas</h2>
  <p>Aplicar la lógica del Grado a cada nivel de severidad es la mejor forma de fijar el razonamiento. Empezamos por Estadio I y II — las combinaciones más frecuentes en consulta.</p>

  <h3>Estadio I (CAL 1-2mm, RBL &lt;15%)</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Estadio I, Grado A — excelente pronóstico</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 24a, examen de rutina: PPS 4-5mm en #11, CAL 1-2mm, RBL 5% (RBL/edad = 5/24 = 0.21, &lt;0.25), BOP solo en ese diente, radiografía con lámina dura clara. <strong>Diagnóstico:</strong> Estadio I, Grado A. RAR suave + educación en uso de hilo dental; a las 8 semanas: PPS 3mm, sin BOP, remisión. Pronóstico &gt;95%. Mantenimiento anual.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Estadio I, Grado B — progresión moderada en estadio temprano</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 28a, fumador 7 cig/día. CAL 2mm en #16, #26, #36; RBL 12% (RBL/edad = 12/28 = 0.43); radiografía previa (18 meses) ya mostraba pérdida medible; PCR Pg+ 20%. <strong>Diagnóstico:</strong> Estadio I, Grado B. Plan: RAR + consejería tabaco; monitoreo cada 4 meses × 1 año. Pronóstico 80-90%. Si deja el cigarrillo, pronóstico mejora hacia Grado A.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Estadio I, Grado C — ALERTA DIAGNÓSTICA</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 22a, "dientes se están moviendo, sangrado espontáneo hace 6 meses". CAL 2mm máxima en molares; RBL 9% (RBL/edad = 9/22 = 0.41, por sí solo compatible con Grado B); movilidad Grado 1 incipiente; PCR Pg+++Tf+++Td++; antecedente familiar (padre perdió molares en 20s). <strong>Diagnóstico:</strong> Estadio I, Grado C — el RBL/edad aislado no llega a 1.0, pero la microbiología severa y el antecedente familiar fuerte desplazan la clasificación a Grado C: exactamente el tipo de caso donde el fenotipo pesa más que el número aislado.</p>
      </details>
    </div>
  </div>
  <div class="key-principle">
    <h3>🎯 Por qué el Estadio I Grado C es una alerta</h3>
    <p>Sin intervención, un Estadio I Grado C se convierte en Estadio III-IV en 3-5 años — el daño actual es pequeño, pero el riesgo futuro es altísimo. Plan agresivo: RAR exhaustivo + análisis microbiológico, azitromicina, clorhexidina, evaluación inmunológica, mantenimiento cada 6-8 semanas indefinidamente.</p>
  </div>

  <h3>Estadio II (CAL 3-4mm, RBL 15-33%)</h3>
  <p>Es la combinación más frecuente en consulta. El Grado determina si el RAR solo es suficiente o si el paciente necesita cirugía y farmacoterapia adyuvante.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Estadio II, Grado A — excelente pronóstico</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 66a, no fuma, sin diabetes. CAL 3mm generalizado posterior, RBL 16% (RBL/edad = 16/66 = 0.24, límite inferior de Grado A); radiografía de hace 5 años ya mostraba RBL 15% — cambio mínimo, evidencia directa de estabilidad. RAR 2 sesiones + clorhexidina; resultado: PPS 3-4mm, sin BOP. Remisión 90-95%. Mantenimiento anual.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Estadio II, Grado B — buen pronóstico, requiere supervisión</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 48a, fuma 8 cig/día, diabetes HbA1c 6.8%. CAL 3-4mm; RBL 26% (RBL/edad = 26/48 = 0.54, dentro del rango de Grado B). <strong>Diagnóstico:</strong> Estadio II, Grado B. RAR 3 sesiones + Arestin + consejería tabaco + referencia endocrinólogo. Remisión 80-85%. Mantenimiento cada 3-4 meses.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Estadio II, Grado C — moderadamente severa, terapia agresiva</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 42a, fuma 22 cig/día, HbA1c 9.1%. CAL 3-4mm generalizado; RBL 28% (RBL/edad = 28/42 = 0.67, por sí solo Grado B — pero el tabaquismo intenso y la HbA1c muy elevada, ambos muy por encima del umbral de C, desplazan la clasificación). <strong>Diagnóstico:</strong> Estadio II, Grado C. RAR 4 sesiones + azitromicina + Arestin; referencia endocrinológica urgente. Remisión solo 60-70%. Urgencia alta: retraso significa Estadio III en 2-3 años.</p>
      </details>
    </div>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti, Greenwell &amp; Kornman 2018 (J Periodontol); Kornman &amp; Papapanou 2020
  </div>
</div>`,
  },
  {
    lesson_number: 7,
    order_index: 7,
    title: 'Estadio III y IV: aplicando el Grado',
    content_html: `<div class="lesson-container">
  <h2>🌳 Daño severo — el pronóstico depende enteramente del Grado</h2>

  <h3>Estadio III (CAL ≥5mm, se extiende al tercio medio de la raíz o más allá)</h3>
  <p>Siempre requiere cirugía. Lo que cambia dramáticamente entre Grado A y C es cuánto de esa cirugía puede tener éxito.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Estadio III, Grado A — bueno, aún en estadio severo</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 62a, ex-fumador hace 15 años, sin diabetes. CAL 5-6mm, RBL 40%, defectos angulares 1-2 paredes en molares; radiografía de hace 5 años ya mostraba RBL 37% — un cambio de apenas 3 puntos porcentuales en 5 años, evidencia directa de estabilidad, que tiene prioridad sobre el RBL/edad (40/62 = 0.65, que por sí solo sugeriría Grado B). <strong>Diagnóstico:</strong> Estadio III, Grado A. RAR + cirugía de acceso + GTR/aloinjerto. Prognosis excelente (88-90%).</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Estadio III, Grado B — moderado, balance entre control y supervivencia</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 52a, HbA1c 8.2%, muy adherente. CAL 6mm, PPS 8-9mm, RBL 46% (RBL/edad = 46/52 = 0.885, dentro del rango de Grado B). La HbA1c elevada (≥7%, modificador de Grado C) exige vigilancia estrecha, pero el conjunto de la evidencia mantiene la clasificación en Grado B. Plan: RAR + referencia endocrinológica urgente, cirugía + GTR. Si HbA1c mejora a &lt;7%, el pronóstico mejora (65-70% → mejor).</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Estadio III, Grado C — pobre pronóstico, máxima agresividad necesaria</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 47a, fuma 25 cig/día, HbA1c 9.8% sin tratamiento regular. CAL 6-8mm, PPS 8-10mm, furcación Grado 2-3; RBL 48% (RBL/edad = 48/47 = 1.02, supera 1.0 — reforzado por tabaquismo intenso y HbA1c muy elevada). Plan: RAR exhaustivo + azitromicina + Arestin; referencia endocrinológica urgente; cirugía + posible extracción selectiva. Prognosis pobre (45-55%).</p>
      </details>
    </div>
  </div>

  <h3>Estadio IV (pérdida dentaria atribuible a periodontitis, furcación Grado 3, movilidad Grado 2-3)</h3>
  <p>Estadio IV con Grado A es extremadamente raro — casi siempre alcanzable solo por evidencia directa de destrucción antigua ya detenida, nunca por el RBL/edad aislado (a esa severidad, la razón casi siempre supera 0.25). En la práctica, casi todos los casos son Grado B o C.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Estadio IV, Grado B — manejo multidisciplinario</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 65a, ex-fumador hace 12 años, HbA1c 6.9%. CAL 6-8mm, PPS 9-11mm, furcación Grado 3 en molares, movilidad Grado 2; ya perdió 2 dientes. RBL 60% (RBL/edad = 60/65 = 0.92, dentro del rango de Grado B; modificadores ahora controlados refuerzan la clasificación). <strong>Plan:</strong> RAR exhaustivo → extracción selectiva del diente irrecuperable → preservación del resto con cirugía de acceso → implantes tras cicatrización. Preservación esperada 60-70%.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Estadio IV, Grado C — crisis periodontal</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 54a, fuma 28 cig/día, HbA1c 9.8% no adherente a medicación. CAL 7-8mm, PPS 10-12mm, furcación Grado 3 bilateral, movilidad Grado 2-3; perdió 4 dientes en los últimos 18 meses. RBL 70% (RBL/edad = 70/54 = 1.30, supera 1.0). <strong>Decisiones deben tomarse en días, no semanas.</strong> Plan: consulta multidisciplinaria, extracción de molares irrecuperables, preservación intentada en anteriores, RAR intensivo + azitromicina. Preservación esperada solo 20-40%.</p>
      </details>
    </div>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti, Greenwell &amp; Kornman 2018 (J Periodontol); Kornman &amp; Papapanou 2020
  </div>
</div>`,
  },
  {
    lesson_number: 8,
    order_index: 8,
    title: 'Reclasificación, algoritmo terapéutico y síntesis final',
    content_html: `<div class="lesson-container">
  <h2>🔄 El pronóstico no está escrito en piedra</h2>
  <p>El Grado no es una etiqueta fija: cambia con la evidencia nueva (radiografías comparativas) y con la intervención en los modificadores. El Estadio, en cambio, <strong>nunca mejora</strong>.</p>

  <div class="cases">
    <div class="case-card">
      <h3>Caso integrado A — el cambio de Estadio obliga a revisar el plan</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p><strong>Presentación inicial:</strong> Mujer 42a, fumadora 12 cig/día. CAL 2-3mm, RBL 18% (RBL/edad = 18/42 = 0.43). Diagnóstico: <strong>Estadio I, Grado B</strong>.</p>
        <p><strong>Seguimiento a 8 meses:</strong> radiografía muestra RBL 30% — un salto de 12 puntos porcentuales en solo 8 meses, evidencia directa de progresión muy rápida (muy por encima del umbral de Grado C); CAL ahora 4-5mm. <strong>Reclasificación: Estadio II, Grado C</strong> — cambio dramático.</p>
        <p><strong>Investigación:</strong> cambio de trabajo → estrés severo → depresión desarrollada, sin diagnosticar.</p>
        <p><strong>Lección:</strong> el Grado puede cambiar — la comparación radiográfica y la reclasificación periódica son críticas.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Caso integrado B — intervenir el modificador cambia el pronóstico</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p><strong>Presentación:</strong> Varón 48a, fumador 18 cig/día, HbA1c 8.6%. CAL 3-4mm, RBL 28%. Diagnóstico: <strong>Estadio II, Grado C</strong> (tabaquismo severo + diabetes descontrolada, a pesar del Estadio moderado).</p>
        <p><strong>A los 6 meses:</strong> radiografía estable; PPS muy mejorado. Paciente dejó el cigarrillo hace 3 meses; HbA1c ahora 6.8% (&lt;7%).</p>
        <p><strong>Reclasificación: Estadio II, Grado B</strong> — el Estadio no cambia (el daño ya ocurrido es irreversible), pero el Grado sí mejora porque ambos modificadores cruzaron de vuelta al rango B.</p>
        <p><strong>Lección:</strong> intervenir los modificadores cambia el Grado y el pronóstico — la "reclasificación" post-terapia es una práctica clínica válida y recomendada.</p>
      </details>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 La regla que nunca cambia</h3>
    <p><strong>El Estadio no puede mejorar.</strong> CAL 5mm y RBL 40% definen Estadio III por definición — el hueso no regenera espontáneamente. Lo que mejora es el <strong>Grado de actividad</strong>, no la severidad acumulada.</p>
  </div>

  <h3>El algoritmo de decisión terapéutica</h3>
  <p>Con Estadio y Grado compilados, el plan de tratamiento se vuelve un árbol de decisión reproducible:</p>
  <div class="decision-tree">
    <h3>🧭 Patrón general del algoritmo</h3>
    <ul>
      <li><strong>Grado A:</strong> RAR solo o con pocas sesiones → sin antibióticos de rutina → <span class="outcome">mantenimiento anual a semestral</span></li>
      <li><strong>Grado B:</strong> RAR con más sesiones → antibióticos locales/sistémicos solo si hay indicación específica → <span class="outcome">mantenimiento cada 3-4 meses</span></li>
      <li><strong>Grado C:</strong> RAR exhaustivo + antibióticos sistémicos casi siempre indicados + modificadores intervenidos con urgencia → re-evaluación cercana (2-4 semanas) → <span class="outcome">mantenimiento cada 4-8 semanas indefinido</span></li>
    </ul>
  </div>
  <p style="font-size:0.9rem;color:var(--text-light);">A medida que el Grado sube de A → C (dentro de un mismo Estadio): más sesiones de RAR, aparece la indicación de antibióticos sistémicos, la re-evaluación se acerca, y el mantenimiento se intensifica.</p>

  <h3>Preguntas frecuentes</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Si el paciente responde maravillosamente al RAR, ¿puede "mejorar" de Estadio?</h3>
      <details>
        <summary>Ver respuesta</summary>
        <p><strong>No.</strong> El Estadio no puede bajar hacia una categoría menor — la destrucción que ocurrió es irreversible. Lo que cambia con la terapia es el Grado de actividad, no la severidad acumulada.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>¿Cómo comunico Estadio/Grado a un paciente de forma que entienda?</h3>
      <details>
        <summary>Ver respuesta</summary>
        <p><strong>No decir:</strong> "Tienes Estadio III, Grado B." <strong>Sí decir:</strong> "Tu enfermedad de encías es severa. El hueso ha bajado bastante. Pero buena noticia: está progresando lentamente. Con terapia intensiva y mejor control del tabaquismo, puedes preservar tus dientes."</p>
      </details>
    </div>
  </div>

  <h3>Síntesis final</h3>
  <div class="decision-tree">
    <ul>
      <li><strong>Diagnóstico</strong> (Estadio = severidad, Grado = velocidad)
        <ul>
          <li>→ <span class="outcome">Pronóstico</span> (resultado esperado)
            <ul>
              <li>→ <span class="outcome">Plan de terapia</span> (qué intervención)
                <ul>
                  <li>→ <span class="outcome">Mantenimiento</span> (cuán frecuente)</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="key-principle">
    <h3>🎯 El valor de la matriz Estadio × Grado</h3>
    <p>Sin Estadio/Grado, el clínico hace "mejor adivinanza" → variabilidad tremenda entre profesionales. Con Estadio/Grado, la decisión es estructurada, reproducible y el pronóstico es comunicable — al paciente, al equipo, y entre especialistas que retoman el caso.</p>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti, Greenwell &amp; Kornman 2018 (J Periodontol); Kornman &amp; Papapanou 2020; Caton et al. 2018 (AAP/EFP World Workshop)
  </div>
</div>`,
  },
];

export const pretestQuestions = [
  {
    question_text: '¿Qué intenta estimar el grado en un paciente con periodontitis?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'La cantidad de placa presente en boca' },
      { key: 'b', text: 'La velocidad de progresión, el riesgo futuro y la posible respuesta al tratamiento' },
      { key: 'c', text: 'El número exacto de bacterias periodontales' },
      { key: 'd', text: 'El color y textura de la encía' },
    ],
    correct_answer: 'b',
    explanation: 'El grado busca estimar qué tan rápido progresa la periodontitis, qué riesgo tiene el paciente de seguir perdiendo soporte periodontal y cómo podría responder al tratamiento convencional. No describe el estado actual (eso es estadio), sino el pronóstico futuro.',
    order_index: 1,
  },
  {
    question_text: '¿Qué significa usar evidencia directa de progresión?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Evaluar únicamente la edad del paciente' },
      { key: 'b', text: 'Comparar radiografías o mediciones clínicas tomadas en diferentes momentos' },
      { key: 'c', text: 'Observar si el paciente presenta sangrado gingival' },
      { key: 'd', text: 'Medir solamente la profundidad de sondaje actual' },
    ],
    correct_answer: 'b',
    explanation: 'La evidencia directa de progresión se obtiene cuando se comparan datos longitudinales, como radiografías antiguas y actuales, o registros previos y actuales de pérdida de inserción clínica (CAL). Es el "gold standard" para estimar velocidad de progresión.',
    order_index: 2,
  },
  {
    question_text: '¿Cómo se calcula la razón pérdida ósea/edad?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Dividiendo la edad del paciente entre el número de dientes presentes' },
      { key: 'b', text: 'Dividiendo el porcentaje de pérdida ósea radiográfica entre la edad del paciente' },
      { key: 'c', text: 'Sumando la profundidad de sondaje y la movilidad dental' },
      { key: 'd', text: 'Multiplicando el CAL por el número de dientes perdidos' },
    ],
    correct_answer: 'b',
    explanation: 'La razón pérdida ósea/edad = % RBL ÷ edad (años). Ejemplo: 36% RBL a los 24 años = 36/24 = 1.5. Si es mayor a 1.0, Grado C (rápida); si está entre 0.25 y 1.0, Grado B (moderada); si es menor a 0.25, Grado A (lenta). Este valor ayuda a estimar velocidad de progresión cuando no hay radiografías previas.',
    order_index: 3,
  },
  {
    question_text: '¿Qué efecto tiene fumar diez o más cigarrillos al día sobre el grado?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'No modifica el grado periodontal' },
      { key: 'b', text: 'Disminuye automáticamente el grado a A' },
      { key: 'c', text: 'Puede modificar el caso hacia Grado C' },
      { key: 'd', text: 'Solo afecta el estadio, pero no el grado' },
    ],
    correct_answer: 'c',
    explanation: 'Fumar ≥10 cigarrillos/día es un modificador de riesgo importante. En la clasificación AAP/EFP 2018, este hábito puede llevar el caso hacia Grado C porque se asocia con mayor riesgo de progresión periodontal, peor respuesta al tratamiento y mayor sangrado enmascarado (vasoconstricción).',
    order_index: 4,
  },
  {
    question_text: '¿Por qué la edad del paciente modifica la interpretación de la pérdida ósea?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Porque los pacientes jóvenes siempre tienen periodontitis leve' },
      { key: 'b', text: 'Porque la misma pérdida ósea tiene distinto significado según el tiempo de vida del paciente' },
      { key: 'c', text: 'Porque la edad reemplaza la necesidad de hacer sondaje periodontal' },
      { key: 'd', text: 'Porque la pérdida ósea solo importa después de los 60 años' },
    ],
    correct_answer: 'b',
    explanation: 'Una pérdida ósea importante en un paciente joven (ej. 36% a los 24 años, RBL/edad = 1.5) sugiere una progresión rápida o susceptibilidad aumentada, Grado C probable. En cambio, una pérdida bastante menor en un paciente de 70 años (ej. 15%, RBL/edad = 0.21) puede representar daño acumulado durante más tiempo — Grado A (lenta acumulación), pese a tratarse de la misma enfermedad. Por eso la edad ayuda a interpretar mejor la velocidad de progresión, no solo la cantidad de pérdida ósea.',
    order_index: 5,
  },
];

export const posttestQuestions = [
  {
    question_text: '¿Por qué dos pacientes con el mismo estadio pueden presentar grados distintos?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Porque el estadio depende del color de la encía y el grado depende del dolor' },
      { key: 'b', text: 'Porque el estadio describe la severidad actual, mientras que el grado estima la velocidad de progresión y el riesgo futuro' },
      { key: 'c', text: 'Porque el grado solo se usa en pacientes jóvenes' },
      { key: 'd', text: 'Porque el estadio cambia según el tipo de cepillo dental' },
    ],
    correct_answer: 'b',
    explanation: 'Dos pacientes pueden tener el mismo nivel de destrucción periodontal actual (ej. Estadio III), pero uno puede tener progresión lenta y otro rápida. Por eso pueden compartir estadio, pero tener grados diferentes según edad, evidencia de progresión, tabaquismo, diabetes u otros modificadores de riesgo.',
    order_index: 1,
  },
  {
    question_text: '¿Cuál opción define correctamente evidencia directa e indirecta de progresión?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Directa: sangrado al sondaje; indirecta: movilidad dental' },
      { key: 'b', text: 'Directa: comparación de registros longitudinales como radiografías o CAL en el tiempo; indirecta: estimación con RBL/edad o fenotipo del caso' },
      { key: 'c', text: 'Directa: edad del paciente; indirecta: tipo de tratamiento recibido' },
      { key: 'd', text: 'Directa: número de dientes presentes; indirecta: color de la encía' },
    ],
    correct_answer: 'b',
    explanation: 'La evidencia directa se obtiene al comparar datos del mismo paciente en distintos momentos, por ejemplo, una radiografía de hace 5 años con una actual. La evidencia indirecta se usa cuando no hay registros previos, estimando progresión con la relación pérdida ósea/edad o con la presentación clínica del caso.',
    order_index: 2,
  },
  {
    question_text: 'En un paciente de 24 años con 36% de pérdida ósea radiográfica, ¿cuál es la razón RBL/edad y cómo se interpreta?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: '0.15, compatible con progresión lenta' },
      { key: 'b', text: '0.66, compatible con progresión moderada' },
      { key: 'c', text: '1.5, compatible con progresión rápida' },
      { key: 'd', text: '24, compatible con ausencia de periodontitis' },
    ],
    correct_answer: 'c',
    explanation: 'La fórmula es: RBL/edad = porcentaje de pérdida ósea / edad. 36 / 24 = 1.5. Según la clasificación: <0.25 → Grado A (lenta), 0.25-1.0 → Grado B (moderada), >1.0 → Grado C (rápida). Una razón de 1.5 sugiere Grado C, es decir, progresión rápida o alto riesgo de progresión.',
    order_index: 3,
  },
  {
    question_text: '¿Qué diferencia clínica relevante existe entre pérdida ósea horizontal y vertical?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'La pérdida horizontal siempre indica estadio IV' },
      { key: 'b', text: 'La pérdida vertical suele aumentar la complejidad del caso y puede asociarse a defectos infraóseos tratables quirúrgicamente' },
      { key: 'c', text: 'La pérdida vertical no tiene importancia clínica' },
      { key: 'd', text: 'La pérdida horizontal solo ocurre en pacientes diabéticos' },
    ],
    correct_answer: 'b',
    explanation: 'La pérdida ósea horizontal refleja una reducción más uniforme del soporte óseo. En cambio, la pérdida vertical o angular genera defectos infraóseos que aumentan la complejidad del tratamiento, pueden modificar el estadio hacia Estadio III si el defecto es mayor a 3mm, y son potencialmente tratables con cirugía regenerativa (GTR, regeneración ósea).',
    order_index: 4,
  },
  {
    question_text: '¿Cómo modifica la diabetes mal controlada la lectura pronóstica del caso?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Disminuye el riesgo de progresión periodontal' },
      { key: 'b', text: 'No tiene ninguna relación con la periodontitis' },
      { key: 'c', text: 'Puede modificar el grado hacia Grado C por mayor riesgo de progresión y peor respuesta al tratamiento' },
      { key: 'd', text: 'Solo modifica el estadio, pero nunca el grado' },
    ],
    correct_answer: 'c',
    explanation: 'La diabetes mal controlada, especialmente con HbA1c igual o mayor a 7%, es un modificador de riesgo importante que puede aumentar el grado a Grado C, asociarse con mayor progresión periodontal, generar peor pronóstico y comprometer una respuesta menos predecible al tratamiento. Por eso la evaluación de HbA1c es crítica en la clasificación de Grado.',
    order_index: 5,
  },
];
