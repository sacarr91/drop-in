import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/AboutSkater"
                        className={currentPage === '/AboutSkater' ? 'nav-link active' : 'nav-link'}
                    >
                        Skater
                    </Link>
                </li>          <li className="nav-item">
                    <Link
                        to="/AboutSponsor"
                        className={currentPage === '/AboutSponsor' ? 'nav-link active' : 'nav-link'}
                    >
                        Sponsor
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/Connect"
                        className={currentPage === '/Connect' ? 'nav-link active' : 'nav-link'}
                    >
                        Connect
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/SponsorLevels"
                        className={currentPage === '/SponsorLevels' ? 'nav-link active' : 'nav-link'}
                    >
                        Levels
                    </Link>
                </li>
            </ul>
        </>);
}

export default NavTabs;