// Content for Chapter 4 ("Casos reales: de la teoría a la práctica"), based on
// MEGA_PROMPT_CAPITULO_4_CASOS_REALES.md. Consumed by insertChapter4.js.

export const lessons = [
  {
    lesson_number: 1,
    order_index: 1,
    title: 'Caso 1 — Fumador fuerte + diabetes severa: un cambio radical',
    content_html: `<div class="lesson-container">
  <h2>🚬 Carlos M., 52 años, operario industrial</h2>
  <p><strong>Motivo de consulta:</strong> "Dientes se mueven; encías sangran; me duele al masticar." Derivado por su médico general tras un hallazgo casual en el examen anual.</p>

  <h3>Historia clínica</h3>
  <ul>
    <li><strong>Médica:</strong> diabetes tipo 2 hace 8 años, no medicado con regularidad ("tomo metformina cuando recuerdo"); hipertensión tratada; sobrepeso (IMC 31); sedentario</li>
    <li><strong>Dental:</strong> higiene deficiente ("cepillo cuando me acuerdo; hilo dental nunca"); última limpieza hace 4 años; "nunca tuve problemas de encías hasta hace 1 año"</li>
    <li><strong>Hábitos:</strong> tabaquismo 22-25 cigarrillos/día × 30 años = 30 paquetes-año; estrés laboral alto</li>
  </ul>

  <h3>Examen clínico (Mes 0)</h3>
  <table>
    <tr><th>Parámetro</th><th>Hallazgo</th></tr>
    <tr><td>PPS máximo</td><td>9-10mm posterior</td></tr>
    <tr><td>CAL máximo</td><td>7-8mm</td></tr>
    <tr><td>BOP</td><td>75% de sitios</td></tr>
    <tr><td>Supuración</td><td>Presente, molares</td></tr>
    <tr><td>Movilidad</td><td>Grado 2 incisivos inferiores; Grado 1 molares</td></tr>
    <tr><td>Furcación</td><td>Grado 2 superiores; Grado 2-3 inferiores</td></tr>
  </table>
  <p><strong>Radiografía:</strong> RBL 55-60%, patrón circunferencial en posteriores con defectos angulares 2-3 paredes. Sin radiografía comparativa disponible.</p>

  <div class="calc-box">
    <p><strong>Estimación de Grado sin radiografía histórica (puntuación de modificadores)</strong></p>
    <p class="formula">Tabaquismo fuerte (+2) + diabetes mal controlada (+1.5) + microbiota presumida Pg+ (+1) = 4.5</p>
    <p>Puntuación ≥1.5 → <span class="result">Grado C</span></p>
  </div>

  <div class="definition-box">
    <p><strong>Diagnóstico:</strong> Periodontitis Estadio IV, Grado C. Modificadores: tabaquismo fuerte, diabetes tipo 2 no controlada, estrés moderado, higiene deficiente. Pronóstico inicial con el cumplimiento actual: muy pobre.</p>
  </div>

  <h3>Plan y evolución</h3>
  <div class="timeline-interactive">
    <div class="timeline-item">
      <h3>Semana 1 — Educación honesta</h3>
      <p>"Sin cambios mayores, perderás muchos dientes en 2-3 años. Puedo ayudarte si estás dispuesto a cambiar." Se muestra la radiografía, se identifican los 3 modificadores (cigarrillo, diabetes, higiene) y se inicia cesación de tabaco (parches de nicotina) + referencia urgente a endocrinología. Paciente acepta.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Meses 1-2 — Fase no quirúrgica</h3>
      <p>RAR en 2 sesiones + clorhexidina 0.12%. Microbiología: Pg+ (35%), Tf-, Td- → azitromicina 500mg TID × 4 semanas. Endocrinología confirma HbA1c 8.9% e intensifica tratamiento (metformina + sitagliptina). Paciente reduce a 10 cigarrillos/día.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Mes 3 — Re-evaluación</h3>
      <p>PPS mejora 1-2mm; BOP 75%→40-50%; movilidad mejora a Grado 1; supuración resuelta por completo. Excelente respuesta a Fase 1, pero PPS posterior sigue en 7-8mm → Fase 2 quirúrgica indicada.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Meses 4-6 — Cirugía</h3>
      <p>Colgajo de acceso bilateral en molares superiores e inferiores + región anterior inferior. GTR con membrana de colágeno absorbible + aloinjerto óseo mineral en defectos favorables. Tabaquismo reducido a 5 cig/día; HbA1c 8.2% (mejorando).</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Meses 6-24 — Mantenimiento</h3>
      <p>Cada 4 semanas el primer año, luego cada 8 semanas. Microbiología repetida a los 11 meses: Pg negativizó. HbA1c 7.1% al mes 20 (objetivo alcanzado). Tabaquismo completamente cesado a los 21 meses.</p>
    </div>
  </div>

  <div class="cases">
    <div class="case-card">
      <h3>Complicación — exposición parcial de membrana GTR (Mes 5)</h3>
      <details>
        <summary>Ver manejo</summary>
        <p>Sutura aflojada expuso la membrana de colágeno en un molar superior. Se resuturó bajo anestesia local con sutura 5-0 absorbible y se extendió la clorhexidina a 3 semanas. Cicatrización secundaria normal, sin secuelas.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Complicación — falta de regeneración ósea observable (Mes 12)</h3>
      <details>
        <summary>Ver manejo</summary>
        <p>El aloinjerto era visible pero el RBL permanecía en 55-60% (esperábamos 30-50% de regeneración; se obtuvo 0-10%, por defectos circunferenciales complejos e historia de tabaquismo severo). Comunicación al paciente: "la meta no era recuperar el hueso de hace 25 años, era PARAR la enfermedad — eso lo logramos."</p>
      </details>
    </div>
  </div>

  <h3>Resultados a 24 meses</h3>
  <table>
    <tr><th>Parámetro</th><th>Mes 0</th><th>Mes 24</th></tr>
    <tr><td>PPS máximo</td><td>9-10mm</td><td>4-5mm</td></tr>
    <tr><td>BOP</td><td>75%</td><td>&lt;5%</td></tr>
    <tr><td>Movilidad</td><td>Grado 2</td><td>Grado 0</td></tr>
    <tr><td>Supuración / halitosis</td><td>Presentes</td><td>Ausentes</td></tr>
  </table>
  <p><strong>Radiografía:</strong> RBL estable 55-60% (enfermedad detenida; sin más progresión, sin regeneración significativa).</p>

  <div class="key-principle">
    <h3>🎯 Reclasificación a los 24 meses</h3>
    <p>De <strong>Estadio IV, Grado C</strong> a <strong>Estadio IV, Grado A probable</strong>: tabaquismo cesado, HbA1c en objetivo, RBL estable (&lt;1%/año) y Pg negativizado. El pronóstico de preservación pasó de 20-40% a 70-80% — una mejora dramática, aunque el Estadio no cambia: el paciente sigue en la categoría de mayor severidad acumulada (Estadio IV se define por el daño ya ocurrido, incluida la pérdida de hueso, no por la actividad actual), por lo que su techo de pronóstico permanece el de Estadio IV incluso con Grado A.</p>
  </div>

  <h3>Lecciones clave</h3>
  <ul class="checklist">
    <li>Los modificadores lo son todo: un Grado C puede transformarse en Grado A si el paciente cambia tabaco y control glicémico</li>
    <li>La charla honesta inicial fue el motivador decisivo para la cesación de tabaco</li>
    <li>La coordinación médica (endocrinología) fue tan crítica como la cirugía misma</li>
    <li>La regeneración ósea es un "beneficio adicional", no la meta — parar la enfermedad es el éxito real en Grado C severo</li>
    <li>El mantenimiento a largo plazo (4 semanas × 1 año, luego 6-8 semanas) es lo que sostiene el resultado</li>
  </ul>

  <div class="reference">
    📚 Caso clínico basado en manejo real documentado a 24 meses de seguimiento
  </div>
</div>`,
  },
  {
    lesson_number: 2,
    order_index: 2,
    title: 'Caso 2 — Periodontitis agresiva en joven: una lucha permanente',
    content_html: `<div class="lesson-container">
  <h2>🧬 Daniela R., 27 años, estudiante de posgrado</h2>
  <p><strong>Motivo de consulta:</strong> "Tengo periodontitis agresiva; me dijeron que es genética; quiero saber qué puedo hacer." Autoderivación — su hermana fue tratada de una periodontitis similar a los 24 años.</p>

  <h3>Historia clínica</h3>
  <ul>
    <li><strong>Médica:</strong> completamente sana; anticonceptivos orales hace 3 años; sin diabetes ni comorbilidades</li>
    <li><strong>Dental:</strong> higiene excelente autorreportada (cepillado 3×/día, hilo dental diario); "siempre dientes perfectos"</li>
    <li><strong>Antecedente familiar crítico:</strong> hermana diagnosticada con periodontitis agresiva a los 24 años; padre con "problemas de encías" en los 40s, nunca tratado</li>
    <li><strong>Hábitos:</strong> no fuma, estrés bajo, actividad física regular</li>
  </ul>

  <h3>Examen clínico (Mes 0)</h3>
  <table>
    <tr><th>Parámetro</th><th>Hallazgo</th></tr>
    <tr><td>PPS máximo</td><td>8-9mm, molares bilaterales (patrón localizado)</td></tr>
    <tr><td>CAL máximo</td><td>6-7mm</td></tr>
    <tr><td>BOP</td><td>60%, principalmente molares</td></tr>
    <tr><td>Movilidad</td><td>Grado 1 incipiente en molares inferiores</td></tr>
    <tr><td>Furcación</td><td>Grado 2 bilateral en molares inferiores</td></tr>
    <tr><td>Placa visible</td><td>Mínima — no explica la severidad por higiene</td></tr>
  </table>
  <p><strong>Radiografía:</strong> defectos angulares localizados (2-3 paredes) en molares y región 31-32; RBL 35-40%. Sin radiografía comparativa (primer examen periodontal formal).</p>

  <div class="decision-tree">
    <h3>🧭 ¿Por qué severa en una joven asintomática con higiene excelente?</h3>
    <ul>
      <li>Periodontitis agresiva clásica (joven + severidad + antecedente familiar) → <span class="outcome">hipótesis principal</span></li>
      <li>Defecto de PMN → a descartar</li>
      <li>Susceptibilidad genética específica (IL-1) → a investigar</li>
      <li>Factores locales (anatomía, trauma oclusal) → poco probables dado el patrón bilateral simétrico</li>
    </ul>
  </div>

  <h3>Evaluación inmunológica (Semana 1)</h3>
  <table>
    <tr><th>Prueba</th><th>Resultado</th></tr>
    <tr><td>CBC + diferencial</td><td>Normal</td></tr>
    <tr><td>Función PMN (nitroblue tetrazolium)</td><td>Normal</td></tr>
    <tr><td>Genotipo IL-1α +4845</td><td><strong>G/G — alto riesgo</strong></td></tr>
    <tr><td>TNF-α -308</td><td>Heterocigoto, riesgo moderado</td></tr>
    <tr><td>Microbiología (PCR)</td><td>Pg++ (55%), Tf+ (22%), Td-</td></tr>
  </table>

  <div class="definition-box">
    <p><strong>Diagnóstico:</strong> Periodontitis Estadio III (CAL 6-7mm + furcación Grado 2, que escala automáticamente a Estadio III), Grado C (edad joven + Estadio III = "discordancia de edad", antecedente familiar, Pg++, progresión clínica documentada en 6-12 meses). Explicada por genética IL-1 de alto riesgo heredada del padre + microbiota agresiva.</p>
  </div>

  <h3>Plan y evolución</h3>
  <div class="timeline-interactive">
    <div class="timeline-item">
      <h3>Meses 1-3 — Fase no quirúrgica intensiva</h3>
      <p>RAR en 2 sesiones + clorhexidina 6 semanas + azitromicina 500mg TID × 4 semanas (iniciada de inmediato dado Pg++ y Grado C). Mes 3: PPS 8-9mm → 6-7mm, BOP 60%→30%, microbiología Pg reducida de 55% a 30%.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Meses 4-5 — Cirugía</h3>
      <p>Colgajo de acceso bilateral en molares inferiores (con GTR + factores de crecimiento rhPDGF-BB dado defectos favorables) y superiores (GTR sin factores de crecimiento). Aloinjerto + β-TCP.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Mes 6 — Post-quirúrgico</h3>
      <p>PPS 5-6mm, BOP 10-15%, movilidad Grado 0 (recuperación completa desde Grado 1).</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Meses 6-24 — Mantenimiento cada 6-8 semanas</h3>
      <p>Microbiología repetida cada 6-12 meses por el antecedente. Pg negativizó al mes 9-12 y se mantuvo negativo.</p>
    </div>
  </div>

  <div class="cases">
    <div class="case-card">
      <h3>Complicación — recurrencia de Pg pese a cumplimiento perfecto (Mes 9)</h3>
      <details>
        <summary>Ver manejo</summary>
        <p>Microbiología a los 9 meses mostró Pg+ (25%) nuevamente, tras haber sido negativo. Cumplimiento de higiene confirmado como excelente — la recolonización probablemente vino de reservorios no tratados (amígdalas, dorso de lengua). Se decidió NO repetir antibióticos (riesgo de resistencia); se intensificó el RAR y se agregó irrigador oral con clorhexidina diluida. Pg volvió a negativizar al mes 12.</p>
      </details>
    </div>
  </div>

  <h3>Resultados a 24 meses</h3>
  <table>
    <tr><th>Parámetro</th><th>Mes 0</th><th>Mes 24</th></tr>
    <tr><td>PPS máximo</td><td>8-9mm</td><td>5-6mm</td></tr>
    <tr><td>BOP</td><td>60%</td><td>&lt;5%</td></tr>
    <tr><td>Furcación</td><td>Grado 2</td><td>Grado 1</td></tr>
    <tr><td>Movilidad</td><td>Grado 1</td><td>Grado 0</td></tr>
  </table>
  <p>Regeneración ósea observada: solo aproximadamente 10% (vs. 20-40% teórico esperado en defectos favorables) — atribuible a la severidad de los defectos y la historia agresiva de la enfermedad.</p>

  <div class="key-principle">
    <h3>🎯 Reclasificación a los 24 meses</h3>
    <p>De <strong>Estadio III, Grado C</strong> a <strong>Estadio III, Grado B</strong> (microbiología transformada, progresión detenida). <strong>Pero la genética IL-1 de alto riesgo no cambia</strong> — a diferencia del Caso 1, esta paciente requiere mantenimiento permanente cada 6-8 semanas indefinidamente, sin poder "graduarse" a intervalos anuales.</p>
  </div>

  <h3>Lecciones clave</h3>
  <ul class="checklist">
    <li>Severidad en joven asintomática con higiene excelente exige investigar más allá del biofilm: genética, inmunología, microbiología</li>
    <li>El antecedente familiar es un predictor fuerte de susceptibilidad genética</li>
    <li>La excelente higiene no protege contra la periodontitis agresiva cuando la microbiota y la genética dominan</li>
    <li>La microbiología seriada documenta el éxito y motiva al paciente</li>
    <li>El riesgo genético no se modifica con el tratamiento — el mantenimiento aquí es de por vida, no un objetivo temporal</li>
  </ul>

  <div class="reference">
    📚 Caso clínico basado en manejo real documentado a 24 meses de seguimiento
  </div>
</div>`,
  },
  {
    lesson_number: 3,
    order_index: 3,
    title: 'Caso 3 — Lesión combinada endo-periodontal: decisión de preservación',
    content_html: `<div class="lesson-container">
  <h2>🦷 Roberto L., 48 años, abogado</h2>
  <p><strong>Motivo de consulta:</strong> "Dolor en la muela 16; se mueve; la radiografía mostró un problema." Derivado por su odontólogo general tras un hallazgo radiográfico.</p>

  <h3>Examen del diente 16</h3>
  <table>
    <tr><th>Área</th><th>Hallazgo periodontal</th><th>Hallazgo endodóntico</th></tr>
    <tr><td>Mesial</td><td>PPS 8mm, CAL 7mm, BOP+</td><td rowspan="4">Prueba térmica <strong>negativa</strong>; prueba eléctrica <strong>negativa</strong>; percusión sensible; trayecto fistuloso lingual-distal detectado</td></tr>
    <tr><td>Distal</td><td>PPS 7mm, CAL 6mm, BOP+</td></tr>
    <tr><td>Bucal</td><td>PPS 5mm, sin BOP</td></tr>
    <tr><td>Lingual</td><td>PPS 4mm, sin BOP</td></tr>
  </table>
  <p><strong>Radiografía:</strong> radiolucencia perirradicular apical de 4-5mm (típica endodóntica) + RBL horizontal generalizado 30-35% en la zona (periodontal). Furcación Grado 0-1, preservada.</p>

  <div class="decision-tree">
    <h3>🧭 ¿Lesión endo primaria, perio primaria, o combinada?</h3>
    <ul>
      <li>Vitalidad pulpar negativa → <span class="outcome">sugiere origen endodóntico</span></li>
      <li>PPS localizado 7-8mm solo mesial/distal (no circunferencial) + CAL real → <span class="outcome">sugiere componente periodontal genuino</span></li>
      <li>Radiolucencia apical + RBL horizontal generalizado en el resto de la boca → <span class="outcome">ambos procesos coexisten</span></li>
    </ul>
  </div>

  <div class="definition-box">
    <p><strong>Diagnóstico:</strong> lesión combinada endodóntico-periodontal en el 16 — necrosis pulpar primaria con radiolucencia apical y trayecto fistuloso, sobre una periodontitis crónica generalizada de base (Estadio II, Grado A en el resto de la dentición: RBL 25-30%, PPS 5-6mm posterior, BOP aproximadamente 40%).</p>
  </div>

  <h3>Plan y evolución</h3>
  <div class="timeline-interactive">
    <div class="timeline-item">
      <h3>Semana 1 — Endodoncia primero</h3>
      <p>La pulpa necrótica se trata antes que cualquier cirugía periodontal agresiva: sin tratar el origen apical, el manejo periodontal solo no resolverá la radiolucencia.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Meses 1-2 — RCT + RAR en paralelo</h3>
      <p>Tratamiento de conductos completo en el 16 (obturación con gutapercha y sellador libre de eugenol) simultáneo con RAR general del resto de la dentición. Post-RCT, el PPS del 16 sigue en 8-9mm mesial/distal — esperado, el RCT no resuelve el defecto periodontal.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Mes 3 — Decisión: monitoreo, no cirugía</h3>
      <p>La radiolucencia apical es pequeña, el RCT quedó bien adaptado, la furcación está preservada y el paciente prefiere el abordaje conservador. Se opta por monitorear la cicatrización antes de decidir cirugía perio + apicoectomía.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Meses 3-12 — Monitoreo</h3>
      <p>Mes 6: radiolucencia apical disminuyendo, PPS M=6/D=5mm. Mes 12: radiolucencia esencialmente resuelta, PPS M=5/D=4mm. Se descarta la cirugía — el diente respondió bien.</p>
    </div>
  </div>

  <div class="cases">
    <div class="case-card">
      <h3>Complicación — fístula recurrente (Mes 5)</h3>
      <details>
        <summary>Ver manejo</summary>
        <p>Reaparece drenaje lingual-distal. El endodoncista sospecha un conducto lateral no tratado en el RCT original y realiza una apicoectomía (resección de 3mm del ápice + retro-obturación con SuperEBA). La fístula resuelve completamente sin recurrencia.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>¿Cirugía para el defecto residual? (Mes 12)</h3>
      <details>
        <summary>Ver decisión</summary>
        <p>Con la radiolucencia apical resuelta pero un PPS residual de 5mm mesial/distal, se decide NO operar: el defecto es tejido cicatricial de la lesión endo-perio (potencial regenerativo limitado, distinto de un defecto perio primario), el PPS es funcional, y la radiografía muestra estabilidad. Se opta por monitoreo permanente en vez de cirugía.</p>
      </details>
    </div>
  </div>

  <h3>Resultados a 24 meses (diente 16)</h3>
  <table>
    <tr><th>Parámetro</th><th>Mes 0</th><th>Mes 24</th></tr>
    <tr><td>PPS mesial / distal</td><td>8 / 7mm</td><td>5 / 4mm</td></tr>
    <tr><td>CAL mesial / distal</td><td>7 / 6mm</td><td>4 / 3mm</td></tr>
    <tr><td>Movilidad</td><td>Grado 1</td><td>Grado 0</td></tr>
    <tr><td>Radiolucencia apical</td><td>4-5mm</td><td>Ausente</td></tr>
  </table>

  <h3>Lecciones clave</h3>
  <ul class="checklist">
    <li>La prueba de vitalidad pulpar es el diferenciador clave entre origen endo, perio, o combinado</li>
    <li>En lesiones combinadas: RCT primero, periodoncia después — nunca cirugía perio agresiva antes de resolver el origen endodóntico</li>
    <li>No toda lesión endo-perio necesita cirugía periodontal: si la radiolucencia resuelve y el PPS mejora, el monitoreo es suficiente</li>
    <li>La radiografía seriada es la herramienta que justifica esperar en vez de operar</li>
    <li>Si el RCT convencional no resuelve la fístula, la apicoectomía está indicada — no repetir el RCT sin más</li>
  </ul>

  <div class="reference">
    📚 Caso clínico basado en manejo real documentado a 24 meses de seguimiento
  </div>
</div>`,
  },
  {
    lesson_number: 4,
    order_index: 4,
    title: 'Caso 4 — Estadio IV: decisión de preservación vs. extracción',
    content_html: `<div class="lesson-container">
  <h2>🦷 Teresa G., 61 años, jubilada</h2>
  <p><strong>Motivo de consulta:</strong> "He perdido varios dientes; no quiero perder más; ¿puedo salvar lo que me queda?" Derivada por su prostodoncista, que planea una rehabilitación y requiere evaluación periodontal previa.</p>

  <h3>Historia clínica</h3>
  <ul>
    <li><strong>Médica:</strong> diabetes tipo 2 (HbA1c 8.7%, subóptima), hipertensión controlada, <strong>osteoporosis</strong> (T-score -2.8, en alendronato), depresión crónica (en sertralina)</li>
    <li><strong>Dental:</strong> ya perdió 8 dientes por periodontitis en los últimos 10 años (17, 27, 37, 47, 18, 28 y otros); RAR hace 10 años sin seguimiento posterior</li>
    <li><strong>Hábitos:</strong> ex-fumadora (cesó hace 8 años); sedentaria</li>
  </ul>

  <h3>Examen clínico (Mes 0) — 20 dientes presentes</h3>
  <table>
    <tr><th>Parámetro</th><th>Hallazgo</th></tr>
    <tr><td>PPS máximo</td><td>11-12mm (región anterosuperior 11-12-13)</td></tr>
    <tr><td>CAL máximo</td><td>8-9mm</td></tr>
    <tr><td>BOP</td><td>70%</td></tr>
    <tr><td>Movilidad</td><td>Grado 2 en 11, 12, 13; Grado 1 en molares</td></tr>
    <tr><td>Furcación</td><td>Grado 2-3 en molares presentes, bilateral</td></tr>
  </table>
  <p><strong>Radiografía:</strong> RBL 55-70% generalizado, hueso osteoporótico. Sin radiografía comparativa útil (demasiado antigua).</p>

  <div class="calc-box">
    <p><strong>Estimación de Grado</strong></p>
    <p class="formula">Diabetes subóptima (+1.5) + depresión crónica (+1) + ex-fumadora (+0) + pérdida lenta documentada (aproximadamente 1.5-2 dientes/5 años ≈ 3%/año)</p>
    <p><span class="result">Grado B probable</span> (no Grado C — la progresión histórica es lenta, no rápida)</p>
  </div>

  <div class="definition-box">
    <p><strong>Diagnóstico:</strong> Periodontitis Estadio IV (CAL 8-9mm + RBL 55-70% + 8 dientes perdidos por periodontitis), Grado B. Pronóstico: 40-50% de preservación — la decisión central del plan es <strong>cuáles</strong> dientes preservar y cuáles extraer.</p>
  </div>

  <h3>Evaluación diente por diente</h3>
  <table>
    <tr><th>Diente(s)</th><th>Hallazgo clave</th><th>Decisión</th></tr>
    <tr><td>11, 12</td><td>PPS 11-12mm, movilidad Grado 2, sin furcación</td><td>Borderline — se intenta preservar inicialmente</td></tr>
    <tr><td>13-16, 21-25</td><td>PPS 6-10mm, movilidad Grado 0-1</td><td>Preservar</td></tr>
    <tr><td>Incisivos y premolares inferiores</td><td>PPS 5-7mm, movilidad Grado 0-1</td><td>Preservar</td></tr>
    <tr><td>36, 46</td><td>PPS 7-8mm, furcación Grado 2-3, movilidad Grado 1</td><td>Borderline — evaluar tras RAR antes de decidir</td></tr>
  </table>

  <h3>Plan y evolución</h3>
  <div class="timeline-interactive">
    <div class="timeline-item">
      <h3>Meses 1-3 — Fase no quirúrgica</h3>
      <p>RAR en 3 sesiones + clorhexidina + educación adaptada (cepillo eléctrico de cerdas suaves, dado la osteoporosis y movilidad; picks interdentales en vez de hilo dental). Referencia a endocrinología (control de HbA1c) y a psicología (seguimiento de la depresión). Microbiología: Pg+ (40%) → azitromicina 4 semanas.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Mes 4 — Decisión diente por diente</h3>
      <p>11 y 12: PPS sigue en 10-11mm pese al RAR, movilidad Grado 2 persistente → <strong>extracción</strong> (mejor pronóstico con implante que con cirugía compleja). 36 y 46: PPS mejoró a 6-7mm → se decide monitorear 6 meses más antes de decidir cirugía vs. extracción, dado el riesgo quirúrgico elevado (osteoporosis + edad + HbA1c).</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Mes 5 — Extracciones</h3>
      <p>Extracción atraumática de 11 y 12 con prótesis interina mientras cicatriza el hueso (6-12 meses) antes de colocar implantes.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Meses 6-12 — Mantenimiento intensivo</h3>
      <p>36 y 46 se estabilizan en PPS 6mm sin necesidad de cirugía — la extracción se difiere indefinidamente. Mes 12: éxito documentado. HbA1c mejora de 8.7% a 7.8% (mejor, pero no en objetivo &lt;7%).</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Meses 12-18 — Rehabilitación protésica</h3>
      <p>Colocación de implantes en 11 y 12 (mes 13-14) tras la cicatrización ósea; coronas entregadas al mes 20; oseointegración exitosa documentada.</p>
    </div>
  </div>

  <div class="cases">
    <div class="case-card">
      <h3>Complicación — sangrado quirúrgico prolongado (Mes 5)</h3>
      <details>
        <summary>Ver manejo</summary>
        <p>Hemorragia leve persistente &gt;2 horas tras la extracción (paciente en alendronato; INR normal). Manejo con presión sostenida, colágeno hemostático y sutura. Sin osteonecrosis mandibular (rara con bifosfonatos orales, más asociada a la vía IV).</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Cumplimiento subóptimo (Meses 12-18)</h3>
      <details>
        <summary>Ver manejo</summary>
        <p>La paciente faltó a varias citas de mantenimiento por recurrencia de la depresión y confusión con el calendario tras la jubilación. Se intensificó la dosis de SSRI, se implementaron recordatorios telefónicos automáticos y se involucró a la familia (la hija acompaña a las citas). El cumplimiento mejoró a &gt;90% desde el mes 18.</p>
      </details>
    </div>
  </div>

  <h3>Resultados a 24 meses</h3>
  <table>
    <tr><th>Parámetro</th><th>Mes 0</th><th>Mes 24</th></tr>
    <tr><td>Dientes naturales / implantes</td><td>20 / 0</td><td>18 / 3</td></tr>
    <tr><td>PPS máximo</td><td>12mm</td><td>6mm</td></tr>
    <tr><td>BOP</td><td>70%</td><td>&lt;5%</td></tr>
    <tr><td>Movilidad</td><td>Grado 2</td><td>Grado 0</td></tr>
    <tr><td>36 / 46</td><td>PPS 7-8mm, furcación Gr. 2-3</td><td>PPS 6mm, estabilizados sin cirugía</td></tr>
  </table>

  <div class="key-principle">
    <h3>🎯 Extracción selectiva no es un fracaso</h3>
    <p>En Estadio IV, no todos los dientes pueden salvarse. Extraer los dientes "sin esperanza" (movilidad severa + PPS &gt;10mm) para rehabilitar con implantes fue mejor decisión clínica que forzar una cirugía compleja en una paciente de 61 años con osteoporosis y diabetes. Al mismo tiempo, molares con hallazgos similares (36, 46) se estabilizaron sin cirugía — cada diente se evalúa individualmente, no por regla general.</p>
  </div>

  <div class="definition-box">
    <p><strong>¿Cambió el Grado a los 24 meses?</strong> A diferencia del Caso 1 (donde el Grado sí mejoró de C a A), aquí el Grado probablemente <strong>permanece B</strong>: la HbA1c mejoró (8.7%→7.8%) pero no alcanzó el objetivo &lt;7%, así que el modificador metabólico sigue activo aunque atenuado. El resultado clínico excelente (PPS, BOP, estabilidad de 36/46) se explica más por el cumplimiento casi perfecto del mantenimiento que por un cambio de categoría de Grado — son dos cosas distintas: la respuesta real de un paciente puede superar el pronóstico "de tabla" sin que eso implique una reclasificación formal.</p>
  </div>

  <h3>Lecciones clave</h3>
  <ul class="checklist">
    <li>Estadio IV exige una decisión clara de preservación vs. extracción, diente por diente</li>
    <li>Movilidad Grado 2 en incisivos anteriores con PPS extrema suele predecir mejor resultado con implante que con cirugía de preservación</li>
    <li>No todo PPS &gt;6mm requiere cirugía — el monitoreo post-RAR de 6 meses puede documentar estabilización espontánea</li>
    <li>Las comorbilidades (diabetes, osteoporosis, depresión) reducen la tolerancia quirúrgica y justifican el conservadurismo</li>
    <li>La coordinación con prostodoncia es crítica: los implantes no pueden colocarse antes de que cicatrice el hueso post-extracción</li>
    <li>Incluso un paciente motivado puede fallar el cumplimiento por depresión — el apoyo psicológico y los recordatorios son parte del plan periodontal</li>
    <li>Un resultado clínico excelente no siempre implica una reclasificación de Grado — si el modificador metabólico no llega a objetivo, el Grado puede permanecer igual aunque el cumplimiento haya sido perfecto</li>
  </ul>

  <div class="reference">
    📚 Caso clínico basado en manejo real documentado a 24 meses de seguimiento
  </div>
</div>`,
  },
  {
    lesson_number: 5,
    order_index: 5,
    title: 'Casos 5 y 6 — Peri-implantitis y una complicación de GTR',
    content_html: `<div class="lesson-container">
  <h2>⚠️ Dos escenarios donde el tratamiento previo no es garantía de éxito permanente</h2>

  <div class="cases">
    <div class="case-card">
      <h3>Caso 5 — Peri-implantitis tras periodontitis resuelta: salvación del implante</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p><strong>Paciente:</strong> Juan P., 58 años, varón, historia de periodontitis Grado B resuelta hace 5 años, con 3 implantes molares.</p>
        <p><strong>Presentación (mes 60 desde los implantes):</strong> BOP peri-implantar en el implante 36; radiografía muestra pérdida ósea peri-implantar de 3-4mm en 6 meses.</p>
        <p><strong>Diagnóstico:</strong> peri-implantitis incipiente. Etiología: higiene deficiente peri-implantar (dificultad de acceso) + microbiota similar a la periodontitis previa (Pg+).</p>
        <p><strong>Plan:</strong> RAR peri-implantar exhaustivo con puntas ultrasónicas no metálicas; microbiología confirma Pg+ → azitromicina; cirugía de colgajo de acceso con debridement de biofilm y aplicación local de clorhexidina (sin GTR — contraindicada en implantes); mantenimiento cada 6-8 semanas permanente.</p>
        <p><strong>Resultado (24m):</strong> peri-implantitis controlada, BOP resuelto, PPS peri-implantar mejorado a 3-4mm, radiografía estable sin más pérdida ósea.</p>
        <p><strong>Lección:</strong> la periodontitis previa es un factor de riesgo alto para peri-implantitis — la misma microbiota (Pg) que causó la enfermedad natural puede atacar los implantes, y estos requieren vigilancia más frecuente que los dientes naturales.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 6 — Complicación de GTR: membrana expuesta e infectada</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p><strong>Paciente:</strong> Gabriela T., 44 años, mujer, Estadio II-III, Grado B.</p>
        <p><strong>Cirugía:</strong> GTR con membrana de colágeno + aloinjerto en un defecto molar de 2 paredes.</p>
        <p><strong>Complicación (mes 3):</strong> exposición parcial de la membrana con infección y supuración.</p>
        <p><strong>Manejo:</strong> resutura, clorhexidina intensificada, consideración de retratamiento.</p>
        <p><strong>Resultado:</strong> cicatrización secundaria, sin regeneración ósea observable tras la infección.</p>
        <p><strong>Lección:</strong> la exposición de la membrana compromete la función regenerativa; la resutura puede salvar el sitio de una infección mayor, pero la regeneración queda limitada — la prevención (sutura adecuada, seguimiento cercano en las primeras 2 semanas) vale más que el tratamiento de la infección una vez ocurrida.</p>
      </details>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 El hilo común</h3>
    <p>Ambos casos muestran que el éxito inicial de un tratamiento (implantes bien integrados, cirugía regenerativa bien planeada) no elimina el riesgo a largo plazo. La vigilancia continua — y la prevención de complicaciones evitables como la exposición de membranas — son tan importantes como el procedimiento inicial.</p>
  </div>

  <div class="reference">
    📚 Casos clínicos basados en manejo real documentado
  </div>
</div>`,
  },
  {
    lesson_number: 6,
    order_index: 6,
    title: 'Casos 7 y 8 — El cumplimiento como predictor #1 del pronóstico',
    content_html: `<div class="lesson-container">
  <h2>⚖️ Dos pacientes, dos decisiones de cumplimiento, dos destinos muy distintos</h2>

  <div class="cases">
    <div class="case-card">
      <h3>Caso 7 — Cumplimiento excelente: transformación notable</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p><strong>Paciente:</strong> Miguel S., 45 años, varón, Estadio II, Grado C al inicio (tabaquismo 20 cig/día + HbA1c 9.0%).</p>
        <p><strong>Cambio:</strong> al mes 3 post-RAR, el paciente cesó el tabaco por completo y su HbA1c mejoró a 7.5%.</p>
        <p><strong>Resultado:</strong> respuesta a la terapia dramáticamente mejor de lo esperado; el PPS mejoró más de lo predicho y la radiografía mostró una ligera regeneración ósea espontánea.</p>
        <p><strong>Reclasificación (mes 12):</strong> Grado B probable — ya no Grado C, gracias a la mejora de los modificadores.</p>
        <p><strong>Lección:</strong> cuando el paciente cambia sus modificadores, el Grado puede cambiar, y esto transforma el pronóstico dramáticamente. La educación y la motivación tempranas son críticas.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 8 — Incumplimiento severo: fallo de la terapia</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p><strong>Paciente:</strong> Víctor R., 52 años, varón, Estadio III, Grado B, plan de tratamiento agresivo iniciado.</p>
        <p><strong>Cumplimiento:</strong> faltó a las citas de los meses 4-6; regresó al mes 7 sin previo aviso.</p>
        <p><strong>Estado al mes 7:</strong> PPS aumentó de 6mm (mes 3) a 8mm; el BOP recurrió; la radiografía mostró progresión del RBL.</p>
        <p><strong>Rediagnóstico:</strong> recurrencia de la enfermedad, posiblemente ahora Grado C dada la velocidad de la progresión durante el período sin seguimiento.</p>
        <p><strong>Manejo:</strong> re-educación intensiva, retratamiento considerado; pero dado el patrón de incumplimiento, se evaluó extracción selectiva de los dientes más comprometidos en vez de prolongar una lucha con baja probabilidad de éxito sostenido.</p>
        <p><strong>Lección:</strong> el cumplimiento es el predictor pronóstico #1 — el mismo tipo de caso clínico puede tener resultados radicalmente distintos según si el paciente se mantiene en el plan de mantenimiento. Cuando el patrón de incumplimiento es evidente y persistente, extraer selectivamente puede ser más realista que prolongar un tratamiento que no se sostendrá.</p>
      </details>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 El contraste que define el capítulo</h3>
    <p>Miguel y Víctor podrían haber tenido el mismo Estadio y Grado al inicio del tratamiento. Lo que determinó su resultado no fue la severidad inicial, sino si sostuvieron el plan. Esto es la razón por la que la comunicación honesta, la motivación y el mantenimiento accesible (recordatorios, horarios flexibles) son parte del tratamiento periodontal, no un extra.</p>
  </div>

  <div class="reference">
    📚 Casos clínicos basados en manejo real documentado
  </div>
</div>`,
  },
  {
    lesson_number: 7,
    order_index: 7,
    title: 'Síntesis de lecciones cruzadas: los 8 casos',
    content_html: `<div class="lesson-container">
  <h2>🧩 Lo que se repite a través de casos completamente distintos</h2>
  <p>Estos 10 patrones emergen consistentemente al comparar los 8 casos del capítulo — no son reglas teóricas, son observaciones repetidas en la práctica real.</p>

  <div class="evidence-cards">
    <div class="card">
      <h3>1. Los modificadores lo son todo</h3>
      <p>Casos 1, 2, 7 — si tabaco/diabetes mejoran, el pronóstico se transforma; si permanecen, el pronóstico pobre es prácticamente inevitable.</p>
    </div>
    <div class="card">
      <h3>2. La genética es permanente</h3>
      <p>Caso 2 — el genotipo de riesgo IL-1 no cambia; requiere mantenimiento cada 6-8 semanas indefinidamente, sin excepción.</p>
    </div>
    <div class="card">
      <h3>3. Estadio IV exige decisión clara</h3>
      <p>Caso 4 — no todos los dientes pueden salvarse; movilidad severa + PPS profundo suele significar extracción.</p>
    </div>
    <div class="card">
      <h3>4. Lesión endo-perio = coordinación</h3>
      <p>Caso 3 — RCT primero, periodoncia después; la radiografía seriada documenta el éxito antes de decidir cirugía.</p>
    </div>
    <div class="card">
      <h3>5. El cumplimiento predice todo</h3>
      <p>Caso 8 (vs. Caso 7) — el mismo tipo de caso, con y sin cumplimiento, produce resultados opuestos.</p>
    </div>
    <div class="card">
      <h3>6. La cirugía no siempre es necesaria</h3>
      <p>Casos 3, 4 — monitorear 6 meses post-RAR documenta si el sitio se estabiliza espontáneamente.</p>
    </div>
    <div class="card">
      <h3>7. La regeneración ósea es un "beneficio adicional"</h3>
      <p>Casos 1, 2, 6 — la meta primaria es parar la enfermedad; la regeneración es secundaria.</p>
    </div>
    <div class="card">
      <h3>8. Las comorbilidades afectan el pronóstico</h3>
      <p>Caso 4 — diabetes, osteoporosis, edad, depresión reducen la tolerancia quirúrgica y exigen conservadurismo.</p>
    </div>
    <div class="card">
      <h3>9. El mantenimiento es permanente</h3>
      <p>Todos los casos — periodontitis no se "cura", se controla. El incumplimiento del mantenimiento significa recurrencia probable.</p>
    </div>
    <div class="card">
      <h3>10. La comunicación honesta paga</h3>
      <p>Todos los casos — una expectativa realista desde el inicio produce mejor cumplimiento y satisfacción del paciente.</p>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 El hilo que conecta los 8 casos</h3>
    <p>Ningún caso siguió el "plan de libro" exactamente. Cada uno tuvo complicaciones, decisiones intermedias y ajustes basados en la respuesta real del paciente. El marco Estadio/Grado orienta el punto de partida — pero el manejo real exige reevaluar constantemente con datos clínicos, radiográficos y microbiológicos actualizados.</p>
  </div>

  <div class="reference">
    📚 Síntesis basada en los 8 casos clínicos documentados en este capítulo
  </div>
</div>`,
  },
  {
    lesson_number: 8,
    order_index: 8,
    title: 'Herramienta clínica: árbol de decisión integrado',
    content_html: `<div class="lesson-container">
  <h2>🗺️ De la teoría de los Capítulos 1-3 a la práctica de un caso nuevo</h2>
  <p>Este es el proceso completo, de principio a fin, para abordar cualquier paciente nuevo con periodontitis — integrando todo lo recorrido en el curso.</p>

  <div class="decision-tree">
    <h3>🧭 1. Diagnóstico (Estadio/Grado) — ver Capítulo 3</h3>
    <ul>
      <li>Compilar CAL, RBL, furcación, movilidad, pérdida dentaria → <span class="outcome">Estadio</span></li>
      <li>Compilar velocidad de progresión (radiografía comparativa o proxies) → <span class="outcome">Grado</span></li>
      <li>Listar todos los modificadores presentes</li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 2. Evaluación de pronóstico individual</h3>
    <ul>
      <li>Cumplimiento probable: ¿excelente, bueno, o pobre? (basado en la conversación inicial)</li>
      <li>Comorbilidades presentes que afecten la tolerancia quirúrgica</li>
      <li>Edad (afecta el riesgo quirúrgico y la velocidad de cicatrización)</li>
      <li>Motivación real del paciente para el cambio de modificadores</li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 3. Planificación de Fase 1</h3>
    <ul>
      <li>RAR: 2-4 sesiones (según Estadio/Grado)</li>
      <li>Antibióticos sistémicos: Grado A/B generalmente NO; Grado C usualmente SÍ</li>
      <li>Clorhexidina: 2-6 semanas</li>
      <li>Intervención en modificadores: iniciar desde la primera visita, no esperar</li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 4. Re-evaluación (Mes 2-4)</h3>
    <ul>
      <li>¿Cuánto mejoró el PPS?</li>
      <li>¿Cuánto se redujo el BOP?</li>
      <li>Microbiología (si se realizó): ¿Pg positivo o negativo ahora?</li>
      <li>¿Se sostiene el cumplimiento del paciente?</li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 5. Decisión de Fase 2</h3>
    <ul>
      <li>PPS ≤4mm + BOP &lt;10% → <span class="outcome">fin de Fase 1, solo monitoreo</span></li>
      <li>PPS 5-6mm + Estadio I-II → <span class="outcome">cirugía de acceso localizada</span></li>
      <li>PPS 7-9mm + Estadio III → <span class="outcome">cirugía extensiva + GTR probable</span></li>
      <li>PPS &gt;9mm + movilidad severa + Estadio IV → <span class="outcome">extracción selectiva ± cirugía de preservación</span></li>
      <li>Incumplimiento evidente → <span class="outcome">re-educación intensiva o referencia quirúrgica directa</span></li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 6. Mantenimiento (permanente)</h3>
    <ul>
      <li>Frecuencia: Grado A → 6-12 meses · Grado B → 3-4 meses · Grado C → 6-8 semanas</li>
      <li>Radiografías: anuales × 2 años, luego cada 3-5 años (Grado A) o cada 1-2 años (Grado C)</li>
      <li>Microbiología: seriada si Grado C, cada 6-12 meses</li>
      <li>Re-evaluación anual: ¿cumplimiento sostenido? ¿modificadores controlados? ¿radiografía estable?</li>
    </ul>
  </div>

  <div class="key-principle">
    <h3>🎯 Cierre del curso</h3>
    <p>El sistema AAP/EFP 2018 (Capítulos 1-3) da el lenguaje y la estructura. Los 8 casos de este capítulo muestran que el manejo real nunca es lineal — hay complicaciones, decisiones intermedias, pacientes que cambian y pacientes que no. La destreza clínica está en aplicar el marco con criterio, reevaluando siempre con los datos reales del paciente que tienes enfrente, no con el caso "de libro".</p>
  </div>

  <div class="reference">
    📚 Herramienta de síntesis basada en AAP/EFP 2018 y los 8 casos clínicos de este capítulo
  </div>
</div>`,
  },
];

export const pretestQuestions = [
  {
    question_text: '¿Toda pérdida de inserción clínica debe atribuirse automáticamente a periodontitis?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Sí, toda pérdida de inserción clínica siempre indica periodontitis' },
      { key: 'b', text: 'No, primero deben descartarse causas no periodontales como trauma, fractura radicular o lesión endodóntica' },
      { key: 'c', text: 'Sí, siempre que exista sangrado al sondaje' },
      { key: 'd', text: 'No, la pérdida de inserción solo importa si hay movilidad dental' },
    ],
    correct_answer: 'b',
    explanation: 'Para diagnosticar periodontitis no basta con encontrar pérdida de inserción clínica. Esa pérdida no debe poder explicarse por causas no periodontales, como fractura radicular, infección endodóntica, trauma quirúrgico o traumático, u otros factores no periodontales. Por eso se necesita juicio clínico antes de clasificar al paciente como periodontitis.',
    order_index: 1,
  },
  {
    question_text: '¿Cuándo un paciente tratado sigue siendo considerado paciente con periodontitis?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Cuando tuvo periodontitis previamente, aunque después del tratamiento mejore clínicamente' },
      { key: 'b', text: 'Solo si todavía presenta bolsas mayores de 6mm' },
      { key: 'c', text: 'Solo si pierde dientes después del tratamiento' },
      { key: 'd', text: 'Nunca, porque al mejorar pasa automáticamente a ser paciente sano' },
    ],
    correct_answer: 'a',
    explanation: 'Según AAP/EFP 2018, el estadio inicialmente asignado se conserva incluso después de la mejoría post-terapia. Si el paciente fue diagnosticado con periodontitis, sigue siendo un paciente con antecedente de periodontitis y debe manejarse en mantenimiento considerando su estadio previo. El estadio puede subir si empeora, pero no debe retroceder automáticamente después del tratamiento.',
    order_index: 2,
  },
  {
    question_text: '¿Qué dificultad aparece al diferenciar Estadio III de Estadio IV?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Que ambos estadios siempre tienen pérdida ósea menor al 15%' },
      { key: 'b', text: 'Que ambos pueden presentar periodontitis severa, por lo que debe evaluarse si está amenazada la supervivencia de dientes individuales o de toda la dentición' },
      { key: 'c', text: 'Que el estadio IV no presenta pérdida dentaria' },
      { key: 'd', text: 'Que el estadio III siempre requiere rehabilitación multidisciplinaria compleja' },
    ],
    correct_answer: 'b',
    explanation: 'Diferenciar Estadio III de IV exige una valoración clínica más fina. Ambos pueden ser severos, pero el Estadio IV implica mayor complejidad general, amenaza para la dentición completa (no solo dientes individuales), disfunción masticatoria, colapso de mordida y necesidad de rehabilitación oral extensa y multidisciplinaria.',
    order_index: 3,
  },
  {
    question_text: '¿Qué problemas genera atribuir sin cuidado la pérdida dentaria a la periodontitis?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Puede sobrestimar el estadio y clasificar al paciente como más severo de lo que realmente es' },
      { key: 'b', text: 'Siempre disminuye el estadio del paciente' },
      { key: 'c', text: 'No afecta la clasificación periodontal' },
      { key: 'd', text: 'Solo modifica el grado, pero nunca el estadio' },
    ],
    correct_answer: 'a',
    explanation: 'La pérdida dentaria atribuible a periodontitis es un criterio clave para diferenciar estadios avanzados (III vs. IV). Si se atribuyen dientes perdidos a periodontitis sin confirmar la causa, se puede elevar incorrectamente el estadio. Un diente pudo haberse perdido por caries, fractura, razones protésicas, trauma u otros factores no periodontales.',
    order_index: 4,
  },
  {
    question_text: '¿Por qué las pseudobolsas pueden inducir errores de clasificación?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Porque pueden aumentar la profundidad de sondaje sin representar verdadera pérdida de inserción clínica' },
      { key: 'b', text: 'Porque siempre indican furcación clase III' },
      { key: 'c', text: 'Porque eliminan la necesidad de medir CAL' },
      { key: 'd', text: 'Porque solo aparecen en pacientes con estadio IV' },
    ],
    correct_answer: 'a',
    explanation: 'Las pseudobolsas pueden hacer que el sondaje parezca más profundo por aumento del margen gingival (inflamación), pero sin pérdida real de inserción. Si el clínico interpreta solo la profundidad de sondaje sin valorar CAL, CEJ y pérdida ósea radiográfica, se puede clasificar erróneamente al paciente como periodontitis o asignarle un estadio más avanzado. Clave: PPS no es igual a CAL en todos los casos.',
    order_index: 5,
  },
];

export const posttestQuestions = [
  {
    question_text: '¿Cuál de las siguientes opciones menciona tres situaciones en las que la pérdida de inserción clínica NO debe atribuirse automáticamente a periodontitis?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Trauma, fractura radicular y lesión endodóntica' },
      { key: 'b', text: 'Sangrado al sondaje, placa bacteriana y cálculo supragingival' },
      { key: 'c', text: 'Edad avanzada, cepillado dental y uso de seda dental' },
      { key: 'd', text: 'Movilidad dental, halitosis y pigmentaciones extrínsecas' },
    ],
    correct_answer: 'a',
    explanation: 'No toda pérdida de inserción clínica equivale automáticamente a periodontitis. El clínico debe primero descartar causas no periodontales: trauma (oclusal, instrumental, quirúrgico), fractura radicular (visible radiográficamente) y lesión/infección endodóntica (requiere TCR, no RAR solamente). Otras causas posibles: resorción radicular, caries cervicales/radiculares, razones protésicas previas.',
    order_index: 1,
  },
  {
    question_text: '¿Cuál es la diferencia entre un paciente con periodonto reducido sano y un paciente con periodontitis activa?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'El periodonto reducido sano presenta menor soporte periodontal, pero sin signos actuales de inflamación o progresión activa; la periodontitis activa presenta pérdida de inserción asociada a inflamación y posible progresión' },
      { key: 'b', text: 'El periodonto reducido sano siempre tiene bolsas profundas y supuración' },
      { key: 'c', text: 'La periodontitis activa no presenta pérdida de inserción clínica' },
      { key: 'd', text: 'No existe diferencia clínica entre ambos' },
    ],
    correct_answer: 'a',
    explanation: 'Periodonto reducido sano: historia de periodontitis previamente tratada, menor soporte periodontal residual, sin inflamación actual (mínimo BOP), sin progresión radiográfica, radiografía estable. Periodontitis activa: pérdida de inserción actual, signos de inflamación (BOP, eritema), posible progresión de CAL, radiografía que muestra cambios, bolsas activas.',
    order_index: 2,
  },
  {
    question_text: '¿Por qué una pseudobolsa puede inducir un error de estadificación?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Porque aumenta la profundidad de sondaje sin necesariamente indicar pérdida real de inserción clínica' },
      { key: 'b', text: 'Porque siempre representa pérdida ósea vertical severa' },
      { key: 'c', text: 'Porque confirma automáticamente un estadio IV' },
      { key: 'd', text: 'Porque elimina la necesidad de evaluar radiografías' },
    ],
    correct_answer: 'a',
    explanation: 'La pseudobolsa puede dar una profundidad de sondaje aumentada por desplazamiento coronal del margen gingival o por inflamación (edema), pero sin verdadera pérdida de inserción. Si el clínico se guía solo por PPS y no evalúa CAL, CEJ y pérdida ósea radiográfica, puede sobrestimar el estadio. Clave: PPS no es igual a CAL — siempre medir ambos.',
    order_index: 3,
  },
  {
    question_text: '¿Cuál es la pregunta funcional clave para diferenciar Estadio III de Estadio IV?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: '¿El paciente presenta sangrado al sondaje en más del 10% de los sitios?' },
      { key: 'b', text: '¿La enfermedad amenaza solo dientes individuales o pone en riesgo la dentición completa y requiere rehabilitación compleja?' },
      { key: 'c', text: '¿El paciente usa cepillo eléctrico o manual?' },
      { key: 'd', text: '¿El paciente tiene pérdida dental por periodontitis?' },
    ],
    correct_answer: 'b',
    explanation: 'La diferencia entre Estadio III y IV no depende solo de la cantidad de pérdida ósea. El clínico debe preguntarse si la periodontitis amenaza dientes individuales o la supervivencia de toda la dentición. Estadio III: afecta dientes individuales, severidad moderada, preservación posible sin rehabilitación extensa. Estadio IV: afecta la dentición completa, requiere rehabilitación oral extensa y multidisciplinaria (cirugía + prótesis + implantes), disfunción masticatoria/colapso de mordida.',
    order_index: 4,
  },
  {
    question_text: '¿Cómo debe actuar el clínico cuando la causa de la pérdida dentaria no puede establecerse con certeza razonable?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Debe atribuirla automáticamente a periodontitis para no subestimar el caso' },
      { key: 'b', text: 'Debe usar juicio clínico, revisar historia, radiografías y contexto, y evitar atribuirla a periodontitis si no hay evidencia razonable' },
      { key: 'c', text: 'Debe clasificar siempre al paciente como Estadio IV' },
      { key: 'd', text: 'Debe ignorar la pérdida dentaria en todos los casos' },
    ],
    correct_answer: 'b',
    explanation: 'La pérdida dentaria atribuible a periodontitis es un criterio clave para diferenciar estadios avanzados (especialmente Estadio III vs. IV). Si la causa no está clara, el clínico debe revisar la historia dental completa, evaluar radiografías antiguas, buscar patrones de pérdida ósea, considerar otras causas (caries, trauma, razones protésicas, fractura) y evitar la atribución automática a periodontitis sin evidencia. De lo contrario, puede sobrestimar la severidad del caso y modificar incorrectamente el pronóstico y el plan terapéutico.',
    order_index: 5,
  },
];
