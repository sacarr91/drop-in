import "../../utils/profile.css"
import defaultImage from "/images/baker.jpg"
import { useState } from "react";
import '../../utils/modal.css'
import Modal from "../Modal"
import Donate from "../../pages/Donate";

const ProfileDisplay = ({ profile }) => {
    const imageUrl = profile.image ? `/images/${profile.image}` : defaultImage;

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };


    return(
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
                  <button className="carocardbtn">Follow Me</button>
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
    )
}

export default ProfileDisplay