import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import SkaterProfileCard from '../SkaterProfileCard';

const SkaterList = ({ profiles, title }) => {
  // Filter profiles to only include those with the role "skater"
  console.log(profiles)
  const skaterProfiles = profiles.filter(profile => profile.role === 'Skater');

  if (!skaterProfiles.length) {
    return <h3>No Skater Profiles Yet</h3>;
  }

  return (
    <div className="container">
      <h3 className="my-4" style={{ textAlign: 'center' }}>Our Skaters</h3>
      <div className="row">
        {skaterProfiles.map((skater, index) => (
          <div key={index} className="col-12 col-md-6 col-xl-4 justify-content-center">
            <SkaterProfileCard skater={skater} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkaterList;