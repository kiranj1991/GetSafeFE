import React, { useState } from "react";

interface AgeStepProps {
  cb: (field: string, value: number) => void;
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0);
  return (
    <>
      <div>
        Age:{" "}
        <input
          className="form-control"
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value));
          }}
          value={age}
        ></input>
      </div>
      <button
        className="btn btn-primary"
        disabled={!age}
        onClick={() => props.cb("age", age)}
      >
        Next
      </button>
    </>
  );
};

export default AgeStep;
