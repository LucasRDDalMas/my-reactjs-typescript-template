import '@/presentation/styles/global.scss'
import React from 'react'
import { createRoot } from 'react-dom/client'
import reportWebVitals from '@/main/reportWebVitals'

import { Router } from '@/presentation/components'
import { Home } from '@/presentation/pages'

const container = document.getElementById('main')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
    <Router
        Home={Home}
    />
)

reportWebVitals()
