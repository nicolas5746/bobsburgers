import './footer.scss';

const Footer = () => {

    let portfolio = `https://nicolasbatista.codeando.es/`;

    let profiles = [
        {
            name: 'Github',
            image: 'https://i.postimg.cc/kXmWQw1t/github.png',
            link: 'https://www.github.com/nicolas5746/'
        },
        {
            name: 'Email',
            image: 'https://www.codeando.es/assets/favicon-D0rdKDDw.ico',
            link: 'mailto:nicolasbatista@codeando.es'
        },
        {
            name: 'LinkedIn',
            image: 'https://i.postimg.cc/kgM8ZGdJ/linkedin.png',
            link: 'https://www.linkedin.com/in/nicolasbatistadev/'
        }
    ];

    return (
        <footer>
            <h1>{`bob's burgers`}</h1>
            <h2>characters</h2>
            <p>by nicolás batista piñeyro &copy; 2023</p>
            <a href={portfolio} rel='noopener noreferrer' target='_blank'>
                <span>{portfolio}</span>
            </a>
            <ul className='profiles'>
                {profiles.map((profile, index) => (
                    <li key={index}>
                        <a href={profile.link} rel='noopener noreferrer' target='_blank'>
                            <img alt={profile.name} src={profile.image} title={profile.name} />
                        </a>
                    </li>))
                }
            </ul>
        </footer>
    );
}

export default Footer;