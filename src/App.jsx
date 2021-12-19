
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer';

const App =()=> (
  
    <>
    <NavBar titulo='Escena de cocina'/>
    <div className='container' style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
    <ItemListContainer/>
    </div>
    </>

);

export default App;
