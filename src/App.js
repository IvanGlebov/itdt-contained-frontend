import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    let counter = 0;
    console.log('---------------------------------------------------------')
    console.info("If you see this '(₌ ᵕ̣̣̣̣̣ ᆽ ᵕ̣̣̣̣̣₌)' somewhere on your page -> this means you did something wrong")
    console.log('---------------------------------------------------------')
    const interval = setInterval(() => {
      console.log(`${counter++}. This app is still working`)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="App">
      <div>Hi there!</div>
      <div>Container was started by user: {process.env.REACT_APP_USERNAME || "(₌ ᵕ̣̣̣̣̣ ᆽ ᵕ̣̣̣̣̣₌)"}</div>
      <div>Container was started by company: {process.env.REACT_APP_COMPANY_NAME || "(₌ ᵕ̣̣̣̣̣ ᆽ ᵕ̣̣̣̣̣₌)"}</div>
      <div>Container name is: {process.env.REACT_APP_CONTAINER_NAME || "(₌ ᵕ̣̣̣̣̣ ᆽ ᵕ̣̣̣̣̣₌)"}</div>
      <div>Container was started with IP: {process.env.REACT_APP_CONTAINER_IP || "(₌ ᵕ̣̣̣̣̣ ᆽ ᵕ̣̣̣̣̣₌)"}</div>
    </div>
  );
}

export default App;
