import { Outlet } from "react-router-dom"
import BarraDePesquisa from "./components/BarraDePesquisa"
import Nav from "./components/Nav"

function App() {

  return (
    <div className="flex">
      <div className="min-w-60">
        <div className="fixed">
          <Nav/>
        </div>
      </div>
      <div className="mx-auto">
        <BarraDePesquisa/>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
