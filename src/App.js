import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// importing pages/components
import Header from "./components/Header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import LoginRegisterPage from "./pages/login-register/LoginRegister";
import { auth } from "./firebase/firebase";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log("user:", user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/login" component={LoginRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
