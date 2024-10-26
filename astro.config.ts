import { defineConfig } from 'astro/config'

import alpinejs from '@astrojs/alpinejs'
import tailwind from '@astrojs/tailwind'

import solidJs from '@astrojs/solid-js'

export default defineConfig({
  integrations: [tailwind(), alpinejs(), solidJs()],
})
