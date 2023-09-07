import './App.css';
import NavBar1 from '../src/components/NavBar1';
import ItemListContainer from './components/ItemListContainer';
import Custombuttom from './components/Custombuttom';

function App() {
  return (
    <div className="App">
      <NavBar1/>
      <ItemListContainer greeting="State of Chaos"/>
      <Custombuttom color='red' label="mi boton" callback={() => console.log('click')}/>
    </div>
  );
}

export default App;
