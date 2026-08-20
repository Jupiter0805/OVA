// Content for Chapter 3 ("Clasificando: Estadio y Grado"), based on
// MEGA_PROMPT_CAPITULO_3_CLASIFICANDO.md. Consumed by insertChapter3.js.

export const lessons = [
  {
    lesson_number: 1,
    order_index: 1,
    title: 'La matriz Estadio × Grado como herramienta pronóstica',
    content_html: `<div class="lesson-container">
  <h2>🧭 Dos preguntas, un pronóstico</h2>
  <p>El verdadero poder del sistema AAP/EFP 2018 no está en Estadio o Grado por separado, sino en su <strong>combinación</strong>:</p>

  <div class="evidence-cards">
    <div class="card">
      <h3>Estadio solo</h3>
      <p>Responde: "¿Qué tan destruido está?" — severidad acumulada.</p>
    </div>
    <div class="card">
      <h3>Grado solo</h3>
      <p>Responde: "¿Qué tan rápido progresa?" — velocidad de la enfermedad.</p>
    </div>
    <div class="card">
      <h3>Estadio × Grado juntos</h3>
      <p>Responden: "¿Cuál es el pronóstico y qué plan de terapia recomiendo?"</p>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 Principio clave</h3>
    <p>De las 12 combinaciones posibles (4 Estadios × 3 Grados), algunas son frecuentes y otras son raras o representan alertas diagnósticas — como Estadio I con Grado C (poco daño, pero progresando muy rápido) o Estadio IV con Grado A (mucho daño, pero ya detenido).</p>
  </div>

  <h3>La matriz completa: pronóstico y mantenimiento por combinación</h3>
  <table>
    <tr><th>Estadio</th><th>Grado A (lento &lt;3%/año)</th><th>Grado B (moderado 3-20%/año)</th><th>Grado C (rápido &gt;20%/año)</th></tr>
    <tr><td><strong>I</strong> — Incipiente</td><td>Excelente, &gt;95% · RAR solo · mant. anual</td><td>Bueno, 85-90% · RAR + monitoreo · mant. 6m</td><td>Raro/alerta, aproximadamente 70% · RAR + antibióticos · mant. 3-4m</td></tr>
    <tr><td><strong>II</strong> — Moderada</td><td>Excelente, 90-95% · RAR solo probable · mant. 6-12m</td><td>Bueno, 80-85% · RAR + cirugía selectiva · mant. 4m</td><td>Moderado, 60-70% · RAR + antibióticos + cirugía · mant. 3-4m</td></tr>
    <tr><td><strong>III</strong> — Severa</td><td>Bueno, 85-90% · Cirugía típica + GTR/injertos · mant. 3-4m</td><td>Moderado, 60-75% · Cirugía + antibióticos · mant. 3m</td><td>Pobre, 40-60% · Cirugía + antibióticos, pérdida esperada · mant. 4-6 sem</td></tr>
    <tr><td><strong>IV</strong> — Avanzada</td><td>Moderado, 60-70% · Preservación selectiva · mant. 3-4m</td><td>Pobre, 40-50% · Extracción probable · mant. 6-8 sem</td><td>Muy pobre, 20-40% · Extracción muy probable · mant. 8-12 sem</td></tr>
  </table>
  <p style="font-size:0.9rem;color:var(--text-light);">Estadio I con Grado C y Estadio IV con Grado A son combinaciones poco comunes — la primera es una alerta diagnóstica (poco daño, alta velocidad); la segunda representa daño antiguo ya estabilizado.</p>

  <div class="definition-box">
    <p><strong>Nota metodológica:</strong> Tonetti et al. (2018) y Kornman et al. (2020) no publican una tabla con un porcentaje de pronóstico exacto para cada una de las 12 combinaciones Estadio×Grado — Kornman da rangos amplios por Grado (A: &gt;95% de éxito · B: 60-85% · C: 20-60%). Los valores específicos de esta matriz son una interpolación clínica dentro de esos rangos, pensada para dar intuición práctica, no una cifra tomada directamente de un paper. En un paciente real, el pronóstico individual depende de muchas variables que Estadio/Grado no capturan por sí solos: cumplimiento, comorbilidades, anatomía específica, acceso a tratamiento.</p>
  </div>

  <div class="decision-tree">
    <h3>🧭 Por qué la combinación importa más que cada eje por separado</h3>
    <ul>
      <li>Dos pacientes con el <strong>mismo Estadio II</strong> pueden tener planes totalmente distintos:
        <ul>
          <li>Grado A → <span class="outcome">RAR solo, mantenimiento anual</span></li>
          <li>Grado C → <span class="outcome">RAR + antibióticos + cirugía, mantenimiento cada 6-8 semanas</span></li>
        </ul>
      </li>
      <li>Dos pacientes con el <strong>mismo Grado B</strong> pueden tener pronósticos muy distintos según el Estadio:
        <ul>
          <li>Estadio I → <span class="outcome">85-90% de remisión</span></li>
          <li>Estadio IV → <span class="outcome">40-50% de preservación</span></li>
        </ul>
      </li>
    </ul>
  </div>

  <p>En esta clasificación vamos a recorrer las 4 filas de la matriz (Estadio I a IV), cada una con sus 2-3 combinaciones de Grado, características clínicas diferenciadoras, pronóstico e implicación terapéutica — con casos clínicos reales en cada combinación.</p>

  <div class="reference">
    📚 Basado en: Tonetti et al. (2018), Kornman et al. (2020), Caton et al. (2018)
  </div>
</div>`,
  },
  {
    lesson_number: 2,
    order_index: 2,
    title: 'Estadio I: de la alerta incipiente a la vigilancia',
    content_html: `<div class="lesson-container">
  <h2>🌱 Periodontitis incipiente: tres velocidades muy distintas</h2>
  <p>El Estadio I agrupa a pacientes con CAL de 1-2mm y RBL &lt;15% — pero la velocidad de progresión (Grado) separa a quien no necesita más que higiene de quien está en el inicio de una enfermedad agresiva.</p>

  <h3>Estadio I, Grado A — excelente pronóstico</h3>
  <table>
    <tr><th>Hallazgo</th><th>Valor típico</th></tr>
    <tr><td>CAL</td><td>1-2mm, usualmente localizada (2-3 dientes)</td></tr>
    <tr><td>PPS</td><td>4-5mm</td></tr>
    <tr><td>RBL</td><td>&lt;15%, patrón horizontal</td></tr>
    <tr><td>Furcación / movilidad</td><td>Grado 0 / Grado 0</td></tr>
  </table>
  <p><strong>Interpretación:</strong> pequeña pérdida periodontal con progresión muy lenta (&lt;3%/año). Pronóstico &gt;95%, recurrencia &lt;5%. <strong>Plan:</strong> RAR 1-2 sesiones, sin antibióticos, mantenimiento anual.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — descubrimiento incidental en estudiante</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 24a, examen de rutina: PPS 4-5mm en #11, CAL 1-2mm, BOP solo en ese diente, radiografía con lámina dura clara. <strong>Diagnóstico:</strong> Estadio I, Grado A. RAR suave + educación en uso de hilo dental; a las 8 semanas: PPS 3mm, sin BOP, remisión. Mantenimiento anual.</p>
      </details>
    </div>
  </div>

  <h3>Estadio I, Grado B — progresión moderada en estadio temprano</h3>
  <p>Mismo CAL/RBL que Grado A, pero con evidencia de progresión aproximadamente 3-8%/año (radiografías comparativas) o modificadores presentes: edad joven, tabaquismo leve-moderado, diabetes moderada (HbA1c 7-8%), Pg+ moderada. Pronóstico 80-90%. <strong>Plan:</strong> RAR 2-3 sesiones, antibióticos solo si Pg+ documentada o PPS residual esperado &gt;5mm, mantenimiento cada 3-4 meses.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — joven fumador con periodontitis de inicio temprano</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 28a, fumador 7 cig/día. CAL 2mm en #16, #26, #36; radiografía previa (18 meses) muestra progresión aproximadamente 2% anual (frontera B); PCR Pg+ 20%. <strong>Diagnóstico:</strong> Estadio I, Grado B (edad joven + tabaquismo + Pg+). Plan: RAR + consejería tabaco; monitoreo cada 4 meses × 1 año. Si deja el cigarrillo, pronóstico mejora a Grado A.</p>
      </details>
    </div>
  </div>

  <h3>Estadio I, Grado C — ALERTA DIAGNÓSTICA</h3>
  <p>Poco daño visible, pero velocidad de Grado C (&gt;20%/año). <strong>Implica que el paciente progresará de Estadio I a III en 3-5 años si no se trata agresivamente.</strong> Causas típicas: periodontitis agresiva clásica en joven (Pg+++, Tf+++, Td+++), susceptibilidad genética severa, diabetes tipo 1 descontrolada, defectos inmunológicos, estrés psicosocial severo.</p>
  <div class="key-principle">
    <h3>🎯 Por qué es una alerta</h3>
    <p>Sin intervención, un Estadio I Grado C se convierte en Estadio III-IV en 3-5 años — el daño actual es pequeño, pero el riesgo futuro es altísimo. Pronóstico incluso con terapia intensiva: 70-80% de estabilización; pérdida esperada de 1-3 dientes/década pese al tratamiento.</p>
  </div>
  <p><strong>Plan agresivo:</strong> RAR exhaustivo 3-4 sesiones + análisis microbiológico crítico, azitromicina 500mg TID × 4 semanas, clorhexidina 4-6 semanas, evaluación inmunológica, re-evaluación en 2-4 semanas, mantenimiento cada 6-8 semanas indefinidamente.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — periodontitis agresiva clásica en joven</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 22a, "dientes se están moviendo, sangrado espontáneo hace 6 meses". CAL 2mm máxima en molares (#16, #26, #36, #46); RBL &lt;10%; movilidad Grado 1 incipiente; PCR Pg+++Tf+++Td++; antecedente familiar (padre perdió molares en 20s). <strong>Diagnóstico:</strong> Estadio I, Grado C — poco daño pero microbiota severa + edad joven + movilidad incipiente. Plan: RAR molares + azitromicina + clorhexidina + evaluación psicológica; monitoreo cada 6-8 semanas, radiografía a 3 meses.</p>
      </details>
    </div>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti et al. 2018; Kornman et al. 2020
  </div>
</div>`,
  },
  {
    lesson_number: 3,
    order_index: 3,
    title: 'Estadio II: periodontitis moderada, tres velocidades',
    content_html: `<div class="lesson-container">
  <h2>⚖️ Daño moderado, pronóstico muy variable</h2>
  <p>Estadio II (CAL 3-4mm, RBL 15-33%) es la combinación más frecuente en consulta. El Grado determina si el RAR solo es suficiente o si el paciente necesita cirugía y farmacoterapia adyuvante.</p>

  <h3>Estadio II, Grado A — excelente pronóstico</h3>
  <p>PPS 5-6mm, BOP &lt;30% de sitios, furcación 0-1, sin comorbilidades relevantes o bien controladas. Remisión esperada 90-95%, recurrencia &lt;5%. <strong>Plan:</strong> RAR 1-2 sesiones puede ser suficiente; cirugía de acceso solo si PPS residual &gt;5mm; mantenimiento anual.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — mujer adulta sin comorbilidades</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 52a, no fuma, sin diabetes. CAL 3-4mm generalizado posterior, RBL 25%; radiografía 4 años previa RBL 20% → progresión aproximadamente 1.25%/año = Grado A. RAR 2 sesiones + clorhexidina; resultado: PPS 3-4mm, sin BOP. Mantenimiento anual, radiografías cada 5 años. Prognosis: "curada" con higiene.</p>
      </details>
    </div>
  </div>

  <h3>Estadio II, Grado B — buen pronóstico, requiere supervisión</h3>
  <p>PPS 5-6mm con algunos sitios &gt;6mm, BOP 20-40%, progresión documentada 3-8%/año. Causas: tabaquismo leve-moderado, diabetes moderada (HbA1c 7-8%), antecedente familiar, higiene deficiente. Remisión 80-85%, necesidad de cirugía aproximadamente 50% de los casos. <strong>Plan:</strong> RAR 2-3 sesiones, minociclina local (Arestin) opcional en sitios &gt;5mm, mantenimiento cada 3-4 meses.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — fumador leve con diabetes moderada</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 48a, fuma 8 cig/día, diabetes HbA1c 7.6%. CAL 3-4mm; RBL 26% (progresión aproximadamente 4%/año). <strong>Diagnóstico:</strong> Estadio II, Grado B. RAR 3 sesiones + Arestin + consejería tabaco + referencia endocrinólogo. Cirugía de acceso si persiste PPS ≥5mm tras 3 meses. Mantenimiento cada 4 meses.</p>
      </details>
    </div>
  </div>

  <h3>Estadio II, Grado C — moderadamente severa, terapia agresiva</h3>
  <p>PPS 6-7mm, BOP generalizado 30-60%, progresión &gt;20%/año, a menudo en menores de 40 años. Causas: tabaquismo fuerte (&gt;15 cig/día), diabetes descontrolada (HbA1c &gt;8.5%), microbiología severa, edad joven con Estadio II. Remisión solo 60-70%; pérdida esperada 2-4 dientes/década. <strong>Urgencia alta:</strong> retraso significa Estadio III en 2-3 años.</p>
  <div class="decision-tree">
    <h3>🧭 Plan intensivo</h3>
    <ul>
      <li>RAR exhaustivo 3-4 sesiones + microbiología → <span class="outcome">crítico para guiar antibiótico</span></li>
      <li>Azitromicina 500mg TID × 4 semanas + Arestin en sitios ≥5mm</li>
      <li>Modificación urgente de factores: cesación tabaco, referencia endocrinólogo, referencia psicológica si aplica</li>
      <li>Re-evaluación en 4 semanas (más cercano que Grado A/B)</li>
      <li>Cirugía de acceso probable + GTR si defectos regenerables</li>
    </ul>
  </div>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — fumador fuerte con diabetes</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 42a, fuma 22 cig/día, HbA1c 9.1%. CAL 3-4mm generalizado; RBL 28% (progresión aproximadamente 8%/año, clínicamente Grado C por severidad de modificadores). <strong>Diagnóstico:</strong> Estadio II, Grado C. Plan: RAR 4 sesiones + azitromicina + Arestin; consejería intensiva de tabaco; referencia endocrinológica urgente. Prognosis: fair (60-70%) si ambos modificadores mejoran; pobre si continúa fumando/DM descontrolada.</p>
      </details>
    </div>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti et al. 2018; Kornman et al. 2020
  </div>
</div>`,
  },
  {
    lesson_number: 4,
    order_index: 4,
    title: 'Estadio III: severidad establecida, pronóstico bifurcado',
    content_html: `<div class="lesson-container">
  <h2>🌳 Daño severo — pero el pronóstico depende enteramente del Grado</h2>
  <p>Estadio III (CAL ≥5mm, RBL 33-50%, furcación Grado 2) siempre requiere cirugía. Lo que cambia dramáticamente entre Grado A y C es cuánto de esa cirugía puede tener éxito.</p>

  <h3>Estadio III, Grado A — bueno, aún en estadio severo</h3>
  <p>Destrucción antigua, NO activa actualmente. Perfil típico: no fuma o ex-fumador de larga data, sin diabetes o bien controlada, sin antecedente familiar, usualmente &gt;45 años. Remisión con terapia 85-90%, preservación de dientes &gt;95% en área tratada. <strong>Plan:</strong> RAR 2-3 sesiones sin antibióticos, luego cirugía de acceso + GTR probable (regeneración esperada 30-40%), mantenimiento cada 3-4 meses.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — ex-fumador bien adherente</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 62a, ex-fumador hace 15 años, sin diabetes. CAL 5-6mm, RBL 40%, defectos angulares 1-2 paredes en molares; radiografía 5 años previa RBL 37% → progresión aproximadamente 0.6%/año = Grado A. <strong>Diagnóstico:</strong> Estadio III, Grado A. RAR + cirugía de acceso + GTR/aloinjerto. Prognosis excelente (88-90%); mantenimiento cada 4 meses × 2 años, luego 6-12 meses.</p>
      </details>
    </div>
  </div>

  <h3>Estadio III, Grado B — moderado, balance entre control y supervivencia</h3>
  <p>CAL 5-6mm generalizado, PPS 7-9mm, progresión documentada 3-12%/año. Causas: tabaquismo leve-moderado, diabetes moderada, antecedente familiar fuerte. Remisión 60-75%, regeneración esperada solo 20-30%. <strong>Plan:</strong> RAR 3-4 sesiones + microbiología, azitromicina considerada, cirugía necesaria (acceso + GTR recomendada), re-evaluación en 4-6 semanas, mantenimiento cada 3 meses.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — diabética con adherencia excelente</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 52a, HbA1c 8.2%, muy adherente. CAL 6mm, PPS 8-9mm, RBL 46%; radiografía 3 años previa RBL 38% → progresión aproximadamente 2.7%/año (frontera A/B, pero clínicamente Grado B por HbA1c elevada). Plan: RAR + referencia endocrinológica urgente, posible azitromicina, cirugía + GTR. Si HbA1c mejora a &lt;7%, prognosis mejora hacia Grado A (65-70% → mejor).</p>
      </details>
    </div>
  </div>

  <h3>Estadio III, Grado C — pobre pronóstico, máxima agresividad necesaria</h3>
  <p>CAL 5-8mm, PPS 8-10mm, furcación Grado 2-3, movilidad progresiva, posible supuración. Causas: tabaquismo fuerte, diabetes descontrolada (especialmente tipo 1), microbiología severa (Pg+++Tf+++Td++), defecto inmunológico. Remisión solo 40-60%; pérdida esperada 2-5 dientes/década; urgencia crítica.</p>
  <div class="decision-tree">
    <h3>🧭 Plan de máxima intensidad</h3>
    <ul>
      <li>RAR exhaustivo 4-5 sesiones + microbiología crítica</li>
      <li>Azitromicina 500mg TID × 4-6 semanas (o amoxicilina + ácido clavulánico) + Arestin en todos los sitios ≥5mm</li>
      <li>Modificación urgente: cesación tabaco, referencia endocrinológica urgente, evaluación de VIH si indicado</li>
      <li>Re-evaluación en 2-4 semanas → <span class="outcome">vigilancia agresiva</span></li>
      <li>Cirugía extensiva: acceso + GTR + injertos; extracción selectiva de dientes con Grado 3 furcación/movilidad</li>
    </ul>
  </div>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — fumador fuerte + diabetes severa</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 48a, fuma 25 cig/día, HbA1c 9.8% sin tratamiento regular. CAL 6-8mm, PPS 8-10mm, furcación Grado 2-3; RBL 48% (progresión aproximadamente 15%/año, clínicamente Grado C). Plan: RAR 4 sesiones + azitromicina + Arestin; referencia endocrinológica urgente; cirugía + posible extracción selectiva de molares Grado 3. Prognosis pobre (45-55%): "necesitas dejar el cigarrillo y controlar la diabetes, o perderás varios dientes".</p>
      </details>
    </div>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti et al. 2018; Kornman et al. 2020
  </div>
</div>`,
  },
  {
    lesson_number: 5,
    order_index: 5,
    title: 'Estadio IV: periodontitis avanzada y decisiones de conservación',
    content_html: `<div class="lesson-container">
  <h2>🚨 Cuando la pregunta ya no es "cómo tratar" sino "qué preservar"</h2>
  <p>Estadio IV implica pérdida dentaria atribuible a periodontitis, CAL ≥5mm generalizado, RBL &gt;50%, furcación Grado 3 y movilidad Grado 2-3. Estadio IV con Grado A es extremadamente raro (destrucción extensa pero antigua, sin actividad) — en la práctica, casi todos los casos son Grado B o C.</p>

  <h3>Estadio IV, Grado B — manejo multidisciplinario</h3>
  <p>Destrucción avanzada pero lentamente progresiva (3-12%/año). Perfil típico: modificadores ahora controlados (diabetes bien tratada, ex-fumador de larga data) o un caso que ya "falló" terapia previa pero se estabilizó tras cambios recientes. Preservación esperada 60-70%.</p>
  <div class="evidence-cards">
    <div class="card">
      <h3>Opción A — preservación selectiva</h3>
      <p>RAR exhaustivo, extracción de dientes con pronóstico definitivamente pobre (furcación Grado 3 + movilidad Grado 3), cirugía conservadora en dientes preservables, rehabilitación con implantes/puentes en espacios extraídos.</p>
    </div>
    <div class="card">
      <h3>Opción B — extracción selectiva más amplia</h3>
      <p>Umbrales más bajos para extracción; misma estructura que la Opción A pero priorizando previsibilidad sobre conservación.</p>
    </div>
  </div>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — ex-fumador bien adherente</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 65a, ex-fumador hace 12 años, HbA1c 6.9%. CAL 6-8mm, PPS 9-11mm, furcación Grado 3 en molares, movilidad Grado 2; ya perdió 2 dientes (trauma y periodontitis). RBL 60%; progresión aproximadamente 2%/año = Grado B. <strong>Plan (Opción A):</strong> RAR exhaustivo → extracción selectiva del diente con furcación Grado 3 + movilidad Grado 2 → preservación de caninos/premolares/algunos molares con cirugía de acceso → implantes tras 6-12 meses de cicatrización. Mantenimiento cada 4-6 meses. Prognosis moderada (65-70%).</p>
      </details>
    </div>
  </div>

  <h3>Estadio IV, Grado C — crisis periodontal</h3>
  <p>Progresión &gt;20%/año sobre daño ya avanzado. Múltiples pérdidas dentarias recientes (2-5 dientes en 1-2 años), furcación Grado 3 bilateral, movilidad Grado 2-3, supuración frecuente. <strong>Decisiones deben tomarse en días, no semanas.</strong> Preservación esperada solo 20-40%.</p>
  <div class="key-principle">
    <h3>🎯 Decisión crítica</h3>
    <p>El umbral para extracción es más bajo en Grado C que en cualquier otro escenario: molares con furcación Grado 3 + movilidad Grado 2-3, cualquier diente con movilidad Grado 3, y dientes anteriores con movilidad Grado 2 + CAL &gt;8mm generalmente se consideran "no salvables". La rehabilitación (implantes/prótesis) se planifica en paralelo, no después.</p>
  </div>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — fumador fuerte + diabetes descontrolada</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 54a, fuma 28 cig/día, HbA1c 9.8% no adherente a medicación. CAL 7-8mm, PPS 10-12mm, furcación Grado 3 bilateral, movilidad Grado 2-3; perdió 4 dientes en los últimos 18 meses. RBL 70% (progresión aproximadamente 20%/año) = Grado C. <strong>Plan:</strong> consulta multidisciplinaria (periodoncia + prostodoncia); extracción de molares con Grado 3 furcación/movilidad; preservación intentada en anteriores (mejor pronóstico incluso en Grado C); RAR intensivo + azitromicina 6 semanas; referencia endocrinológica y psicológica urgentes; cicatrización 6 meses antes de implantes, condicionada a dejar el tabaco. Prognosis muy pobre (25-35%) sin cambio de modificadores.</p>
      </details>
    </div>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti et al. 2018; Kornman et al. 2020
  </div>
</div>`,
  },
  {
    lesson_number: 6,
    order_index: 6,
    title: 'El algoritmo de decisión terapéutica completo',
    content_html: `<div class="lesson-container">
  <h2>🗺️ De la clasificación al plan, sin adivinar</h2>
  <p>Con Estadio y Grado compilados y los modificadores identificados, el plan de tratamiento se vuelve un árbol de decisión reproducible — no una "mejor adivinanza" clínica.</p>

  <div class="decision-tree">
    <h3>🧭 Estadio I</h3>
    <ul>
      <li><strong>Grado A:</strong> RAR solo → clorhexidina 2 sem → sin cirugía → re-eval 6-8 sem → <span class="outcome">mantenimiento anual</span></li>
      <li><strong>Grado B:</strong> RAR 2 sesiones → clorhexidina 2-4 sem → sin antibióticos de rutina → consejería tabaco → <span class="outcome">mantenimiento 3-4 meses</span></li>
      <li><strong>Grado C:</strong> RAR 3-4 sesiones → azitromicina 4 sem + clorhexidina 4-6 sem → cirugía posible si PPS &gt;5mm → re-eval 2-4 sem (cercano) → modificadores intensivos → <span class="outcome">mantenimiento 6-8 semanas indefinido</span></li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 Estadio II</h3>
    <ul>
      <li><strong>Grado A:</strong> RAR 1-2 sesiones → clorhexidina 2 sem → cirugía opcional (solo si PPS &gt;5mm en &lt;20% sitios) → <span class="outcome">mantenimiento 6-12 meses</span></li>
      <li><strong>Grado B:</strong> RAR 2-3 sesiones → Arestin local posible → antibióticos si PPS extenso &gt;5mm → cirugía de acceso probable → <span class="outcome">mantenimiento 3-4 meses × 1 año</span></li>
      <li><strong>Grado C:</strong> RAR 3-4 sesiones exhaustivo → azitromicina 4 sem + Arestin + clorhexidina 4-6 sem → microbiología para guiar antibiótico → cirugía + posible GTR → re-eval 4-6 sem → <span class="outcome">mantenimiento 3-4 meses indefinido</span></li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 Estadio III</h3>
    <ul>
      <li><strong>Grado A:</strong> RAR 2-3 sesiones → cirugía típica (acceso + GTR probable) → aloinjerto considerado → regeneración esperada 30-40% → <span class="outcome">mantenimiento 3-4 meses × 1-2 años, luego 6-12 meses</span></li>
      <li><strong>Grado B:</strong> RAR 3-4 sesiones → azitromicina considerada + Arestin → cirugía necesaria (acceso + GTR recomendada) → regeneración esperada 20-30% → <span class="outcome">mantenimiento 3 meses × 1-2 años</span></li>
      <li><strong>Grado C:</strong> RAR 4-5 sesiones exhaustivo → azitromicina 4-6 sem + Arestin en todos sitios ≥5mm → cirugía extensiva + posible extracción selectiva → regeneración esperada 15-20% → re-eval 2-4 sem (cercanísimo) → <span class="outcome">mantenimiento 4-6 semanas indefinido</span></li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 Estadio IV</h3>
    <ul>
      <li><strong>Grado B:</strong> RAR exhaustivo → decisión preservación selectiva vs. extracción inmediata → extracción de molares Grado 3 furcación + movilidad Grado 2-3 → rehabilitación con implantes (esperar 6-12 meses) → <span class="outcome">mantenimiento 4-6 meses × 2 años, luego 6-12 meses</span></li>
      <li><strong>Grado C:</strong> CRISIS — decisión urgente entre extracción selectiva amplia (Opción A) o preservación mínima (Opción B) → extracciones generosas → azitromicina 6 sem + Arestin + clorhexidina 6-8 sem → cesación de tabaco como PRERREQUISITO para implantes → <span class="outcome">mantenimiento 6-8 semanas indefinido</span></li>
    </ul>
  </div>

  <div class="key-principle">
    <h3>🎯 Patrón general del algoritmo</h3>
    <p>A medida que el Grado sube de A → C (dentro de un mismo Estadio): más sesiones de RAR, aparece la indicación de antibióticos sistémicos, la re-evaluación se acerca (de 6-8 semanas a 2-4 semanas), y el mantenimiento se intensifica (de anual a cada 4-8 semanas indefinidamente).</p>
  </div>

  <div class="reference">
    📚 Basado en: algoritmo terapéutico Tonetti et al. 2018; Kornman et al. 2020
  </div>
</div>`,
  },
  {
    lesson_number: 7,
    order_index: 7,
    title: 'Reclasificación: cuando el Grado cambia con el tratamiento',
    content_html: `<div class="lesson-container">
  <h2>🔄 El pronóstico no está escrito en piedra</h2>
  <p>El Grado no es una etiqueta fija: cambia con la evidencia nueva (radiografías comparativas) y con la intervención en los modificadores. El Estadio, en cambio, <strong>nunca mejora</strong>.</p>

  <div class="cases">
    <div class="case-card">
      <h3>Caso integrado A — el cambio de Estadio obliga a revisar el plan</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p><strong>Presentación inicial:</strong> Mujer 42a, fumadora 12 cig/día. CAL 2-3mm, RBL 18%, PPS 4-5mm. Diagnóstico: <strong>Estadio I, Grado B</strong>. Plan inicial: RAR 2 sesiones, monitoreo cada 4 meses.</p>
        <p><strong>Seguimiento a 8 meses:</strong> radiografía muestra RBL 30% (progresión aproximadamente 9%/año en solo 8 meses); CAL ahora 4-5mm; PPS 6-7mm posterior. <strong>Reclasificación: Estadio II, Grado C</strong> — cambio dramático.</p>
        <p><strong>Investigación:</strong> cambio de trabajo → estrés severo → depresión desarrollada, sin diagnosticar.</p>
        <p><strong>Nuevo plan:</strong> RAR repetida 3-4 sesiones + azitromicina 4 semanas, referencia a psicología/psiquiatría, consejería de tabaco intensiva.</p>
        <p><strong>Lección:</strong> el Grado puede cambiar — la comparación radiográfica y la reclasificación periódica son críticas, especialmente en pacientes con riesgo de Grado C.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso integrado B — intervenir el modificador cambia el pronóstico</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p><strong>Presentación:</strong> Varón 48a, fumador 18 cig/día, HbA1c 8.6%. CAL 3-4mm, RBL 28%, PPS 5-6mm. Diagnóstico: <strong>Estadio II, Grado C</strong> (tabaquismo severo + diabetes descontrolada, a pesar del Estadio moderado). Pronóstico inicial: 60-70%.</p>
        <p><strong>Plan inicial:</strong> RAR + azitromicina + consejería intensiva de tabaco + referencia endocrinológica.</p>
        <p><strong>A los 6 meses:</strong> radiografía estable (sin más progresión); PPS 3-4mm (muy mejorado). Paciente dejó el cigarrillo hace 3 meses; HbA1c ahora 7.2%.</p>
        <p><strong>Reclasificación: Estadio II, Grado B</strong> — el Estadio no cambia (el daño ya ocurrido es irreversible), pero el Grado sí mejora.</p>
        <p><strong>Nuevo plan:</strong> mantenimiento cada 3-4 meses (en vez de 6-8 semanas); pronóstico mejorado a 80-85%.</p>
        <p><strong>Lección:</strong> intervenir los modificadores cambia el Grado y el pronóstico — la "reclasificación" post-terapia es una práctica clínica válida y recomendada.</p>
      </details>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 La regla que nunca cambia</h3>
    <p><strong>El Estadio no puede mejorar.</strong> CAL 5mm y RBL 40% definen Estadio III por definición — el hueso no regenera espontáneamente. Después de un RAR exitoso, el PPS puede bajar de 5mm a 3-4mm (el tejido blando cicatriza), pero el CAL permanece en 5mm y el RBL en 40%: sigue siendo Estadio III. Lo que mejora es el <strong>Grado de actividad</strong>, no la severidad acumulada.</p>
  </div>

  <div class="definition-box">
    <p><strong>Otra aplicación de la misma regla:</strong> un paciente que perdió dientes por periodontitis años atrás y hoy está perfectamente estable, sin movilidad severa, <strong>sigue siendo Estadio IV</strong> — porque la clasificación refleja la historia acumulativa, no solo el estado actual.</p>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti et al. 2018; práctica de reclasificación Kornman et al. 2020
  </div>
</div>`,
  },
  {
    lesson_number: 8,
    order_index: 8,
    title: 'Preguntas frecuentes y síntesis final',
    content_html: `<div class="lesson-container">
  <h2>❓ Las dudas más comunes al aplicar la matriz</h2>

  <div class="cases">
    <div class="case-card">
      <h3>¿Puede un paciente ser Estadio III, Grado A? ¿Destrucción severa pero lenta?</h3>
      <details>
        <summary>Ver respuesta</summary>
        <p><strong>Sí.</strong> Poco común, pero posible. Ejemplo: paciente de 70 años, ex-fumador hace 20 años, sin comorbilidades, CAL 5-6mm + RBL 38%; radiografía de hace 5 años muestra RBL 35% → progresión aproximadamente 0.6%/año = Grado A. El daño es "antiguo" (acumulado durante décadas) pero no está progresando actualmente. La terapia sigue siendo necesaria (CAL de 5-6mm requiere manejo de Estadio III), pero el pronóstico es excelente porque la velocidad es muy lenta.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>¿Es posible Estadio I, Grado C? ¿Poco daño pero destruyendo rápido?</h3>
      <details>
        <summary>Ver respuesta</summary>
        <p><strong>Sí — es una alerta diagnóstica.</strong> Ejemplo: joven de 26 años con Pg+++Tf+++Td++ descubre CAL 1-2mm + RBL &lt;15%. Radiografía de hace 1 año: RBL 0%; ahora RBL 12% → progresión aproximadamente 12%/año = Grado C. A pesar de la pequeña destrucción visible, la velocidad de progresión es rápida — sin intervención intensiva, será Estadio III en 3 años. Manejo: RAR intensivo + antibióticos + monitoreo cada 6-8 semanas; modificadores críticos.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Si el paciente responde maravillosamente al RAR, ¿puede "mejorar" de Estadio?</h3>
      <details>
        <summary>Ver respuesta</summary>
        <p><strong>No.</strong> El Estadio no puede subir hacia una categoría menor — la destrucción que ocurrió es irreversible. Confusión común: pacientes (y algunos clínicos) piensan "si se cura, es menor Estadio". No: el daño ya está hecho; lo que cambia con la terapia es el <strong>Grado de actividad</strong>, no la severidad acumulada (ver la lección anterior sobre reclasificación).</p>
      </details>
    </div>

    <div class="case-card">
      <h3>¿Cómo comunico Estadio/Grado a un paciente de forma que entienda?</h3>
      <details>
        <summary>Ver respuesta</summary>
        <p><strong>No decir:</strong> "Tienes Estadio III, Grado B." <strong>Sí decir:</strong> "Tu enfermedad de encías es severa. El hueso ha bajado bastante (mostrar radiografía comparativa). Pero buena noticia: está progresando lentamente. Con terapia intensiva y mejor control del tabaquismo, puedes preservar tus dientes."</p>
        <p>Estructura recomendada: ¿qué tiene? (descriptivo) → ¿qué tan avanzado? (% óseo perdido) → ¿qué tan rápido empeora? (Grado) → ¿qué lo causó? → ¿qué podemos hacer? → ¿qué necesitas hacer vos?</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Si un paciente con Estadio IV tiene movilidad mínima, ¿sigue siendo Estadio IV?</h3>
      <details>
        <summary>Ver respuesta</summary>
        <p><strong>Sí.</strong> Estadio IV se define por pérdida dentaria atribuible a periodontitis, no necesariamente por movilidad severa. Un paciente que perdió dientes hace años por periodontitis, con dientes restantes estables (CAL 5-6mm, RBL 45%, sin movilidad Grado 3), continúa siendo Estadio IV porque ha perdido múltiples dientes por la enfermedad — incluso con estabilización post-terapia.</p>
      </details>
    </div>
  </div>

  <h3>Síntesis final: la matriz como herramienta pronóstica</h3>
  <div class="decision-tree">
    <ul>
      <li><strong>Diagnóstico</strong> (qué tiene + cómo progresa): Estadio = severidad, Grado = velocidad
        <ul>
          <li>→ <span class="outcome">Pronóstico</span> (cuál es el resultado esperado): % de remisión, dientes/década perdidos, potencial de regeneración
            <ul>
              <li>→ <span class="outcome">Plan de terapia</span> (qué intervención): RAR solo vs. + antibióticos, cirugía vs. manejo conservador, preservación vs. extracción
                <ul>
                  <li>→ <span class="outcome">Mantenimiento</span> (cuán frecuente): de anual a cada 4-6 semanas indefinidamente</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="key-principle">
    <h3>🎯 El valor de la matriz</h3>
    <p>Sin Estadio/Grado, el clínico hace "mejor adivinanza" → variabilidad tremenda entre profesionales. Con Estadio/Grado, la decisión es estructurada, reproducible y el pronóstico es comunicable — al paciente, al equipo, y entre especialistas que retoman el caso.</p>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti et al. 2018; Kornman et al. 2020; Caton et al. 2018 (AAP/EFP World Workshop)
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
    explanation: 'La razón pérdida ósea/edad = % RBL ÷ edad (años). Ejemplo: 36% RBL a los 24 años = 36/24 = 1.5. Si es mayor a 1.0, Grado C (rápida); si está entre 0.5 y 1.0, Grado B (moderada); si es menor a 0.5, Grado A (lenta). Este valor ayuda a estimar velocidad de progresión cuando no hay radiografías previas.',
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
    explanation: 'Una pérdida ósea importante en un paciente joven (ej. 36% a los 24 años) sugiere una progresión rápida o susceptibilidad aumentada, Grado C probable. En cambio, la misma pérdida ósea en un paciente de 70 años puede representar daño acumulado durante más tiempo — podría ser Grado A (lenta acumulación). Por eso la edad ayuda a interpretar mejor la velocidad de progresión.',
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
    explanation: 'La fórmula es: RBL/edad = porcentaje de pérdida ósea / edad. 36 / 24 = 1.5. Según la clasificación: <0.5 → Grado A (lenta), 0.5-1.0 → Grado B (moderada), >1.0 → Grado C (rápida). Una razón de 1.5 sugiere Grado C, es decir, progresión rápida o alto riesgo de progresión.',
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
