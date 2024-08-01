import { Link } from 'react-router-dom';

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <section>
      <h3 className="">{title}</h3>
      <section className="">
        {profiles &&
          profiles.map((profile) => (
            <section key={profile._id} className="">
              <section className="">
                <h4 className="">
                  {profile.name} <br />
                  <span className="" >
                    currently has {profile.goals ? profile.goals.length : 0}{' '}
                    goal
                    {profile.goals && profile.goals.length === 1 ? '' : 's'}
                  </span>
                </h4>

                <Link
                  className="button-link secondary"
                  to={`/profiles/${profile._id}`}
                >
                  View Card Data
                </Link>
              </section>
            </section>
          ))}
      </section>
    </section>
  );
};

export default ProfileList;
