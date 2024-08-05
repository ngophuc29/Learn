import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
// import MyComponent from './components/MyComponent';

import React from 'react';
import Header from './components/Header/Header';

// class App extends React.Component {

//   render() {

//     return (
       
//         <div className='app-container'>
//           Hello world

//           <MyComponent></MyComponent>
//         </div>
      
//     );
//   }
// }


const App = () => {
 

  return (


    <div className="app-container">
      <Header></Header>
       
       
    </div>
  );
}

export default App;
