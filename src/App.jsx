import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import {ContactPage} from './pages/ContactPage'
import {ContactDetailsPage} from './pages/ContactDetailsPage'
import {ContactEditPage} from './pages/ContactEditPage'
import {StatisticPage} from './pages/StatisticPage'
import {SignupPage} from './pages/SignupPage'
import {AppHeader} from './components/AppHeader'
import { userService } from './services/userService'

function App() {
  const PrivateRoute = (props) => {
    const user= userService.getUser();
    return user? <Route {...props} /> : <Redirect to="/signup" />
  }
  return (
    <div className="App main-layout">
      <Router>
        <AppHeader />
        <Switch>
          <PrivateRoute path="/contacts/edit/:id?" component={ContactEditPage} />
          <PrivateRoute path="/contacts/:id" component={ContactDetailsPage} />
          <PrivateRoute path="/contacts" component={ContactPage} />
          <PrivateRoute path="/stats" component={StatisticPage} />
          <Route path="/signup" component={SignupPage} />
          <PrivateRoute path="/" component={ Home } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
