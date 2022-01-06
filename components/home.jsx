
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

        <div className="index-header">
            <div className="index-header-container">
                <h1 className="index-header-title">
                    Welcome
                </h1>
                <h2 className="index-header-description">
                    To the Augmented Reality awareness program
                </h2>
            </div>
        </div>
        <div className="index-information">
            <h3 className="index-information-header">Current Developement</h3>
            <div className="index-information-container">
                <p className="index-information-container-text">
                    {`Augmented Reality, or AR as it's usually referred to, is a way to incorporate and enhance natural surroundings
                    with virtual objects. It is the next natural step in the evolution of interactive technologies, which would facilitate,
                    or does facilitate, many revolutionary technologies. For instance, the advent of the metaverse, and similar
                    technologies, would allow millions of people access to effective schools, workspaces, and so on; furthermore,
                    it could enable people to travel to destinations without the inconvenience of traditional travel. Multinational
                    corporations - such as Meta, snap, and Apple - are currently developing AR technologies that would enable us to
                    live a life that we've only yet glimpsed in science fiction.`}
                </p>
                <p className="index-information-container-text">
                    {`Virtual Reality, or VR as it's usually referred to, is a simulated experience intended to seem as if it was real. 
                    Meta, or Facebook as it was previously known, and HTC are leaders in the virtual reality industry; spending years 
                    and billions of dollars on the tech. The applications of VR are way more diverse than just leisurely activities: VR 
                    has proven to be highly efficient in training military personnel with little to no risk of bodily harm, provided a
                    method for schools to conduct online classes, and allowed businesses to conduct virtual meetings. As evident, the
                    latter examples potentially helped save many lives during the tragic Covid19 pandemic.`}
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