import { Router } from '@/main/routes'
import '@/presentation/styles/global.scss'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('main'))
root.render(<Router />)
