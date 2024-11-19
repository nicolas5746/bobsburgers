import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CharacterImage from '@/components/characters/characterImage/CharacterImage';
import BackArrow from '@ui/backArrow/BackArrow';
import Loader from '@ui/loader/Loader';
import './characterDetails.scss';

const CharacterDetails = ({ character }) => {
    // Access navigation object
    const navigate = useNavigate();

    return (
        <div className='characterDetails'>
            <BackArrow buttonText='back' fontSize='large' onClick={() => navigate(-1)} style={{ color: '#f0262a', marginTop: '10%' }} />
            <div className='card' style={{ height: '425px', pointerEvents: 'none' }}>
                <CharacterImage character={character} imgStyle={{ height: '60%' }} />
                <div className='info'>
                    <h2>{!character.name ? <Loader className='dots' childs={4} /> : character.name}</h2>
                    <p className='data'>
                        <span className='description'>Gender:&nbsp;</span>{!character.gender ? <Loader className='dots' childs={4} /> : character.gender}
                    </p>
                    <p className='data'>
                        <span className='description'>Age:&nbsp;</span>{!character.age ? <Loader className='dots' childs={4} /> : character.age}
                    </p>
                    <p className='description'>Description:&nbsp;</p>
                    <p className='data'>{!character.description ? <Loader className='dots' childs={4} /> : character.description}</p>
                </div>
            </div>
        </div>
    );
}

CharacterDetails.propTypes = { character: PropTypes.object }

export default CharacterDetails;