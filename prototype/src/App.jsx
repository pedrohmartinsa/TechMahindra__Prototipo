import { Outlet } from "react-router-dom"
import BarraDePesquisa from "./components/BarraDePesquisa"
import Nav from "./components/Nav"

function App() {

  return (
    <>
      <Nav/>
      <BarraDePesquisa/>
      <Outlet/>
    </>
  )
}

export default App
