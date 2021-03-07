import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import AppBar from 'components/AppBar';
import HomePage from 'components/HomePage';
import QuestionDetails from 'components/QuestionDetails';

const App = () => (
  <>
    <Router>
      <AppBar exact path="/questions" component={HomePage} />
      <Route exact path="/voting-app" render={() => <Redirect to="/questions" />} />
      <Switch>
        <Route path="/questions/:questionId" component={QuestionDetails} />
        <Route path="/questions" component={HomePage} />"
      </Switch>
    </Router>
  </>
)

export default App;
