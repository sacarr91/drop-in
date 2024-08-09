import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Form, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

let isEditProfile = "";
const UserProfile = () => {
    const { profileId } = useParams();
    const { loading, data } = useQuery(
        profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
        {
            variables: { profileId: profileId },
        }
    );

    const profile = data?.me || data?.profile || {};

    if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
        isEditProfile = true
        console.log(isEditProfile);
    }


    if (loading) {
        return <section>Loading....</section>
    }

    if (!profile?.name) {
        return (
            <h4>
                🤓 You need to be logged in to see profile page. Use the navigation
                links above to sign up or log in!
            </h4>
        )
    }

    return (
        <Card style={{width:"50%"}}>
            <Card.Body>
                <Card.Title>View Profile - PETE'S CHANGES</Card.Title>
                <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                <Form.Label column sm="2">
                    Name
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={profile.name} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextAge">
                <Form.Label column sm="2">
                    Age
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={profile.age} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextLevels">
                <Form.Label column sm="2">
                    Levels
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={profile.levels} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextGoals">
                <Form.Label column sm="2">
                    Goals
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={profile.goals} />
                </Col>
            </Form.Group>
            {/* pete's additions */}
            <Form.Group>
                <button id="friendButton">Add Me as a Friend</button>
                <button id="sponsorButton">Sponsor Me</button>
            </Form.Group>
            {/* pete's additions */}
            {isEditProfile && (
                <Link
                    className="button-link secondary"
                    to={`/editprofile/${profile._id}`}
                >Edit Profile</Link>
            )}
            {!isEditProfile && (
                <Link
                    className="button-link secondary"
                    to={`/editprofile/${profile._id}`}
                >Donate</Link>
            )}
        </Form>
            </Card.Body>
        </Card>
    )

}


export default UserProfile;