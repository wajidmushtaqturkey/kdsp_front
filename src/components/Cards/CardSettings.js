import React from "react";
import TextField from "components/TextField";
import Heading from "components/atomic/Heading";

export default function CardSettings() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <Heading title={"Personal Details"} />
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mx-6">
          <form>
            <h6 className="text-black-400 text-sm mt-6  mb-6 uppercase text-xl">
              Guardian Details
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"First Name"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter First Name"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"Last Name"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter Last Name"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"Phone"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="+920000000000"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"CNIC"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="00000-0000000-0"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-black-400 text-sm mt-6  mb-6 uppercase text-xl">
              Patient Details
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"First Name"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter First Name"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"Last Name"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter Last Name"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"Date Of Birth"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="00-00-0000"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"Age"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="0-years/0-Months"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-black-400 text-sm mt-6  mb-6 uppercase text-xl">
              Choose Therapy Types
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"First Name"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter First Name"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"Last Name"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter Last Name"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"Date Of Birth"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="00-00-0000"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"Age"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="0-years/0-Months"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"Age"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="0-years/0-Months"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"Age"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="0-years/0-Months"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"Age"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="0-years/0-Months"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"Age"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="0-years/0-Months"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <TextField
                    label={"Age"}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="0-years/0-Months"
                    // error={usernameError.value}
                    // value={username.value}
                    // onChange={(e) => {
                    //   username.onChange(e.target.value);
                    // }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
