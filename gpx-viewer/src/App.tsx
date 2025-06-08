import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Map from './components/Map';
import GpxUploader from './components/GpxUploader';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/map" component={Map} />
          <Route path="/upload" component={GpxUploader} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;