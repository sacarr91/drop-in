import { useMutation } from "@apollo/client";

import { REMOVE_AGE } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";

const AgeList = ({ ages, isLoggedInUser = false }) => {
  console.log("Ages prop:", ages);
  console.log("isLoggedInUser prop:", isLoggedInUser);
  const [removeAge, { error }] = useMutation(REMOVE_AGE, {
    refetchQueries: [QUERY_ME, "me"],
  });

  const handleRemoveAge = async (age) => {
    try {
      const { data } = await removeAge({
        variables: { age },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!ages.length) {
    return <h3>No Age Listed Yet</h3>;
  }

  return (
    <section>
      <section className="flex-row justify-space-between my-4">
        {ages &&
          ages.map((age) => (
            <section key={age} className="">
              <section className="">
                <h4 className="">
                  <span>{age}</span>
                </h4>
                {isLoggedInUser && (
                  <button
                    className="button-link alert"
                    onClick={() => handleRemoveAge(age)}
                  >
                    Remove Age
                  </button>
                )}
              </section>
            </section>
          ))}
      </section>
      {error && <section className="">{error.message}</section>}
    </section>
  );
};

export default AgeList;
