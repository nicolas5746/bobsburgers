import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CharacterImage from '@components/characters/characterImage/CharacterImage';
import Dots from '@ui/dots/Dots';

const Card = ({ character }) => {

    return (
        <Link
            to={`/character/${character.name}`}
            aria-label='name'
            style={{ textDecoration: 'none' }}
        >
            <div className='card' style={{ height: '350px' }}>
                <CharacterImage
                    character={character}
                    imgStyle={{ height: '75%' }}
                    imgTitle={
                        `Name: ` + `${character.name}` + `\n` +
                        `Gender: ` + `${character.gender}` + `\n` +
                        `Age: ` + `${character.age}`
                    }
                />
                <div className='info'>
                    <h2>
                        {!character.name ? <Dots /> : character.name}
                    </h2>
                    <p className='data'>
                        {!character.quotes ? <Dots /> : character.quotes}
                    </p>
                </div>
            </div>
        </Link>
    );
}

Card.propTypes = {
    character: PropTypes.object
}

export default Card;