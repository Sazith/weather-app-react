import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "red",
  justifyContent:"center",
  alignItem:'center',
  position:'absolute',
  top:'50%',
  left:'50%'
};

function App() {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },2000)
  },[])

  return (
    <>
    {
      loading ? 
      <HashLoader
      color={'#18eaff'}
      loading={loading}
      cssOverride={override}
      size={130}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
      :
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    }
    </>
  
  );
}

export default App;
