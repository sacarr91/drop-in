import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const SponsorList = ({ profiles, title }) => {
  // Filter profiles to only include those with the role "skater"
  const sponsorProfiles = profiles.filter(profile => profile.role === 'Sponsor');

  if (!sponsorProfiles.length) {
    return <h3>No Sponsor Profiles Yet</h3>;
  }

  return (
    <Container>
      <h3 className="my-4">All Sponsors</h3>
      <Row>
        {sponsorProfiles.map((profile) => (
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
        ))}
      </Row>
    </Container>
  );
};

export default SponsorList;