
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Landing } from './views/Landing'
import { Admin } from './views/Admin'
import { Overlook } from './views/Overlook'
import { Menu } from './views/Menu'

import '@/css/app.css'

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing/>}>
            </Route>
            <Route path='/Admin' element={<Admin/>}>
            </Route>
            <Route path='/Overlook' element={<Overlook/>}>
            </Route>
            <Route path='/Menu' element={<Menu/>}>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}