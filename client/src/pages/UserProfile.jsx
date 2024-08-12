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
