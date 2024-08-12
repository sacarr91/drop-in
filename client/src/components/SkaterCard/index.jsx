import "../../utils/sponsorcard.css"
import defaultImage from "/images/baker.jpg"

const SkaterCard = ({ skater }) => {
  const imageUrl = skater.image ? `images/${skater.image}` : defaultImage;

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