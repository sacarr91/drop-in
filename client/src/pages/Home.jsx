import { useQuery } from '@apollo/client';
import ProfileList from '../components/ProfileList';
import { QUERY_PROFILES } from '../utils/queries';
import Container from 'react-bootstrap/esm/Container';

function Home() {

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

