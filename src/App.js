import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./Components/Movies";
import Customers from "./Components/customers";
import Rentals from "./Components/rentals";
import NotFound from "./Components/notFound";
import NavBar from "./Components/navBar";
import MovieForm from "./Components/movieForm";
import LoginForm from "./Components/loginForm";
import RegisterForm from "./Components/registerForm";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
