const DeveloperCard = ({ dev }) => (
    <div className="card devCard text-center">
        <img src={dev.image} className="card-img-top" alt={dev.name} />
        <div className="card-body">
            <h5 className="card-title mb-3">{dev.name}</h5>
            <p className="card-text">{dev.bio}</p>

        </div>
        <div className="card-footer">
            <a href={dev.githubLink} className="btn gh-link">{dev.githubName}</a>
        </div>
    </div>
);

export default DeveloperCard;

