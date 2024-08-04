import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from '../utils/queries';
import Container from 'react-bootstrap/esm/Container';

import ProfileList from '../components/ProfileList';
import SkaterList from '../components/SkaterList';
import SponsorList from '../components/SponsorList';


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
                            <section>
                                <center>
                                <h2>Sponsors</h2>
                                </center>
                                <SponsorList profiles={profiles}></SponsorList>
                                <center>
                                <h2>Skaters</h2>
                                </center>
                                <SkaterList profiles={profiles}></SkaterList>
                            </section>
                        )}
                    </section>
                </section>
            </main>
        </section>
    );
};

export default Home;

