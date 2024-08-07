import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';
import Container from 'react-bootstrap/esm/Container';
import SponsorCarousel from '../components/SponsorCarousel';
import SkaterCarousel from '../components/SkaterCarousel';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

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
                <SponsorCarousel />
                <Container className="py-5">
                    <center>
                        <h1>🤙 Our Skaters 🛹 </h1>
                    </center>
                </Container>
                <SkaterCarousel />
            </main>
        </section>
    );
};

export default Home;
