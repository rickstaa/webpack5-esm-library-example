import logo from "./logo.svg";
import "./App.css";
import {
  helloWorld,
  util,
  HelloWorld,
  ldCapitalize,
  ldEsCapitalize,
} from "webpack5-library-example";

function App() {
  helloWorld();
  console.log(util());
  console.log(ldCapitalize("this should be capitalized."));
  console.log(ldEsCapitalize("this should be capitalized using 'es-lodash'."));

  return (
    <div className="App">
      <HelloWorld />
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
  );
}

export default App;
