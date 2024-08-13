import "../../utils/sponsorcard.css"
import defaultImage1 from "/images/b-s-default-1.png"
import defaultImage2 from "/images/b-s-default-2.png"
import defaultImage3 from "/images/b-s-default-3.png"

const randomizeDefaultImage = function() {
  const imageArray = [ defaultImage1, defaultImage2, defaultImage3]
  while(imageArray.length) {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const defaultImage = imageArray[randomIndex];
    return defaultImage  
  }
  
}

const SkaterCard = ({ skater }) => {
  const defaultImage = randomizeDefaultImage(); 
  const imageUrl = skater.image ? `${skater.image}` : defaultImage;

  return (
    <div className="sponsor-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="sponsor-card-overlay">
        <h3 className="sponsor-title">{skater.name}</h3>
        <p className="sponsor-description">{skater.bio}</p>
        <div className="sponsor-links">
          <a href={`/profiles/${skater._id}`} className="btn carocardbtn">
            View My Page!
          </a>
        </div>
      </div>
    </div>
  );
};

export default SkaterCard;