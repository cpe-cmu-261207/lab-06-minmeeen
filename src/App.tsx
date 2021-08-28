import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import About from './components/About';
import Current from './components/Current';
import History from './components/History';
import HistoryResult from './components/HistoryResult';

function App() {
  return (
    <Router>
      <Navbar/>
      


        <Switch>
          {/* current */}
          <Route path='/current'>
            <Current/>
            
          </Route>

          {/* history */}
          <Route path='/history/select'>
            <History/>
          </Route>

          {/* about */}
          <Route path='/about'>
            <About/>
          </Route>

          <Route path='/history/result'>
            <HistoryResult/>
          </Route>

        </Switch>




    </Router>
  );
}

export default App;
