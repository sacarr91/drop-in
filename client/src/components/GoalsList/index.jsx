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
    <section>
      <section className="flex-row justify-space-between my-4">
        {goals &&
          goals.map((goal) => (
            <section key={goal} className="">
              <section className="">
                <h4 className="">
                  <span>{goal}</span>
                </h4>
                {isLoggedInUser && (
                    <button
                      className="button-link alert"
                      onClick={() => handleRemoveGoal(goal)}
                    >
                      Remove Goal
                    </button>
                  )}
              </section>
            </section>
          ))}
      </section>
      {error && (
        <section className="">{error.message}</section>
      )}
    </section>
  );
};

export default GoalsList;
