import PropTypes from 'prop-types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './backArrow.scss';

const BackArrow = ({ buttonText, fontSize, onClick, style }) => {

    return (
        <div className='backArrow'>
            <ArrowBackIcon fontSize={fontSize} onClick={onClick} style={style} />
            <h3>{buttonText}</h3>
        </div>
    );
}

BackArrow.propTypes = {
    buttonText: PropTypes.string,
    fontSize: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object
}

export default BackArrow;