// import logo from './logo.svg';
import './App.css';
// import ButtonCl from './ButtonCl/ButtonCl'
// import ButtonFc from './ButtonFc/ButtonFc'
import NavBar from './components/navbar/navbar'
// import Inicio from './components/ItemListContainer'
import ItemListContainer from './DesafioMapPromises/ItemListContainer'
// import ItemList from './DesafioMapPromises/ItemList';
// import Name from './components/Name/name'
// import Hok from './promesas/hook'
// import Prueba from './components/ejercicio/pruebas'

function App() {
  // const suma2 = (num) => {
  //   console.log(num+2);
  // }

  return (
    <div className="App">
        <NavBar />        
        {/* <Inicio /> */}
        <ItemListContainer />
        {/* <Name nombre='SD'/> */}
        {/* <Hok /> */}
        {/* <Prueba /> */}
        {/* <ButtonCl text={'Soy nuevo boton'} color={'red'} padding={'35px'}/>
        <ButtonFc> */}
        {/* </ButtonFc>  */}
    </div>
  );
}

export default App;
