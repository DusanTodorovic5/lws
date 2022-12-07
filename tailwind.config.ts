import { Config } from 'tailwindcss'
import {primary, secondary} from './design.config'

export default <Config>{
    darkMode: 'class',
    content: [
        'components/**/*.{vue,ts,tsx}',
        'content/**/*.md',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.ts',
        'plugins/**/*.ts',
        'app.vue'
    ],
    theme: {
        extend: {
            colors: {
                primary,
                secondary
            }
        }
    }
}
