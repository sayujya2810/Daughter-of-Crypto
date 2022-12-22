import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import LoadingScreen from './components/LoadingScreen';
import Register from './components/Register';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";


function App() {

  const override = css`
  align-self: center;
  padding: 1rem;
`;

  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true)
    setTimeout(() => setLoading(false), 3500 )
  }, [])

  return (
    <div className="App">

      {
        // loading ? 
        // <div style={{height:"100vh", width:"100%", backgroundColor:"#ab203d" , display:"flex",  justifyContent:"center", alignContent:"center"}} >
        //   <HashLoader css={override}  color={"#000"} size={100} loading={loading}  />
        // </div>

        // :

        <Home />

      }

        
      {/* <Register /> */}
    </div>
  );
}

export default App;
