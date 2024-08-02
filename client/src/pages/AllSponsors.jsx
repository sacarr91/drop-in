import Container from 'react-bootstrap/esm/Container';
import ProfileList from '../components/ProfileList';

function AllSponsors() {

    return (
        <><Container className="py-5">
            <center>
                <h1>AllSponsors</h1>
                <h5>**filter for sponsors only**</h5>
            </center>
            <ProfileList />
        </Container>
        </>
    )
};

export default AllSponsors;