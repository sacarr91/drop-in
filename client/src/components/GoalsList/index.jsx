import { useMutation } from '@apollo/client';

import { REMOVE_GOAL } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const GoalsList = ({ goals, isLoggedInUser = false }) => {
  const [removeGoal, { error }] = useMutation
  (REMOVE_GOAL, {
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  const handleRemoveGoal = async (goal) => {
    try {
      const { data } = await removeGoal({
        variables: { goal },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!goals.length) {
    return <h3>No Goals Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {goals &&
          goals.map((goal) => (
            <div key={goal} className="">
              <div className="">
                <h4 className="">
                  <span>{goal}</span>
                  {isLoggedInUser && (
                    <button
                      className=""
                      onClick={() => handleRemoveGoal(goal)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="">{error.message}</div>
      )}
    </div>
  );
};

export default GoalsList;
