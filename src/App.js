import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutUs="About Us" />
          <Alert alert={alert}/>
          <div className="container my-3">
            <Routes> {/* Updated from Switch to Routes */}
            {/* Updated syntax for v6 */}
                {/* <Route exact path="/about" element={<About />} />  */}
                {/* Updated syntax for v6 */}
                <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below" />} />

            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
