import { Link, Outlet } from "react-router-dom"

import './App.css'
import Header from "./Components/Header"

function App() {

  return (
    <>
      <Header />
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/Characters">Characters</Link>
        <Link to="/Contact">Contact</Link>
      </nav> */}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
