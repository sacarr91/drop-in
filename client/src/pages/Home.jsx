import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <section className="">
        <section className="">
          {loading ? (
            <section>Loading...</section>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Main Page Data"
            />
          )}
        </section>
      </section>
    </main>
  );
};

export default Home;
