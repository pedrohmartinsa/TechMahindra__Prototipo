import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import VideoCurtos from './pages/VideoCurtos/index.jsx'
import AoVivo from './pages/AoVivo/index.jsx'
import Games from './pages/Games/index.jsx'
import Notificacoes from './pages/Notificacoes/index.jsx'
import Configuracoes from './pages/Configuracoes/index.jsx'
import Perfil from './pages/Perfil/index.jsx'
import Register from './pages/Register/index.jsx'
import NewPassword from './pages/NewPassword/index.jsx'
import JornalDaCorrida from './pages/Home/JornalDaCorrida/index.jsx'
import Highlights from './pages/Home/HighLights/index.jsx'
import Global from './pages/VideoCurtos/Global/index.jsx'
import Seguindo from './pages/VideoCurtos/Seguindo/index.jsx'
import Criar from './pages/VideoCurtos/Criar/index.jsx'
import SeusVideos from './pages/Perfil/SeusVideos/index.jsx'
import SuasCustomizacoes from './pages/Perfil/SuasCustomizacoes/index.jsx'
import Salvos from './pages/Perfil/Salvos/index.jsx'
import Login from './pages/Login/index.jsx'
import Teste from './pages/Teste'
import Customizar from './pages/Games/Customizar/index.jsx'
import Quiz from './pages/Games/Quiz/index.jsx'

const router = createBrowserRouter
(
  [
    
  {
    path: "/",
    element: <App/>,

    children: [
      {path: '/', element: <Teste/>},
      {path: 'home', element: <Home/>, children: [
        {path: 'jornal', element:<JornalDaCorrida/>},
        {path: 'highlights', element: <Highlights/>}
      ]},
      {path: 'registro', element: <Register/>},
      {path: 'newPassword', element: <NewPassword/>},
      {path: 'videosCurtos', element: <VideoCurtos/>, children: [
        {path: 'global', element: <Global/>},
        {path: 'seguindo', element: <Seguindo/>},
        {path: 'criar', element: <Criar/>}
      ]},
      {path: 'aoVivo', element: <AoVivo/>},
      {path: 'customizar', element: <Games/>, children: [
        {path: 'customizar', element: <Customizar/>},
        {path: 'quiz', element:<Quiz/>}
      ]},
      {path: 'notificacoes', element: <Notificacoes/>},
      {path: 'perfil', element: <Perfil/>, children: [
        {path: 'seusVideos', element: <SeusVideos/>},
        {path:'suasCustomizacoes', element: <SuasCustomizacoes/>},
        {path:'salvos',element: <Salvos/>}
      ]},
      {path: 'configuracoes', element: <Configuracoes/>}
    ]
  }

  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
