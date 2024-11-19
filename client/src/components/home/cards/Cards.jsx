import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { PageContext } from '@/contexts/Contexts';
import Card from '@/components/home/card/Card';
import NoMatch from '@/components/home/noMatch/NoMatch';
import './cards.scss';

const Cards = ({ characters, currentCharacters }) => {
    // Context values
    const { filter, handleFilteredCharacters, handleOnFilterChange } = React.useContext(PageContext);

    return (
        <div className='cardsContainer'>
            <h1>Search character</h1>
            <Box
                autoComplete='off'
                component='form'
                noValidate
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    '& .MuiInputBase-formControl': { color: '#f0262a' },
                    '& label.Mui-focused': {
                        color: '#f0262a',
                        '&:hover': { color: '#f30f12' }
                    }
                }}
            >
                <TextField
                    id='standard-search'
                    color='error'
                    label='Enter character name'
                    onChange={handleOnFilterChange}
                    type='search'
                    value={filter}
                    variant='standard'
                />
            </Box>
            <div id='cards' className='cards'>
                {filter.length >= 1
                    ?
                    handleFilteredCharacters(characters).length < 1
                        ?
                        <NoMatch />
                        :
                        handleFilteredCharacters(characters).map((character) => (<Card character={character} key={character.id} />))
                    :
                    currentCharacters.map((character) => (<Card character={character} key={character.id} />))
                }
            </div>
        </div>
    );
}

Cards.propTypes = {
    characters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    currentCharacters: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Cards;