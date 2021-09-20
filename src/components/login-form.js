//import react from react
import React from "react";

//import login button
import LoginButton from "./login-button";

//import navigation bar
import NavigationBar from "./navigation";

//import password
import Password from "./password";

//import username
import Username from "./username";

//export - extend - render - return

export default class LoginPage extends React.Component {
  render() {
    return (
      <div id="main-div">
        <NavigationBar />
        <div class="container">
          <form id="login-form">
            <div class="form-group">
              <h3>Login:</h3>
              <Username />
              <Password />
              <LoginButton />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
