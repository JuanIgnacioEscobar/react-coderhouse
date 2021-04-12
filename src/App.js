// import logo from './logo.svg';
import './App.css';
// import ButtonCl from './ButtonCl/ButtonCl'
// import ButtonFc from './ButtonFc/ButtonFc'
import NavBar from './components/navbar/navbar'
import Inicio from './components/ItemListContainer'

function App() {
  // const suma2 = (num) => {
  //   console.log(num+2);
  // }

  return (
    <div className="App">
        <NavBar />
        <Inicio />
        {/* <ButtonCl text={'Soy nuevo boton'} color={'red'} padding={'35px'}/>
        <ButtonFc> */}
        {/* </ButtonFc>  */}
    </div>
  );
}

export default App;
