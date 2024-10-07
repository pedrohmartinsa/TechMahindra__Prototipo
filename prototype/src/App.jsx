import { Outlet } from "react-router-dom"
import BarraDePesquisa from "./components/BarraDePesquisa"
import Nav from "./components/Nav"
import Usuario from "./components/Usuario"

function App() {

  return (
    <div className="flex">
      <div className="min-w-60 h-screen bg-secundaria">
        <div className="fixed">
          <Nav/>
        </div>
      </div>
      <div className="mx-auto w-full bg-terciaria">
        <div className="flex items-center justify-center">
          <BarraDePesquisa/>
          <Usuario/>
        </div>
        

        <Outlet/>
      </div>
    </div>
  )
}

export default App
