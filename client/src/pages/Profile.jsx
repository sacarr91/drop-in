import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import GoalsList from "../components/GoalsList";
import GoalForm from "../components/GoalForm";
import AgeList from "../components/AgeList";
import AgeForm from "../components/AgeForm";

import { QUERY_SINGLE_PROFILE, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { profileId } = useParams();

  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  const profile = data?.me || data?.profile || {};

  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <section>Loading...</section>;
  }

  if (!profile?.name) {
    return (
      <h4>
        🤓 You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <>
      <section className="card">
        <h2 className="">{profileId ? `${profile.name}'s` : "Your"} goals</h2>

        {profile.goals?.length > 0 && (
          <GoalsList
            goals={profile.goals}
            isLoggedInUser={!profileId && true}
          />
        )}

        <section className="" style={{ border: "1px dotted #1a1a1a" }}>
          <GoalForm profileId={profile._id} />
        </section>
      </section>

      <section className="card">
        <h2 className="">{profileId ? `${profile.name}'s` : "Your"} age</h2>

        {profile.goals?.length > 0 && (
          <AgeList ages={profile.ages} isLoggedInUser={!profileId && true} />
        )}

        <section className="" style={{ border: "1px dotted #1a1a1a" }}>
          <AgeForm profileId={profile._id} />
        </section>
      </section>
    </>
  );
};

export default Profile;
