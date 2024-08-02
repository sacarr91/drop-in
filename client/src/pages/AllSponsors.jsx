import { useQuery } from '@apollo/client';

import SponsorList from '../components/SponsorList';

import { QUERY_PROFILES } from '../utils/queries';

const AllSponsor = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <section className="">
        <section className="">
          {loading ? (
            <section>Loading...</section>
          ) : (
            <SponsorList
              profiles={profiles}
              title="All Skaters"
            />
          )}
        </section>
      </section>
    </main>
  );
};

export default AllSponsor;
