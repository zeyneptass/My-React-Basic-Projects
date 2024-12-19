import './App.css'
import Header from './Components/Header'
import ToDoList from './Components/ToDoList'

function App() {


  return (
    <div>
      <Header/>
      <div className="app">
            <ToDoList/>
        </div>
    </div>    
  )
}

export default App
