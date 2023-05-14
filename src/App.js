import React from 'react';
import './App.css';
import { Route } from 'wouter';
import Home from './pages/home'
import Search from './pages/search';
import Detail from './pages/details';
import ContextoEstatico from './context/staticContext';
import { GifsContextprovider } from './context/gifsContext';

function App() {
  return (
    <ContextoEstatico.Provider value={{ titulo: 'Usando Provider', provider: true }}>
      <div className="App">
        <section className="app-main">
          <GifsContextprovider>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={Search}
              path="/search/:keyword"
            />
            <Route
              component={Detail}
              path="/gif/:id"
            />
            <Route
              component= {() => <h1>Pagina no encontrada :u</h1>}
              path="/404"
            />
          </GifsContextprovider>
        </section>
      </div>
    </ContextoEstatico.Provider>
  )
}

export default App;
