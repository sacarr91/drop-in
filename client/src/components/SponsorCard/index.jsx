import "../../utils/sponsorcard.css"
import defaultImage1 from "/images/a-s-default-1.png"
import defaultImage2 from "/images/a-s-default-2.png"
import defaultImage3 from "/images/a-s-default-3.png"

const randomizeDefaultImage = function() {
  const imageArray = [ defaultImage1, defaultImage2, defaultImage3]
  while(imageArray.length) {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const defaultImage = imageArray[randomIndex];
    return defaultImage  
  }
  
}

const SponsorCard = ({ sponsor }) => {
  const defaultImage = randomizeDefaultImage(); 
  const imageUrl = sponsor.image ? `${sponsor.image}` : defaultImage;

  return (
    <div className="sponsor-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="sponsor-card-overlay">
        <h3 className="sponsor-title">{sponsor.name}</h3>
        <p className="sponsor-description">{sponsor.bio}</p>
        <div className="sponsor-links">
          <a href={`/sponsorprofile/${sponsor._id}`} className="btn carocardbtn">
            View Our Page!
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;