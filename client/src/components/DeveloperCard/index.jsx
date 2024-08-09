const DeveloperCard = ({ dev }) => (
    <div className="card devCard">
            <div className="row g-0" id='dev-content'>
                <img src={dev.image} id="dev-img" className="image-fluid rounded-start col-md-4" alt={dev.name}></img>
                <div className="card-body col-md-8" >
                    <h5 className="card-title">{dev.name}</h5>
                    <p className="card-text" id="dev-text">{dev.bio}</p>
                    <div className="card-footer" id="dev-footer">
                        <a href={dev.githubLink} className="btn gh-link">{dev.githubName}</a>
                    </div>
                </div>
            </div>
    </div>
);

export default DeveloperCard;