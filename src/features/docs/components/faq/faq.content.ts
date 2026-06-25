import { t, type Dictionary } from 'intlayer'

const faqContent = {
  key: 'faq',
  content: {
    heading: t({
      en: 'FAQ',
      es: 'Preguntas Frecuentes',
    }),
    q1Question: t({
      en: 'How do I change the activation key?',
      es: '¿Cómo cambio la tecla de activación?',
    }),
    q1Answer: t({
      en: '<p>By default, <code>Alt</code> is used. You can change it in the constructor:</p><pre data-lang="javascript">const beidou = new Beidou({ key: \'Control\' });</pre>',
      es: '<p>Por defecto se usa <code>Alt</code>. Puedes cambiarla al constructor:</p><pre data-lang="javascript">const beidou = new Beidou({ key: \'Control\' });</pre>',
    }),
    q2Question: t({
      en: 'How does Beidou work?',
      es: '¿Cómo funciona Beidou?',
    }),
    q2Answer: t({
      en: '<ol><li>Press <code>Alt</code> (or the configured key) to activate navigation mode</li><li>Badges (A, B, C...) will appear over each visible interactive element</li><li>Press the corresponding letter to click on that element</li><li>Press <code>Alt</code> again, the <code>Esc</code> key, or click on an empty space to deactivate</li></ol>',
      es: '<ol><li>Presiona <code>Alt</code> (o la tecla configurada) para activar el modo navegación</li><li>Aparecerán badges (A, B, C...) sobre cada elemento interactivo visible</li><li>Presiona la letra correspondiente para hacer clic en ese elemento</li><li>Presiona <code>Alt</code> de nuevo, la tecla <code>Esc</code> o haz clic en un espacio vacío para desactivar</li></ol>',
    }),
    q3Question: t({
      en: 'Which elements support keyboard shortcuts?',
      es: '¿Qué elementos reciben atajos de teclado?',
    }),
    q3Answer: t({
      en: '<p>Beidou automatically detects:</p><ul><li><code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code></li><li>Elements with <code>role="button"</code>, <code>role="link"</code>, <code>role="tab"</code></li><li>Elements with <code>onclick</code> or <code>tabindex &gt;= 0</code></li></ul>',
      es: '<p>Beidou detecta automáticamente:</p><ul><li><code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code></li><li>Elementos con <code>role="button"</code>, <code>role="link"</code>, <code>role="tab"</code></li><li>Elementos con <code>onclick</code> o <code>tabindex &gt;= 0</code></li></ul>',
    }),
    q4Question: t({
      en: 'What are contexts?',
      es: '¿Qué son los contextos?',
    }),
    q4Answer: t({
      en: 'Contexts allow you to navigate between different "levels" of the UI (such as nested menus or modals). They use the <code>data-ko-ctx</code> and <code>data-ko-target</code> attributes.',
      es: 'Los contextos permiten navegar entre diferentes "niveles" de la UI (como menús anidados o modales). Usan los atributos <code>data-ko-ctx</code> y <code>data-ko-target</code>.',
    }),
    q5Question: t({
      en: 'How do I create a sub-context?',
      es: '¿Cómo creo un sub-contexto?',
    }),
    q5AnswerCode: t({
      en: '<div data-ko-ctx="root">\n  <button data-ko-target="menu1">Open menu</button>\n\n  <div data-ko-ctx="menu1">\n    <button>Option 1</button>\n    <button data-ko-back>Back</button>\n  </div>\n</div>',
      es: '<div data-ko-ctx="root">\n  <button data-ko-target="menu1">Abrir menú</button>\n\n  <div data-ko-ctx="menu1">\n    <button>Opción 1</button>\n    <button data-ko-back>Volver</button>\n  </div>\n</div>',
    }),
    q5AnswerPreview: t({
      en: '<div class="faq__preview-root"><button class="faq__preview-btn" style="padding:0.5rem 1rem;background:var(--primary);color:var(--primary-foreground);border:none" data-ko-target="menu1">Open menu</button><div class="faq__preview-sub" data-ko-ctx="menu1"><span class="faq__preview-sub-label">data-ko-ctx="menu1"</span><div class="faq__preview-btns"><button class="faq__preview-btn">Option 1</button><button class="faq__preview-btn" data-ko-back>Back</button></div></div></div>',
      es: '<div class="faq__preview-root"><button class="faq__preview-btn" style="padding:0.5rem 1rem;background:var(--primary);color:var(--primary-foreground);border:none" data-ko-target="menu1">Abrir menú</button><div class="faq__preview-sub" data-ko-ctx="menu1"><span class="faq__preview-sub-label">data-ko-ctx="menu1"</span><div class="faq__preview-btns"><button class="faq__preview-btn">Opción 1</button><button class="faq__preview-btn" data-ko-back>Volver</button></div></div></div>',
    }),
    q6Question: t({
      en: "Badges don't appear or aren't visible",
      es: 'Los badges no aparecen o no se ven',
    }),
    q6Answer: t({
      en: '<p>Verify that:</p><ol><li>Elements are visible (don\'t have <code>display: none</code> or <code>visibility: hidden</code>)</li><li>Elements have real dimensions (aren\'t collapsed)</li><li>They aren\'t outside the viewport</li><li>No ancestor has <code>overflow: hidden/clip</code> that clips the element</li></ol>',
      es: '<p>Verifica que:</p><ol><li>Los elementos estén visibles (no tengan <code>display: none</code> o <code>visibility: hidden</code>)</li><li>Los elementos tengan dimensiones reales (no estén colapsados)</li><li>No estén fuera del viewport</li><li>Un ancestro no tenga <code>overflow: hidden/clip</code> que recorte el elemento</li></ol>',
    }),
    q7Question: t({
      en: 'Badges appear behind other elements',
      es: 'Los badges aparecen detrás de otros elementos',
    }),
    q7Answer: t({
      en: '<p>The z-index of badges is <code>99999</code>. If your page uses higher z-index values, you can override it with CSS:</p><pre data-lang="css">:root { --ko-badge-z: 999999; }\n.ko-badge { z-index: var(--ko-badge-z); }</pre>',
      es: '<p>El z-index de las insignias es <code>99999</code>. Si tu página usa z-index mayores, puedes sobrescribirlo con CSS:</p><pre data-lang="css">:root { --ko-badge-z: 999999; }\n.ko-badge { z-index: var(--ko-badge-z); }</pre>',
    }),
    q8Question: t({
      en: 'Which browsers does it support?',
      es: '¿Qué navegadores soporta?',
    }),
    q8Answer: t({
      en: 'All modern browsers: Chrome, Firefox, Safari, Edge. Requires <code>Element.closest()</code> and <code>CSS.escape()</code> (ES2020+).',
      es: 'Todos los navegadores modernos: Chrome, Firefox, Safari, Edge. Requiere <code>Element.closest()</code> y <code>CSS.escape()</code> (ES2020+).',
    }),
    q9Question: t({
      en: 'Does it work on mobile?',
      es: '¿Funciona en móvil?',
    }),
    q9Answer: t({
      en: 'Beidou is designed for keyboard navigation. On mobile devices without a physical keyboard, it has no practical use.',
      es: 'Beidou está diseñado para navegación por teclado. En dispositivos móviles sin teclado físico, no tiene utilidad práctica.',
    }),
    q10Question: t({
      en: 'Is it accessible (a11y)?',
      es: '¿Es accesible (a11y)?',
    }),
    q10Answer: t({
      en: 'Beidou improves keyboard navigation, but it does not replace proper semantic markup. Use it as an additional layer, not as the sole means of navigation.',
      es: 'Beidou mejora la navegación por teclado, pero no reemplaza un correcto marcado semántico. Úsalo como capa adicional, no como única forma de navegación.',
    }),
  },
} satisfies Dictionary

export default faqContent
