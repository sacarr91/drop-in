import "../../utils/sponsorcard.css"
import defaultImage from "/images/baker.jpg"

const SkaterProfileCard = ({ skater }) => {
  const imageUrl = skater.image ? `images/${skater.image}` : defaultImage;

  return (
    <section className="px-4 py-5" style={{borderRadius: '.5rem .5rem 0 0' }}>
    <div className="row d-flex justify-content-center">
      <div className="col col-md-9 col-lg-7 col-xl-6">
        <div className="card" style={{ borderRadius: '15px' }}>
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
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                  <div>
                    <p className="small text-muted mb-1">Age</p>
                    <p className="mb-0">{skater.age}</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Level</p>
                    <p className="mb-0">{skater.levels}</p>
                  </div>
                </div>
                <p>{skater.bio}</p>
                <div className="d-flex pt-1">
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1 flex-grow-1"
                  >
                    Chat
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary flex-grow-1"
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
  </section>
);
};

export default SkaterProfileCard;