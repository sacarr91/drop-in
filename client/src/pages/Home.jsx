import { useQuery } from '@apollo/client';
import ProfileList from '../components/ProfileList';
import { QUERY_PROFILES } from '../utils/queries';
import Container from 'react-bootstrap/esm/Container';
import SponsorCarousel from '../components/SponsorCarousel';

function Home() {

    const { loading, data } = useQuery(QUERY_PROFILES);
    const sponsors = data?.profiles || [];

    return (
        <section className="">
            <section className='homepageImg'>
                <Container className="py-5">
                    <center>
                        <h1>🛹 Our Sponsors 🤙 </h1>
                    </center>
                </Container>
            </section>
            <main>
                {/* <section className="">
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
                </section> */}
                <SponsorCarousel />
            </main>
        </section>
    );
};

export default Home;

