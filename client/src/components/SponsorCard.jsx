import "../utils/sponsorcard.css"
import defaultImage from "/images/baker.jpg"

const SponsorCard = ({ sponsor }) => {
  const imageUrl = sponsor.image ? `images/${sponsor.image}` : defaultImage;

  return (
    <div className="sponsor-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="sponsor-card-overlay">
        <h3 className="sponsor-title">{sponsor.name}</h3>
        <p className="sponsor-description">{sponsor.bio}</p>
        <div className="sponsor-links">
          <a href={`/profiles/${sponsor._id}`} className="sponsor-link">
            View Our Page!
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;