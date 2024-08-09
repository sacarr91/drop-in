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
    <div>
      {skaterProfiles.map((skater, index) => (
        <div key={index}>
          <SkaterProfileCard skater={skater} />
        </div>
      ))}
  </div>
  );
};

export default SkaterList;