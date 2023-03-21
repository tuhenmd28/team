import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [dark,setDark] = useState(false);
  function toggleDark(){
    setDark(pre=>!pre)
  }
  return (
    <>
    <Header dark={dark} toggleDark={toggleDark}/>
    <Body dark={dark} />
    <Footer dark={dark}  />
    </>
  );
}

export default App;
