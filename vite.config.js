import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import jsconfigPaths from 'vite-jsconfig-paths';
export default defineConfig(() => {
  return {
    base: '/tesla-frontend/ui/',
    experimental: {
      renderBuiltUrl: (filename) => `/${filename}`
    },
    plugins: [react(), jsconfigPaths()]

  };
});
