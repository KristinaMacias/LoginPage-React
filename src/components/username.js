//import react from react
import React from "react";

//export - extend - render - return
export default class Username extends React.Component {
  render() {
    return (
      <div class="form-group">
        <label>Email:</label>
        <input
          type="email"
          class="form-control"
          id="username"
          placeholder="Enter email here"
        ></input>
      </div>
    );
  }
}
