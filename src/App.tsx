import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './Test.module.scss';
import cx from 'classnames'

const someFunction = (className: string): string => {
  return className
}

function App() {
  const className = someFunction(styles.test);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={className}>
          Edit <code>src/App.tsx</code> and save to reload.
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
