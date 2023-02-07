// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title = "TextUtils2" aboutText= "About TextUtils"/>
    <div className='container my-3'>
    <TextForm heading = "Enter Your Text to Analyze"/>
    </div>
    </>
  );
}

export default App;
