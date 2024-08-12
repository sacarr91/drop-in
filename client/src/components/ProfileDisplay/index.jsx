import "../../utils/profile.css"
import defaultImage from "/images/baker.jpg"
import { useState } from "react";
import '../../utils/modal.css'
import Modal from "../Modal"
import Donate from "../../pages/Donate";

import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { FOLLOW_PROFILE } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const ProfileDisplay = ({ profile }) => {

  // handle profile images image url
  const imageUrl = profile.image ? `/images/${profile.image}` : defaultImage;

  // handle show payment modal
  const [showModal, setShowModal] = useState(false);

  // handle open payment modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // handle close payment modal
  const handleCloseModal = () => {
    setShowModal(false);
  };


  // Follow Me code block
  const { loading: loadingMe, data: myData } = useQuery(QUERY_ME);

  // pull in mutation for executing FOLLOW_PROFILE logic
  const [followProfile] = useMutation(FOLLOW_PROFILE);

  // reference to data for logged in user (me)  
  const me = myData?.me || {};

  // logic for handling adding friendId to user profile
  const handleFollowProfile = async (profileId) => {
    if (!me._id) {
      console.error("User is not authenticated or data is not loaded");
      alert('🛸 Sorry to follow a user profile you must be logged in. Please login and try again.');
      return;
    }

    try {
      const { data } = await followProfile({
        variables: {
          profileId: profile._id,
          friendId: me._id
        }
      });
      console.log('Follow Profile response:', data);
      alert(`👨‍🚀 Success! you are now following ${profile.name}! 👩‍🚀`)
    } catch (error) {
      console.error('Error following profile:', error);
      alert('An error occurred while following the profile. Please refresh the page, ensure you are logged in and try again.');
    }
  };

  if (loadingMe) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">{profile.name}</h3>
                <h6 className="theme-color lead">{profile.role}</h6>
                <p>
                  {profile.bio}
                </p>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>Age</label>
                      <p>{profile.age ? `${profile.age} Yr` : 'N/A'}</p>
                    </div>
                    <div className="media">
                      <label>Goals</label>
                      <p>{profile.goals && profile.goals.length > 0 ? profile.goals.join(', ') : 'N/A'}</p>
                    </div>
                    <div className="media">
                      <button className="carocardbtn" onClick={handleOpenModal}>Donate</button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label>E-mail</label>
                      <p>{profile.email}</p>
                    </div>
                    <div className="media">
                      <label>Level</label>
                      <p>{profile.levels ? profile.levels : 'N/A'}</p>
                    </div>
                    <div className="media">
                      <button className="carocardbtn" onClick={() => handleFollowProfile(profile._id)}>Follow Me</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-avatar">
                <img src={imageUrl} title={profile.name} alt={profile.name} />
              </div>
            </div>
          </div>
          <div className="counter">
            <div className="row">
              <div className="col-6 col-lg-6">
                <div className="count-data text-center">
                  <h6 className="count h2">850</h6>
                  <p className="m-0px font-w-600">Followers</p>
                </div>
              </div>
              <div className="col-6 col-lg-6">
                <div className="count-data text-center">
                  <h6 className="count h2">190</h6>
                  <p className="m-0px font-w-600">Sponsors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <Donate />
      </Modal>
    </>
  );
}

export default ProfileDisplay;