import './banner.scss';

const Banner = () => {

    let imgSrc = `https://i.postimg.cc/C5V5H1F4/banner.png`;

    return (
        <img
            className='banner'
            alt={`Bob's Burgers`}
            src={imgSrc}
            title={`Bob's Burgers`}
        />
    );
}

export default Banner;