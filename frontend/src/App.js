import './App.css';
import Restaurant from './component/restaurant';
import AddRestaurant from './component/addRestaurant';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Restaurant}></Route>
          <Route path="/add" component={AddRestaurant}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
