import Container from 'react-bootstrap/esm/Container';
import ProfileList from '../components/ProfileList';

function AllSkaters() {

    return (
        <><Container className="py-5">
            <center>
                <h1>AllSkaters</h1>
                <h5>**filter for skaters only**</h5>
            </center>
            <ProfileList />
        </Container>
        </>
    )
};

export default AllSkaters;