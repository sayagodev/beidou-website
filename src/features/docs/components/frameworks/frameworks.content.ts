import { t, type Dictionary } from 'intlayer'

const frameworksContent = {
  key: 'frameworks',
  content: {
    heading: t({
      en: 'Framework Integration',
      es: 'Integracion con Frameworks',
    }),
    desc: t({
      en: 'Beidou works out of the box with most frameworks. Just ensure it initializes after the DOM is ready.',
      es: 'Beidou funciona de serie con la mayoria de frameworks. Solo asegurate de que se inicialice despues de que el DOM este listo.',
    }),
    react: 'React',
    vue: 'Vue 3',
    svelte: 'Svelte',
    reactCode: `import { useEffect } from 'react';
import Beidou from 'beidou-nav';

export function useBeidou(options) {
  useEffect(() => {
    const beidou = new Beidou(options);
    return () => beidou.destroy();
  }, [options]);
}`,
    vueCode: `<!-- Vue 3 Composition API -->
<script setup>
import { onMounted, onUnmounted } from 'vue'
import Beidou from 'beidou-nav'

let beidou

onMounted(() => {
  beidou = new Beidou({ key: 'Alt' })
})

onUnmounted(() => {
  beidou?.destroy()
})
</script>`,
    svelteCode: `<!-- Svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';
  import Beidou from 'beidou-nav';

  let beidou;

  onMount(() => {
    beidou = new Beidou({ key: 'Alt' });
  });

  onDestroy(() => {
    beidou?.destroy();
  });
</script>`,
  },
} satisfies Dictionary

export default frameworksContent
