import React from 'react';
import PropTypes from 'prop-types';
import { PageContext } from '@contexts/Contexts';

const PageProvider = ({ children }) => {
    // States
    const [page, setPage] = React.useState(1);
    const [filter, setFilter] = React.useState('');
    const [searching, setSearching] = React.useState(false);
    // Characters shown in each page
    const charactersPerPage = 12;
    // Function to determine if searching is currently active
    const handleIsSearching = () => {
        filter.length >= 1
            ?
            setSearching(true)
            :
            setSearching(false);
    }
    // Function to scroll to the top of page
    const handleScrollToTop = () => {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: 0
        });
    }
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
        handleScrollToTop();
        setPage(page);
    }
    // On change function when search filtering
    const handleOnFilterChange = (event) => {
        setFilter(event.target.value);
    }
    // Filter characters by name and converting to lower case
    const handleFilteredCharacters = (characters) => {
        return characters.filter((character) => {
            return character.name.toLowerCase().match(filter.toLowerCase())
        });
    }
    // Effects
    React.useEffect(() => {
        handleIsSearching();
    });

    return (
        <PageContext.Provider value={{
            filter,
            handleCurrentCharacters,
            handleFilteredCharacters,
            handleOnFilterChange,
            handleOnPageChange,
            handlePageQuantity,
            handleScrollToTop,
            page,
            searching
        }}>
            {children}
        </PageContext.Provider>
    );
}

PageProvider.propTypes = {
    children: PropTypes.node
}

export default PageProvider;