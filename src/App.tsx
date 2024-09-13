import './App.css'
import { SideBar } from './assets/components/SideBar'
import { MainSide } from './assets/components/MainSide'

function App() {

  return (
    <div className='allSection'>
      <SideBar></SideBar>
      <MainSide></MainSide>
    </div>
  )
}

export default App