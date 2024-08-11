import "../../utils/profile.css"
import defaultImage from "/images/baker.jpg"
import '../../utils/modal.css'


const SponsorProfileDisplay = ({ profile }) => {
    const imageUrl = profile.image ? `/images/${profile.image}` : defaultImage;

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
                    <label>E-mail</label>
                    <p>{profile.email}</p>
                  </div>
                  <div className="media">
                  <button className="carocardbtn">Follow Us</button>
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
    </section>    
        </>
    )
}

export default SponsorProfileDisplay