import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import './App.css';
import { Header } from "./componentes/Header";
import { Conversor } from "./componentes/Conversor";
import { Footer } from "./componentes/Footer";
import { Section } from "./componentes/Section";
import { Section1 } from "./componentes/Section1";
import { Form } from "./componentes/Form";

import {Carrucel} from  "./componentes/Carrucel";
function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Conversor />
      <Section1 />
      <Form />
     
      <Carrucel/>
      <Footer />
    </div>
  );
}
export default App;
