import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CharacterImage from '@/components/characters/characterImage/CharacterImage';
import Loader from '@ui/loader/Loader';

const Card = ({ character }) => {

    return (
        <Link to={`../character/${character.name}`} aria-label='name' style={{ textDecoration: 'none' }}>
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
                    <h2>{!character.name ? <Loader className='dots' childs={4} /> : character.name}</h2>
                    <p className='data'>{!character.quotes ? <Loader className='dots' childs={4} /> : character.quotes}</p>
                </div>
            </div>
        </Link>
    );
}

Card.propTypes = { character: PropTypes.object }

export default Card;