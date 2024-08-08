import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROFILE_IMAGE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const ProfileImageForm = ({ profileId }) => {
  const [file, setFile] = useState(null);
  const [addProfileImage, { error }] = useMutation(ADD_PROFILE_IMAGE);

  const handleUpload = async () => {
    console.log(file);

    try {
      const data = await addProfileImage({
        variables: { profileImage: file },
      });

      setFile(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <form>
          <section>
            <input
              type="file"
              onChange={handleFileChange}
            >
            </input>
            <button
              onClick={handleUpload}
            >Upload Profile Image</button>
          </section>
        </form>
      ) : (
        <p>
          You need to be logged in to add your profile image. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )
      }

    </div>
  );
}

export default ProfileImageForm;


