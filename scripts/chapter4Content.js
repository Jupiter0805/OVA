// Content for Chapter 4 ("Zonas Grises y clarificaciones de uso clínico"),
// fully rebuilt 2026-08-21 from the "Capítulo IV. Zonas grises y
// clarificaciones de uso clínico" reference document (a real academic
// manuscript with embedded editorial review comments, [Ui12]-[Ui13]) —
// same treatment as Chapter 3's rebuild. Consumed by insertChapter4.js.
// See project-context.md for what changed and why.

export const lessons = [
  {
    lesson_number: 1,
    order_index: 1,
    title: 'Qué son las zonas grises y por qué importan',
    content_html: `<div class="lesson-container">
  <h2>🌗 Dominar la tabla no es lo mismo que saber diagnosticar</h2>
  <p>La fortaleza de la clasificación AAP/EFP 2018 es también su principal desafío: ofrece un marco clínicamente potente, pero exige atribución causal correcta, juicio diagnóstico y capacidad para integrar información heterogénea. Por eso varios autores subrayaron desde muy temprano la existencia de <strong>"gray zones" o zonas grises</strong> — escenarios en los que la aplicación mecánica de la tabla puede conducir a errores si no se interpreta el contexto clínico completo.</p>

  <div class="key-principle">
    <h3>🎯 La diferencia entre clasificar y diagnosticar</h3>
    <p>Un estudiante que aprende solo la tabla <strong>puede clasificar</strong>. Uno que entiende las zonas grises <strong>realmente sabe diagnosticar</strong>. Eso incluye saber cuándo una CAL no debe atribuirse a periodontitis, cuándo la pérdida dentaria modifica de verdad el estadio, cómo diferenciar un periodonto reducido pero sano de gingivitis en un paciente tratado, y cómo trazar la frontera entre Estadio III y IV.</p>
  </div>

  <h3>Objetivos de este capítulo</h3>
  <div class="evidence-cards">
    <div class="card">
      <h3>1. Reconocer las zonas grises</h3>
      <p>Identificar las principales zonas grises descritas en la implementación clínica de la clasificación.</p>
    </div>
    <div class="card">
      <h3>2. Atribuir correctamente</h3>
      <p>Atribuir correctamente la pérdida de inserción y la pérdida dentaria a periodontitis o a otras causas.</p>
    </div>
    <div class="card">
      <h3>3. Distinguir activa de gingival</h3>
      <p>Distinguir periodontitis activa de inflamación gingival sobre periodonto reducido.</p>
    </div>
    <div class="card">
      <h3>4. Argumentar casos límite</h3>
      <p>Desarrollar un criterio narrativo y argumentado para reportar casos complejos o limítrofes, en vez de forzar una casilla.</p>
    </div>
  </div>

  <h3>Panorama: las cuatro zonas grises frecuentes</h3>
  <div class="decision-tree">
    <h3>🧭 Dónde aparecen con más frecuencia</h3>
    <ul>
      <li><span class="outcome">Atribución de CAL</span> — ¿la pérdida de inserción es realmente por periodontitis, o por otra causa?</li>
      <li><span class="outcome">Pseudobolsas y periodonto reducido</span> — ¿profundidad de sondaje aumentada = periodontitis activa, o edema/historia previa?</li>
      <li><span class="outcome">Atribución de pérdida dentaria</span> — ¿ese diente se perdió por periodontitis, o por otra causa?</li>
      <li><span class="outcome">Límite Estadio III / IV</span> — ¿la dentición entró en inestabilidad funcional, o sigue siendo manejable?</li>
    </ul>
  </div>
  <p style="font-size:0.9rem;color:var(--text-light);">Las próximas lecciones recorren cada una de estas cuatro zonas en profundidad, con reglas prácticas y casos clínicos breves para practicar el criterio.</p>

  <div class="reference">
    📚 Lectura sugerida: Kornman KS, Papapanou PN. Clinical application of the new classification of periodontal diseases: Ground rules, clarifications and "gray zones". J Periodontol. 2020.
  </div>
</div>`,
  },
  {
    lesson_number: 2,
    order_index: 2,
    title: 'Zona gris 1 — CAL no atribuible a periodontitis',
    content_html: `<div class="lesson-container">
  <h2>🔍 No toda pérdida de inserción equivale a periodontitis</h2>
  <p>Esta afirmación, simple en apariencia, resuelve una de las zonas grises más importantes. La clasificación exige excluir escenarios en los que la CAL se explique por recesión traumática, caries cervical o radicular extensa, fractura vertical, lesión endodóntica drenando hacia el margen, o malposición asociada a terceros molares. Si el clínico no hace esta atribución causal, corre el riesgo de <strong>sobrediagnosticar periodontitis</strong>.</p>

  <div class="definition-box">
    <p><strong>La secuencia correcta:</strong> primero se constata la pérdida de inserción; <em>después</em> se pregunta por su causa. La clasificación no autoriza convertir toda recesión en periodontitis. Lo que define la periodontitis es una pérdida de inserción ligada a inflamación periodontal y destrucción del aparato de soporte — no una simple variación de la posición gingival.</p>
  </div>

  <h3>Causas no periodontales de CAL a descartar</h3>
  <table>
    <tr><th>Causa</th><th>Cómo se diferencia</th></tr>
    <tr><td>Recesión traumática (cepillado agresivo)</td><td>Patrón localizado en caras vestibulares, sin pérdida ósea interdental, historia de técnica de cepillado agresiva</td></tr>
    <tr><td>Caries cervical o radicular extensa</td><td>Lesión visible clínica y radiográficamente en el sitio de la "pérdida de inserción"</td></tr>
    <tr><td>Fractura radicular vertical</td><td>Bolsa estrecha y profunda muy localizada, a menudo con signo de "halo" radiográfico</td></tr>
    <tr><td>Lesión endodóntica drenando al margen</td><td>Vitalidad pulpar negativa, trayecto fistuloso, radiolucencia apical</td></tr>
    <tr><td>Malposición por terceros molares</td><td>Pérdida ósea localizada distal a segundos molares, sin patrón periodontal generalizado</td></tr>
  </table>

  <h3>Casos clínicos</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — recesiones múltiples por trauma de cepillado</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Paciente con recesiones vestibulares múltiples, sin pérdida ósea interdental ni historia compatible con periodontitis. El patrón es localizado a las caras vestibulares de dientes prominentes en el arco, con cepillado horizontal agresivo reportado.</p>
        <p><strong>Análisis:</strong> hay CAL medible (por la recesión), pero no hay inflamación periodontal ni destrucción del aparato de soporte interdental que la explique.</p>
        <p><strong>Conclusión:</strong> la CAL no debe convertirse automáticamente en diagnóstico de periodontitis. Se documenta como recesión traumática — con indicación de corregir la técnica de cepillado, no de estadificar como periodontitis.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Caso — pérdida de inserción localizada en un solo diente</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Diente 21 con CAL de 6mm mesial, mientras el resto de la dentición no muestra CAL &gt;2mm. Al explorar, se detecta línea de fractura radicular vertical en la radiografía y una bolsa estrecha, profunda, muy localizada a esa cara.</p>
        <p><strong>Análisis:</strong> un hallazgo aislado, desproporcionado respecto al resto de la boca, es una señal de alarma para buscar una causa local — no periodontal.</p>
        <p><strong>Conclusión:</strong> se atribuye a fractura radicular vertical, no a periodontitis. Ese diente individual tiene mal pronóstico por la fractura, pero no debe elevar el Estadio general del paciente.</p>
      </details>
    </div>
  </div>

  <div class="checklist">
    <h3 style="margin-top:0;">Regla práctica</h3>
    <ul>
      <li>Atribuya la CAL antes de clasificar — nunca clasifique primero y busque la causa después.</li>
    </ul>
  </div>

  <div class="reference">
    📚 Basado en: Kornman &amp; Papapanou 2020 (J Periodontol) — "gray zones" de atribución de CAL
  </div>
</div>`,
  },
  {
    lesson_number: 3,
    order_index: 3,
    title: 'Zona gris 2 — Periodonto reducido: sano, inflamado, o periodontitis activa',
    content_html: `<div class="lesson-container">
  <h2>🩺 Un paciente tratado sigue siendo un paciente con periodontitis, de por vida</h2>
  <p>La clasificación y los documentos de implementación subrayan que el paciente con periodontitis <strong>sigue siendo un paciente con periodontitis de por vida</strong>, aunque tras el tratamiento alcance estabilidad clínica. Esto no significa actividad permanente, sino <strong>susceptibilidad histórica</strong> y necesidad de mantenimiento específico.</p>

  <div class="key-principle">
    <h3>🎯 El Estadio no retrocede</h3>
    <p>El Estadio inicialmente asignado se conserva incluso después de una mejoría post-terapia. Puede subir si el caso empeora, pero no debe retroceder automáticamente después del tratamiento — porque refleja daño acumulado, no el estado inflamatorio del día de hoy.</p>
  </div>

  <h3>Tres situaciones que el estudiante debe diferenciar</h3>
  <table>
    <tr><th>Situación</th><th>BOP</th><th>PPS</th><th>CAL vs. registros previos</th><th>Enfoque</th></tr>
    <tr><td><strong>Periodonto reducido y sano</strong></td><td>Ausente o mínimo (&lt;10%)</td><td>Normal o estable, ≤3-4mm</td><td>Estable — sin cambios</td><td>Mantenimiento de rutina</td></tr>
    <tr><td><strong>Gingivitis sobre periodonto reducido</strong></td><td>Presente, puede ser generalizado</td><td>Puede estar algo aumentado por edema</td><td>Estable — sin nueva pérdida</td><td>Control de biofilm; NO es un caso nuevo de periodontitis</td></tr>
    <tr><td><strong>Periodontitis activa (recurrencia)</strong></td><td>Presente</td><td>Aumentado, con bolsas nuevas o profundizadas</td><td>Progresiva — nueva pérdida documentada</td><td>Retratamiento activo; reclasificar Grado si corresponde</td></tr>
  </table>
  <p style="font-size:0.9rem;color:var(--text-light);">Confundir estas tres situaciones produce tanto sobretratamiento (tratar como activa una gingivitis estable) como infratratamiento (ignorar una recurrencia real). El sangrado, la profundidad de sondaje, la estabilidad del nivel de inserción, y la comparación con registros previos son las claves para diferenciarlas.</p>

  <h3>Caso clínico</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — paciente tratado hace tres años</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Paciente tratado hace tres años, con periodonto reducido, bolsas residuales de 3-4mm y sangrado en el 18% de los sitios. No hay registros que muestren nueva pérdida de inserción desde el alta del tratamiento activo.</p>
        <p><strong>Análisis:</strong> el BOP moderado sin progresión de CAL respecto a los registros previos NO define un caso nuevo de periodontitis activa por definición.</p>
        <p><strong>Conclusión:</strong> corresponde a gingivitis en paciente con periodontitis tratada (periodonto reducido, con inflamación gingival superpuesta) — el diagnóstico sigue siendo "periodontitis Estadio [previo], actualmente estable, con gingivitis localizada". Esto cambia el enfoque: se intensifica el control de biofilm en esa cita, sin necesariamente reabrir tratamiento activo ni reclasificar el Grado todavía. Se documenta el hallazgo y se re-evalúa en el próximo control.</p>
      </details>
    </div>
  </div>

  <div class="checklist">
    <h3 style="margin-top:0;">Regla práctica</h3>
    <ul>
      <li>Compare siempre contra el registro previo del paciente — sin ese punto de referencia, no se puede distinguir estabilidad de recurrencia.</li>
    </ul>
  </div>

  <div class="reference">
    📚 Basado en: Kornman &amp; Papapanou 2020 (J Periodontol); Chapple et al. 2018 (definición de salud gingival en periodonto reducido)
  </div>
</div>`,
  },
  {
    lesson_number: 4,
    order_index: 4,
    title: 'Zona gris 3 — Pseudobolsas y profundidad de sondaje',
    content_html: `<div class="lesson-container">
  <h2>📏 La profundidad de sondaje, por sí sola, no clasifica la periodontitis</h2>
  <p>Esta idea merece repetirse porque es una fuente clásica de error. Un paciente con inflamación gingival marcada puede exhibir bolsas aparentes o <strong>pseudobolsas</strong> sin pérdida equivalente de inserción. Si el clínico usa exclusivamente el número de milímetros de sondaje para "subir" el Estadio, la clasificación queda distorsionada.</p>

  <div class="definition-box">
    <p><strong>Por qué ocurre:</strong> el margen gingival puede desplazarse hacia coronal por edema inflamatorio (hiperplasia, embarazo, medicamentos como nifedipina o ciclosporina), aumentando el PPS medido sin que exista pérdida real de inserción respecto a la unión amelocementaria (UAC).</p>
  </div>

  <p>Cuando las profundidades parecen desproporcionadas respecto al resto del cuadro clínico, debe revisarse: la posición del margen gingival, la presencia de agrandamiento inflamatorio, y la consistencia del tejido (edematosa vs. fibrosa). <strong>La tabla no reemplaza el examen clínico fino; lo presupone.</strong></p>

  <h3>Cómo diferenciar pseudobolsa de bolsa real</h3>
  <table>
    <tr><th>Hallazgo</th><th>Pseudobolsa</th><th>Bolsa real</th></tr>
    <tr><td>Margen gingival</td><td>Coronal a la UAC (desplazado por edema)</td><td>En o apical a la UAC</td></tr>
    <tr><td>CAL</td><td>Mínimo o ausente</td><td>Presente, proporcional al PPS</td></tr>
    <tr><td>Radiografía</td><td>Cresta ósea normal, lámina dura intacta</td><td>RBL visible, pérdida de lámina dura</td></tr>
    <tr><td>Consistencia del tejido</td><td>Edematosa, blanda</td><td>Variable — puede ser fibrosa o edematosa</td></tr>
  </table>

  <h3>Caso clínico</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — PPS profundo con CAL mínimo</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer de 34 años, embarazada (segundo trimestre), refiere sangrado abundante. PPS de 6-7mm generalizado en el sector anterosuperior, encía muy edematosa y eritematosa. CAL medido cuidadosamente: 0-1mm. Radiografía: cresta ósea normal, lámina dura intacta.</p>
        <p><strong>Análisis:</strong> el PPS elevado se explica completamente por el desplazamiento coronal del margen gingival (hiperplasia gingival del embarazo) — no hay pérdida real de inserción que lo respalde.</p>
        <p><strong>Conclusión:</strong> gingivitis (relacionada con el embarazo), NO periodontitis. Clasificar este caso como periodontitis por el PPS aislado sería un sobrediagnóstico clásico.</p>
      </details>
    </div>
  </div>

  <div class="checklist">
    <h3 style="margin-top:0;">Regla práctica</h3>
    <ul>
      <li>No use la profundidad de sondaje aislada como criterio de Estadio — siempre correlacione con CAL, posición del margen y radiografía.</li>
    </ul>
  </div>

  <div class="reference">
    📚 Basado en: Kornman &amp; Papapanou 2020 (J Periodontol)
  </div>
</div>`,
  },
  {
    lesson_number: 5,
    order_index: 5,
    title: 'Zona gris 4 — Atribución de pérdida dentaria',
    content_html: `<div class="lesson-container">
  <h2>🦷 "Razonablemente" es la palabra decisiva</h2>
  <p>La pérdida dentaria modifica el Estadio <strong>solo cuando puede atribuirse razonablemente a periodontitis</strong>. Ese adverbio — razonablemente — es decisivo. En el mundo real, muchos pacientes han perdido dientes por caries extensas, fracturas, indicaciones protésicas antiguas, trauma, o extracciones de causa mixta. Si toda ausencia dentaria se registra como pérdida por periodontitis, el caso será <strong>sobrestadiado</strong>.</p>

  <div class="definition-box">
    <p><strong>Para un contexto de formación avanzada:</strong> conviene documentar explícitamente el criterio de atribución utilizado. Cuando la causa no es segura, debe consignarse esa incertidumbre en la narrativa clínica. El diagnóstico serio no es el que aparenta certeza absoluta, sino el que explicita con honestidad sus límites probatorios.</p>
  </div>

  <h3>Preguntas para atribuir con criterio</h3>
  <ul class="checklist">
    <li>¿Hay evidencia previa de pérdida de inserción o pérdida ósea en el sitio del diente ausente (radiografías antiguas, historia clínica)?</li>
    <li>¿El patrón de los dientes remanentes es compatible con periodontitis (RBL generalizado, furcaciones, CAL interdental)?</li>
    <li>¿Existe una causa alternativa documentada — caries extensa, endodoncia fallida, indicación protésica, trauma?</li>
    <li>¿El paciente o los registros previos dan cuenta de la razón de la extracción?</li>
  </ul>

  <h3>Caso clínico</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Caso — cuatro dientes perdidos, sin colapso funcional</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Paciente con cuatro dientes perdidos, defectos óseos severos en los dientes remanentes, pero sin colapso funcional y con pares oclusales suficientes. La historia clínica indica que dos de los cuatro dientes se extrajeron por caries extensa no restaurable, y los otros dos por periodontitis documentada (radiografías previas con RBL avanzado en esos sitios).</p>
        <p><strong>Análisis:</strong> de los cuatro dientes perdidos, solo <strong>dos</strong> se atribuyen razonablemente a periodontitis — los otros dos tienen causa alternativa documentada.</p>
        <p><strong>Conclusión:</strong> aun con destrucción marcada en el resto de la dentición, el caso puede seguir siendo <strong>Estadio III</strong> (no IV) — porque la pérdida dentaria atribuible a periodontitis (2 dientes) no alcanza el umbral de Estadio IV (≥5), y la necesidad rehabilitadora no alcanza la magnitud de un colapso funcional. Atribuir los cuatro dientes a periodontitis sin este análisis habría llevado a un sobrediagnóstico de Estadio IV.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Caso — pérdida dentaria de causa protésica antigua</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Paciente de 58 años sin dos premolares, extraídos hace 25 años "para tratamiento de ortodoncia", según refiere. El resto de la dentición muestra CAL 2-3mm generalizado, RBL &lt;20%.</p>
        <p><strong>Análisis:</strong> la historia (extracción por ortodoncia, hace décadas, en dientes específicos con indicación conocida) es una causa alternativa razonable y coherente con el patrón — no hay evidencia de que esos sitios tuvieran periodontitis.</p>
        <p><strong>Conclusión:</strong> esos dos dientes NO se cuentan como pérdida por periodontitis. El Estadio se determina solo por los hallazgos actuales de CAL/RBL (compatibles con Estadio I-II), no por el número total de dientes ausentes.</p>
      </details>
    </div>
  </div>

  <div class="checklist">
    <h3 style="margin-top:0;">Regla práctica</h3>
    <ul>
      <li>Solo adjudique pérdida dentaria a periodontitis cuando exista base clínica razonable — y documente el razonamiento, no solo la conclusión.</li>
    </ul>
  </div>

  <div class="reference">
    📚 Basado en: Kornman &amp; Papapanou 2020 (J Periodontol)
  </div>
</div>`,
  },
  {
    lesson_number: 6,
    order_index: 6,
    title: 'Zona gris 5 — La frontera entre Estadio III y Estadio IV',
    content_html: `<div class="lesson-container">
  <h2>🚧 No es una frontera numérica; es una frontera funcional</h2>
  <p>Tal vez la zona gris más conocida es el límite entre Estadio III y IV. Ambos comparten destrucción severa; la diferencia no depende solo de cuántos milímetros de inserción se hayan perdido, sino de si la dentición <strong>ha entrado en una fase de inestabilidad funcional</strong> que requiere rehabilitación compleja.</p>

  <div class="key-principle">
    <h3>🎯 La pregunta correcta</h3>
    <p>En la práctica, la pregunta correcta no es "¿se ve muy destruido?", sino <strong>"¿el caso ya demanda reconstrucción compleja de la función, además del control periodontal?"</strong> Esta distinción exige pensamiento rehabilitador, no solo periodontal.</p>
  </div>

  <h3>Dos pacientes, misma severidad aparente, Estadios distintos</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Paciente A — destrucción severa, función conservada → Estadio III</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Varón 55a, defectos óseos profundos en varios molares, furcaciones Grado II-III bilaterales, CAL hasta 7mm. Ha perdido 3 dientes por periodontitis. Conserva pares oclusales suficientes, sin migración patológica, sin colapso de mordida, masticación funcional reportada como adecuada.</p>
        <p><strong>Análisis:</strong> destrucción severa y factores de complejidad marcados (furcaciones, defectos), pero la función general de la dentición sigue siendo razonable.</p>
        <p><strong>Conclusión:</strong> <strong>Estadio III</strong> — sigue siendo severo, con potencial de deterioro y necesidad de cirugía compleja, pero no ha cruzado hacia la inestabilidad funcional que define el Estadio IV.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Paciente B — menos dientes perdidos, colapso funcional → Estadio IV</h3>
      <details>
        <summary>Ver caso</summary>
        <p>Mujer 61a, ha perdido solo 2 dientes por periodontitis (menos que el Paciente A tiene en pérdida), pero presenta colapso de mordida posterior, migración patológica de incisivos superiores con diastemas nuevos, movilidad Grado 2 generalizada, y necesidad evidente de rehabilitación protésica extensa para restaurar la dimensión vertical.</p>
        <p><strong>Análisis:</strong> aunque el número de dientes perdidos es menor que en el Paciente A, la dentición completa ya perdió estabilidad funcional.</p>
        <p><strong>Conclusión:</strong> <strong>Estadio IV</strong> — el criterio decisivo no fue el conteo de dientes perdidos, sino el colapso funcional y la necesidad de rehabilitación compleja de toda la dentición.</p>
      </details>
    </div>
  </div>

  <div class="definition-box">
    <p><strong>La lección del contraste:</strong> el Paciente A tiene destrucción periodontal objetivamente más severa en varios dientes individuales, pero el Paciente B es el que está en Estadio IV — porque el criterio decisivo es la amenaza a <strong>toda la dentición</strong>, no la severidad de un sitio o un grupo de dientes.</p>
  </div>

  <div class="checklist">
    <h3 style="margin-top:0;">Regla práctica</h3>
    <ul>
      <li>En el límite III-IV, piense en función, oclusión y necesidad rehabilitadora — no solo en milímetros de CAL o RBL.</li>
    </ul>
  </div>

  <div class="reference">
    📚 Basado en: Kornman &amp; Papapanou 2020 (J Periodontol); Tonetti et al. 2018
  </div>
</div>`,
  },
  {
    lesson_number: 7,
    order_index: 7,
    title: 'Reglas prácticas para navegar las zonas grises',
    content_html: `<div class="lesson-container">
  <h2>🧭 Cinco reglas para llevar a la clínica</h2>
  <p>Las cinco lecciones anteriores se resumen en cinco reglas prácticas — pensadas para revisarse antes de cerrar cualquier diagnóstico periodontal límite o complejo.</p>

  <ol class="checklist" style="list-style:none;">
    <li><strong>1) Atribuya la CAL antes de clasificar.</strong> Constate la pérdida de inserción, y solo después pregúntese la causa — nunca al revés.</li>
    <li><strong>2) No use la profundidad de sondaje aislada como criterio de Estadio.</strong> Correlacione siempre con CAL, posición del margen gingival y radiografía.</li>
    <li><strong>3) Solo adjudique pérdida dentaria a periodontitis cuando exista base clínica razonable.</strong> Documente el razonamiento, no solo la conclusión.</li>
    <li><strong>4) En el límite III-IV, piense en función, oclusión y necesidad rehabilitadora.</strong> La pregunta no es "cuánto daño hay", sino "la dentición completa perdió estabilidad".</li>
    <li><strong>5) Cuando exista incertidumbre genuina, explíquela en la narrativa diagnóstica.</strong> Un diagnóstico honesto sobre sus límites probatorios es más valioso que uno que aparenta certeza absoluta.</li>
  </ol>

  <h3>Cómo se ve la Regla 5 en la práctica</h3>
  <div class="cases">
    <div class="case-card">
      <h3>Documentación deficiente vs. documentación honesta</h3>
      <details>
        <summary>Ver comparación</summary>
        <p><strong>Deficiente:</strong> "Periodontitis Estadio IV, Grado B. Pérdida de 6 dientes."</p>
        <p><strong>Honesta y argumentada:</strong> "Periodontitis Estadio III (no IV): de los 6 dientes ausentes, solo 3 tienen evidencia razonable de pérdida por periodontitis (radiografías previas con RBL avanzado en esos sitios); los otros 3 se atribuyen a caries extensa según refiere el paciente, sin poder confirmarse con registros. Función masticatoria conservada, sin colapso de mordida. Se reevaluará la atribución si aparece nueva información."</p>
        <p>La segunda versión no es más larga por capricho — es más <strong>defendible</strong>: explicita el criterio usado, deja constancia de la incertidumbre, y permite que otro clínico entienda por qué se llegó a esa conclusión.</p>
      </details>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 Por qué esto importa para un trabajo de tesis o un caso real</h3>
    <p>Este capítulo es crucial porque muestra que dominar la clasificación no significa memorizar números, sino comprender sus límites operativos. Las cinco reglas no reemplazan el juicio clínico — lo estructuran, para que ese juicio sea reproducible y comunicable.</p>
  </div>

  <div class="reference">
    📚 Basado en: Kornman &amp; Papapanou 2020 (J Periodontol)
  </div>
</div>`,
  },
  {
    lesson_number: 8,
    order_index: 8,
    title: 'Síntesis: casos integrados de zonas grises',
    content_html: `<div class="lesson-container">
  <h2>🧩 Cuando varias zonas grises aparecen en el mismo paciente</h2>
  <p>En la consulta real, las zonas grises rara vez aparecen aisladas. Estos casos de cierre combinan más de una a la vez — para practicar el criterio integrado que este capítulo buscó desarrollar.</p>

  <div class="cases">
    <div class="case-card">
      <h3>Caso integrado 1 — atribución de CAL + atribución de pérdida dentaria</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p>Varón 63a, refiere haber perdido "varios dientes por las encías". Examen: 5 dientes ausentes, CAL 4-5mm generalizado en los dientes remanentes, RBL 25-30%, un diente con CAL aislado de 8mm en distal (sin correlato en el resto de la boca).</p>
        <p><strong>Zona gris 1 (CAL):</strong> el diente con CAL aislado de 8mm no encaja con el patrón generalizado del resto — la radiografía muestra una imagen compatible con lesión endodóntica. Se excluye ese sitio de la lectura de CAL interdental representativa.</p>
        <p><strong>Zona gris 4 (pérdida dentaria):</strong> de los 5 dientes ausentes, la historia y las radiografías disponibles solo confirman periodontitis como causa en 3 de ellos; los otros 2 se perdieron según refiere "por una infección de la muela" — compatible con causa endodóntica, no periodontal.</p>
        <p><strong>Conclusión:</strong> Estadio III (CAL representativo 4-5mm, RBL 25-30%, 3 dientes — no 5 — atribuibles a periodontitis), no Estadio IV. El diente con lesión endodóntica se maneja y documenta aparte.</p>
      </details>
    </div>
    <div class="case-card">
      <h3>Caso integrado 2 — periodonto reducido + frontera III/IV</h3>
      <details>
        <summary>Ver caso completo</summary>
        <p>Mujer 70a, tratada por periodontitis hace 15 años (Estadio III documentado en su momento), en mantenimiento irregular desde entonces. Hoy: periodonto reducido generalizado, BOP 12%, sin nueva pérdida de inserción respecto al último registro (hace 4 años). Ha perdido 2 dientes adicionales en ese período por fractura (no periodontitis, según historia clínica). Función masticatoria conservada, sin colapso de mordida.</p>
        <p><strong>Zona gris 2 (periodonto reducido):</strong> sin progresión documentada y BOP bajo — corresponde a periodonto reducido estable, no a periodontitis activa recurrente.</p>
        <p><strong>Zona gris 5 (frontera III/IV):</strong> aunque el Estadio histórico era III, los 2 dientes perdidos recientemente no se atribuyen a periodontitis (fractura), y la función se mantiene conservada — el Estadio permanece III, sin evidencia para escalarlo a IV.</p>
        <p><strong>Conclusión:</strong> "Periodontitis Estadio III, actualmente estable (periodonto reducido sano), en mantenimiento" — se retoma el mantenimiento regular, sin reabrir tratamiento activo.</p>
      </details>
    </div>
  </div>

  <h3>Repaso de las cinco zonas grises</h3>
  <div class="decision-tree">
    <ul>
      <li><strong>1. CAL no atribuible a periodontitis</strong> → descartar causas locales antes de clasificar</li>
      <li><strong>2. Periodonto reducido</strong> → comparar contra el registro previo, no contra un ideal de "boca sana"</li>
      <li><strong>3. Pseudobolsas</strong> → el PPS aislado no clasifica; correlacionar con CAL y radiografía</li>
      <li><strong>4. Pérdida dentaria</strong> → atribuir solo con base razonable, documentando la incertidumbre</li>
      <li><strong>5. Frontera III/IV</strong> → pensar en función y necesidad rehabilitadora, no solo en milímetros</li>
    </ul>
  </div>

  <div class="key-principle">
    <h3>🎯 Cierre del capítulo</h3>
    <p>Las zonas grises no son excepciones raras — son parte habitual de la práctica clínica real. Reconocerlas y navegarlas con criterio explícito es lo que separa a quien aplica una tabla de quien ejerce juicio diagnóstico.</p>
  </div>

  <div class="reference">
    📚 Basado en: Kornman &amp; Papapanou 2020 (J Periodontol); Tonetti et al. 2018
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
