import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CharacterImage from '@components/characters/characterImage/CharacterImage';
import BackArrow from '@ui/backArrow/BackArrow';
import Dots from '@ui/dots/Dots';
import './characterDetails.scss';

const CharacterDetails = ({ character }) => {
    // useNavigate is a React Router hook that allows to forward or backward pages
    const navigate = useNavigate();

    return (
        <div className='characterDetails'>
            <BackArrow
                buttonText={'back'}
                fontSize={'large'}
                onClick={() => navigate(-1)}
                style={{ color: '#f0262a', marginTop: '10%' }}
            />
            <div
                className='card'
                style={{
                    height: '425px',
                    pointerEvents: 'none'
                }}
            >
                <CharacterImage
                    character={character}
                    imgStyle={{ height: '60%' }}
                />
                <div className='info'>
                    <h2>{!character.name ? <Dots /> : character.name}</h2>
                    <p className='data'>
                        <span className='description'>{`Gender: `}</span>
                        {!character.gender ? <Dots /> : character.gender}
                    </p>
                    <p className='data'>
                        <span className='description'>{`Age: `}</span>
                        {!character.age ? <Dots /> : character.age}
                    </p>
                    <p className='description'>{`Description: `}</p>
                    <p className='data'>
                        {!character.description ? <Dots /> : character.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

CharacterDetails.propTypes = {
    character: PropTypes.object
}

export default CharacterDetails;