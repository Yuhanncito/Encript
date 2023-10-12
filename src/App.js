// Añade las librerias a utilizar y si es necesario, comenta el comando de instalación en caso de que no se encuentre en el repositorio.
// npm install react-router-dom
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Headers from "./components/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Headers />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;


