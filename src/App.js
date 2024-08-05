import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
// import MyComponent from './components/MyComponent';

import React from 'react';
import Header from './components/Header/Header';
import { Link } from "react-router-dom";
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


      <div>
        test link
        <div>
          <button type="button">
            <Link to='/user'>    Go to user Page</Link>


          </button>
          <button type="button">

            <Link to='/admin'>   Go to Admin Page</Link>

          </button>

        </div>
      </div>

    </div>
  );
}

export default App;
