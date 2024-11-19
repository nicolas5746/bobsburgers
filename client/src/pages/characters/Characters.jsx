import React from 'react';
import { CharacterContext } from '@/contexts/Contexts';
import Character from '@/components/characters/character/Character';
import Banner from '@/layouts/banner/Banner';
import Loader from '@ui/loader/Loader';

const Characters = () => {
    // Context values
    const { characters } = React.useContext(CharacterContext);

    return (
        <>
            {characters.length < 1
                ?
                <>
                    <Banner />
                    <Loader className='spinner' childs={12} />
                </>
                :
                <Character characters={characters} />
            }
        </>
    );
}

export default Characters;