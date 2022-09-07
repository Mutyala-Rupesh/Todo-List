import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Todo/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
