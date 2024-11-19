import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import CharacterDetails from '@/components/characters/characterDetails/CharacterDetails';
import './character.scss';

const Character = ({ characters }) => {
    // Reference value
    const backgroundRef = React.useRef(null);
    // Dynamic parameter
    const { name } = useParams();
    // Access navigation object
    const navigate = useNavigate();
    // Close Card on clicking background
    const handleCloseCard = React.useCallback((event) => {
        if (backgroundRef.current && !backgroundRef.current.contains(event.target)) navigate(-1);
    }, [navigate]);
    // Close Card on click
    React.useEffect(() => {
        document.addEventListener('click', handleCloseCard, true);
        return () => document.removeEventListener('click', handleCloseCard, true);
    }, [handleCloseCard]);

    return (
        <div className='character'>
            <div className='characterOverlay' ref={backgroundRef}>
                {characters
                    .filter((character) => character.name === name)
                    .map((character) => (<CharacterDetails character={character} key={character.id} />))
                }
            </div>
        </div>
    );
}

Character.propTypes = { characters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]) }

export default Character;