import {useEffect, useState} from 'react';
import './App.css';

function App() {

  const CLIENT_ID = "c0a9bbee99a0410781b7dee61dc8b9c7";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  

  //check if there is a hash or a token is already stored in localStorage
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token")
    
    //if there is no token but there is a hash, extract token from string
    if(!token && hash){
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      
       //save token to local storage and reset hash
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    };
  }, []);
  
  //remove token from localStorage and set state token back to empty string when logging out
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React PoC</h1>
          {!token ? 
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}
            &redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
          : <button onClick={logout}>LogOut</button>}
            

      </header>
    </div>
  );
}

export default App;
