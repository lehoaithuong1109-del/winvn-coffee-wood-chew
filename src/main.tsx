import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App'
import './styles/index.css'
import '@fontsource/neuton/400.css'
import '@fontsource/neuton/700.css'
import '@fontsource/work-sans/300.css'
import '@fontsource/work-sans/400.css'
import '@fontsource/work-sans/500.css'

export const createRoot = ViteReactSSG({ routes })
