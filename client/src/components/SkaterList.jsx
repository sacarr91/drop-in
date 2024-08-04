import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const SkaterList = ({ profiles, title }) => {
  // Filter profiles to only include those with the role "skater"
  console.log(profiles)
  const skaterProfiles = profiles.filter(profile => profile.role === 'Skater');

  if (!skaterProfiles.length) {
    return <h3>No Skater Profiles Yet</h3>;
  }

  return (
    <Container>
      <h3 className="my-4">{title}</h3>
      <Row>
        {skaterProfiles.map((profile) => (
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
                  View {profile.role} Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkaterList;