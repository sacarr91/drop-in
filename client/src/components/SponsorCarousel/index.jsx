import SponsorCard from '../SponsorCard';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from '../../utils/queries'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SponsorCarousel = () => {
    const { loading, error, data } = useQuery(QUERY_PROFILES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const sponsorProfiles = data.profiles.filter(profile => profile.role === 'Sponsor');

    console.log(sponsorProfiles);
  
    if (!sponsorProfiles.length) {
      return <h3>No Sponsor Profiles Yet</h3>;
    }

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div className="sponsor-carousel">
        <Slider {...settings}>
          {sponsorProfiles.map((sponsor, index) => (
            <div key={index}>
              <SponsorCard sponsor={sponsor} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default SponsorCarousel;