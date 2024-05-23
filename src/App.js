import './App.css';
import { Test1, Test2, MyApp } from './Components/Task1';
import { Profile } from './Components/Задание1';
import { Ifrender } from './Components/Task3';
import{ShoppingList} from './Components/Task4'

function App()
 {
  return (
    <div className="App">

      {/* <Test1></Test1>
     <Test2></Test2> */}
     {/* {<MyApp></MyApp> } */}
     <Profile></Profile>
     
     {/* Условный рендеринг */}
     {/* <Ifrender></Ifrender> */}
     {/* <ShoppingList></ShoppingList> */}


    </div>
  );
}

export default App;


