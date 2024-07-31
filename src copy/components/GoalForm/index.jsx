import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_GOAL } from '../../utils/mutations';

import Auth from '../../utils/auth';

const GoalForm = ({ profileId }) => {
  const [goal, setGoal] = useState('');

  const [addGoal, { error }] = useMutation(ADD_GOAL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addGoal({
        variables: { profileId, goal },
      });

      setGoal('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Add Goals Below.</h4>

      {Auth.loggedIn() ? (
        <form
          className=""
          onSubmit={handleFormSubmit}
        >
          <div className="">
            <input
              placeholder="Add some goals..."
              value={goal}
              className=""
              onChange={(event) => setGoal(event.target.value)}
            />
          </div>

          <div className="">
            <button className="" type="submit">
              Add Goal
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
          You need to be logged in to add goals. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default GoalForm;
