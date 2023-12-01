import PropTypes from 'prop-types';
import Dots from '@ui/dots/Dots';
import './characterImage.scss';

const CharacterImage = ({ character, imgStyle, imgTitle }) => {

    return (
        Object.hasOwnProperty.call(character, 'image')
            ?
            <img
                className='characterImage'
                alt={character.name}
                src={character.image}
                style={imgStyle}
                title={imgTitle}
            />
            :
            <div
                className='loadingImage'
                style={imgStyle}
                title={imgTitle}
            >
                <Dots />
            </div>
    );
}

CharacterImage.propTypes = {
    character: PropTypes.object,
    imgStyle: PropTypes.object,
    imgTitle: PropTypes.string
}

export default CharacterImage;