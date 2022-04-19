import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { ResponseResolverReturnType } from 'msw';

import { Switch } from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>

          <Switch>

              <Route path='/:type/:id'>
                <PetDetailsPage />
              </Route>

              <Route path='/pet-details-not-found'>
                  <PetDetailsNotFound />
              </Route>

              <Route path='/:type?'>
                <HomePage />
              </Route>

              <Route path='/search'>
                <SearchPage />
              </Route>

          </Switch>

          <Navigation />
          
        </div>
    </Router>
  );
}

export default App;
