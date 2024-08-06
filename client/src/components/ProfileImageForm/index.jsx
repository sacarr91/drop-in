import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROFILE_IMAGE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const ProfileImageForm = ({ profileId }) => {
    const [profileImage, setProfileImage] = useState('');
  
    const [addProfileImage, { error }] = useMutation(ADD_PROFILE_IMAGE);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const data = await addProfileImage({
          variables: { profileId, profileImage },
        });
  
        setProfileImage('');
      } catch (err) {
        console.error(err);
      }
    };
  
    return (
      <div>
        <h4>Add Profile Picture Below.</h4>
  
        {Auth.loggedIn() ? (
          <form
            className=""
            onSubmit={handleFormSubmit}
          >
            <div className="">
              <input
                type="file"
                value={goal}
                className=""
                onChange={(event) => setProfileImage(event.target.files[0])}
              />
            </div>
  
            <div className="">
              <button className="" type="submit">
                Add Profile Image
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        ) : (
          <p>
            You need to be logged in to add your profile image. Please{' '}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </div>
    );
  };
  
  export default ProfileImageForm;
  

