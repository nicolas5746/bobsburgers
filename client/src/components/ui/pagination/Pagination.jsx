import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import { default as Pages } from '@mui/material/Pagination';
import { PageContext } from '@/contexts/Contexts';
import Cards from '@/components/home/cards/Cards';

const Pagination = ({ characters }) => {
    // Context values
    const { handleCurrentCharacters, handleOnPageChange, handlePageQuantity, page, searching } = React.useContext(PageContext);

    return (
        <>
            <Cards characters={characters} currentCharacters={handleCurrentCharacters(characters)} />
            <Stack spacing={2}>
                <Pages
                    color='error'
                    count={handlePageQuantity(characters)}
                    defaultPage={1}
                    disabled={searching}
                    onChange={handleOnPageChange}
                    page={page}
                    shape='circular'
                    showFirstButton
                    showLastButton
                    style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', margin: '0.5% auto 5%' }}
                />
            </Stack>
        </>
    );
}

Pagination.propTypes = { characters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]) }

export default Pagination;