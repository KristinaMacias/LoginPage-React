//import react from react
import React from "react";

//export - extend - render - return
export default class Password extends React.Component {
  render() {
    return (
      <>
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Enter password here"
        ></input>
      </>
    );
  }
}
