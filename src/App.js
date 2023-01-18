
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Restaurentlist from './components/Restaurentlist'
import RestDetail from './components/RestDetail'
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>       
      </header>

    <Routes>
      {/* set path */}
      <Route path='/' element={ <Restaurentlist/> }/>
      {/* path for rest Details */}
      <Route path='/restaurant/:id' element={ <RestDetail/> }/>
    </Routes>




      <Footer/>
    </div>
  );
}

export default App;
