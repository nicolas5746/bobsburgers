import React from 'react';
import { CharacterContext } from '@contexts/Contexts';
import Character from '@components/characters/character/Character';
import Banner from '@layouts/banner/Banner';
import Spinner from '@ui/spinner/Spinner';

const Characters = () => {
    // Context values
    const { characters } = React.useContext(CharacterContext);

    return (
        <>
            {characters.length < 1
                ?
                <>
                    <Banner />
                    <Spinner />
                </>
                :
                <Character characters={characters} />
            }
        </>
    );
}

export default Characters;