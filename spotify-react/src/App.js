import './App.css';

function App() {

  const CLIENT_ID = "c0a9bbee99a0410781b7dee61dc8b9c7";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div className="App">
      <header className="App-header">
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}
            &redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>

      </header>
    </div>
  );
}

export default App;
