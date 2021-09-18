import React, { useState } from "react";
import TextField from "components/TextField";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { userSignupRequest } from "actions/UserActions";

export default function Register() {
  const username = useSetValue("");
  const email = useSetValue("");
  const password = useSetValue("");
  // error
  const usernameError = useSetValue("");
  const emailError = useSetValue("");
  const passwordError = useSetValue("");

  const dispatch = useDispatch();

  function useSetValue(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(val) {
      setValue(val);
    }

    return {
      value,
      onChange: handleChange,
    };
  }

  // validation
  const validation = () => {
    let error = false;

    if (_.isEmpty(username.value)) {
      usernameError.onChange("Username is Required");
      error = true;
    } else {
      usernameError.onChange("");
    }

    if (_.isEmpty(email.value)) {
      emailError.onChange("email is Required");
      error = true;
    } else {
      emailError.onChange("");
    }

    if (_.isEmpty(password.value)) {
      passwordError.onChange("Password is Required");
      error = true;
    } else {
      passwordError.onChange("");
    }

    return !error;
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (validation()) {
      const payload = {
        username: username.value,
        email: email.value,
        password: password.value,
      };
      dispatch(userSignupRequest(payload), () => {
        alert("Asd");
      });
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSumbit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <TextField
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                      error={usernameError.value}
                      value={username.value}
                      onChange={(e) => {
                        username.onChange(e.target.value);
                      }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <TextField
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      error={emailError.value}
                      value={email.value}
                      onChange={(e) => {
                        email.onChange(e.target.value);
                      }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <TextField
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={password.value}
                      onChange={(e) => {
                        password.onChange(e.target.value);
                      }}
                      error={passwordError.value}
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <input
                      onClick={handleSumbit}
                      type="submit"
                      value="CREATE ACCOUNT"
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
