
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/HomePage';
import Navigation from './components/navigation/Navigation';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <Routes>
    <Route exact path='/' element={<HomePage/>} />
    <Route exact path='/signin' element={<SignIn/>}/>
    <Route exact path='/signup' element={<SignUp/>}/>
    </Routes>
    </div>
  );
}

export default App;
