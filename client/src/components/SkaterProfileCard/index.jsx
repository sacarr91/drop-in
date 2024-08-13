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

const SkaterProfileCard = ({ skater }) => {
  const defaultImage = randomizeDefaultImage(); 
  const imageUrl = skater.image ? `${skater.image}` : defaultImage;

  const limitText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  return (
    <div className="row d-flex">
      <div className="col col-md-9 col-lg-7 col-xl-6">
        <div className="card" style={{ borderRadius: '15px', background: 'transparent', color: 'rgb(101, 189, 71)', border: 'none'}}>
          <div className="card-body p-4">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src= {imageUrl}
                  alt={skater.name}
                  className="img-fluid"
                  style={{ width: '180px', borderRadius: '10px' }}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="mb-1">{skater.name}</h5>
                <p className="mb-2 pb-1">{skater.role}</p>
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <p className="small mb-1">Age</p>
                    <p className="mb-0">{skater.age}</p>
                  </div>
                  <div className="px-3">
                    <p className="small mb-1">Level</p>
                    <p className="mb-0">{skater.levels}</p>
                  </div>
                </div>
                {skater.bio && <p>{limitText(skater.bio, 20)}</p>}
                <div className="d-flex pt-1">
                  <button
                    type="button"
                    className="btn me-1 flex-grow-1 headerbtn"
                    onClick={() => window.location.href = `/profiles/${skater._id}`}
                  >
                    Profile
                  </button>
                  <button
                    type="button"
                    className="btn flex-grow-1 headerbtn"
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
};

export default SkaterProfileCard;