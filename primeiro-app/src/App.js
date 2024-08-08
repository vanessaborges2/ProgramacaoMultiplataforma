import Titulo from "./components/Titulo";
import Contador from "./components/Contador";
import FormularioSoma from "./components/FormularioSoma";

function App() {
  return ( 
    <div>
      <Titulo nome="Vanessa" sobrenome="Borges"/>
      <Titulo nome="Breno" sobrenome="Bacelar"/>
      <Contador/>
      <FormularioSoma/>
    </div>  
  );
}

export default App;
