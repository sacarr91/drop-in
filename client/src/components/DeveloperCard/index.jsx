const DeveloperCard = ({ dev }) => (
    <div style={{ width: '18rem', margin: '1rem', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <img src={dev.image} className="card-img-top" alt={dev.name} style={{ borderRadius: '8px 8px 0 0'}} />
        <div className="card-body" style={{ padding: '1rem' }}>
            <h5 className="card-title text-center">{dev.name}</h5>
            <p className="card-text text-center">{dev.bio}</p>
            <div style={{ textAlign: 'center' }}>
            <a href={dev.githubLink} className="btn" style={{ backgroundColor: 'rgb(101, 189, 71)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px' }}>{dev.githubName}</a>
            </div>
        </div>
    </div>
);

export default DeveloperCard;

