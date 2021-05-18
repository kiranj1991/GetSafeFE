import React, { useState } from "react";

interface NameStepProps {
  cb: (field: string, value: any) => void;
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [nameVals, setNameVals] = useState({
    firstName: "",
    lastName: ""
  });
  const changeHandler = (e) => {
    setNameVals({ ...nameVals, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        <label>First Name: </label>
        <input
          className="form-control"
          type="text"
          name="firstName"
          onChange={changeHandler}
          value={nameVals.firstName}
        ></input>
      </div>
      <div>
        <label>Last Name: </label>
        <input
          className="form-control"
          type="text"
          name="lastName"
          onChange={changeHandler}
          value={nameVals.lastName}
        ></input>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          props.cb("name", {
            firstName: nameVals.firstName,
            lastName: nameVals.lastName
          });
        }}
      >
        Next
      </button>
    </>
  );
};

export default NameStep;
