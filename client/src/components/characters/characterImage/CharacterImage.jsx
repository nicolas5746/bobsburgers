import PropTypes from 'prop-types';
import Loader from '@ui/loader/Loader';
import './characterImage.scss';

const CharacterImage = ({ character, imgStyle, imgTitle }) => {

    return (
        Object.hasOwnProperty.call(character, 'image') ?
            <img className='characterImage' alt={character.name} src={character.image} style={imgStyle} title={imgTitle} />
            :
            <div className='loadingImage' style={imgStyle} title={imgTitle}>
                <Loader className='dots' childs={4} />
            </div>
    );
}

CharacterImage.propTypes = {
    character: PropTypes.object,
    imgStyle: PropTypes.object,
    imgTitle: PropTypes.string
}

export default CharacterImage;