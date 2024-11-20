import { Link } from 'react-router-dom';
import BackArrow from '@ui/backArrow/BackArrow';
import './notFound.scss';

const NotFound = () => {

    return (
        <div className='notFound'>
            <div className='errorContainer'>
                <p style={{ color: '#f0262a', marginTop: '5%' }}>error</p>
                <p style={{ color: '#000', marginBottom: '-2%', zIndex: '1' }}>404</p>
                <div className='imageContainer'>
                    <div className='backArrowContainer'>
                        <Link to='../' aria-label='home' style={{ textDecoration: 'none' }}>
                            <BackArrow buttonText='back' fontSize='large' onClick={() => window.scroll({ behavior: 'smooth', left: 0, top: 0 })} style={{ color: '#f0262a' }} />
                        </Link>
                    </div>
                    <div className='imageWithBackArrow'>
                        <img alt='Page not found' src='https://res.cloudinary.com/dmnyy2q99/image/upload/v1731974555/nope_oxelst.gif' title='Page not found' />
                    </div>
                </div>
                <p style={{ color: '#f0262a', marginTop: '1%', whiteSpace: 'nowrap' }}>page not found</p>
            </div>
        </div>
    );
}

export default NotFound;