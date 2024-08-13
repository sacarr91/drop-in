import {Container} from 'react-bootstrap';
import SponsorCard from '../SponsorCard';

const SponsorList = ({ profiles, title }) => {
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
