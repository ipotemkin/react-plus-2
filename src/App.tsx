import './App.css';
import { Picture } from './components/Picture/Picture';

// import imagePlaceholder from './components/Picture/assets/logo512.png'
import targetImage from './components/Picture/assets/aleksandra-sapozhnikova-BthSqlD2Cso-unsplash.jpg'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Picture
          // placeholder={imagePlaceholder}
          source={targetImage}
        />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
