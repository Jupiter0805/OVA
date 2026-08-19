// Content for Chapter 3 ("Clasificando: Estadio y Grado"), based on
// MEGA_PROMPT_CAPITULO_3_CLASIFICANDO.md. Consumed by insertChapter3.js.

export const lessons = [
  {
    lesson_number: 1,
    order_index: 1,
    title: 'La matriz Stage × Grade como herramienta pronóstica',
    content_html: `<div class="lesson-container">
  <h2>🧭 Dos preguntas, un pronóstico</h2>
  <p>El verdadero poder del sistema AAP/EFP 2018 no está en Stage o Grade por separado, sino en su <strong>combinación</strong>:</p>

  <div class="evidence-cards">
    <div class="card">
      <h3>Stage solo</h3>
      <p>Responde: "¿Qué tan destruido está?" — severidad acumulada.</p>
    </div>
    <div class="card">
      <h3>Grade solo</h3>
      <p>Responde: "¿Qué tan rápido progresa?" — velocidad de la enfermedad.</p>
    </div>
    <div class="card">
      <h3>Stage × Grade juntos</h3>
      <p>Responden: "¿Cuál es el pronóstico y qué plan de terapia recomiendo?"</p>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 Principio clave</h3>
    <p>De las 12 combinaciones posibles (4 Stages × 3 Grades), algunas son frecuentes y otras son raras o representan alertas diagnósticas — como Stage I con Grade C (poco daño, pero progresando muy rápido) o Stage IV con Grade A (mucho daño, pero ya detenido).</p>
  </div>

  <h3>La matriz completa: pronóstico y mantenimiento por combinación</h3>
  <table>
    <tr><th>Stage</th><th>Grade A (lento &lt;3%/año)</th><th>Grade B (moderado 3-20%/año)</th><th>Grade C (rápido &gt;20%/año)</th></tr>
    <tr><td><strong>I</strong> — Incipiente</td><td>Excelente, &gt;95% · SRP solo · mant. anual</td><td>Bueno, 85-90% · SRP + monitoreo · mant. 6m</td><td>Raro/alerta, ~70% · SRP + antibióticos · mant. 3-4m</td></tr>
    <tr><td><strong>II</strong> — Moderada</td><td>Excelente, 90-95% · SRP solo probable · mant. 6-12m</td><td>Bueno, 80-85% · SRP + cirugía selectiva · mant. 4m</td><td>Moderado, 60-70% · SRP + antibióticos + cirugía · mant. 3-4m</td></tr>
    <tr><td><strong>III</strong> — Severa</td><td>Bueno, 85-90% · Cirugía típica + GTR/injertos · mant. 3-4m</td><td>Moderado, 60-75% · Cirugía + antibióticos · mant. 3m</td><td>Pobre, 40-60% · Cirugía + antibióticos, pérdida esperada · mant. 4-6 sem</td></tr>
    <tr><td><strong>IV</strong> — Avanzada</td><td>Moderado, 60-70% · Preservación selectiva · mant. 3-4m</td><td>Pobre, 40-50% · Extracción probable · mant. 6-8 sem</td><td>Muy pobre, 20-40% · Extracción muy probable · mant. 8-12 sem</td></tr>
  </table>
  <p style="font-size:0.9rem;color:var(--text-light);">Stage I con Grade C y Stage IV con Grade A son combinaciones poco comunes — la primera es una alerta diagnóstica (poco daño, alta velocidad); la segunda representa daño antiguo ya estabilizado.</p>

  <div class="decision-tree">
    <h3>🧭 Por qué la combinación importa más que cada eje por separado</h3>
    <ul>
      <li>Dos pacientes con el <strong>mismo Stage II</strong> pueden tener planes totalmente distintos:
        <ul>
          <li>Grade A → <span class="outcome">SRP solo, mantenimiento anual</span></li>
          <li>Grade C → <span class="outcome">SRP + antibióticos + cirugía, mantenimiento cada 6-8 semanas</span></li>
        </ul>
      </li>
      <li>Dos pacientes con el <strong>mismo Grade B</strong> pueden tener pronósticos muy distintos según el Stage:
        <ul>
          <li>Stage I → <span class="outcome">85-90% de remisión</span></li>
          <li>Stage IV → <span class="outcome">40-50% de preservación</span></li>
        </ul>
      </li>
    </ul>
  </div>

  <p>En esta clasificación vamos a recorrer las 4 filas de la matriz (Stage I a IV), cada una con sus 2-3 combinaciones de Grade, características clínicas diferenciadoras, pronóstico e implicación terapéutica — con casos clínicos reales en cada combinación.</p>

  <div class="reference">
    📚 Basado en: Tonetti et al. (2018), Kornman et al. (2020), Caton et al. (2018)
  </div>
</div>`,
  },
  {
    lesson_number: 2,
    order_index: 2,
    title: 'Stage I: de la alerta incipiente a la vigilancia',
    content_html: `<div class="lesson-container">
  <h2>🌱 Periodontitis incipiente: tres velocidades muy distintas</h2>
  <p>El Stage I agrupa a pacientes con CAL de 1-2mm y RBL &lt;15% — pero la velocidad de progresión (Grade) separa a quien no necesita más que higiene de quien está en el inicio de una enfermedad agresiva.</p>

  <h3>Stage I, Grade A — excelente pronóstico</h3>
  <table>
    <tr><th>Hallazgo</th><th>Valor típico</th></tr>
    <tr><td>CAL</td><td>1-2mm, usualmente localizada (2-3 dientes)</td></tr>
    <tr><td>PPD</td><td>4-5mm</td></tr>
    <tr><td>RBL</td><td>&lt;15%, patrón horizontal</td></tr>
    <tr><td>Furcación / movilidad</td><td>Grado 0 / Grado 0</td></tr>
  </table>
  <p><strong>Interpretación:</strong> pequeña pérdida periodontal con progresión muy lenta (&lt;3%/año). Pronóstico &gt;95%, recurrencia &lt;5%. <strong>Plan:</strong> SRP 1-2 sesiones, sin antibióticos, mantenimiento anual.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — descubrimiento incidental en estudiante</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 24a, examen de rutina: PPD 4-5mm en #11, CAL 1-2mm, BOP solo en ese diente, radiografía con lámina dura clara. <strong>Diagnóstico:</strong> Stage I, Grade A. SRP suave + educación en floss; a las 8 semanas: PPD 3mm, sin BOP, remisión. Mantenimiento anual.</p>
      </details>
    </div>
  </div>

  <h3>Stage I, Grade B — progresión moderada en estadio temprano</h3>
  <p>Mismo CAL/RBL que Grade A, pero con evidencia de progresión ~3-8%/año (radiografías comparativas) o modificadores presentes: edad joven, tabaquismo leve-moderado, diabetes moderada (HbA1c 7-8%), Pg+ moderada. Pronóstico 80-90%. <strong>Plan:</strong> SRP 2-3 sesiones, antibióticos solo si Pg+ documentada o PPD residual esperado &gt;5mm, mantenimiento cada 3-4 meses.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — joven fumador con periodontitis de inicio temprano</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 28a, fumador 7 cig/día. CAL 2mm en #16, #26, #36; radiografía previa (18 meses) muestra progresión ~2% anual (frontera B); PCR Pg+ 20%. <strong>Diagnóstico:</strong> Stage I, Grade B (edad joven + tabaquismo + Pg+). Plan: SRP + consejería tabaco; monitoreo cada 4 meses × 1 año. Si deja el cigarrillo, pronóstico mejora a Grade A.</p>
      </details>
    </div>
  </div>

  <h3>Stage I, Grade C — ALERTA DIAGNÓSTICA</h3>
  <p>Poco daño visible, pero velocidad de Grade C (&gt;20%/año). <strong>Implica que el paciente progresará de Stage I a III en 3-5 años si no se trata agresivamente.</strong> Causas típicas: periodontitis agresiva clásica en joven (Pg+++, Tf+++, Td+++), susceptibilidad genética severa, diabetes tipo 1 descontrolada, defectos inmunológicos, estrés psicosocial severo.</p>
  <div class="key-principle">
    <h3>🎯 Por qué es una alerta</h3>
    <p>Sin intervención, un Stage I Grade C se convierte en Stage III-IV en 3-5 años — el daño actual es pequeño, pero el riesgo futuro es altísimo. Pronóstico incluso con terapia intensiva: 70-80% de estabilización; pérdida esperada de 1-3 dientes/década pese al tratamiento.</p>
  </div>
  <p><strong>Plan agresivo:</strong> SRP exhaustivo 3-4 sesiones + análisis microbiológico crítico, azitromicina 500mg TID × 4 semanas, clorhexidina 4-6 semanas, evaluación inmunológica, re-evaluación en 2-4 semanas, mantenimiento cada 6-8 semanas indefinidamente.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — periodontitis agresiva clásica en joven</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 22a, "dientes se están moviendo, sangrado espontáneo hace 6 meses". CAL 2mm máxima en molares (#16, #26, #36, #46); RBL &lt;10%; movilidad Grado 1 incipiente; PCR Pg+++Tf+++Td++; antecedente familiar (padre perdió molares en 20s). <strong>Diagnóstico:</strong> Stage I, Grade C — poco daño pero microbiota severa + edad joven + movilidad incipiente. Plan: SRP molares + azitromicina + clorhexidina + evaluación psicológica; monitoreo cada 6-8 semanas, radiografía a 3 meses.</p>
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
    title: 'Stage II: periodontitis moderada, tres velocidades',
    content_html: `<div class="lesson-container">
  <h2>⚖️ Daño moderado, pronóstico muy variable</h2>
  <p>Stage II (CAL 3-4mm, RBL 15-33%) es la combinación más frecuente en consulta. El Grade determina si el SRP solo es suficiente o si el paciente necesita cirugía y farmacoterapia adyuvante.</p>

  <h3>Stage II, Grade A — excelente pronóstico</h3>
  <p>PPD 5-6mm, BOP &lt;30% de sitios, furcación 0-1, sin comorbilidades relevantes o bien controladas. Remisión esperada 90-95%, recurrencia &lt;5%. <strong>Plan:</strong> SRP 1-2 sesiones puede ser suficiente; cirugía de acceso solo si PPD residual &gt;5mm; mantenimiento anual.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — mujer adulta sin comorbilidades</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 52a, no fuma, sin diabetes. CAL 3-4mm generalizado posterior, RBL 25%; radiografía 4 años previa RBL 20% → progresión ~1.25%/año = Grade A. SRP 2 sesiones + clorhexidina; resultado: PPD 3-4mm, sin BOP. Mantenimiento anual, radiografías cada 5 años. Prognosis: "curada" con higiene.</p>
      </details>
    </div>
  </div>

  <h3>Stage II, Grade B — buen pronóstico, requiere supervisión</h3>
  <p>PPD 5-6mm con algunos sitios &gt;6mm, BOP 20-40%, progresión documentada 3-8%/año. Causas: tabaquismo leve-moderado, diabetes moderada (HbA1c 7-8%), antecedente familiar, higiene deficiente. Remisión 80-85%, necesidad de cirugía ~50% de los casos. <strong>Plan:</strong> SRP 2-3 sesiones, minociclina local (Arestin) opcional en sitios &gt;5mm, mantenimiento cada 3-4 meses.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — fumador leve con diabetes moderada</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 48a, fuma 8 cig/día, diabetes HbA1c 7.6%. CAL 3-4mm; RBL 26% (progresión ~4%/año). <strong>Diagnóstico:</strong> Stage II, Grade B. SRP 3 sesiones + Arestin + consejería tabaco + referencia endocrinólogo. Cirugía de acceso si persiste PPD ≥5mm tras 3 meses. Mantenimiento cada 4 meses.</p>
      </details>
    </div>
  </div>

  <h3>Stage II, Grade C — moderadamente severa, terapia agresiva</h3>
  <p>PPD 6-7mm, BOP generalizado 30-60%, progresión &gt;20%/año, a menudo en menores de 40 años. Causas: tabaquismo fuerte (&gt;15 cig/día), diabetes descontrolada (HbA1c &gt;8.5%), microbiología severa, edad joven con Stage II. Remisión solo 60-70%; pérdida esperada 2-4 dientes/década. <strong>Urgencia alta:</strong> retraso significa Stage III en 2-3 años.</p>
  <div class="decision-tree">
    <h3>🧭 Plan intensivo</h3>
    <ul>
      <li>SRP exhaustivo 3-4 sesiones + microbiología → <span class="outcome">crítico para guiar antibiótico</span></li>
      <li>Azitromicina 500mg TID × 4 semanas + Arestin en sitios ≥5mm</li>
      <li>Modificación urgente de factores: cesación tabaco, referencia endocrinólogo, referencia psicológica si aplica</li>
      <li>Re-evaluación en 4 semanas (más cercano que Grade A/B)</li>
      <li>Cirugía de acceso probable + GTR si defectos regenerables</li>
    </ul>
  </div>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — fumador fuerte con diabetes</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 42a, fuma 22 cig/día, HbA1c 9.1%. CAL 3-4mm generalizado; RBL 28% (progresión ~8%/año, clínicamente Grade C por severidad de modificadores). <strong>Diagnóstico:</strong> Stage II, Grade C. Plan: SRP 4 sesiones + azitromicina + Arestin; consejería intensiva de tabaco; referencia endocrinológica urgente. Prognosis: fair (60-70%) si ambos modificadores mejoran; pobre si continúa fumando/DM descontrolada.</p>
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
    title: 'Stage III: severidad establecida, pronóstico bifurcado',
    content_html: `<div class="lesson-container">
  <h2>🌳 Daño severo — pero el pronóstico depende enteramente del Grade</h2>
  <p>Stage III (CAL ≥5mm, RBL 33-50%, furcación Grado 2) siempre requiere cirugía. Lo que cambia dramáticamente entre Grade A y C es cuánto de esa cirugía puede tener éxito.</p>

  <h3>Stage III, Grade A — bueno, aún en stage severo</h3>
  <p>Destrucción antigua, NO activa actualmente. Perfil típico: no fuma o ex-fumador de larga data, sin diabetes o bien controlada, sin antecedente familiar, usualmente &gt;45 años. Remisión con terapia 85-90%, preservación de dientes &gt;95% en área tratada. <strong>Plan:</strong> SRP 2-3 sesiones sin antibióticos, luego cirugía de acceso + GTR probable (regeneración esperada 30-40%), mantenimiento cada 3-4 meses.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — ex-fumador bien adherente</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 62a, ex-fumador hace 15 años, sin diabetes. CAL 5-6mm, RBL 40%, defectos angulares 1-2 paredes en molares; radiografía 5 años previa RBL 37% → progresión ~0.6%/año = Grade A. <strong>Diagnóstico:</strong> Stage III, Grade A. SRP + cirugía de acceso + GTR/aloinjerto. Prognosis excelente (88-90%); mantenimiento cada 4 meses × 2 años, luego 6-12 meses.</p>
      </details>
    </div>
  </div>

  <h3>Stage III, Grade B — moderado, balance entre control y supervivencia</h3>
  <p>CAL 5-6mm generalizado, PPD 7-9mm, progresión documentada 3-12%/año. Causas: tabaquismo leve-moderado, diabetes moderada, antecedente familiar fuerte. Remisión 60-75%, regeneración esperada solo 20-30%. <strong>Plan:</strong> SRP 3-4 sesiones + microbiología, azitromicina considerada, cirugía necesaria (acceso + GTR recomendada), re-evaluación en 4-6 semanas, mantenimiento cada 3 meses.</p>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — diabética con adherencia excelente</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 52a, HbA1c 8.2%, muy adherente. CAL 6mm, PPD 8-9mm, RBL 46%; radiografía 3 años previa RBL 38% → progresión ~2.7%/año (frontera A/B, pero clínicamente Grade B por HbA1c elevada). Plan: SRP + referencia endocrinológica urgente, posible azitromicina, cirugía + GTR. Si HbA1c mejora a &lt;7%, prognosis mejora hacia Grade A (65-70% → mejor).</p>
      </details>
    </div>
  </div>

  <h3>Stage III, Grade C — pobre pronóstico, máxima agresividad necesaria</h3>
  <p>CAL 5-8mm, PPD 8-10mm, furcación Grado 2-3, movilidad progresiva, posible supuración. Causas: tabaquismo fuerte, diabetes descontrolada (especialmente tipo 1), microbiología severa (Pg+++Tf+++Td++), defecto inmunológico. Remisión solo 40-60%; pérdida esperada 2-5 dientes/década; urgencia crítica.</p>
  <div class="decision-tree">
    <h3>🧭 Plan de máxima intensidad</h3>
    <ul>
      <li>SRP exhaustivo 4-5 sesiones + microbiología crítica</li>
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
        <p>Varón 48a, fuma 25 cig/día, HbA1c 9.8% sin tratamiento regular. CAL 6-8mm, PPD 8-10mm, furcación Grado 2-3; RBL 48% (progresión ~15%/año, clínicamente Grade C). Plan: SRP 4 sesiones + azitromicina + Arestin; referencia endocrinológica urgente; cirugía + posible extracción selectiva de molares Grado 3. Prognosis pobre (45-55%): "necesitas dejar el cigarrillo y controlar la diabetes, o perderás varios dientes".</p>
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
    title: 'Stage IV: periodontitis avanzada y decisiones de conservación',
    content_html: `<div class="lesson-container">
  <h2>🚨 Cuando la pregunta ya no es "cómo tratar" sino "qué preservar"</h2>
  <p>Stage IV implica pérdida dentaria atribuible a periodontitis, CAL ≥5mm generalizado, RBL &gt;50%, furcación Grado 3 y movilidad Grado 2-3. Stage IV con Grade A es extremadamente raro (destrucción extensa pero antigua, sin actividad) — en la práctica, casi todos los casos son Grade B o C.</p>

  <h3>Stage IV, Grade B — manejo multidisciplinario</h3>
  <p>Destrucción avanzada pero lentamente progresiva (3-12%/año). Perfil típico: modificadores ahora controlados (diabetes bien tratada, ex-fumador de larga data) o un caso que ya "falló" terapia previa pero se estabilizó tras cambios recientes. Preservación esperada 60-70%.</p>
  <div class="evidence-cards">
    <div class="card">
      <h3>Opción A — preservación selectiva</h3>
      <p>SRP exhaustivo, extracción de dientes con pronóstico definitivamente pobre (furcación Grado 3 + movilidad Grado 3), cirugía conservadora en dientes preservables, rehabilitación con implantes/puentes en espacios extraídos.</p>
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
        <p>Varón 65a, ex-fumador hace 12 años, HbA1c 6.9%. CAL 6-8mm, PPD 9-11mm, furcación Grado 3 en molares, movilidad Grado 2; ya perdió 2 dientes (trauma y periodontitis). RBL 60%; progresión ~2%/año = Grade B. <strong>Plan (Opción A):</strong> SRP exhaustivo → extracción selectiva del diente con furcación Grado 3 + movilidad Grado 2 → preservación de caninos/premolares/algunos molares con cirugía de acceso → implantes tras 6-12 meses de cicatrización. Mantenimiento cada 4-6 meses. Prognosis moderada (65-70%).</p>
      </details>
    </div>
  </div>

  <h3>Stage IV, Grade C — crisis periodontal</h3>
  <p>Progresión &gt;20%/año sobre daño ya avanzado. Múltiples pérdidas dentarias recientes (2-5 dientes en 1-2 años), furcación Grado 3 bilateral, movilidad Grado 2-3, supuración frecuente. <strong>Decisiones deben tomarse en días, no semanas.</strong> Preservación esperada solo 20-40%.</p>
  <div class="key-principle">
    <h3>🎯 Decisión crítica</h3>
    <p>El umbral para extracción es más bajo en Grade C que en cualquier otro escenario: molares con furcación Grado 3 + movilidad Grado 2-3, cualquier diente con movilidad Grado 3, y dientes anteriores con movilidad Grado 2 + CAL &gt;8mm generalmente se consideran "no salvables". La rehabilitación (implantes/prótesis) se planifica en paralelo, no después.</p>
  </div>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — fumador fuerte + diabetes descontrolada</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 54a, fuma 28 cig/día, HbA1c 9.8% no adherente a medicación. CAL 7-8mm, PPD 10-12mm, furcación Grado 3 bilateral, movilidad Grado 2-3; perdió 4 dientes en los últimos 18 meses. RBL 70% (progresión ~20%/año) = Grade C. <strong>Plan:</strong> consulta multidisciplinaria (periodoncia + prostodoncia); extracción de molares con Grado 3 furcación/movilidad; preservación intentada en anteriores (mejor pronóstico incluso en Grade C); SRP intensivo + azitromicina 6 semanas; referencia endocrinológica y psicológica urgentes; cicatrización 6 meses antes de implantes, condicionada a dejar el tabaco. Prognosis muy pobre (25-35%) sin cambio de modificadores.</p>
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
  <p>Con Stage y Grade compilados y los modificadores identificados, el plan de tratamiento se vuelve un árbol de decisión reproducible — no una "mejor adivinanza" clínica.</p>

  <div class="decision-tree">
    <h3>🧭 Stage I</h3>
    <ul>
      <li><strong>Grade A:</strong> SRP solo → clorhexidina 2 sem → sin cirugía → re-eval 6-8 sem → <span class="outcome">mantenimiento anual</span></li>
      <li><strong>Grade B:</strong> SRP 2 sesiones → clorhexidina 2-4 sem → sin antibióticos de rutina → consejería tabaco → <span class="outcome">mantenimiento 3-4 meses</span></li>
      <li><strong>Grade C:</strong> SRP 3-4 sesiones → azitromicina 4 sem + clorhexidina 4-6 sem → cirugía posible si PPD &gt;5mm → re-eval 2-4 sem (cercano) → modificadores intensivos → <span class="outcome">mantenimiento 6-8 semanas indefinido</span></li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 Stage II</h3>
    <ul>
      <li><strong>Grade A:</strong> SRP 1-2 sesiones → clorhexidina 2 sem → cirugía opcional (solo si PPD &gt;5mm en &lt;20% sitios) → <span class="outcome">mantenimiento 6-12 meses</span></li>
      <li><strong>Grade B:</strong> SRP 2-3 sesiones → Arestin local posible → antibióticos si PPD extenso &gt;5mm → cirugía de acceso probable → <span class="outcome">mantenimiento 3-4 meses × 1 año</span></li>
      <li><strong>Grade C:</strong> SRP 3-4 sesiones exhaustivo → azitromicina 4 sem + Arestin + clorhexidina 4-6 sem → microbiología para guiar antibiótico → cirugía + posible GTR → re-eval 4-6 sem → <span class="outcome">mantenimiento 3-4 meses indefinido</span></li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 Stage III</h3>
    <ul>
      <li><strong>Grade A:</strong> SRP 2-3 sesiones → cirugía típica (acceso + GTR probable) → aloinjerto considerado → regeneración esperada 30-40% → <span class="outcome">mantenimiento 3-4 meses × 1-2 años, luego 6-12 meses</span></li>
      <li><strong>Grade B:</strong> SRP 3-4 sesiones → azitromicina considerada + Arestin → cirugía necesaria (acceso + GTR recomendada) → regeneración esperada 20-30% → <span class="outcome">mantenimiento 3 meses × 1-2 años</span></li>
      <li><strong>Grade C:</strong> SRP 4-5 sesiones exhaustivo → azitromicina 4-6 sem + Arestin en todos sitios ≥5mm → cirugía extensiva + posible extracción selectiva → regeneración esperada 15-20% → re-eval 2-4 sem (cercanísimo) → <span class="outcome">mantenimiento 4-6 semanas indefinido</span></li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 Stage IV</h3>
    <ul>
      <li><strong>Grade B:</strong> SRP exhaustivo → decisión preservación selectiva vs. extracción inmediata → extracción de molares Grado 3 furcación + movilidad Grado 2-3 → rehabilitación con implantes (esperar 6-12 meses) → <span class="outcome">mantenimiento 4-6 meses × 2 años, luego 6-12 meses</span></li>
      <li><strong>Grade C:</strong> CRISIS — decisión urgente entre extracción selectiva amplia (Opción A) o preservación mínima (Opción B) → extracciones generosas → azitromicina 6 sem + Arestin + clorhexidina 6-8 sem → cesación de tabaco como PRERREQUISITO para implantes → <span class="outcome">mantenimiento 6-8 semanas indefinido</span></li>
    </ul>
  </div>

  <div class="key-principle">
    <h3>🎯 Patrón general del algoritmo</h3>
    <p>A medida que el Grade sube de A → C (dentro de un mismo Stage): más sesiones de SRP, aparece la indicación de antibióticos sistémicos, la re-evaluación se acerca (de 6-8 semanas a 2-4 semanas), y el mantenimiento se intensifica (de anual a cada 4-8 semanas indefinidamente).</p>
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
  <p>El Grade no es una etiqueta fija: cambia con la evidencia nueva (radiografías comparativas) y con la intervención en los modificadores. El Stage, en cambio, <strong>nunca mejora</strong>.</p>

  <div class="cases">
    <div class="case-card">
      <h3>Caso integrado A — el cambio de Stage obliga a revisar el plan</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p><strong>Presentación inicial:</strong> Mujer 42a, fumadora 12 cig/día. CAL 2-3mm, RBL 18%, PPD 4-5mm. Diagnóstico: <strong>Stage I, Grade B</strong>. Plan inicial: SRP 2 sesiones, monitoreo cada 4 meses.</p>
        <p><strong>Seguimiento a 8 meses:</strong> radiografía muestra RBL 30% (progresión ~9%/año en solo 8 meses); CAL ahora 4-5mm; PPD 6-7mm posterior. <strong>Reclasificación: Stage II, Grade C</strong> — cambio dramático.</p>
        <p><strong>Investigación:</strong> cambio de trabajo → estrés severo → depresión desarrollada, sin diagnosticar.</p>
        <p><strong>Nuevo plan:</strong> SRP repetida 3-4 sesiones + azitromicina 4 semanas, referencia a psicología/psiquiatría, consejería de tabaco intensiva.</p>
        <p><strong>Lección:</strong> el Grade puede cambiar — la comparación radiográfica y la reclasificación periódica son críticas, especialmente en pacientes con riesgo de Grade C.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso integrado B — intervenir el modificador cambia el pronóstico</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p><strong>Presentación:</strong> Varón 48a, fumador 18 cig/día, HbA1c 8.6%. CAL 3-4mm, RBL 28%, PPD 5-6mm. Diagnóstico: <strong>Stage II, Grade C</strong> (tabaquismo severo + diabetes descontrolada, a pesar del Stage moderado). Pronóstico inicial: 60-70%.</p>
        <p><strong>Plan inicial:</strong> SRP + azitromicina + consejería intensiva de tabaco + referencia endocrinológica.</p>
        <p><strong>A los 6 meses:</strong> radiografía estable (sin más progresión); PPD 3-4mm (muy mejorado). Paciente dejó el cigarrillo hace 3 meses; HbA1c ahora 7.2%.</p>
        <p><strong>Reclasificación: Stage II, Grade B</strong> — el Stage no cambia (el daño ya ocurrido es irreversible), pero el Grade sí mejora.</p>
        <p><strong>Nuevo plan:</strong> mantenimiento cada 3-4 meses (en vez de 6-8 semanas); pronóstico mejorado a 80-85%.</p>
        <p><strong>Lección:</strong> intervenir los modificadores cambia el Grade y el pronóstico — la "reclasificación" post-terapia es una práctica clínica válida y recomendada.</p>
      </details>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 La regla que nunca cambia</h3>
    <p><strong>El Stage no puede mejorar.</strong> CAL 5mm y RBL 40% definen Stage III por definición — el hueso no regenera espontáneamente. Después de un SRP exitoso, el PPD puede bajar de 5mm a 3-4mm (el tejido blando cicatriza), pero el CAL permanece en 5mm y el RBL en 40%: sigue siendo Stage III. Lo que mejora es el <strong>Grado de actividad</strong>, no la severidad acumulada.</p>
  </div>

  <div class="definition-box">
    <p><strong>Otra aplicación de la misma regla:</strong> un paciente que perdió dientes por periodontitis años atrás y hoy está perfectamente estable, sin movilidad severa, <strong>sigue siendo Stage IV</strong> — porque la clasificación refleja la historia acumulativa, no solo el estado actual.</p>
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
      <h3>¿Puede un paciente ser Stage III, Grade A? ¿Destrucción severa pero lenta?</h3>
      <details>
        <summary>Ver respuesta</summary>
        <p><strong>Sí.</strong> Poco común, pero posible. Ejemplo: paciente de 70 años, ex-fumador hace 20 años, sin comorbilidades, CAL 5-6mm + RBL 38%; radiografía de hace 5 años muestra RBL 35% → progresión ~0.6%/año = Grade A. El daño es "antiguo" (acumulado durante décadas) pero no está progresando actualmente. La terapia sigue siendo necesaria (CAL de 5-6mm requiere manejo de Stage III), pero el pronóstico es excelente porque la velocidad es muy lenta.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>¿Es posible Stage I, Grade C? ¿Poco daño pero destruyendo rápido?</h3>
      <details>
        <summary>Ver respuesta</summary>
        <p><strong>Sí — es una alerta diagnóstica.</strong> Ejemplo: joven de 26 años con Pg+++Tf+++Td++ descubre CAL 1-2mm + RBL &lt;15%. Radiografía de hace 1 año: RBL 0%; ahora RBL 12% → progresión ~12%/año = Grade C. A pesar de la pequeña destrucción visible, la velocidad de progresión es rápida — sin intervención intensiva, será Stage III en 3 años. Manejo: SRP intensivo + antibióticos + monitoreo cada 6-8 semanas; modificadores críticos.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Si el paciente responde maravillosamente al SRP, ¿puede "mejorar" de Stage?</h3>
      <details>
        <summary>Ver respuesta</summary>
        <p><strong>No.</strong> El Stage no puede subir hacia una categoría menor — la destrucción que ocurrió es irreversible. Confusión común: pacientes (y algunos clínicos) piensan "si se cura, es menor Stage". No: el daño ya está hecho; lo que cambia con la terapia es el <strong>Grado de actividad</strong>, no la severidad acumulada (ver la lección anterior sobre reclasificación).</p>
      </details>
    </div>

    <div class="case-card">
      <h3>¿Cómo comunico Stage/Grade a un paciente de forma que entienda?</h3>
      <details>
        <summary>Ver respuesta</summary>
        <p><strong>No decir:</strong> "Tienes Stage III, Grade B." <strong>Sí decir:</strong> "Tu enfermedad de encías es severa. El hueso ha bajado bastante (mostrar radiografía comparativa). Pero buena noticia: está progresando lentamente. Con terapia intensiva y mejor control del tabaquismo, puedes preservar tus dientes."</p>
        <p>Estructura recomendada: ¿qué tiene? (descriptivo) → ¿qué tan avanzado? (% óseo perdido) → ¿qué tan rápido empeora? (Grado) → ¿qué lo causó? → ¿qué podemos hacer? → ¿qué necesitas hacer vos?</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Si un paciente con Stage IV tiene movilidad mínima, ¿sigue siendo Stage IV?</h3>
      <details>
        <summary>Ver respuesta</summary>
        <p><strong>Sí.</strong> Stage IV se define por pérdida dentaria atribuible a periodontitis, no necesariamente por movilidad severa. Un paciente que perdió dientes hace años por periodontitis, con dientes restantes estables (CAL 5-6mm, RBL 45%, sin movilidad Grado 3), continúa siendo Stage IV porque ha perdido múltiples dientes por la enfermedad — incluso con estabilización post-terapia.</p>
      </details>
    </div>
  </div>

  <h3>Síntesis final: la matriz como herramienta pronóstica</h3>
  <div class="decision-tree">
    <ul>
      <li><strong>Diagnóstico</strong> (qué tiene + cómo progresa): Stage = severidad, Grade = velocidad
        <ul>
          <li>→ <span class="outcome">Pronóstico</span> (cuál es el resultado esperado): % de remisión, dientes/década perdidos, potencial de regeneración
            <ul>
              <li>→ <span class="outcome">Plan de terapia</span> (qué intervención): SRP solo vs. + antibióticos, cirugía vs. manejo conservador, preservación vs. extracción
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
    <p>Sin Stage/Grade, el clínico hace "mejor adivinanza" → variabilidad tremenda entre profesionales. Con Stage/Grade, la decisión es estructurada, reproducible y el pronóstico es comunicable — al paciente, al equipo, y entre especialistas que retoman el caso.</p>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti et al. 2018; Kornman et al. 2020; Caton et al. 2018 (AAP/EFP World Workshop)
  </div>
</div>`,
  },
];

export const pretestQuestions = [
  {
    question_text: '¿Qué responde la combinación Stage × Grade que ninguno de los dos ejes responde por separado?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'El pronóstico y el plan de tratamiento recomendado' },
      { key: 'b', text: 'Solo la severidad de la destrucción' },
      { key: 'c', text: 'Solo la velocidad de progresión' },
    ],
    correct_answer: 'a',
    explanation: 'Stage responde "qué tan destruido está", Grade responde "qué tan rápido progresa"; juntos responden "cuál es el pronóstico y qué plan recomiendo".',
    order_index: 1,
  },
  {
    question_text: 'Un Stage III, Grade A (destrucción severa pero lentamente progresiva) es una combinación imposible.',
    question_type: 'true_false',
    options: null,
    correct_answer: 'false',
    explanation: 'Es poco común pero posible: daño acumulado durante décadas sin progresión activa reciente, típicamente en pacientes ex-fumadores de larga data sin comorbilidades.',
    order_index: 2,
  },
  {
    question_text: '¿Cuál combinación representa una "alerta diagnóstica" porque el daño actual es pequeño pero el riesgo futuro es altísimo?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Stage IV, Grade A' },
      { key: 'b', text: 'Stage I, Grade C' },
      { key: 'c', text: 'Stage II, Grade A' },
    ],
    correct_answer: 'b',
    explanation: 'Stage I con Grade C implica poco daño visible pero una velocidad de progresión muy rápida — sin intervención, evoluciona a Stage III en 3-5 años.',
    order_index: 3,
  },
  {
    question_text: 'Si un paciente deja de fumar y mejora su control de diabetes, su Stage también puede mejorar.',
    question_type: 'true_false',
    options: null,
    correct_answer: 'false',
    explanation: 'El Grade puede mejorar con la intervención en modificadores, pero el Stage refleja daño acumulado irreversible y nunca disminuye.',
    order_index: 4,
  },
];

export const posttestQuestions = [
  {
    question_text: 'Según la matriz Stage × Grade, ¿cuál es el pronóstico aproximado de un paciente Stage II, Grade A?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: '20-40%' },
      { key: 'b', text: '60-70%' },
      { key: 'c', text: '90-95%' },
      { key: 'd', text: '40-50%' },
    ],
    correct_answer: 'c',
    explanation: 'Stage II, Grade A tiene un pronóstico excelente de 90-95%, con SRP solo probablemente suficiente.',
    order_index: 1,
  },
  {
    question_text: 'Un paciente Stage III, Grade C requiere cirugía + antibióticos y tiene pérdida dentaria esperada de 2-5 dientes/década pese al tratamiento. ¿Qué justifica esta combinación de intensidad terapéutica?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Solo el Stage, el Grade no afecta el plan' },
      { key: 'b', text: 'Daño severo (Stage III) combinado con progresión rápida (Grade C) — ambos ejes empeoran el pronóstico' },
      { key: 'c', text: 'Solo el Grade, el Stage no afecta el plan' },
      { key: 'd', text: 'La edad del paciente exclusivamente' },
    ],
    correct_answer: 'b',
    explanation: 'La combinación de severidad alta (Stage III) y velocidad alta (Grade C) reduce el pronóstico más que cualquiera de los dos factores por separado.',
    order_index: 2,
  },
  {
    question_text: 'Un paciente con CAL 5mm y RBL 40% (Stage III) responde excelente al SRP: el PPD baja de 6mm a 3mm y el sangrado desaparece. ¿Cuál es su Stage ahora?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Stage I, porque la enfermedad está controlada' },
      { key: 'b', text: 'Stage II, porque mejoró parcialmente' },
      { key: 'c', text: 'Sigue siendo Stage III, porque el CAL y el RBL no cambian con la terapia' },
      { key: 'd', text: 'No se puede clasificar hasta la próxima radiografía' },
    ],
    correct_answer: 'c',
    explanation: 'El Stage refleja destrucción acumulada e irreversible (CAL, RBL) — el PPD puede mejorar con la cicatrización del tejido blando, pero el Stage no cambia hacia una categoría menor.',
    order_index: 3,
  },
  {
    question_text: '¿Qué combinación de Stage/Grade se considera una crisis periodontal que requiere decisiones en días, no semanas?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Stage I, Grade A' },
      { key: 'b', text: 'Stage II, Grade B' },
      { key: 'c', text: 'Stage IV, Grade C' },
      { key: 'd', text: 'Stage III, Grade A' },
    ],
    correct_answer: 'c',
    explanation: 'Stage IV Grade C combina destrucción avanzada con progresión muy rápida (>20%/año) y múltiples pérdidas dentarias recientes — requiere decisión urgente entre preservación y extracción amplia.',
    order_index: 4,
  },
  {
    question_text: 'Un paciente Stage II, Grade C mejora su Grade a B tras dejar de fumar y controlar su diabetes. ¿Qué cambia en su manejo clínico?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Nada, el plan de mantenimiento es idéntico para Grade B y C' },
      { key: 'b', text: 'El mantenimiento se espacía (de cada 6-8 semanas a cada 3-4 meses) y el pronóstico mejora' },
      { key: 'c', text: 'Se reclasifica como Stage I' },
      { key: 'd', text: 'Ya no necesita mantenimiento periódico' },
    ],
    correct_answer: 'b',
    explanation: 'La mejora de Grade C a B permite espaciar el mantenimiento y mejora el pronóstico esperado, pero el Stage (severidad acumulada) permanece igual.',
    order_index: 5,
  },
  {
    question_text: 'Un paciente perdió 2 dientes por periodontitis hace 10 años. Hoy está estable, sin inflamación activa, sin movilidad severa. ¿Cómo se clasifica?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Stage I, porque está estable ahora' },
      { key: 'b', text: 'No se clasifica, porque no hay actividad actual' },
      { key: 'c', text: 'Sigue siendo Stage IV, porque el Stage refleja la historia acumulativa de pérdida dentaria' },
      { key: 'd', text: 'Stage III, porque perdió menos de 4 dientes' },
    ],
    correct_answer: 'c',
    explanation: 'Stage IV se define por pérdida dentaria atribuible a periodontitis; la clasificación no baja aunque el paciente esté clínicamente estable ahora.',
    order_index: 6,
  },
  {
    question_text: '¿Cuál es la forma correcta de comunicar un diagnóstico de Stage III, Grade B a un paciente?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Usar los términos técnicos exactos: "Tienes Stage III, Grade B"' },
      { key: 'b', text: 'Describir severidad, velocidad, causa y plan en lenguaje llano: "tu enfermedad es severa, progresa a ritmo moderado, el cigarrillo la empeora, y con tratamiento intensivo podemos preservar tus dientes"' },
      { key: 'c', text: 'No mencionar el pronóstico para no alarmar al paciente' },
      { key: 'd', text: 'Solo mostrar la radiografía sin explicación verbal' },
    ],
    correct_answer: 'b',
    explanation: 'La comunicación efectiva traduce Stage/Grade a términos descriptivos: qué tiene, qué tan avanzado, qué tan rápido, causa, plan, y qué debe hacer el paciente.',
    order_index: 7,
  },
  {
    question_text: 'Radiografía 2024: RBL 20%. Radiografía 2026 (2 años después): RBL 44%. Tasa anual de progresión y Grade probable:',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: '2%/año — Grade A' },
      { key: 'b', text: '12%/año — Grade B' },
      { key: 'c', text: '24%/año — Grade C' },
      { key: 'd', text: 'No se puede calcular con estos datos' },
    ],
    correct_answer: 'b',
    explanation: 'Tasa anual = (44-20)/2 años = 12% por año, dentro del rango 3-20% anual de Grade B.',
    order_index: 8,
  },
];
