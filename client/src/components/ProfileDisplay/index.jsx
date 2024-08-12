import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { FOLLOW_PROFILE } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const ProfileDisplay = ({ profile }) => {
  const { loading: loadingMe, data: myData } = useQuery(QUERY_ME);
  const [followProfile] = useMutation(FOLLOW_PROFILE);

  // Destructure user data from the query result
  const me = myData?.me || {};

  const handleFollowProfile = async (profileId) => {
    if (!me._id) {
      console.error("User is not authenticated or data is not loaded");
      return; 
    }

    try {
      const { data } = await followProfile({
        variables: {
          profileId: profile._id,
          friendId: me._id
        }
      });

      // Handle success response if needed
      console.log('Follow Profile response:', data);
    } catch (error) {
      console.error('Error following profile:', error);
      // Handle error if needed
    }
  };

  if (loadingMe) {
    return <p>Loading...</p>; // Or any appropriate loading indicator
  }

  return (
    <>
      <section className="section about-section gray-bg" id="about">
        <button
          className="caro-card-btn"
          onClick={() => handleFollowProfile(profile._id)}
        >
          Follow Me
        </button>
      </section>
    </>
  );
}

export default ProfileDisplay;