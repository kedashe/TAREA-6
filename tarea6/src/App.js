import "./styles.css";

//import './App.css';
import { Header } from "./componentes/Header";
import { Conversor } from "./componentes/Conversor";
import { Footer } from "./componentes/Footer";
import { Section } from "./componentes/Section";
import { Section1 } from "./componentes/Section1";
import { Form } from "./componentes/Form";
function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Conversor />
      <Section1 />
      <Form />
      <Footer />
    </div>
  );
}
export default App;
