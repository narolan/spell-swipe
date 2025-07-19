import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";
import pkg from './package.json';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
                registerType: 'autoUpdate',
                includeAssets: ['favicon.svg'],
                manifest: {
                    name: 'Spell Swipe',
                    short_name: 'SpellSwipe',
                    description: 'Is it a DnD Spell or is it a metalband?',
                    theme_color: '#121212',
                    background_color: '#121212',
                    display: 'standalone',
                    start_url: '.',
                    icons: [
                        {
                            src: 'icon-192.png',
                            sizes: '192x192',
                            type: 'image/png'
                        },
                        {
                            src: 'icon-512.png',
                            sizes: '512x512',
                            type: 'image/png'
                        }
                    ]
                }
            }
        )
    ],
    base: '/spell-swipe/',
    server: {
        open: true,
        port: 3000
    },
    define: {
        __APP_VERSION__: JSON.stringify(pkg.version),
    }
})
