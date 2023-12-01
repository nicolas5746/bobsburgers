import React from 'react';
import PropTypes from 'prop-types';
import { CharacterContext } from '@contexts/Contexts';

const CharacterProvider = ({ children }) => {
    // States
    const [characters, setCharacters] = React.useState([]);
    // Function to fetch characters data
    const fetchCharacters = () => {
        fetch('https://bobsburgersserver.vercel.app/characters')
            .then((response) => response.json())
            .then((data) => setCharacters(data))
            .catch((error) => {
                throw error;
            });
    }
    // Effects
    React.useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <CharacterContext.Provider value={{ characters }}>
            {children}
        </CharacterContext.Provider>
    );
}

CharacterProvider.propTypes = {
    children: PropTypes.node
}

export default CharacterProvider;