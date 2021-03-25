import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AppBar from 'components/AppBar';
import HomePage from 'components/HomePage';
import QuestionDetails from 'components/QuestionDetails';

const App = () => (
  <>
    <Router>
      <AppBar />
      <Switch>
        <Route exact path={['/questions', '/voting-app']} component={HomePage} />
        <Route path='/questions/:questionId' component={QuestionDetails} />
      </Switch>
    </Router>
  </>
)

export default App;
