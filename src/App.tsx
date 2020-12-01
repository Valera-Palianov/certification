import React from 'react'
import Locations from '@pages/Locations'
import Weather from '@pages/Weather'
import Layout from '@components/Layout'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/location/:woeid" component={Weather} />
            <Route exact path="/" component={Locations} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App
