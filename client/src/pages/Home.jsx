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
        <>
            <main className='p-2'>
                <Container>
                    <center>
                        <h1 className='py-2'>🛹 Our Sponsors 🤙 </h1>
                    </center>
                </Container>
                <SponsorCarousel />
                <Container>
                    <center>
                        <h1 className='py-2'>🤙 Our Skaters 🛹 </h1>
                    </center>
                </Container>
                <SkaterCarousel />
            </main>
        </>
    );
};

export default Home;
