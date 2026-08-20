// Content for Chapter 1 ("El cambio que transformó la periodoncia") — densified
// postgrado-level version, based on Tonetti et al. 2018, Kornman & Papapanou
// 2020, Caton et al. 2018, Chapple et al. 2018. Consumed by insertChapter1.js.

export const lessons = [
  {
    lesson_number: 1,
    order_index: 1,
    title: 'Fundamentos: ¿qué es realmente la periodontitis?',
    content_html: `<div class="lesson-container">
  <h2>🧬 Periodontitis: definición operacional y patobiología</h2>

  <div class="definition-box">
    <p>La periodontitis es una <strong>enfermedad inflamatoria crónica multifactorial</strong> caracterizada por:</p>
    <ul>
      <li><strong>Disbiosis del biofilm subgingival</strong> (una microbiota disbiótica, no un simple sobrecrecimiento bacteriano)</li>
      <li><strong>Desregulación de la respuesta inmunoinflamatoria del huésped</strong> — no es solo una reacción a patógenos</li>
      <li><strong>Pérdida progresiva del aparato de soporte periodontal</strong> (cemento, ligamento, hueso alveolar)</li>
      <li><strong>Expresión clínica:</strong> pérdida de inserción clínica (CAL), pérdida ósea radiográfica (RBL), bolsas, sangrado</li>
    </ul>
  </div>

  <h3>Criterio de caso — AAP/EFP 2018 (Tonetti et al.)</h3>
  <p>Un paciente <strong>SE CONSIDERA CASO DE PERIODONTITIS</strong> cuando presenta cualquiera de estos tres criterios:</p>

  <div class="cases">
    <div class="case-card">
      <h3>Criterio A — Interdental</h3>
      <p>CAL interdental detectable en ≥2 dientes no adyacentes.</p>
    </div>
    <div class="case-card">
      <h3>Criterio B — Vestibular/oral</h3>
      <p>CAL vestibular u oral ≥3 mm con profundidad de sondaje (PPS) &gt;3 mm en ≥2 dientes.</p>
    </div>
    <div class="case-card">
      <h3>Criterio C — Radiográfico</h3>
      <p>Pérdida ósea radiográfica (RBL) ≥3 mm en cualquier localización.</p>
    </div>
  </div>

  <div class="definition-box">
    <p><strong>MÁS:</strong> la pérdida de inserción <strong>no puede ser atribuida</strong> a causas no periodontales:</p>
    <ul>
      <li>Recesión de origen traumático</li>
      <li>Caries cervical o radicular extensa</li>
      <li>Lesión endodóntica drenante</li>
      <li>Fractura radicular vertical</li>
      <li>Defecto de raíz fusionada</li>
      <li>Extrusión dentaria traumática</li>
    </ul>
    <p style="margin-top:0.75rem;"><strong>Nota crítica:</strong> la presencia de bolsas, sangrado al sondaje o inflamación gingival <strong>no es un requisito independiente</strong> para el diagnóstico. Pueden acompañar la enfermedad, pero no la definen.</p>
  </div>

  <h3>Gingivitis vs. Periodontitis</h3>
  <table>
    <tr>
      <th>Aspecto</th>
      <th>Gingivitis</th>
      <th>Periodontitis</th>
    </tr>
    <tr>
      <td>Localización de la lesión</td>
      <td>Confinada a la encía (tejido supraperiosteal)</td>
      <td>Se extiende al ligamento periodontal y hueso alveolar</td>
    </tr>
    <tr>
      <td>Pérdida de inserción</td>
      <td>Ausente por definición — pero puede presentarse en pacientes con periodonto reducido que es secuela de una periodontitis ya tratada</td>
      <td>Presente — pérdida real del aparato de soporte</td>
    </tr>
    <tr>
      <td>Reversibilidad</td>
      <td>100% reversible con control de biofilm</td>
      <td>Parcialmente reversible (la destrucción es irreversible)</td>
    </tr>
    <tr>
      <td>Histopatología</td>
      <td>Infiltrado inflamatorio sin extensión apical</td>
      <td>Infiltrado crónico, resorción ósea, pérdida de fibras de inserción</td>
    </tr>
    <tr>
      <td>Progresión a periodontitis</td>
      <td>Potencial, no inevitable</td>
      <td>Ya establecida — riesgo de progresión futura</td>
    </tr>
  </table>

  <div class="reference">
    📚 Basado en: Tonetti, Greenwell &amp; Kornman 2018 (J Periodontol); Chapple et al. 2018 (J Clin Periodontol)
  </div>
</div>`,
  },
  {
    lesson_number: 2,
    order_index: 2,
    title: 'Etiopatogénesis: del biofilm a la destrucción tisular',
    content_html: `<div class="lesson-container">
  <h2>🦠 El modelo ecológico dinámico</h2>
  <p>La periodontitis <strong>no es una secuencia lineal de fases</strong>, sino un proceso dinámico resultado de la interacción continua entre disbiosis microbiana y respuesta del huésped.</p>

  <h3>Fase 1: Formación y disbiosis del biofilm</h3>
  <div class="timeline-interactive">
    <div class="timeline-item">
      <h3>1. Película adquirida (0-1 hora)</h3>
      <p>Proteínas salivales y plasmáticas, lípidos. Proporciona receptores para adhesión bacteriana y modula la interacción huésped-microbiota.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>2. Colonización inicial (1-2 días)</h3>
      <p><em>Streptococcus, Actinomyces, Veillonella</em> — metabolismo aerobio/facultativo, establecen gradientes ecológicos.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>3. Coagregación y maduración (2-7 días)</h3>
      <p>Adhesinas específicas, formación de microcolonias, matriz exopolimérica (EPS), canales de nutrientes, comunicación por quórum-sensing.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="timeline-item">
      <h3>4. Dispersión selectiva</h3>
      <p>Bacterias gram-negativas anaerobias estrictas — <em>Porphyromonas gingivalis, Tannerella forsythia, Treponema denticola</em> — con enzimas proteolíticas que establecen un microambiente anaerobio.</p>
    </div>
  </div>

  <h3>Microbiota disbiótica: los "complejos" de riesgo</h3>
  <div class="evidence-cards">
    <div class="card">
      <h3>🔴 Complejo rojo (alto riesgo)</h3>
      <p><strong>P. gingivalis:</strong> presente en 50-80% de casos; proteasas RgpA/B, Kgp; se interna en células epiteliales.</p>
      <p><strong>T. forsythia:</strong> 50-70% de casos; depende metabólicamente de Pg.</p>
      <p><strong>T. denticola:</strong> 40-60% de casos; asociado a bolsas profundas y casos progresivos.</p>
    </div>
    <div class="card">
      <h3>🟠 Complejo naranja (mediadores)</h3>
      <p><em>Prevotella intermedia, Fusobacterium nucleatum, Campylobacter rectus.</em> Facilitan la colonización del complejo rojo y producen LPS y citotoxinas.</p>
    </div>
    <div class="card">
      <h3>🟡 Complejo amarillo (pioneros)</h3>
      <p><em>Streptococcus, Actinomyces.</em> Asociados a gingivitis y salud periodontal — no son en sí mismos el problema.</p>
    </div>
  </div>

  <figure class="embedded-figure">
    <img src="/microbiota-complejos.jpeg" alt="Formación progresiva de los complejos bacterianos de Socransky" />
    <figcaption><strong>Figura 1.</strong> Formación progresiva del biofilm subgingival. Los complejos de color naranja (<em>Prevotella intermedia, Fusobacterium nucleatum</em>) y rojo (<em>P. gingivalis, T. forsythia, T. denticola</em>) están asociados con enfermedad periodontal progresiva. El complejo amarillo representa bacterias colonizadoras tempranas (<em>Actinomyces, Streptococcus</em>).</figcaption>
  </figure>

  <p>El modelo original de Socransky (1998) también describe dos complejos de colonizadores muy tempranos — verde y azul — que preparan el ambiente para los complejos posteriores. La figura siguiente muestra la pirámide completa, con el gradiente desde salud (colonizadores iniciales) hasta enfermedad (complejo rojo, patógenos tardíos):</p>

  <figure class="embedded-figure">
    <img src="/piramide-socransky.jpeg" alt="Pirámide completa de los complejos bacterianos de Socransky" />
    <figcaption><strong>Figura 2.</strong> Pirámide de Socransky. Los cinco complejos bacterianos según su rol en la formación del biofilm y su asociación con la salud o la enfermedad periodontal: azul y verde (colonizadores iniciales, asociados a salud), amarillo (colonizadores tempranos), naranja (especies puente) y rojo (patógenos tardíos, mayor asociación con periodontitis avanzada).</figcaption>
  </figure>

  <div class="definition-box">
    <p><strong>Disbiosis ≠ disfunción:</strong> no significa que cada bacteria sea patógena, sino que la estructura de la comunidad favorece metabolitos y productos inflamatorios que perjudican al huésped.</p>
  </div>

  <h3>Fase 2: Inmunopatogénesis — el papel paradójico de la inmunidad</h3>
  <p>La respuesta inmunológica del hospedador ante el biofilm patógeno es graduada y progresiva: pasa de una inmunidad innata predominante en las primeras semanas (neutrófilos, macrófagos) a una respuesta adaptativa cada vez más presente conforme la enfermedad avanza (linfocitos T y B), lo que explica la persistencia y cronicidad del proceso.</p>

  <div class="evidence-cards">
    <div class="card">
      <h3>Neutrófilos (PMN)</h3>
      <p>Primera línea de defensa. En periodontitis avanzada: reclutamiento masivo pero eficacia reducida. La elastasa, catepsina G y colagenasa que liberan degradan colágeno — la <strong>"paradoja neutrofílica"</strong>: el intento de control microbiano causa daño tisular.</p>
    </div>
    <div class="card">
      <h3>Linfocitos T</h3>
      <p><strong>Th1</strong> (IFN-γ, TNF-α): control microbiano pero daño óseo vía RANKL. <strong>Th17</strong> (IL-17): reclutamiento neutrofílico y osteoclastogénesis. <strong>Treg</strong> (IL-10, TGF-β): intento de contención, frecuentemente insuficiente.</p>
    </div>
    <div class="card">
      <h3>Linfocitos B</h3>
      <p>Producen anticuerpos contra antígenos microbianos, con reconocimiento cruzado ocasional con antígenos del huésped (mimetismo molecular), y citocinas locales (IL-6, TNF-α).</p>
    </div>
  </div>

  <h3>La cascada inflamatoria central</h3>
  <table>
    <tr><th>Citocina</th><th>Producción</th><th>Mecanismo de daño</th></tr>
    <tr><td><strong>TNF-α</strong></td><td>Macrófagos, células T, PMN, fibroblastos</td><td>Degradación colagenolítica, resorción ósea vía RANKL, permeabilidad vascular</td></tr>
    <tr><td><strong>IL-1β</strong></td><td>Macrófagos, epitelio, fibroblastos</td><td>Estimula MMP-1/MMP-8, COX-2/PGE2, RANKL — sus niveles predicen velocidad de destrucción</td></tr>
    <tr><td><strong>IL-6</strong></td><td>Fibroblastos, PMN, células inmunes</td><td>Bifásica (anti e proinflamatoria); señalización trans vía sIL-6R</td></tr>
    <tr><td><strong>IL-17</strong></td><td>Th17</td><td>Reclutamiento de PMN, estimula RANKL — en algunos modelos supera a TNF-α en destrucción ósea</td></tr>
  </table>

  <h3>Metaloproteinasas de matriz (MMPs)</h3>
  <table>
    <tr><th>MMP</th><th>Fuente</th><th>Relevancia periodontal</th></tr>
    <tr><td>MMP-1</td><td>Fibroblastos, macrófagos</td><td>Degradación principal del colágeno gingival/periodontal</td></tr>
    <tr><td>MMP-8</td><td>PMN, epitelio</td><td>Contenida en gránulos neutrofílicos, liberada en la depuración</td></tr>
    <tr><td>MMP-9</td><td>PMN, endotelio, macrófagos</td><td>Degrada la lámina basal, permite extravasación</td></tr>
  </table>
  <p style="font-size:0.9rem;color:var(--text-light);">En periodontitis hay un <strong>desbalance MMP/TIMP</strong> (↑MMP, ↓TIMP) — la razón MMP-8/TIMP-1 es predictora de progresión.</p>

  <div class="calc-box">
    <p><strong>El eje RANK/RANKL — el nexo inmuno-óseo</strong></p>
    <p><strong>RANKL</strong> (fibroblastos del ligamento, células Th1/Th17, osteoblastos) se une a <strong>RANK</strong> en precursores osteoclásticos → diferenciación de osteoclastos maduros.</p>
    <p>TNF-α, IL-1β, IL-17 y PGE2 <strong>aumentan</strong> RANKL. La <strong>osteoprotegerina (OPG)</strong> compite con RANK por RANKL — en salud la razón RANKL/OPG es de aproximadamente 0.1:1; en periodontitis sube a <span class="result">aproximadamente 10:1</span>, lo que dispara la resorción ósea.</p>
  </div>

  <h3>Fase 3: destrucción tisular progresiva</h3>
  <p>La pérdida de inserción clínica ocurre por degradación de la matriz extracelular (activación de MMPs), migración apical del epitelio de unión, y muerte de fibroblastos del ligamento (apoptosis inducida por TNF-α). La destrucción ósea puede manifestarse en distintos patrones radiográficos, cada uno con implicaciones diagnósticas y terapéuticas diferentes.</p>

  <figure class="embedded-figure">
    <img src="/destruccion-tisular-patron-h-v.jpeg" alt="Radiografías comparando el patrón de destrucción ósea horizontal y vertical" />
    <figcaption><strong>Figura 3.</strong> Comparación radiográfica de los dos patrones principales de pérdida ósea. Izquierda — patrón horizontal: pérdida uniforme entre dientes adyacentes. Derecha — patrón vertical: defecto angular localizado, más profundo en un sitio que en los adyacentes. (El patrón circunferencial, no mostrado aquí, se describe más abajo.)</figcaption>
  </figure>

  <div class="evidence-cards">
    <div class="card">
      <h3>Patrón horizontal</h3>
      <p>Pérdida similar en dientes adyacentes. Asociado a inflamación generalizada, tabaquismo, diabetes mal controlada. Menor complejidad — permite regeneración posible.</p>
    </div>
    <div class="card">
      <h3>Patrón vertical (angular)</h3>
      <p>Pérdida desigual, mayor en sitios interproximales. Defectos de 1, 2 o 3 paredes. Asociado a bacterias específicas (Pg) y mayor inflamación local. Mayor complejidad, pero con potencial regenerativo.</p>
    </div>
    <div class="card">
      <h3>Patrón circunferencial</h3>
      <p>Pérdida alrededor de toda la raíz ("moat"). Típico de periodontitis muy activa. Riesgo de movilidad rápida.</p>
    </div>
  </div>

  <p style="font-size:0.9rem;color:var(--text-light);"><strong>Nota radiográfica:</strong> pérdida &lt;1mm rara vez es visible radiográficamente (sensibilidad de aproximadamente 30%); &gt;2-3mm es claramente diagnosticable.</p>

  <div class="reference">
    📚 Basado en: Kornman &amp; Papapanou 2020; Tonetti et al. 2018; revisión de inmunopatogénesis periodontal (workshop 2017)
  </div>
</div>`,
  },
  {
    lesson_number: 3,
    order_index: 3,
    title: 'Evolución histórica: 1989 → 1999 → 2018',
    content_html: `<div class="lesson-container">
  <h2>🕰️ Tres sistemas, tres formas de pensar la periodontitis</h2>

  <div class="timeline-interactive">
    <div class="timeline-item">
      <h3>1989 — Clasificación de Armitage (Workshop AAP)</h3>
      <p>Primer intento sistemático de unificar la nomenclatura: periodontitis del adulto, de inicio temprano (prepuberal, juvenil, rápidamente progresiva), refractaria y ulcerativa necrosante.</p>
      <details>
        <summary>Ver limitaciones críticas</summary>
        <ul>
          <li>Basada en <strong>edad de presentación</strong>, no en parámetros clínicos medibles</li>
          <li>Sin severidad estructurada (leve/moderado/severo no estaban claros)</li>
          <li>Sin modificadores (tabaco, diabetes) integrados</li>
          <li>"Refractaria" era un diagnóstico circular: no responde al tratamiento → refractaria, pero ¿por qué?</li>
        </ul>
      </details>
    </div>

    <div class="arrow">↓ Evidencia acumulada 1989-1999 ↓</div>

    <div class="timeline-item">
      <h3>1999 — Consenso Internacional (Caton et al.)</h3>
      <p>Abandonó la categorización por edad. Introdujo <strong>Periodontitis Crónica</strong> (80-90% de casos, lenta progresión) vs. <strong>Periodontitis Agresiva</strong> (10-20%, rápida progresión, destrucción desproporcionada).</p>
      <details>
        <summary>Ver críticas</summary>
        <ul>
          <li>Dicotomía crónica/agresiva artificial — superposición clínica constante</li>
          <li>Sin claridad sobre cómo medir "rápido" vs. "lento"</li>
          <li>No consideraba complejidad de manejo (un "agresivo" localizado puede ser más simple que un "crónico" severo generalizado)</li>
          <li>No integraba avances inmunológicos de los 90s (IL-1, TNF-α, RANKL, descubiertos en esa década)</li>
        </ul>
      </details>
    </div>

    <div class="arrow">↓ World Workshop 2017, 50+ países, 5000+ artículos revisados ↓</div>

    <div class="timeline-item">
      <h3>2018 — Tonetti, Greenwell &amp; Kornman (AAP/EFP)</h3>
      <p>Abandona completamente la dicotomía por un sistema multidimensional: <strong>Estadificación</strong> (severidad + complejidad) × <strong>Gradificación</strong> (velocidad de progresión) × <strong>Modificadores</strong> (riesgo individual).</p>
    </div>
  </div>

  <h3>Los datos que forzaron el cambio (2000-2018)</h3>
  <div class="evidence-cards">
    <div class="card">
      <h3>Billings et al. 2018 (NHANES)</h3>
      <p>n=15,000, 2009-2014. Halló tasas similares de periodontitis moderada/severa <strong>independientemente de la edad</strong> — la premisa de 1999 ("más frecuente en viejos") era falsa a nivel poblacional.</p>
    </div>
    <div class="card">
      <h3>Reynolds et al. 2000</h3>
      <p>Seguimiento de 10 años, n=200, pacientes "crónicos" de 1999. El <strong>20-25%</strong> mostró progresión rápida no esperada para su categoría — la categoría "crónica" era internamente heterogénea.</p>
    </div>
    <div class="card">
      <h3>Michalowicz et al. 2000-2002 (gemelos)</h3>
      <p>Gemelos monocigóticos con el mismo microbioma mostraron <strong>diferente progresión</strong> — los factores del huésped (genética, respuesta inmune) son tan importantes como el patógeno.</p>
    </div>
    <div class="card">
      <h3>Kornman et al. 2003 (genotipo IL-1)</h3>
      <p>El polimorfismo IL-1 predice susceptibilidad y severidad, pero <strong>no es determinante único</strong> (30% con genotipo "de riesgo" no desarrolla periodontitis severa) — es multifactorial.</p>
    </div>
  </div>

  <h3>Distribución trimodal de progresión (Reynolds/Lang/Billings)</h3>
  <table>
    <tr><th>Grupo</th><th>Velocidad</th><th>% población</th><th>Pérdida dentaria en 20 años</th></tr>
    <tr><td>A — Lento</td><td>&lt;0.1 mm/año</td><td>35-40%</td><td>0-2 dientes</td></tr>
    <tr><td>B — Moderado</td><td>0.2-0.5 mm/año</td><td>45%</td><td>3-8 dientes</td></tr>
    <tr><td>C — Rápido</td><td>&gt;0.7 mm/año</td><td>15-20%</td><td>&gt;8 dientes, riesgo de edentulismo</td></tr>
  </table>
  <p style="font-size:0.9rem;color:var(--text-light);"><strong>Hallazgo crítico:</strong> los tres grupos aparecían DENTRO de ambas categorías de 1999 — tanto "crónica" como "agresiva" tenían esta misma distribución trimodal. Por eso el sistema 2018 separó severidad (Estadio) de velocidad (Grado) como dimensiones independientes.</p>

  <div class="reference">
    📚 Basado en: Armitage 1999; Caton et al. 1999; Tonetti et al. 2018; Billings et al. 2018; Reynolds et al. 2000; Michalowicz et al. 2000-2002; Kornman et al. 2003
  </div>
</div>`,
  },
  {
    lesson_number: 4,
    order_index: 4,
    title: 'Estadificación: severidad acumulada + complejidad',
    content_html: `<div class="lesson-container">
  <h2>📐 Estadio I-IV: "dónde estamos ahora"</h2>
  <p>El <strong>Estadio</strong> refleja la severidad acumulada de pérdida de soporte periodontal hasta el momento del examen, integrada con la complejidad del manejo requerido. No es predictivo por sí solo — eso es función del Grado.</p>

  <table>
    <tr><th>Parámetro</th><th>Estadio I</th><th>Estadio II</th><th>Estadio III</th><th>Estadio IV</th></tr>
    <tr><td>CAL</td><td>1-2 mm</td><td>3-4 mm</td><td>≥5 mm</td><td>≥5 mm</td></tr>
    <tr><td>RBL radiográfica</td><td>&lt;15%</td><td>15-33%</td><td>≥33%</td><td>≥33%</td></tr>
    <tr><td>Pérdida dentaria</td><td>0</td><td>0</td><td>≤4 dientes</td><td>≥5 dientes</td></tr>
    <tr><td>Complejidad</td><td>Mínima</td><td>Moderada</td><td>Moderada-alta</td><td>Alta</td></tr>
  </table>

  <div class="cases">
    <div class="case-card">
      <h3>Estadio I — Incipiente</h3>
      <p>Patrón horizontal, sin defectos angulares ni furcación. PPS moderada (4-5mm) sin mayor CAL es posible (pseudobolsa por edema). Sin movilidad.</p>
      <details>
        <summary>Manejo y caso típico</summary>
        <p><strong>Complejidad baja:</strong> RAR, control de biofilm, sin necesidad quirúrgica. Pronóstico excelente con cumplimiento.</p>
        <p><em>Caso típico:</em> adulto joven (20-40a), hallazgo incidental en examen de rutina, inflamación gingival leve-moderada.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Estadio II — Moderada</h3>
      <p>Patrón horizontal predominante, defectos angulares posibles pero no críticos. Furcación Grado 1 posible. PPS típica 5-6mm.</p>
      <details>
        <summary>Manejo y caso típico</summary>
        <p><strong>Complejidad moderada:</strong> RAR exhaustivo (múltiples sesiones), cirugía de acceso accesoria en sitios de difícil acceso.</p>
        <p><em>Caso típico:</em> varón 45a, tratamiento previo hace 10 años seguido de negligencia. PPS 5-6mm posteriores, CAL 3-4mm, RBL 20-25%, sin movilidad.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Estadio III — Severa</h3>
      <p>Defectos angulares, furcación Grado 2 o mayor. Movilidad Grado 1-2. Lo que la diferencia de Estadio II: <strong>afectación furcacional + defectos angulares combinados</strong>, no un solo marcador aislado.</p>
      <details>
        <summary>Manejo y caso típico</summary>
        <p><strong>Complejidad moderada-alta:</strong> RAR extenso + antimicrobianos, cirugía de acceso/hueso típicamente requerida, regeneración tisular guiada (GTR) para defectos con potencial.</p>
        <p><em>Caso típico:</em> mujer 52a, diabética (HbA1c 8.2%), ex-fumadora. PPS máxima 8-9mm, furcación Grado 2, RBL 40%.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Estadio IV — Avanzada</h3>
      <p>Furcación Grado 3 (túnel completo), movilidad Grado 2-3. <strong>Criterio definitorio:</strong> pérdida dentaria atribuible a periodontitis — no es solo "más pérdida ósea que Estadio III", es que la enfermedad ya amenazó la integridad de la dentición.</p>
      <details>
        <summary>Manejo y caso típico</summary>
        <p><strong>Complejidad máxima:</strong> rehabilitación multidisciplinaria (periodoncia + prostodoncia + posible ortodoncia). Extracción selectiva + implantes frecuentemente más realista que intentar preservar todo.</p>
        <p><em>Caso típico:</em> varón 58a, fumador activo, diabetes descontrolada (HbA1c 9.0%). 4 molares ya perdidos, PPS hasta 11mm, RBL 60-70%.</p>
      </details>
    </div>
  </div>

  <h3>Extensión: el descriptor que acompaña al Estadio</h3>
  <p>Además del Estadio, cada caso se reporta con su <strong>extensión</strong> — qué proporción de la dentición está afectada. Es independiente del Estadio y del Grado: describe distribución, no severidad ni velocidad.</p>
  <table>
    <tr><th>Extensión</th><th>Definición</th></tr>
    <tr><td><strong>Localizada</strong></td><td>&lt;30% de los dientes presentan el nivel de CAL/RBL que define el Estadio</td></tr>
    <tr><td><strong>Generalizada</strong></td><td>≥30% de los dientes afectados</td></tr>
    <tr><td><strong>Patrón molar-incisivo</strong></td><td>Afectación concentrada en primeros molares e incisivos, con relativa preservación de caninos y premolares</td></tr>
  </table>
  <p style="font-size:0.9rem;color:var(--text-light);">Ejemplo de formato de diagnóstico completo: "Periodontitis Estadio III, Grado B, generalizada".</p>

  <div class="decision-tree">
    <h3>🧭 Árbol de decisión — asignación de Estadio</h3>
    <p><strong>¿CAL &gt;5mm o RBL &gt;50%?</strong></p>
    <ul>
      <li>SÍ → ¿Pérdida dentaria atribuible a periodontitis?
        <ul>
          <li>SÍ → <span class="outcome">ESTADIO IV</span></li>
          <li>NO → <span class="outcome">ESTADIO III</span></li>
        </ul>
      </li>
      <li>NO → ¿Furcación Grado 2-3 o defectos angulares significativos?
        <ul>
          <li>SÍ → <span class="outcome">ESTADIO III</span></li>
          <li>NO → ¿CAL 3-4mm o RBL 15-33%?
            <ul>
              <li>SÍ → <span class="outcome">ESTADIO II</span></li>
              <li>NO → ¿CAL 1-2mm o RBL &lt;15%? → <span class="outcome">ESTADIO I</span></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="reference">
    📚 Tonetti et al. 2018 (J Periodontol), Tabla 3 — Marco de Estadificación
  </div>
</div>`,
  },
  {
    lesson_number: 5,
    order_index: 5,
    title: 'Gradificación: velocidad de progresión + riesgo',
    content_html: `<div class="lesson-container">
  <h2>📈 Grado A-C: "hacia dónde vamos y qué tan rápido"</h2>
  <p>Mientras Estadio es "dónde estamos ahora", <strong>Grado</strong> refleja la velocidad de progresión esperada y la respuesta esperada al tratamiento, considerando el riesgo individual.</p>

  <table>
    <tr><th>Criterio</th><th>Grado A</th><th>Grado B</th><th>Grado C</th></tr>
    <tr><td>Evidencia directa</td><td>Sin pérdida en 5 años</td><td>&lt;2mm en 5 años</td><td>≥2mm en 5 años</td></tr>
    <tr><td>Incidencia anual</td><td>&lt;3%</td><td>3-20%</td><td>&gt;20%</td></tr>
    <tr><td>RBL ratio</td><td>&lt;0.25</td><td>0.25-1.0</td><td>&gt;1.0</td></tr>
    <tr><td>Fenotipo</td><td>Mucho biofilm, poca destrucción</td><td>Proporcional</td><td>Excede lo esperado</td></tr>
    <tr><td>Tabaco</td><td>No fumador</td><td>&lt;10 cig/día</td><td>≥10 cig/día</td></tr>
    <tr><td>Diabetes</td><td>Sin diagnóstico</td><td>HbA1c &lt;7%</td><td>HbA1c ≥7%</td></tr>
  </table>

  <div class="calc-box">
    <p><strong>Cálculo de RBL cuando no hay radiografías antiguas</strong></p>
    <p class="formula">RBL = (% de pérdida ósea en el diente más afectado) ÷ (edad en años)</p>
    <table>
      <tr><th>% Pérdida ósea</th><th>Edad 50</th><th>Edad 60</th><th>Edad 70</th><th>Grado</th></tr>
      <tr><td>30%</td><td>0.60</td><td>0.50</td><td>0.43</td><td>A</td></tr>
      <tr><td>40%</td><td>0.80</td><td>0.67</td><td>0.57</td><td>A/B</td></tr>
      <tr><td>50%</td><td>1.00</td><td>0.83</td><td>0.71</td><td>B</td></tr>
      <tr><td>60%</td><td>1.20</td><td>1.00</td><td>0.86</td><td>C</td></tr>
    </table>
  </div>

  <div class="cases">
    <div class="case-card">
      <h3>Grado A — ejemplo</h3>
      <p>Mujer 42a, fumadora social (menos de 5 cig/semana), diabetes bien controlada (HbA1c 6.8%). CAL 4-5mm, RBL 20-25% (Estadio II). Radiografías estables en 2 años.</p>
      <p><strong>Diagnóstico:</strong> Estadio II, Grado A. Plan: RAR estándar, seguimiento a 6 meses.</p>
    </div>
    <div class="case-card">
      <h3>Grado B — ejemplo</h3>
      <p>Varón 48a, fumador activo (7-8 cig/día), sin comorbilidades. CAL 4-5mm, RBL 25-30% (Estadio II). Progresión de 2mm RBL en 2 años (aproximadamente 3-4% anual).</p>
      <p><strong>Diagnóstico:</strong> Estadio II, Grado B. Plan: RAR + consejería de cesación; monitoreo cada 4 meses.</p>
    </div>
    <div class="case-card">
      <h3>Grado C — ejemplo</h3>
      <p>Varón 35a, fumador (20 cig/día), diabetes tipo 2 reciente (HbA1c 9.2%). CAL 6-7mm, RBL 40-50% (Estadio III-IV). Progresión &gt;20% anual documentada.</p>
      <p><strong>Diagnóstico:</strong> Estadio III, Grado C. Plan: referencia endocrinología urgente + RAR intensivo + antibiótico sistémico + monitoreo cada 6-8 semanas.</p>
    </div>
  </div>

  <h3>📊 Matriz Estadio × Grado — interpretación clínica</h3>
  <div class="interactive-matrix">
    <table class="matrix">
      <tr><th></th><th>Grado A</th><th>Grado B</th><th>Grado C</th></tr>
      <tr><th>Estadio I</th><td class="cell-icon">✅ Mejor pronóstico</td><td class="cell-icon">⚠️ Vigilancia</td><td class="cell-icon">🔴 Urgente</td></tr>
      <tr><th>Estadio II</th><td class="cell-icon">✅ Excelente</td><td class="cell-icon">⚠️ Rutina</td><td class="cell-icon">🔴 Intensivo</td></tr>
      <tr><th>Estadio III</th><td class="cell-icon">⚠️ Estable</td><td class="cell-icon">🔴 Complejo</td><td class="cell-icon">🔴 Agresivo</td></tr>
      <tr><th>Estadio IV</th><td class="cell-icon">🔴 Riesgo dentición</td><td class="cell-icon">🔴 Riesgo dentario</td><td class="cell-icon">🔴 Pérdida dentición</td></tr>
    </table>
  </div>

  <div class="key-principle">
    <h3>🎯 La combinación que más engaña</h3>
    <p><strong>Estadio I, Grado C</strong> es una "bomba de tiempo": severidad mínima hoy, pero riesgo altísimo de progresión — requiere intervención tan urgente como un Estadio III. Al revés, <strong>Estadio III/IV, Grado A</strong> puede tener mejor pronóstico a 10 años que un Estadio I Grado C, porque ya demostró ser biológicamente estable.</p>
  </div>

  <div class="reference">
    📚 Tonetti et al. 2018 (J Periodontol), Tabla 4 — Marco de Gradificación; Kornman &amp; Papapanou 2020
  </div>
</div>`,
  },
  {
    lesson_number: 6,
    order_index: 6,
    title: 'Modificadores de riesgo: tabaco, diabetes, sexo, estrés, genética',
    content_html: `<div class="lesson-container">
  <h2>⚙️ Los modificadores son parte de la clasificación, no notas al pie</h2>
  <p>Novedad de 2018: los modificadores <strong>se integran directamente</strong> en el diagnóstico y pronóstico, no se tratan como "factores de confusión" secundarios.</p>

  <div class="modifier-grid">
    <div class="modifier-box">
      <h4>🚬 Tabaquismo</h4>
      <ul>
        <li>No fumador → sin modificador (Grado A usual)</li>
        <li>1-9 cig/día → riesgo 2-4x</li>
        <li>10-19 cig/día → riesgo 4-5x, Grado B/C</li>
        <li>≥20 cig/día → riesgo 6-7x, Grado C</li>
      </ul>
      <p style="font-size:0.85rem;color:var(--text-light);">Mecanismo: ↓fagocitosis PMN (50%), vasoconstricción por nicotina, ↓síntesis de colágeno, alteración de microbiota (↑Pg/Tf). La cesación revierte parcialmente el riesgo en 1-2 años.</p>
    </div>
    <div class="modifier-box">
      <h4>🩺 Diabetes</h4>
      <ul>
        <li>HbA1c &lt;6.5% → tratamiento estándar</li>
        <li>HbA1c 7-8% → considerar antibiótico adyuvante</li>
        <li>HbA1c &gt;8.5% → referencia endocrinológica antes/durante terapia</li>
      </ul>
      <p style="font-size:0.85rem;color:var(--text-light);">Mecanismo bidireccional: hiperglucemia → AGE (productos de glicación avanzada) → ↑TNF-α/IL-1β/IL-6; y a la inversa, la periodontitis empeora el control glucémico (↑HbA1c 0.5-1%).</p>
    </div>
    <div class="modifier-box">
      <h4>♀️♂️ Sexo biológico</h4>
      <ul>
        <li>Mujeres: mayor severidad per-sitio en edad pareada</li>
        <li>Embarazo: exacerba enfermedad preexistente (no la causa de novo)</li>
        <li>Menopausia: ↓estrógeno → mayor riesgo de pérdida ósea generalizada</li>
      </ul>
      <p style="font-size:0.85rem;color:var(--text-light);">El estrógeno modula Th1/Th17 al alza y Th2/Treg a la baja, además de aumentar la permeabilidad vascular gingival.</p>
    </div>
    <div class="modifier-box">
      <h4>🧠 Estrés psicosocial</h4>
      <ul>
        <li>Depresión: 1.5-2x riesgo de periodontitis</li>
        <li>Estrés crónico desregula el eje HPA → inmunocompromiso paradójico</li>
        <li>Impacto conductual: ↓cumplimiento de higiene, ↑bruxismo, ↑tabaquismo</li>
      </ul>
      <p style="font-size:0.85rem;color:var(--text-light);">Presencia de depresión/estrés severo puede justificar subir un escalón de Grado (misma destrucción, peor respuesta esperada).</p>
    </div>
    <div class="modifier-box">
      <h4>🧬 Genética</h4>
      <ul>
        <li>IL-1α +4845G (genotipo GG): 3-4x riesgo de periodontitis severa</li>
        <li>TNF-α -308G/A: asociación moderada</li>
        <li>FcγRIIa R131: menor afinidad de opsonización, mayor riesgo</li>
      </ul>
      <p style="font-size:0.85rem;color:var(--text-light);">No es determinante único (aproximadamente 30% con genotipo "de riesgo" no desarrolla enfermedad severa) — predispone, no determina. Genotipado no es práctica estándar hoy.</p>
    </div>
  </div>

  <div class="key-principle">
    <h3>🎯 Sinergia, no suma</h3>
    <p>Fumador + diabético no es "riesgo x4 + riesgo x3 = x7" — es <strong>sinérgico</strong>, hasta 10-15x, porque ambos factores suprimen la función de PMN por vías distintas y complementarias.</p>
  </div>

  <div class="reference">
    📚 Basado en: Kornman et al. 2003; Tonetti et al. 2018; revisiones sobre tabaco/diabetes/estrés y periodontitis (2005-2020)
  </div>
</div>`,
  },
  {
    lesson_number: 7,
    order_index: 7,
    title: 'Aplicación clínica: evaluación y algoritmo terapéutico',
    content_html: `<div class="lesson-container">
  <h2>🩺 Del examen clínico al plan de tratamiento</h2>

  <h3>Protocolo de evaluación</h3>
  <div class="evidence-cards">
    <div class="card">
      <h3>1. Sondaje periodontal</h3>
      <p>≥6 sitios por diente. Registrar PPS más profundo y BOP (sí/no). Distinguir pseudobolsa (PPS &gt; CAL, por edema) de bolsa verdadera (PPS = CAL).</p>
    </div>
    <div class="card">
      <h3>2. Medición de CAL</h3>
      <p>Referencia: unión cementoesmalte (CEJ). CAL = PD + recesión gingival (si existe). Solo el CAL cuenta para la definición de caso y la asignación del Estadio — el PPS por sí solo es descriptor, no criterio.</p>
    </div>
    <div class="card">
      <h3>3. Furcación y movilidad</h3>
      <p>Furcación: Grado 1 (entrada), 2 (comunica pero no túnel), 3 (túnel completo). Movilidad: Grado 0 (normal) a 3 (&gt;2mm o movimiento vertical).</p>
    </div>
    <div class="card">
      <h3>4. Radiografía</h3>
      <p>Serie completa o panorámica + periapicales estratégicas. RBL = altura ósea perdida / altura radicular total × 100%. Comparar con radiografías previas si existen — es la evidencia más fuerte para el Grado.</p>
    </div>
  </div>

  <h3>Tabla de manejo por combinación Estadio/Grado</h3>
  <table>
    <tr><th>Estadio/Grado</th><th>Tratamiento inicial</th><th>Pronóstico</th></tr>
    <tr><td>I/A</td><td>RAR + higiene</td><td>Excelente</td></tr>
    <tr><td>I/C</td><td>RAR + antibiótico adyuvante</td><td>Reservado (alto riesgo pese a poca destrucción)</td></tr>
    <tr><td>II/A</td><td>RAR</td><td>Excelente</td></tr>
    <tr><td>II/C</td><td>RAR + antibiótico + referencia médica</td><td>Reservado</td></tr>
    <tr><td>III/A</td><td>RAR + regeneración si aplica</td><td>Bueno</td></tr>
    <tr><td>III/C</td><td>RAR + regeneración/cirugía + manejo médico</td><td>Pobre</td></tr>
    <tr><td>IV/A</td><td>RAR + referencia prostodoncia</td><td>Reservado</td></tr>
    <tr><td>IV/C</td><td>Planificación de extracción + rehabilitación</td><td>Pobre</td></tr>
  </table>

  <div class="decision-tree">
    <h3>🧭 Algoritmo de Gradificación cuando NO hay radiografías previas</h3>
    <ul>
      <li>¿Hay radiografías seriadas?
        <ul>
          <li>SÍ → calcular cambio directo en 5 años → <span class="outcome">Grado directo</span></li>
          <li>NO → usar evidencia indirecta:
            <ul>
              <li>Calcular RBL = % de pérdida ósea ÷ edad</li>
              <li>Revisar microbiología si disponible (Pg/Tf/Td → sospecha B/C)</li>
              <li>Revisar "discordancia" edad-severidad (joven con Estadio III → sospecha Grado C)</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Aplicar modificadores automáticos (tabaco ≥10 cig/día, HbA1c ≥7%) → <span class="outcome">sube el Grado</span></li>
    </ul>
  </div>

  <div class="definition-box">
    <p><strong>Formato de documentación recomendado:</strong> Estadio + justificación (CAL/RBL/patrón óseo) → Grado + justificación (tasa de progresión o proxies) → modificadores identificados → resumen clínico en 1-2 frases → plan de tratamiento.</p>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti et al. 2018; Kornman &amp; Papapanou 2020; guías de manejo clínico AAP/EFP
  </div>
</div>`,
  },
  {
    lesson_number: 8,
    order_index: 8,
    title: 'Casos clínicos integrados y preguntas frecuentes',
    content_html: `<div class="lesson-container">
  <h2>📋 Dos casos completos, de la anamnesis al plan</h2>

  <div class="cases">
    <div class="case-card">
      <h3>Caso 1 — Lucia G., 47 años: presentación típica Grado B</h3>
      <details>
        <summary>Ver historia, examen y diagnóstico completo</summary>
        <p><strong>Motivo de consulta:</strong> "Sangramiento cuando cepillo y movilidad en inferior".</p>
        <p><strong>Antecedentes:</strong> diabetes tipo 2 hace 5 años, HbA1c 7.2% (control moderado-bueno); no fuma; estrés laboral moderado; uso de hilo dental inconsistente.</p>
        <p><strong>Examen:</strong> CAL máxima 5mm (diente 26); PPS máxima 6mm; movilidad Grado 1 (diente 46); furcación Grado 1 en 17 y 36. RBL 30-35%, patrón horizontal. Progresión estimada: 2mm RBL en 3 años (aproximadamente 6% anual). Microbiología: Pg+ (25%), Tf+ (15%).</p>
        <p><strong>Diagnóstico:</strong> Estadio II (CAL 5mm, RBL 30-35%, sin defectos angulares significativos), Grado B (progresión de aproximadamente 6% anual, diabetes moderadamente controlada, sexo femenino).</p>
        <p><strong>Plan:</strong> RAR en 3 sesiones + educación de higiene + clorhexidina 2 semanas + referencia para optimizar HbA1c &lt;7%. Reevaluación a 6-8 semanas; cirugía de acceso si PPS residual persiste en posteriores. Mantenimiento cada 4 meses el primer año, luego cada 6 meses.</p>
        <p><strong>Pronóstico:</strong> excelente (85-90%) si mejora el control glucémico y el uso de hilo dental.</p>
      </details>
    </div>

    <div class="case-card">
      <h3>Caso 2 — Carlos M., 52 años: presentación agresiva Estadio IV, Grado C</h3>
      <details>
        <summary>Ver historia, examen y diagnóstico completo</summary>
        <p><strong>Motivo de consulta:</strong> "Llevo unos años con dientes flojos y me preguntaba ¿si podía colocarse implantes?"</p>
        <p><strong>Antecedentes:</strong> diabetes tipo 2 hace 8 años, HbA1c 9.2% (control muy deficiente); fumador activo 20-25 cig/día × 30 años; estrés severo (desempleo reciente, depresión sin tratar); última visita dental hace 7 años.</p>
        <p><strong>Examen:</strong> ya perdió 7 dientes por periodontitis. CAL máxima 9mm (diente 36); PPS máxima 11mm; movilidad Grado 3 en varios dientes; furcación Grado 3 en 26 y 36. RBL 60-80%, patrón circunferencial en molares, con supuración.</p>
        <p><strong>Diagnóstico:</strong> Estadio IV (pérdida dentaria múltiple atribuible a periodontitis, furcación Grado 3, movilidad Grado 3), Grado C (tabaquismo severo + diabetes descontrolada = sinergia máxima de riesgo).</p>
        <p><strong>Plan:</strong> referencia urgente a endocrinología y a salud mental (depresión sin tratar impide cualquier cumplimiento). Discusión honesta sobre extracción selectiva de dientes con pronóstico imposible (16, 26, 36) vs. intento de preservación limitada. Rehabilitación con implantes tras 6-12 meses de cicatrización. Mantenimiento cada 6-8 semanas indefinidamente.</p>
        <p><strong>Pronóstico:</strong> muy pobre para preservar la dentición completa; moderado para estabilización si cesa el tabaco, controla la diabetes y trata la depresión — sin esos cambios, perderá los dientes restantes en 2-5 años.</p>
      </details>
    </div>
  </div>

  <h3>Preguntas clínicas frecuentes</h3>
  <div class="evidence-cards">
    <div class="card">
      <h3>¿Este paciente es "agresivo" o "crónico"?</h3>
      <p>2018 eliminó esos términos. El concepto de "agresiva" hoy es <strong>Grado C</strong> (rápida progresión, en cualquier Estadio), y "crónica" es <strong>Grado A/B</strong>. Un joven puede tener Estadio IV Grado C; un adulto mayor puede tener Estadio III Grado A.</p>
    </div>
    <div class="card">
      <h3>¿Sin radiografías previas, cómo asigno Grado?</h3>
      <p>Se usa evidencia indirecta: microbiología, "discordancia" edad-severidad, y modificadores presentes. Si hay incertidumbre real, se asigna Grado B provisional y se reevalúa en 6-12 meses con sondajes comparativos.</p>
    </div>
    <div class="card">
      <h3>¿El genotipo IL-1 cambia el tratamiento?</h3>
      <p>Hoy no es estándar de práctica. Es útil para consejería ("tu genética te hace vulnerable, la adherencia es crítica"), pero no determina el plan terapéutico por sí solo.</p>
    </div>
    <div class="card">
      <h3>¿Cuál es el intervalo correcto de reevaluación post-RAR?</h3>
      <p>Grado A: 4-6 semanas. Grado B: 4-6 semanas. Grado C: 4-6 semanas — el intervalo de reevaluación inicial post-RAR es el mismo independientemente del Grado; lo que cambia según el Grado es la frecuencia del mantenimiento a largo plazo una vez pasada esa reevaluación.</p>
    </div>
  </div>

  <div class="reference">
    📚 Basado en: Tonetti et al. 2018; Kornman &amp; Papapanou 2020; Chapple et al. 2018; Caton et al. 2018
  </div>
</div>`,
  },
];

export const pretestQuestions = [
  {
    question_text: '¿Cuál es la diferencia básica entre gingivitis y periodontitis?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'La gingivitis inducida por biofilm es una inflamación confinada a la encía, puede presentarse en un periodonto intacto o reducido y es reversible con el control del biofilm; la periodontitis implica pérdida de inserción clínica y destrucción de los tejidos de soporte.' },
      { key: 'b', text: 'La gingivitis produce dolor intenso; la periodontitis no.' },
      { key: 'c', text: 'La gingivitis es causada por virus; la periodontitis por bacterias.' },
      { key: 'd', text: 'No hay diferencia.' },
    ],
    correct_answer: 'a',
    explanation: 'La gingivitis inducida por biofilm es una inflamación confinada a la encía y reversible con control del biofilm. Puede presentarse tanto en periodonto intacto como reducido (secuela de periodontitis tratada). La periodontitis implica pérdida de inserción clínica atribuida a enfermedad y destrucción de tejidos de soporte (cemento, ligamento periodontal, hueso alveolar).',
    order_index: 1,
  },
  {
    question_text: '¿Qué parámetro define el diagnóstico de periodontitis según AAP/EFP 2018?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'El nivel de placa visible.' },
      { key: 'b', text: 'La pérdida de inserción clínica en dos o más dientes no adyacentes.' },
      { key: 'c', text: 'La presencia de caries.' },
      { key: 'd', text: 'El color de la encía.' },
    ],
    correct_answer: 'b',
    explanation: 'La clasificación AAP/EFP 2018 considera la pérdida de inserción clínica (CAL) como criterio diagnóstico fundamental. Debe estar presente en ≥2 dientes no adyacentes. Otros hallazgos (placa, caries, color gingival) aportan información clínica pero no definen por sí solos periodontitis.',
    order_index: 2,
  },
  {
    question_text: '¿Cuál es un factor sistémico que aumenta significativamente el riesgo de periodontitis?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Tabaquismo.' },
      { key: 'b', text: 'Consumo moderado de alcohol.' },
      { key: 'c', text: 'Uso de colutorios.' },
      { key: 'd', text: 'Dieta rica en fibra.' },
    ],
    correct_answer: 'a',
    explanation: 'El tabaquismo es uno de los modificadores de riesgo mejor establecidos. Aumenta susceptibilidad, favorece progresión, y modifica el Grado asignado (≥10 cigarrillos/día = escalada hacia Grado C). Consumo moderado de alcohol, uso de colutorios y dieta no son modificadores de riesgo primarios.',
    order_index: 3,
  },
  {
    question_text: '¿Qué dimensión de la clasificación AAP/EFP 2018 estima principalmente la VELOCIDAD de progresión de la periodontitis?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Extensión.' },
      { key: 'b', text: 'Grado.' },
      { key: 'c', text: 'Estadio.' },
      { key: 'd', text: 'Sangrado al sondaje.' },
    ],
    correct_answer: 'b',
    explanation: 'El Grado estima la velocidad de progresión (lenta=A, moderada=B, rápida=C) y riesgo futuro. El Estadio resume la severidad acumulada y complejidad del manejo. Sangrado y extensión son descriptores, no estimadores de velocidad.',
    order_index: 4,
  },
];

export const posttestQuestions = [
  {
    question_text: '¿Qué porcentaje de dientes afectados define una periodontitis GENERALIZADA?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Menos del 10%.' },
      { key: 'b', text: '10-29%.' },
      { key: 'c', text: '30% o más.' },
      { key: 'd', text: 'No se considera en la clasificación.' },
    ],
    correct_answer: 'c',
    explanation: 'La extensión se reporta como "Generalizada" cuando ≥30% de dientes están afectados por periodontitis. Si es menor a 30%, se reporta "Localizada". Esto es independiente del Estadio o Grado.',
    order_index: 1,
  },
  {
    question_text: 'Un paciente fumador de 15 cigarrillos/día con HbA1c de 8% debe clasificarse al menos como:',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Grado A.' },
      { key: 'b', text: 'Grado B.' },
      { key: 'c', text: 'Grado C.' },
      { key: 'd', text: 'No tiene influencia en el Grado.' },
    ],
    correct_answer: 'c',
    explanation: '≥10 cigarrillos/día y HbA1c ≥7% son modificadores que orientan hacia Grado C por su asociación con mayor velocidad de progresión. Ambos presentes = escalada clara hacia Grado C.',
    order_index: 2,
  },
  {
    question_text: '¿Cuál es el umbral radiográfico de pérdida ósea que distingue Estadio II de Estadio III?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Menos de 15% de la longitud radicular.' },
      { key: 'b', text: '15-33%.' },
      { key: 'c', text: 'Pérdida que alcanza el tercio medio de la raíz (>50%).' },
      { key: 'd', text: 'Cualquier pérdida ósea.' },
    ],
    correct_answer: 'c',
    explanation: 'Estadio II: RBL 15-33% (tercio coronal). Estadio III: RBL que alcanza el tercio medio o apical de la raíz. Esta transición es importante porque requiere radiografía COMPARATIVA (previa) para determinar la progresión.',
    order_index: 3,
  },
  {
    question_text: 'El patrón de distribución "molar-incisivo" se reporta cuando:',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Se afectan principalmente primeros molares e incisivos.' },
      { key: 'b', text: 'Hay movilidad generalizada.' },
      { key: 'c', text: 'Solo hay pérdida en caninos.' },
      { key: 'd', text: 'Todos los dientes están afectados por igual.' },
    ],
    correct_answer: 'a',
    explanation: 'El patrón molar-incisivo es un descriptor de distribución que indica afectación concentrada en molares (especialmente primeros) e incisivos, preservando caninos y premolares. Es importante reportarlo porque tiene implicaciones pronósticas y terapéuticas distintas.',
    order_index: 4,
  },
  {
    question_text: '¿Cómo se calcula la VELOCIDAD RELATIVA de pérdida ósea (evidencia indirecta de progresión) para asignar el Grado en ausencia de radiografías comparativas?',
    question_type: 'multiple_choice',
    options: [
      { key: 'a', text: 'Dividiendo el porcentaje de pérdida ósea por la edad del paciente.' },
      { key: 'b', text: 'Contando el número de dientes perdidos.' },
      { key: 'c', text: 'Multiplicando el porcentaje de sangrado por la edad.' },
      { key: 'd', text: 'Calculando el índice de placa.' },
    ],
    correct_answer: 'a',
    explanation: 'La fórmula: % de pérdida ósea radiográfica ÷ edad (años) = velocidad relativa de pérdida ósea por año. Ejemplo: 50% de pérdida ósea a los 50 años = 1%/año (Grado A-B); 50% a los 30 años = 1.67%/año (Grado C). Cuando NO hay radiografía previa, esta fórmula aproxima la velocidad de progresión para la estimación del Grado.',
    order_index: 5,
  },
];
