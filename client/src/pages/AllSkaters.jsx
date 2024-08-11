import { useQuery } from '@apollo/client';

import SkaterList from '../components/SkaterList';

import { QUERY_PROFILES } from '../utils/queries';

const AllSkater = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
    {loading ? (
            <section>Loading...</section>
          ) : (
            <SkaterList
              profiles={profiles}
              title="All Skaters"
            />
          )}
    </main>
  );
};

export default AllSkater;
