import PropTypes from 'prop-types';
import './loader.scss';

const Loader = ({ className, childs }) => {

    return (
        <div className={className}>
            {Array.from({ length: childs }, (_, index) => <div key={index}></div>)}
        </div>
    );
}

Loader.propTypes = {
    childs: PropTypes.number,
    className: PropTypes.string
}

export default Loader;