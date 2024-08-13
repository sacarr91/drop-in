import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { FOLLOW_PROFILE, SPONSOR_PROFILE } from '../../utils/mutations';

import defaultImage1 from "/images/b-s-default-1.png"
import defaultImage2 from "/images/b-s-default-2.png"
import defaultImage3 from "/images/b-s-default-3.png"
import Modal from "../Modal";
import Donate from "../../pages/Donate";
import '../../utils/profile.css';
import '../../utils/modal.css';

const randomizeDefaultImage = function () {
  const imageArray = [defaultImage1, defaultImage2, defaultImage3]
  while (imageArray.length) {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const defaultImage = imageArray[randomIndex];
    return defaultImage
  }

}

const ProfileDisplay = ({ profile }) => {
  const defaultImage = randomizeDefaultImage();
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
  const [followProfile] = useMutation(FOLLOW_PROFILE);
  const [sponsorProfile] = useMutation(SPONSOR_PROFILE);

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
      alert(`👨‍🚀 Success! You are now following ${profile.name}! 👩‍🚀`);
    } catch (error) {
      console.error('Error following profile:', error);
      alert('An error occurred while following the profile. Please refresh the page, ensure you are logged in, and try again.');
    }
  };

  // Sponsor Me code block
  const handleSponsorProfile = async (profileId) => {
    if (!me._id) {
      console.error("User is not authenticated or data is not loaded");
      alert('🛸 Sorry to sponsor a user profile you must be logged in. Please login and try again.');
      return;
    }

    try {
      const { data } = await sponsorProfile({
        variables: {
          profileId: profile._id,
          friendId: me._id
        }
      });
      console.log('Sponsor Profile response:', data);
      alert(`🚀 Success! You are now sponsoring ${profile.name}! 🌟`);
      window.location.assign('/');
    } catch (error) {
      console.error('Error sponsoring profile:', error);
      alert('👾 An error occurred while sponsoring the profile. Please refresh the page, ensure you are logged in, and try again.');
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
                <p>{profile.bio}</p>
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
                      <button className="carocardbtn" onClick={handleOpenModal}>💸 Donate</button>
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
                      <button className="carocardbtn" onClick={() => handleFollowProfile(profile._id)}>🌠 Follow Me</button>
                    </div>
                    <div className="media">
                      <button className="carocardbtn" onClick={() => handleSponsorProfile(profile._id)}>🚀 Sponsor Me</button>
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
        <div className="sponsors-list">
          <h4>Sponsors:</h4>
          <ul className="sponsors-card">
            {profile.ourSponsors && profile.ourSponsors.map(sponsor => (
              <li className='sponsor-li' key={sponsor._id}>
                <img className='sponsor-img' src={sponsor.image ? `/images/${sponsor.image}` : randomizeDefaultImage()} alt={sponsor.name} />
                <span className='sponsor-name'>{sponsor.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="friends-list">
          <h4>Followers:</h4>
          <ul className="followers-card">
            {profile.friends && profile.friends.map(friend => (
              <li className='follower-li' key={friend._id}>
                <img className='follower-img' src={friend.image ? `/images/${friend.image}` : randomizeDefaultImage()} alt={friend.name} />
                <span className='follower-name'>{friend.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <Donate />
      </Modal>
    </>
  );
};

export default ProfileDisplay;
