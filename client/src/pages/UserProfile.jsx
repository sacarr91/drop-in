import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import ProfileDisplay from '../components/ProfileDisplay';
import Modal from '../components/Modal';
import Donate from './Donate';
import '../utils/modal.css'

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

    return (
        <>
        <ProfileDisplay profile={profile} />
      </>
    )

}


export default UserProfile;

        // <Card style={{width:"50%"}}>
        //     <Card.Body>
        //         <Card.Title>View Profile</Card.Title>
        //         <Form>
        //     <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        //         <Form.Label column sm="2">
        //             Name
        //         </Form.Label>
        //         <Col sm="10">
        //             <Form.Control plaintext readOnly defaultValue={profile.name} />
        //         </Col>
        //     </Form.Group>
        //     <Form.Group as={Row} className="mb-3" controlId="formPlaintextAge">
        //         <Form.Label column sm="2">
        //             Age
        //         </Form.Label>
        //         <Col sm="10">
        //             <Form.Control plaintext readOnly defaultValue={profile.age} />
        //         </Col>
        //     </Form.Group>
        //     <Form.Group as={Row} className="mb-3" controlId="formPlaintextLevels">
        //         <Form.Label column sm="2">
        //             Levels
        //         </Form.Label>
        //         <Col sm="10">
        //             <Form.Control plaintext readOnly defaultValue={profile.levels} />
        //         </Col>
        //     </Form.Group>
        //     <Form.Group as={Row} className="mb-3" controlId="formPlaintextGoals">
        //         <Form.Label column sm="2">
        //             Goals
        //         </Form.Label>
        //         <Col sm="10">
        //             <Form.Control plaintext readOnly defaultValue={profile.goals} />
        //         </Col>
        //     </Form.Group>
        //     {isEditProfile && (
        //         <Link
        //             className="button-link secondary"
        //             to={`/editprofile/${profile._id}`}
        //         >Edit Profile</Link>
        //     )}
        //     {!isEditProfile && (
        //         <Link
        //             className="button-link secondary"
        //             to={`/editprofile/${profile._id}`}
        //         >Donate</Link>
        //     )}
        // </Form>
        //     </Card.Body>
        // </Card>