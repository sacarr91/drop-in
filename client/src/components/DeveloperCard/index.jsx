const DeveloperCard = ({ dev }) => (
    <div className="devCard">
        <img src={dev.image} className="card-img-top" alt={dev.name} />
        <div className="card-body">
            <h5 className="card-title text-center">{dev.name}</h5>
            <p className="card-text text-center">{dev.bio}</p>
            <a href={dev.githubLink} className="btn gh-link">{dev.githubName}</a>
        </div>
    </div>
);

export default DeveloperCard;

