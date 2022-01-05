import Head from 'next/head';
const Home = (props) => {
    const cards = [{
        title: "Gaming",
        description: "The metaverse can be defined as a unified and interoperable VR space where users can interact with each other and the digital world around them through advanced human-computer interaction (HCI) hardware and software. This takes VR gaming to incredible new heights.",
        link: "https://www.xrtoday.com/virtual-reality/gaming-in-the-metaverse-the-next-frontier/"
    }, {
        title: "Workspace",
        description: "With AR and MR technology, and the right smart glasses, we can transform the way we work and socialize on a fundamental scale. Video conversations will be replaced with the option to sit next to an avatar or hologram of the person you want to meet.",
        link: "https://www.xrtoday.com/mixed-reality/the-metaverse-workplace-get-ready-for-virtual-work/"

    }, {
        title: "Tourism",
        link: "https://bernardmarr.com/extended-reality-in-tourism-4-ways-vr-and-ar-can-enhance-the-travel-experience/",
        description: "As the industry looks to the future, one of its biggest concerns will be how to improve the whole travel experience and reduce some of the “pain points” that come with travel. I believe VR and AR could help with this. "
    }]
    return (<div className="index">
        <Head>
            <title>ARAP: Argumented Reality Awareness Program</title>
            <link rel="stylesheet" href="index.css" />
            <link rel="icon" href="/favicon.jpg" />
            <link rel="stylesheet" href="navbar.css" />
        </Head>
        <div className="index-header">
            <div className="index-header-container">
                <h1 className="index-header-title">
                    Welcome
                </h1>
                <h2 className="index-header-description">
                    To the argumented Reality awareness program
                </h2>
            </div>
        </div>
        <div className="index-information">
            <h3 className="index-information-header">Current Developement</h3>
            <div className="index-information-container">
                <p className="index-information-container-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dolor rutrum libero bibendum
                    sodales. Nulla ac maximus ipsum. Cras dignissim nulla libero, quis semper justo facilisis facilisis.
                    Nulla nec gravida ex. Vestibulum condimentum laoreet mi, eu ultrices lacus imperdiet at. Nunc tempus
                    nunc eu semper rhoncus. Aenean faucibus, orci id lobortis rhoncus, elit justo dignissim turpis, ac
                    pellentesque enim dui aliquet massa. In maximus risus a porttitor maximus. In eget erat a nisi
                    sollicitudin suscipit. Nulla urna dolor, venenatis eu arcu quis, pharetra commodo nibh. Ut rutrum,
                    mi feugiat condimentum luctus, metus neque tempor massa, condimentum mollis ipsum lacus sollicitudin
                    lacus.


                </p>
                <p className="index-information-container-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dolor rutrum libero bibendum
                    sodales. Nulla ac maximus ipsum. Cras dignissim nulla libero, quis semper justo facilisis facilisis.
                    Nulla nec gravida ex. Vestibulum condimentum laoreet mi, eu ultrices lacus imperdiet at. Nunc tempus
                    nunc eu semper rhoncus. Aenean faucibus, orci id lobortis rhoncus, elit justo dignissim turpis, ac
                    pellentesque enim dui aliquet massa. In maximus risus a porttitor maximus. In eget erat a nisi
                    sollicitudin suscipit. Nulla urna dolor, venenatis eu arcu quis, pharetra commodo nibh. Ut rutrum,
                    mi feugiat condimentum luctus, metus neque tempor massa, condimentum mollis ipsum lacus sollicitudin
                    lacus.

                </p>
            </div>
            <img className="index-information-image" src="/mountain.webp" />
        </div>
        <div className="index-explore">
            <h1 className="index-explore-heading">Exploring Possiblities</h1>
            <div className="index-explore-container">
                {cards.map((card, index) => <div key={index}
                    className="index-explore-container-link">
                    <div className="index-explore-container-link-front">
                        {card.title}
                    </div>
                    <div className="index-explore-container-link-back">
                        <p className="index-explore-container-link-back-description">
                            {card.description}
                        </p>
                        <a className="index-explore-container-link-back-link" target="_blank" href={card.link} rel="noreferrer"><span>EXPLORE</span></a>
                    </div>
                </div>)}

            </div>
        </div>
    </div>)
}

export default Home