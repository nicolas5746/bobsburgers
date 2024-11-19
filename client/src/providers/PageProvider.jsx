import React from 'react';
import PropTypes from 'prop-types';
import { PageContext } from '@/contexts/Contexts';

const PageProvider = ({ children }) => {
    // States
    const [page, setPage] = React.useState(1);
    const [filter, setFilter] = React.useState('');
    const [searching, setSearching] = React.useState(false);
    // Characters shown in each page
    const charactersPerPage = 12;
    // Function to determine page quantity
    const handlePageQuantity = (characters) => {
        return Math.ceil(characters.length / charactersPerPage);
    }
    // Function to separate pages
    const handleCurrentCharacters = (characters) => {
        const firstPage = (page - 1) * charactersPerPage;
        const lastPage = firstPage + charactersPerPage;
        return characters.slice(firstPage, lastPage);
    }
    // On change function whenever page number changes
    const handleOnPageChange = (event, page) => {
        const cards = document.getElementById('cards');
        cards.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        setPage(page);
    }
    // On change function when search filtering
    const handleOnFilterChange = (event) => setFilter(event.target.value);
    // Filter characters by name and converting to lower case
    const handleFilteredCharacters = (characters) => {
        return characters.filter((character) => {
            return character.name.toLowerCase().match(filter.toLowerCase())
        });
    }
    // Determine if searching is currently active
    React.useEffect(() => {
        filter.length >= 1 ? setSearching(true) : setSearching(false);
    }, [filter.length]);

    return (
        <PageContext.Provider value={{
            filter,
            handleCurrentCharacters,
            handleFilteredCharacters,
            handleOnFilterChange,
            handleOnPageChange,
            handlePageQuantity,
            page,
            searching
        }}>
            {children}
        </PageContext.Provider>
    );
}

PageProvider.propTypes = { children: PropTypes.node }

export default PageProvider;