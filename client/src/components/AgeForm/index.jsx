import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_AGE } from "../../utils/mutations";

import Auth from "../../utils/auth";

const AgeForm = ({ profileId }) => {
  const [age, setAge] = useState("");

  const [addAge, { error }] = useMutation(ADD_AGE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addAge({
        variables: { profileId, age },
      });

      setAge("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Add Age Below.</h4>

      {Auth.loggedIn() ? (
        <form className="" onSubmit={handleFormSubmit}>
          <div className="">
            <input
              placeholder="Add your age..."
              value={age}
              className=""
              onChange={(event) => setAge(event.target.value)}
            />
          </div>

          <div className="">
            <button className="" type="submit">
              Add Age
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to add your age. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default AgeForm;
