import './index.css'
import { NavbarOrganized, NavbarUnorganized } from "./components"

function App() {


  return (
    <div className="App">
      <NavbarUnorganized />
      <NavbarOrganized intent="danger" />
      <NavbarOrganized />
    </div>
  )
}

export default App
