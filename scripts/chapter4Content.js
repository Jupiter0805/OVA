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
    <li><strong>Dental:</strong> higiene deficiente ("cepillo cuando me acuerdo; floss nunca"); última limpieza hace 4 años; "nunca tuve problemas de encías hasta hace 1 año"</li>
    <li><strong>Hábitos:</strong> tabaquismo 22-25 cigarrillos/día × 30 años = 30 paquetes-año; estrés laboral alto</li>
  </ul>

  <h3>Examen clínico (Mes 0)</h3>
  <table>
    <tr><th>Parámetro</th><th>Hallazgo</th></tr>
    <tr><td>PPD máximo</td><td>9-10mm posterior</td></tr>
    <tr><td>CAL máximo</td><td>7-8mm</td></tr>
    <tr><td>BOP</td><td>75% de sitios</td></tr>
    <tr><td>Supuración</td><td>Presente, molares</td></tr>
    <tr><td>Movilidad</td><td>Grado 2 incisivos inferiores; Grado 1 molares</td></tr>
    <tr><td>Furcación</td><td>Grado 2 superiores; Grado 2-3 inferiores</td></tr>
  </table>
  <p><strong>Radiografía:</strong> RBL 55-60%, patrón circunferencial en posteriores con defectos angulares 2-3 paredes. Sin radiografía comparativa disponible.</p>

  <div class="calc-box">
    <p><strong>Estimación de Grade sin radiografía histórica (score de modificadores)</strong></p>
    <p class="formula">Tabaquismo fuerte (+2) + diabetes mal controlada (+1.5) + microbiota presumida Pg+ (+1) = 4.5</p>
    <p>Score ≥1.5 → <span class="result">Grade C</span></p>
  </div>

  <div class="definition-box">
    <p><strong>Diagnóstico:</strong> Periodontitis Stage IV, Grade C. Modificadores: tabaquismo fuerte, diabetes tipo 2 no controlada, estrés moderado, higiene deficiente. Pronóstico inicial con el cumplimiento actual: muy pobre.</p>
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
      <p>SRP en 2 sesiones + clorhexidina 0.12%. Microbiología: Pg+ (35%), Tf-, Td- → azitromicina 500mg TID × 4 semanas. Endocrinología confirma HbA1c 8.9% e intensifica tratamiento (metformina + sitagliptina). Paciente reduce a 10 cigarrillos/día.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Mes 3 — Re-evaluación</h3>
      <p>PPD mejora 1-2mm; BOP 75%→40-50%; movilidad mejora a Grado 1; supuración resuelta por completo. Excelente respuesta a Fase 1, pero PPD posterior sigue en 7-8mm → Fase 2 quirúrgica indicada.</p>
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
    <tr><td>PPD máximo</td><td>9-10mm</td><td>4-5mm</td></tr>
    <tr><td>BOP</td><td>75%</td><td>&lt;5%</td></tr>
    <tr><td>Movilidad</td><td>Grado 2</td><td>Grado 0</td></tr>
    <tr><td>Supuración / halitosis</td><td>Presentes</td><td>Ausentes</td></tr>
  </table>
  <p><strong>Radiografía:</strong> RBL estable 55-60% (enfermedad detenida; sin más progresión, sin regeneración significativa).</p>

  <div class="key-principle">
    <h3>🎯 Reclasificación a los 24 meses</h3>
    <p>De <strong>Stage IV, Grade C</strong> a <strong>Stage IV, Grade A probable</strong>: tabaquismo cesado, HbA1c en objetivo, RBL estable (&lt;1%/año) y Pg negativizado. El pronóstico de preservación pasó de 20-40% a &gt;90%.</p>
  </div>

  <h3>Lecciones clave</h3>
  <ul class="checklist">
    <li>Los modificadores lo son todo: un Grade C puede transformarse en Grade A si el paciente cambia tabaco y control glicémico</li>
    <li>La charla honesta inicial fue el motivador decisivo para la cesación de tabaco</li>
    <li>La coordinación médica (endocrinología) fue tan crítica como la cirugía misma</li>
    <li>La regeneración ósea es un "bonus", no la meta — parar la enfermedad es el éxito real en Grade C severo</li>
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
    <li><strong>Dental:</strong> higiene excelente autorreportada (cepillado 3×/día, floss diario); "siempre dientes perfectos"</li>
    <li><strong>Antecedente familiar crítico:</strong> hermana diagnosticada con periodontitis agresiva a los 24 años; padre con "problemas de encías" en los 40s, nunca tratado</li>
    <li><strong>Hábitos:</strong> no fuma, estrés bajo, actividad física regular</li>
  </ul>

  <h3>Examen clínico (Mes 0)</h3>
  <table>
    <tr><th>Parámetro</th><th>Hallazgo</th></tr>
    <tr><td>PPD máximo</td><td>8-9mm, molares bilaterales (patrón localizado)</td></tr>
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
    <p><strong>Diagnóstico:</strong> Periodontitis Stage III (CAL 6-7mm + furcación Grado 2, que escala automáticamente a Stage III), Grade C (edad joven + Stage III = "edad mismatch", antecedente familiar, Pg++, progresión clínica documentada en 6-12 meses). Explicada por genética IL-1 de alto riesgo heredada del padre + microbiota agresiva.</p>
  </div>

  <h3>Plan y evolución</h3>
  <div class="timeline-interactive">
    <div class="timeline-item">
      <h3>Meses 1-3 — Fase no quirúrgica intensiva</h3>
      <p>SRP en 2 sesiones + clorhexidina 6 semanas + azitromicina 500mg TID × 4 semanas (iniciada de inmediato dado Pg++ y Grade C). Mes 3: PPD 8-9mm → 6-7mm, BOP 60%→30%, microbiología Pg reducida de 55% a 30%.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Meses 4-5 — Cirugía</h3>
      <p>Colgajo de acceso bilateral en molares inferiores (con GTR + factores de crecimiento rhPDGF-BB dado defectos favorables) y superiores (GTR sin factores de crecimiento). Aloinjerto + β-TCP.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Mes 6 — Post-quirúrgico</h3>
      <p>PPD 5-6mm, BOP 10-15%, movilidad Grado 0 (recuperación completa desde Grado 1).</p>
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
        <p>Microbiología a los 9 meses mostró Pg+ (25%) nuevamente, tras haber sido negativo. Compliance de higiene confirmada como excelente — la recolonización probablemente vino de reservorios no tratados (amígdalas, dorso de lengua). Se decidió NO repetir antibióticos (riesgo de resistencia); se intensificó el SRP y se agregó irrigador oral con clorhexidina diluida. Pg volvió a negativizar al mes 12.</p>
      </details>
    </div>
  </div>

  <h3>Resultados a 24 meses</h3>
  <table>
    <tr><th>Parámetro</th><th>Mes 0</th><th>Mes 24</th></tr>
    <tr><td>PPD máximo</td><td>8-9mm</td><td>5-6mm</td></tr>
    <tr><td>BOP</td><td>60%</td><td>&lt;5%</td></tr>
    <tr><td>Furcación</td><td>Grado 2</td><td>Grado 1</td></tr>
    <tr><td>Movilidad</td><td>Grado 1</td><td>Grado 0</td></tr>
  </table>
  <p>Regeneración ósea observada: solo ~10% (vs. 20-40% teórico esperado en defectos favorables) — atribuible a la severidad de los defectos y la historia agresiva de la enfermedad.</p>

  <div class="key-principle">
    <h3>🎯 Reclasificación a los 24 meses</h3>
    <p>De <strong>Stage III, Grade C</strong> a <strong>Stage III, Grade B</strong> (microbiología transformada, progresión detenida). <strong>Pero la genética IL-1 de alto riesgo no cambia</strong> — a diferencia del Caso 1, esta paciente requiere mantenimiento permanente cada 6-8 semanas indefinidamente, sin poder "graduarse" a intervalos anuales.</p>
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
    <tr><td>Mesial</td><td>PPD 8mm, CAL 7mm, BOP+</td><td rowspan="4">Prueba térmica <strong>negativa</strong>; prueba eléctrica <strong>negativa</strong>; percusión sensible; trayecto fistuloso lingual-distal detectado</td></tr>
    <tr><td>Distal</td><td>PPD 7mm, CAL 6mm, BOP+</td></tr>
    <tr><td>Bucal</td><td>PPD 5mm, sin BOP</td></tr>
    <tr><td>Lingual</td><td>PPD 4mm, sin BOP</td></tr>
  </table>
  <p><strong>Radiografía:</strong> radiolucencia perirradicular apical de 4-5mm (típica endodóntica) + RBL horizontal generalizado 30-35% en la zona (periodontal). Furcación Grado 0-1, preservada.</p>

  <div class="decision-tree">
    <h3>🧭 ¿Lesión endo primaria, perio primaria, o combinada?</h3>
    <ul>
      <li>Vitalidad pulpar negativa → <span class="outcome">sugiere origen endodóntico</span></li>
      <li>PPD localizado 7-8mm solo mesial/distal (no circunferencial) + CAL real → <span class="outcome">sugiere componente periodontal genuino</span></li>
      <li>Radiolucencia apical + RBL horizontal generalizado en el resto de la boca → <span class="outcome">ambos procesos coexisten</span></li>
    </ul>
  </div>

  <div class="definition-box">
    <p><strong>Diagnóstico:</strong> lesión combinada endodóntico-periodontal en el 16 — necrosis pulpar primaria con radiolucencia apical y trayecto fistuloso, sobre una periodontitis crónica generalizada de base (Stage II, Grade A en el resto de la dentición: RBL 25-30%, PPD 5-6mm posterior, BOP ~40%).</p>
  </div>

  <h3>Plan y evolución</h3>
  <div class="timeline-interactive">
    <div class="timeline-item">
      <h3>Semana 1 — Endodoncia primero</h3>
      <p>La pulpa necrótica se trata antes que cualquier cirugía periodontal agresiva: sin tratar el origen apical, el manejo periodontal solo no resolverá la radiolucencia.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Meses 1-2 — RCT + SRP en paralelo</h3>
      <p>Tratamiento de conductos completo en el 16 (obturación con gutapercha y sellador libre de eugenol) simultáneo con SRP general del resto de la dentición. Post-RCT, el PPD del 16 sigue en 8-9mm mesial/distal — esperado, el RCT no resuelve el defecto periodontal.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Mes 3 — Decisión: monitoreo, no cirugía</h3>
      <p>La radiolucencia apical es pequeña, el RCT quedó bien adaptado, la furcación está preservada y el paciente prefiere el abordaje conservador. Se opta por monitorear la cicatrización antes de decidir cirugía perio + apicoectomía.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Meses 3-12 — Monitoreo</h3>
      <p>Mes 6: radiolucencia apical disminuyendo, PPD M=6/D=5mm. Mes 12: radiolucencia esencialmente resuelta, PPD M=5/D=4mm. Se descarta la cirugía — el diente respondió bien.</p>
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
        <p>Con la radiolucencia apical resuelta pero un PPD residual de 5mm mesial/distal, se decide NO operar: el defecto es tejido cicatricial de la lesión endo-perio (potencial regenerativo limitado, distinto de un defecto perio primario), el PPD es funcional, y la radiografía muestra estabilidad. Se opta por monitoreo permanente en vez de cirugía.</p>
      </details>
    </div>
  </div>

  <h3>Resultados a 24 meses (diente 16)</h3>
  <table>
    <tr><th>Parámetro</th><th>Mes 0</th><th>Mes 24</th></tr>
    <tr><td>PPD mesial / distal</td><td>8 / 7mm</td><td>5 / 4mm</td></tr>
    <tr><td>CAL mesial / distal</td><td>7 / 6mm</td><td>4 / 3mm</td></tr>
    <tr><td>Movilidad</td><td>Grado 1</td><td>Grado 0</td></tr>
    <tr><td>Radiolucencia apical</td><td>4-5mm</td><td>Ausente</td></tr>
  </table>

  <h3>Lecciones clave</h3>
  <ul class="checklist">
    <li>La prueba de vitalidad pulpar es el diferenciador clave entre origen endo, perio, o combinado</li>
    <li>En lesiones combinadas: RCT primero, periodoncia después — nunca cirugía perio agresiva antes de resolver el origen endodóntico</li>
    <li>No toda lesión endo-perio necesita cirugía periodontal: si la radiolucencia resuelve y el PPD mejora, el monitoreo es suficiente</li>
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
    title: 'Caso 4 — Stage IV: decisión de preservación vs. extracción',
    content_html: `<div class="lesson-container">
  <h2>🦷 Teresa G., 61 años, jubilada</h2>
  <p><strong>Motivo de consulta:</strong> "He perdido varios dientes; no quiero perder más; ¿puedo salvar lo que me queda?" Derivada por su prostodoncista, que planea una rehabilitación y requiere evaluación periodontal previa.</p>

  <h3>Historia clínica</h3>
  <ul>
    <li><strong>Médica:</strong> diabetes tipo 2 (HbA1c 8.7%, subóptima), hipertensión controlada, <strong>osteoporosis</strong> (T-score -2.8, en alendronato), depresión crónica (en sertralina)</li>
    <li><strong>Dental:</strong> ya perdió 8 dientes por periodontitis en los últimos 10 años (17, 27, 37, 47, 18, 28 y otros); SRP hace 10 años sin seguimiento posterior</li>
    <li><strong>Hábitos:</strong> ex-fumadora (cesó hace 8 años); sedentaria</li>
  </ul>

  <h3>Examen clínico (Mes 0) — 20 dientes presentes</h3>
  <table>
    <tr><th>Parámetro</th><th>Hallazgo</th></tr>
    <tr><td>PPD máximo</td><td>11-12mm (región anterosuperior 11-12-13)</td></tr>
    <tr><td>CAL máximo</td><td>8-9mm</td></tr>
    <tr><td>BOP</td><td>70%</td></tr>
    <tr><td>Movilidad</td><td>Grado 2 en 11, 12, 13; Grado 1 en molares</td></tr>
    <tr><td>Furcación</td><td>Grado 2-3 en molares presentes, bilateral</td></tr>
  </table>
  <p><strong>Radiografía:</strong> RBL 55-70% generalizado, hueso osteoporótico. Sin radiografía comparativa útil (demasiado antigua).</p>

  <div class="calc-box">
    <p><strong>Estimación de Grade</strong></p>
    <p class="formula">Diabetes subóptima (+1.5) + depresión crónica (+1) + ex-fumadora (+0) + pérdida lenta documentada (~1.5-2 dientes/5 años ≈ 3%/año)</p>
    <p><span class="result">Grade B probable</span> (no Grade C — la progresión histórica es lenta, no rápida)</p>
  </div>

  <div class="definition-box">
    <p><strong>Diagnóstico:</strong> Periodontitis Stage IV (CAL 8-9mm + RBL 55-70% + 8 dientes perdidos por periodontitis), Grade B. Pronóstico: 40-60% de preservación — la decisión central del plan es <strong>cuáles</strong> dientes preservar y cuáles extraer.</p>
  </div>

  <h3>Evaluación diente por diente</h3>
  <table>
    <tr><th>Diente(s)</th><th>Hallazgo clave</th><th>Decisión</th></tr>
    <tr><td>11, 12</td><td>PPD 11-12mm, movilidad Grado 2, sin furcación</td><td>Borderline — se intenta preservar inicialmente</td></tr>
    <tr><td>13-16, 21-25</td><td>PPD 6-10mm, movilidad Grado 0-1</td><td>Preservar</td></tr>
    <tr><td>Incisivos y premolares inferiores</td><td>PPD 5-7mm, movilidad Grado 0-1</td><td>Preservar</td></tr>
    <tr><td>36, 46</td><td>PPD 7-8mm, furcación Grado 2-3, movilidad Grado 1</td><td>Borderline — evaluar tras SRP antes de decidir</td></tr>
  </table>

  <h3>Plan y evolución</h3>
  <div class="timeline-interactive">
    <div class="timeline-item">
      <h3>Meses 1-3 — Fase no quirúrgica</h3>
      <p>SRP en 3 sesiones + clorhexidina + educación adaptada (cepillo eléctrico de cerdas suaves, dado la osteoporosis y movilidad; picks interdentales en vez de floss). Referencia a endocrinología (control de HbA1c) y a psicología (seguimiento de la depresión). Microbiología: Pg+ (40%) → azitromicina 4 semanas.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Mes 4 — Decisión diente por diente</h3>
      <p>11 y 12: PPD sigue en 10-11mm pese al SRP, movilidad Grado 2 persistente → <strong>extracción</strong> (mejor pronóstico con implante que con cirugía compleja). 36 y 46: PPD mejoró a 6-7mm → se decide monitorear 6 meses más antes de decidir cirugía vs. extracción, dado el riesgo quirúrgico elevado (osteoporosis + edad + HbA1c).</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Mes 5 — Extracciones</h3>
      <p>Extracción atraumática de 11 y 12 con prótesis interina mientras cicatriza el hueso (6-12 meses) antes de colocar implantes.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>Meses 6-12 — Mantenimiento intensivo</h3>
      <p>36 y 46 se estabilizan en PPD 6mm sin necesidad de cirugía — la extracción se difiere indefinidamente. Mes 12: éxito documentado.</p>
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
      <h3>Compliance subóptimo (Meses 12-18)</h3>
      <details>
        <summary>Ver manejo</summary>
        <p>La paciente faltó a varias citas de mantenimiento por recurrencia de la depresión y confusión con el calendario tras la jubilación. Se intensificó la dosis de SSRI, se implementaron recordatorios telefónicos automáticos y se involucró a la familia (la hija acompaña a las citas). Compliance mejoró a &gt;90% desde el mes 18.</p>
      </details>
    </div>
  </div>

  <h3>Resultados a 24 meses</h3>
  <table>
    <tr><th>Parámetro</th><th>Mes 0</th><th>Mes 24</th></tr>
    <tr><td>Dientes naturales / implantes</td><td>20 / 0</td><td>18 / 3</td></tr>
    <tr><td>PPD máximo</td><td>12mm</td><td>6mm</td></tr>
    <tr><td>BOP</td><td>70%</td><td>&lt;5%</td></tr>
    <tr><td>Movilidad</td><td>Grado 2</td><td>Grado 0</td></tr>
    <tr><td>36 / 46</td><td>PPD 7-8mm, furcación Gr. 2-3</td><td>PPD 6mm, estabilizados sin cirugía</td></tr>
  </table>

  <div class="key-principle">
    <h3>🎯 Extracción selectiva no es un fracaso</h3>
    <p>En Stage IV, no todos los dientes pueden salvarse. Extraer los dientes "sin esperanza" (movilidad severa + PPD &gt;10mm) para rehabilitar con implantes fue mejor decisión clínica que forzar una cirugía compleja en una paciente de 61 años con osteoporosis y diabetes. Al mismo tiempo, molares con hallazgos similares (36, 46) se estabilizaron sin cirugía — cada diente se evalúa individualmente, no por regla general.</p>
  </div>

  <h3>Lecciones clave</h3>
  <ul class="checklist">
    <li>Stage IV exige una decisión clara de preservación vs. extracción, diente por diente</li>
    <li>Movilidad Grado 2 en incisivos anteriores con PPD extrema suele predecir mejor resultado con implante que con cirugía de preservación</li>
    <li>No todo PPD &gt;6mm requiere cirugía — el monitoreo post-SRP de 6 meses puede documentar estabilización espontánea</li>
    <li>Las comorbilidades (diabetes, osteoporosis, depresión) reducen la tolerancia quirúrgica y justifican el conservadurismo</li>
    <li>La coordinación con prostodoncia es crítica: los implantes no pueden colocarse antes de que cicatrice el hueso post-extracción</li>
    <li>Incluso un paciente motivado puede fallar el cumplimiento por depresión — el apoyo psicológico y los recordatorios son parte del plan periodontal</li>
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
        <p><strong>Paciente:</strong> Juan P., 58 años, varón, historia de periodontitis Grade B resuelta hace 5 años, con 3 implantes molares.</p>
        <p><strong>Presentación (mes 60 desde los implantes):</strong> BOP peri-implantar en el implante 36; radiografía muestra pérdida ósea peri-implantar de 3-4mm en 6 meses.</p>
        <p><strong>Diagnóstico:</strong> peri-implantitis incipiente. Etiología: higiene deficiente peri-implantar (dificultad de acceso) + microbiota similar a la periodontitis previa (Pg+).</p>
        <p><strong>Plan:</strong> SRP peri-implantar exhaustivo con puntas ultrasónicas no metálicas; microbiología confirma Pg+ → azitromicina; cirugía de colgajo de acceso con debridement de biofilm y aplicación local de clorhexidina (sin GTR — contraindicada en implantes); mantenimiento cada 6-8 semanas permanente.</p>
        <p><strong>Resultado (24m):</strong> peri-implantitis controlada, BOP resuelto, PPD peri-implantar mejorado a 3-4mm, radiografía estable sin más pérdida ósea.</p>
        <p><strong>Lección:</strong> la periodontitis previa es un factor de riesgo alto para peri-implantitis — la misma microbiota (Pg) que causó la enfermedad natural puede atacar los implantes, y estos requieren vigilancia más frecuente que los dientes naturales.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 6 — Complicación de GTR: membrana expuesta e infectada</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p><strong>Paciente:</strong> Gabriela T., 44 años, mujer, Stage II-III, Grade B.</p>
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
        <p><strong>Paciente:</strong> Miguel S., 45 años, varón, Stage II, Grade C al inicio (tabaquismo 20 cig/día + HbA1c 9.0%).</p>
        <p><strong>Cambio:</strong> al mes 3 post-SRP, el paciente cesó el tabaco por completo y su HbA1c mejoró a 7.5%.</p>
        <p><strong>Resultado:</strong> respuesta a la terapia dramáticamente mejor de lo esperado; el PPD mejoró más de lo predicho y la radiografía mostró una ligera regeneración ósea espontánea.</p>
        <p><strong>Reclasificación (mes 12):</strong> Grade B probable — ya no Grade C, gracias a la mejora de los modificadores.</p>
        <p><strong>Lección:</strong> cuando el paciente cambia sus modificadores, el Grade puede cambiar, y esto transforma el pronóstico dramáticamente. La educación y la motivación tempranas son críticas.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 8 — Non-compliance severo: fallo de la terapia</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p><strong>Paciente:</strong> Víctor R., 52 años, varón, Stage III, Grade B, plan de tratamiento agresivo iniciado.</p>
        <p><strong>Cumplimiento:</strong> faltó a las citas de los meses 4-6; regresó al mes 7 sin previo aviso.</p>
        <p><strong>Estado al mes 7:</strong> PPD aumentó de 6mm (mes 3) a 8mm; el BOP recurrió; la radiografía mostró progresión del RBL.</p>
        <p><strong>Rediagnóstico:</strong> recurrencia de la enfermedad, posiblemente ahora Grade C dada la velocidad de la progresión durante el período sin seguimiento.</p>
        <p><strong>Manejo:</strong> re-educación intensiva, retratamiento considerado; pero dado el patrón de incumplimiento, se evaluó extracción selectiva de los dientes más comprometidos en vez de prolongar una lucha con baja probabilidad de éxito sostenido.</p>
        <p><strong>Lección:</strong> el cumplimiento es el predictor pronóstico #1 — el mismo tipo de caso clínico puede tener resultados radicalmente distintos según si el paciente se mantiene en el plan de mantenimiento. Cuando el patrón de incumplimiento es evidente y persistente, extraer selectivamente puede ser más realista que prolongar un tratamiento que no se sostendrá.</p>
      </details>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 El contraste que define el capítulo</h3>
    <p>Miguel y Víctor podrían haber tenido el mismo Stage y Grade al inicio del tratamiento. Lo que determinó su resultado no fue la severidad inicial, sino si sostuvieron el plan. Esto es la razón por la que la comunicación honesta, la motivación y el mantenimiento accesible (recordatorios, horarios flexibles) son parte del tratamiento periodontal, no un extra.</p>
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
      <h3>3. Stage IV exige decisión clara</h3>
      <p>Caso 4 — no todos los dientes pueden salvarse; movilidad severa + PPD profundo suele significar extracción.</p>
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
      <p>Casos 3, 4 — monitorear 6 meses post-SRP documenta si el sitio se estabiliza espontáneamente.</p>
    </div>
    <div class="card">
      <h3>7. La regeneración ósea es un "bonus"</h3>
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
    <p>Ningún caso siguió el "plan de libro" exactamente. Cada uno tuvo complicaciones, decisiones intermedias y ajustes basados en la respuesta real del paciente. El framework Stage/Grade orienta el punto de partida — pero el manejo real exige reevaluar constantemente con datos clínicos, radiográficos y microbiológicos actualizados.</p>
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
    <h3>🧭 1. Diagnóstico (Stage/Grade) — ver Capítulo 3</h3>
    <ul>
      <li>Compilar CAL, RBL, furcación, movilidad, pérdida dentaria → <span class="outcome">Stage</span></li>
      <li>Compilar velocidad de progresión (radiografía comparativa o proxies) → <span class="outcome">Grade</span></li>
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
      <li>SRP: 2-4 sesiones (según Stage/Grade)</li>
      <li>Antibióticos sistémicos: Grade A/B generalmente NO; Grade C usualmente SÍ</li>
      <li>Clorhexidina: 2-6 semanas</li>
      <li>Intervención en modificadores: iniciar desde la primera visita, no esperar</li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 4. Re-evaluación (Mes 2-4)</h3>
    <ul>
      <li>¿Cuánto mejoró el PPD?</li>
      <li>¿Cuánto se redujo el BOP?</li>
      <li>Microbiología (si se realizó): ¿Pg positivo o negativo ahora?</li>
      <li>¿Se sostiene el cumplimiento del paciente?</li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 5. Decisión de Fase 2</h3>
    <ul>
      <li>PPD ≤4mm + BOP &lt;10% → <span class="outcome">fin de Fase 1, solo monitoreo</span></li>
      <li>PPD 5-6mm + Stage I-II → <span class="outcome">cirugía de acceso localizada</span></li>
      <li>PPD 7-9mm + Stage III → <span class="outcome">cirugía extensiva + GTR probable</span></li>
      <li>PPD &gt;9mm + movilidad severa + Stage IV → <span class="outcome">extracción selectiva ± cirugía de preservación</span></li>
      <li>Incumplimiento evidente → <span class="outcome">re-educación intensiva o referencia quirúrgica directa</span></li>
    </ul>
  </div>

  <div class="decision-tree">
    <h3>🧭 6. Mantenimiento (permanente)</h3>
    <ul>
      <li>Frecuencia: Grade A → 6-12 meses · Grade B → 3-4 meses · Grade C → 6-8 semanas</li>
      <li>Radiografías: anuales × 2 años, luego cada 3-5 años (Grade A) o cada 1-2 años (Grade C)</li>
      <li>Microbiología: seriada si Grade C, cada 6-12 meses</li>
      <li>Re-evaluación anual: ¿cumplimiento sostenido? ¿modificadores controlados? ¿radiografía estable?</li>
    </ul>
  </div>

  <div class="key-principle">
    <h3>🎯 Cierre del curso</h3>
    <p>El sistema AAP/EFP 2018 (Capítulos 1-3) da el lenguaje y la estructura. Los 8 casos de este capítulo muestran que el manejo real nunca es lineal — hay complicaciones, decisiones intermedias, pacientes que cambian y pacientes que no. La destreza clínica está en aplicar el framework con criterio, reevaluando siempre con los datos reales del paciente que tienes enfrente, no con el caso "de libro".</p>
  </div>

  <div class="reference">
    📚 Herramienta de síntesis basada en AAP/EFP 2018 y los 8 casos clínicos de este capítulo
  </div>
</div>`,
  },
];

export const pretestQuestions = [
  {
    question_text: 'En el Caso 1 (Carlos M.), el diagnóstico inicial fue Stage IV, Grade C. ¿Qué cambió para que se reclasificara a Grade A a los 24 meses?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'El Stage mejoró tras la cirugía' },
      { key: 'b', text: 'Los modificadores (tabaquismo, diabetes) se controlaron y la progresión se detuvo' },
      { key: 'c', text: 'Se le colocaron implantes' },
    ],
    correct_answer: 'b',
    explanation: 'El Stage permanece IV (daño irreversible); lo que cambió fue el Grade, gracias a la cesación de tabaco y el control de HbA1c, que detuvieron la progresión.',
    order_index: 1,
  },
  {
    question_text: 'En una lesión combinada endo-periodontal, el tratamiento de conductos (RCT) siempre debe realizarse antes de la cirugía periodontal agresiva.',
    question_type: 'true_false',
    options: null,
    correct_answer: 'true',
    explanation: 'Sin resolver el origen endodóntico, el manejo periodontal solo no resolverá la radiolucencia apical ni la fuente de infección.',
    order_index: 2,
  },
  {
    question_text: 'Según los casos 7 y 8, ¿cuál es el factor que más determina si dos pacientes con el mismo Stage/Grade tendrán resultados opuestos?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'El tipo de sutura usada en cirugía' },
      { key: 'b', text: 'El cumplimiento del mantenimiento y del cambio de modificadores' },
      { key: 'c', text: 'La marca del cepillo dental' },
    ],
    correct_answer: 'b',
    explanation: 'El cumplimiento es el predictor pronóstico #1 en los casos comparados — determina si la enfermedad se controla o recurre, independientemente del plan técnico inicial.',
    order_index: 3,
  },
  {
    question_text: 'En Stage IV, todos los dientes con hallazgos periodontales severos deben extraerse.',
    question_type: 'true_false',
    options: null,
    correct_answer: 'false',
    explanation: 'La decisión es diente por diente — en el Caso 4, los molares 36/46 se estabilizaron sin cirugía mientras que los incisivos 11/12 requirieron extracción, pese a compartir el mismo Stage general.',
    order_index: 4,
  },
];

export const posttestQuestions = [
  {
    question_text: 'En el Caso 2 (Daniela R.), la genética IL-1 de alto riesgo tiene qué implicación para el plan de mantenimiento a largo plazo?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Ninguna; una vez controlada la microbiología, puede volver a mantenimiento anual' },
      { key: 'b', text: 'Requiere mantenimiento permanente cada 6-8 semanas, porque el riesgo genético no se modifica con el tratamiento' },
      { key: 'c', text: 'Solo afecta el pronóstico si vuelve a fumar' },
      { key: 'd', text: 'Se resuelve completamente tras la cirugía regenerativa' },
    ],
    correct_answer: 'b',
    explanation: 'A diferencia de los modificadores conductuales (tabaco, diabetes), el genotipo IL-1 no cambia — exige vigilancia permanente sin poder espaciar el mantenimiento como en un Grade A típico.',
    order_index: 1,
  },
  {
    question_text: 'En el Caso 3, ¿por qué se decidió NO operar el defecto periodontal residual del diente 16 al mes 12, pese a un PPD de 5mm?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Porque el paciente no podía pagar la cirugía' },
      { key: 'b', text: 'Porque el defecto era tejido cicatricial de la lesión endo-perio con potencial regenerativo limitado, el PPD era funcional y la radiografía mostraba estabilidad' },
      { key: 'c', text: 'Porque el diente ya no era vital' },
      { key: 'd', text: 'Porque la furcación era Grado 3' },
    ],
    correct_answer: 'b',
    explanation: 'La combinación de estabilidad radiográfica, PPD funcional y el origen endo-perio (con menor potencial de regeneración que un defecto perio primario) justificó el monitoreo en vez de la cirugía.',
    order_index: 2,
  },
  {
    question_text: 'En el Caso 4, ¿qué llevó a la decisión de extraer los dientes 11 y 12 en vez de intentar preservarlos con cirugía?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'La paciente lo pidió sin razón clínica' },
      { key: 'b', text: 'PPD que no mejoró pese al SRP (10-11mm) y movilidad Grado 2 persistente, con mejor pronóstico esperado vía implante' },
      { key: 'c', text: 'Eran los únicos dientes con caries' },
      { key: 'd', text: 'La osteoporosis contraindicaba cualquier tratamiento en esos dientes' },
    ],
    correct_answer: 'b',
    explanation: 'La combinación de PPD extremo sin respuesta al SRP y movilidad severa persistente hizo que la extracción + implante fuera la opción con mejor pronóstico funcional, dada además la edad y comorbilidades de la paciente.',
    order_index: 3,
  },
  {
    question_text: 'Según el Caso 5 (peri-implantitis), ¿por qué el paciente con periodontitis previa tratada tenía mayor riesgo de peri-implantitis años después?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Los implantes siempre fallan en pacientes con historia periodontal' },
      { key: 'b', text: 'La misma microbiota (Pg) asociada a su periodontitis original puede colonizar y atacar los implantes, y estos requieren higiene/vigilancia más exigente' },
      { key: 'c', text: 'El implante estaba mal colocado desde el inicio' },
      { key: 'd', text: 'No tomó antibióticos antes de la cirugía de implantes' },
    ],
    correct_answer: 'b',
    explanation: 'La periodontitis previa es un factor de riesgo documentado para peri-implantitis, en parte por la persistencia de la misma microbiota patógena y la mayor dificultad de higiene alrededor de los implantes.',
    order_index: 4,
  },
  {
    question_text: 'Comparando los Casos 7 y 8: ambos pacientes iniciaron con Stage/Grade de severidad comparable. ¿Qué explica sus resultados radicalmente distintos?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'El técnico que realizó el SRP era diferente' },
      { key: 'b', text: 'El cumplimiento del mantenimiento y el cambio (o no) de los modificadores de riesgo' },
      { key: 'c', text: 'El tipo de anestesia usada' },
      { key: 'd', text: 'La edad de los pacientes' },
    ],
    correct_answer: 'b',
    explanation: 'Miguel (Caso 7) cesó el tabaco y controló su diabetes con excelente cumplimiento, mejorando su Grade; Víctor (Caso 8) abandonó el seguimiento y su enfermedad progresó — el cumplimiento fue la variable decisiva.',
    order_index: 5,
  },
  {
    question_text: 'En una exposición de membrana GTR (Caso 6), ¿cuál es la consecuencia clínica más relevante a considerar?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Ninguna, es un evento sin importancia clínica' },
      { key: 'b', text: 'Riesgo de contaminación bacteriana que compromete la función regenerativa de la membrana' },
      { key: 'c', text: 'Siempre requiere extracción del diente' },
      { key: 'd', text: 'Indica que el aloinjerto fue rechazado por el sistema inmune' },
    ],
    correct_answer: 'b',
    explanation: 'La exposición de la membrana permite la contaminación bacteriana del sitio regenerativo, lo cual compromete o anula el potencial de regeneración ósea esperado, aunque el sitio pueda cicatrizar secundariamente sin mayores secuelas.',
    order_index: 6,
  },
  {
    question_text: 'Según la síntesis del capítulo, ¿cuál es la relación correcta entre "parar la enfermedad" y "regenerar hueso perdido" como metas del tratamiento periodontal?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Son igualmente importantes y deben lograrse ambas siempre' },
      { key: 'b', text: 'Parar la enfermedad es la meta primaria; la regeneración ósea es un resultado secundario ("bonus"), no garantizado' },
      { key: 'c', text: 'Regenerar hueso es la única meta válida; si no se logra, el tratamiento fracasó' },
      { key: 'd', text: 'Ninguna de las dos es realista en pacientes Grade C' },
    ],
    correct_answer: 'b',
    explanation: 'Múltiples casos (1, 2, 6) muestran regeneración ósea mínima pese a una detención exitosa de la enfermedad — el éxito clínico se mide primero por el control de la progresión, no por la recuperación completa del hueso perdido.',
    order_index: 7,
  },
  {
    question_text: 'Según el árbol de decisión integrado del capítulo, un paciente con PPD residual de 8mm y Stage III tras la Fase 1 no quirúrgica debería recibir:',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Solo más sesiones de profilaxis, sin cambios' },
      { key: 'b', text: 'Cirugía extensiva con GTR probable' },
      { key: 'c', text: 'Extracción inmediata sin más evaluación' },
      { key: 'd', text: 'Alta del seguimiento periodontal' },
    ],
    correct_answer: 'b',
    explanation: 'Según el árbol de decisión de Fase 2: PPD 7-9mm con Stage III indica cirugía extensiva con GTR probable, no solo mantenimiento ni extracción directa.',
    order_index: 8,
  },
];
