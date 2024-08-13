import "../../utils/profile.css"
import '../../utils/modal.css'
import defaultImage1 from "/images/a-s-default-1.png"
import defaultImage2 from "/images/a-s-default-2.png"
import defaultImage3 from "/images/a-s-default-3.png"
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { FOLLOW_PROFILE } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const randomizeDefaultImage = () => {
  const imageArray = [defaultImage1, defaultImage2, defaultImage3];
  const randomIndex = Math.floor(Math.random() * imageArray.length);
  return imageArray[randomIndex];
};

const SponsorProfileDisplay = ({ profile }) => {
  const defaultImage = randomizeDefaultImage();
  const imageUrl = profile.image ? `${profile.image}` : defaultImage;

  // Follow Me code block
  const { loading: loadingMe, data: myData } = useQuery(QUERY_ME);
  const [followProfile] = useMutation(FOLLOW_PROFILE);

  const me = myData?.me || {};

  const handleFollowProfile = async (profileId) => {
    if (!me._id) {
      console.error("User is not authenticated or data is not loaded");
      alert('🛸 Sorry to follow a user profile you must be logged in. Please login and try again.');
      return;
    }

    try {
      const { data } = await followProfile({
        variables: { profileId: profile._id, friendId: me._id }
      });
      console.log('Follow Profile response:', data);
      alert(`👨‍🚀 Success! you are now following ${profile.name}! 👩‍🚀`);
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
                <p>{profile.bio}</p>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>E-mail</label>
                      <p>{profile.email}</p>
                    </div>
                    <div className="media">
                      <button className="carocardbtn" onClick={() => handleFollowProfile(profile._id)}>Follow Us</button>
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
                  <p className="m-0px font-w-600">Skaters Sponsored</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sponsors-list">
          <h4>We Sponsor:</h4>
          <ul className="sponsors-card">
            {profile.weSponsor && profile.weSponsor.map(sponsor => (
              <li className='sponsor-li' key={sponsor._id}>
                <img className='sponsor-img' src={sponsor.image ? `${sponsor.image}` : randomizeDefaultImage()} alt={sponsor.name} />
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
                <img className='follower-img' src={friend.image ? `${friend.image}` : randomizeDefaultImage()} alt={friend.name} />
                <span className='follower-name'>{friend.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SponsorProfileDisplay;