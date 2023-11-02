import { useState , useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoList from './components/TodoList'
import * as todosService from './services/todosService';

function App() {

  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    todosService.getAll()
    .then(res => setTodos(res))
  },[])

  console.log(todos);

  return (
    <>
       <Header/>

        <TodoList todos={todos}/>
       <Footer/>
    </>
  )
}

export default App
