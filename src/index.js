import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import Main from './components/Main';

import './index.css';
import 'antd/dist/antd.less';

import RecentTimeline from './components/timeline/RecentTimeline';
import Incidents from './components/incidents/Incidents';
import About from './components/about/About';

import GraphContainer from './components/graphs/GraphContainer';
import NavBar from './components/NavBar/NavBar';
import HorizontalBar from './components/graphs/bargraph/HorizontalBar';
import Stats from './components/Stats/Stats';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <div className="Map">
              <Main />
            </div>
            <div className="bottom-section">
              <div className="Timeline">
                <RecentTimeline />
                <div className="Info-Section">
                  <div className="Stats">
                    <Stats />
                  </div>
                  <div className="H-bar">
                    <HorizontalBar />
                  </div>
                </div>
              </div>
            </div>
          </Route>

          <Route path="/graph">
            <GraphContainer />
          </Route>
          <Route path="/incidents">
            <Incidents />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
