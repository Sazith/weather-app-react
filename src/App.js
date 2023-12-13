import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import TempApp from './components/TempApp';

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "red",
  justifyContent: "center",
  alignItem: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%'
};

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

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
           <TempApp/>
          </div>
      }
    </>

  );
}

export default App;

