import { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import 'services/i18n'

import GlobalStyles from 'styles/globalStyles'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense>
    <App />
    <GlobalStyles />
  </Suspense>,
)
