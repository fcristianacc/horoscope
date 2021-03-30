import "./App.css";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header tururu={true}>Horoscope</Header>
      <Header tururu={false}>Horoscope2</Header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
