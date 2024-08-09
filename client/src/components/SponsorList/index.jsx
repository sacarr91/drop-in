import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import SponsorCard from '../SponsorCard';
import '../../utils/sponsorlist.css'

const SponsorList = ({ profiles, title }) => {
  // Filter profiles to only include those with the role "skater"
  const sponsorProfiles = profiles.filter(profile => profile.role === 'Sponsor');

  if (!sponsorProfiles.length) {
    return <h3>No Sponsor Profiles Yet</h3>;
  }

  return (
<Container style={{ width: '100%', maxWidth: '100%', padding: '0' }}>
  <h3 className="my-4" style={{ textAlign: 'center' }}>Our Sponsors</h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {sponsorProfiles.map((sponsor, index) => (
      <div 
        key={index} 
        style={{ 
          flex: '1 1 calc(33.333% - 20px)', 
          margin: '5px',
          maxWidth: 'calc(33.333% - 20px)',
          boxSizing: 'border-box'
        }}
      >
        <SponsorCard sponsor={sponsor} />
      </div>
    ))}
  </div>
</Container>
  );
};

export default SponsorList;

// Old code in case needed
        {/* {sponsorProfiles.map((profile) => (
          <Col key={profile._id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{profile.name}</Card.Title>
                <Card.Text>
                  <span>
                    Currently has {profile.goals ? profile.goals.length : 0} goal
                    {profile.goals && profile.goals.length === 1 ? '' : 's'}
                  </span>
                </Card.Text>
                <Button
                  variant="secondary"
                  as={Link}
                  to={`/profiles/${profile._id}`}
                >
                  View Card Data
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))} */}