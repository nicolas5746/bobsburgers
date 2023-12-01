import React from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '@contexts/Contexts';
import BackArrow from '@ui/backArrow/BackArrow';
import './notFound.scss';

const NotFound = () => {
    // Context values
    const { handleScrollToTop } = React.useContext(PageContext);

    let imgSrc = `https://i.postimg.cc/jjBrcBDt/nope.gif`;

    return (
        <div className='notFound'>
            <div className='errorContainer'>
                <p style={{ color: '#f0262a', marginTop: '5%' }}>
                    {`error`}
                </p>
                <p style={{ color: '#000', marginBottom: '-2%', zIndex: '1' }}>
                    {`404`}
                </p>
                <div className='imageContainer'>
                    <div className='imageWithBackArrow'>
                        <div className='backArrowContainer'>
                            <Link
                                to={`/`}
                                aria-label='home'
                                style={{ textDecoration: 'none' }}
                            >
                                <BackArrow
                                    buttonText={'back'}
                                    fontSize={'large'}
                                    onClick={() => handleScrollToTop()}
                                    style={{ color: '#f0262a' }}
                                />
                            </Link>
                        </div>
                        <img
                            alt={`Page not found`}
                            src={imgSrc}
                            title={`Page not found`}
                        />
                    </div>
                </div>
                <p style={{ color: '#f0262a', marginTop: '1%' }}>
                    {`page not found`}
                </p>
            </div>
        </div>
    );
}

export default NotFound;