import './App.css';
import { Picture } from './components/Picture/Picture';
import { Form } from './components/Form/Form';

// import imagePlaceholder from './components/Picture/assets/logo512.png'
import targetImage from './components/Picture/assets/aleksandra-sapozhnikova-BthSqlD2Cso-unsplash.jpg'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h2>Podojdi, podojdi…</h2>
        <Picture
          // placeholder={imagePlaceholder}
          source={targetImage}
        />

        <h2>Фабрика onChange</h2>
        <Form />
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
