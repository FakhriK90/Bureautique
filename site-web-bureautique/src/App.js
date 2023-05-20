import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import HomeJB from "./components/homeJB/HomeJB";
import Navigation from "./components/navigation/Navigation";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:8000/';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomeJB />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
