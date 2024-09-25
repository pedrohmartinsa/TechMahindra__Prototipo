import { Outlet } from "react-router-dom"
import BarraDePesquisa from "./components/BarraDePesquisa"
import Nav from "./components/Nav"

function App() {

  return (
    <>

    <div className="flex">

      <Nav/>
      <div className="w-full">
        <BarraDePesquisa/>
        <Outlet/>
      </div>

    </div>
      
    </>
  )
}

export default App
