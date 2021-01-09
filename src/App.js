// import logo from './logo.svg';
// import './App.css';
import Department from './Components/Department';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Components/Redux/Store';

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Department} />
      </Switch>
      </BrowserRouter>
    </Provider>
    

  );
}

export default App;
