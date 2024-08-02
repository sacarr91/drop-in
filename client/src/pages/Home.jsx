import { useQuery } from '@apollo/client';
<<<<<<< HEAD
=======
import ProfileList from '../components/ProfileList';
import { QUERY_PROFILES } from '../utils/queries';
import Container from 'react-bootstrap/esm/Container';
>>>>>>> 6adeb933788dded8135fc9e8b918a97308c3cb0f

import ProfileList from '../components/ProfileList';

<<<<<<< HEAD
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
=======
    const { loading, data } = useQuery(QUERY_PROFILES);
    const profiles = data?.profiles || [];

    return (
        <section className="">
            <section className='homepageImg'>
                <Container className="py-5">
                    <center>
                        <h1>🛹 Welcome to Drop-in! 🤙 </h1>
                    </center>
                </Container>
            </section>
            <main>
                <section className="">
                    <section className="">
                        {loading ? (
                            <section>Loading...</section>
                        ) : (
                            <center>
                                    <ProfileList
                                        profiles={profiles}
                                        title="Profile Data"
                                    />
                            </center>
                        )}
                    </section>
                </section>
            </main>
        </section>
    );
};

export default Home;

>>>>>>> 6adeb933788dded8135fc9e8b918a97308c3cb0f
