import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="app_sidebar">
        <Sidebar />
      </div>
      <div className="app_header">
        <Header />
      </div>
      <div className="app_main">
        <Main />
      </div>
      <div className="app_footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
