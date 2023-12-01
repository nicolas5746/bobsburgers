import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import CharacterDetails from '@components/characters/characterDetails/CharacterDetails';
import './character.scss';

const Character = ({ characters }) => {
    // Dynamic parameter
    const { name } = useParams();

    return (
        <div className='character'>
            <div className='characterOverlay'>
                {characters
                    .filter((character) => character.name === name)
                    .map((character) => (
                        <CharacterDetails character={character} key={character.id} />))
                }
            </div>
        </div>
    );
}

Character.propTypes = {
    characters: PropTypes.object,
}

export default Character;