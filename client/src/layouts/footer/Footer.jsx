import React from 'react';
import './footer.scss';

const Footer = () => {

    const [portfolio, setPortfolio] = React.useState('');

    let profiles = [
        {
            name: 'Github',
            image: 'https://res.cloudinary.com/dmnyy2q99/image/upload/v1728013820/github_puzyq6.png',
            link: 'https://www.github.com/nicolas5746/'
        },
        {
            name: 'Email',
            image: 'https://res.cloudinary.com/dmnyy2q99/image/upload/v1728013820/gmail_mj4aus.png',
            link: 'mailto:nicolas26386@gmail.com'
        },
        {
            name: 'LinkedIn',
            image: 'https://res.cloudinary.com/dmnyy2q99/image/upload/v1728013820/linkedin_juwoo0.png',
            link: 'https://www.linkedin.com/in/nicolasbatistadev/'
        }
    ];

    React.useEffect(() => {
        const url = 'https://api.npoint.io/0274475edb0f9685ef3d';
        fetch(url)
            .then((response) => response.json())
            .then((response) => setPortfolio(response.url))
            .catch((error) => {
                console.error(error.message);
                setPortfolio('');
            });
    }, []);

    return (
        <footer>
            <h1>{`bob's burgers`}</h1>
            <h2>characters</h2>
            <p>by nicolás batista piñeyro &copy; 2023</p>
            <a href={portfolio} rel='noopener noreferrer' target='_blank'>
                <span>{portfolio}</span>
            </a>
            <ul className='profiles'>
                {profiles.map((profile, index) => (<li key={index}>
                    <a href={profile.link} rel='noopener noreferrer' target='_blank'>
                        <img alt={profile.name} src={profile.image} title={profile.name} />
                    </a>
                </li>))}
            </ul>
        </footer>
    );
}

export default Footer;