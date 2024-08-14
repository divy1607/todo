import TodoApp from "./components/TodoApp.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App (){
  return <div>

    
    <Router>
      <Header></Header>
      <Routes>
        <Route path = '/' element = {<TodoApp/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  </div>
}

export default App