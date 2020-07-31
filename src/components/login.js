import React, { useState } from "react";

import SvgRounded from "../components/shared/svg-rounded";

function Login(props) {
  const username = useFormInput("");
  const password = useFormInput("");
  const [loading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    props.history.push("/home");
  };
  return (
    <React.Fragment>
      <div className="relative page-header">
        <SvgRounded />
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-md-8 text-center">
              <h4 className="search-header">Login our application</h4>
              <p>
                If you wanna access this application, Please login to our app!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="col-md-4 col-sm-8">
            <form className="form-signin">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <div className="inputGroup">
                  <input
                    type="text"
                    id="username"
                    className="form-text form-control"
                    {...username}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-text form-control"
                  {...password}
                />
              </div>
              <div className="form-group">
                <button
                  onClick={handleLogin}
                  disabled={loading}
                  type="button"
                  className="btn btn-warning btn-block"
                >
                  <strong>{loading ? "Loading..." : "Login"}</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
