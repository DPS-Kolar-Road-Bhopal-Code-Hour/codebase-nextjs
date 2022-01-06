import Modal from './modal';
import React from 'react';
const Home = (props) => {
    const [state, setState] = React.useState(null);
    const cards = [{
        title: "Gaming",
        description: "The metaverse can be defined as a unified and interoperable VR space where users can interact with each other and the digital world around them through advanced human-computer interaction (HCI) hardware and software. This takes VR gaming to incredible new heights.",
        link: "https://www.xrtoday.com/virtual-reality/gaming-in-the-metaverse-the-next-frontier/",
        articleTitle: "Gaming in the Metaverse: The Next Frontier?",
        articleContent: `Gaming has always been a prime candidate for virtual reality (VR). Even early immersive games in 2D like Minecraft and Second Life incorporated elements of the now-WIP metaverse – such as 3D avatars, world-building, and observation as gameplay.

        Now, as companies like Meta and Epic Games attempt to build a connected universe of virtual realities, gaming has a new home.
        
        In a recent survey, 59% of industry experts said that gaming will dominate VR investments for the next few years. 64% also said that gaming has the highest potential to benefit from VR, among all other use cases.
        
        Let us explore what gaming could look like in the metaverse, how soon you could get started, and some of the potential pitfalls to avoid. The metaverse can be defined as a unified and interoperable VR space where users can interact with each other and the digital world around them through advanced human-computer interaction (HCI) hardware and software.
        
        This takes VR gaming to incredible new heights.
        
        Currently, VR gameplay is available as standalone applications that you can install on your desktop, VR gear, or mobile phones to engage in an immersive rendition of traditional video games.
        
        The main difference is that the in-game universe now appears as a three-dimensional VR world that you can view in 360-degrees and almost “touch” through a realistic sense of perception.
        
        The metaverse (first coined in the 1992 science fiction novel, Snow Crash) expands this concept further. It posits that you could connect multiple VR games – and, indeed, any VR application or space – to create a single interoperable environment for users.
        
        They would be able to navigate in and out of gaming applications, interact with the same players in multiple spaces, and even port their wins without having to take off the VR headset.`
    }, {
        title: "Workspace",
        description: "With AR and MR technology, and the right smart glasses, we can transform the way we work and socialize on a fundamental scale. Video conversations will be replaced with the option to sit next to an avatar or hologram of the person you want to meet.",
        link: "https://www.xrtoday.com/mixed-reality/the-metaverse-workplace-get-ready-for-virtual-work/",
        articleTitle: "The Metaverse Workplace: Get Ready for Virtual Work",
        articleContent: `In this new age where “remote” and hybrid work ideas are becoming increasingly compelling, the metaverse represents a new age for truly hybrid interactions. With AR and MR technology, and the right smart glasses, we can transform the way we work and socialize on a fundamental scale. Video conversations will be replaced with the option to sit next to an avatar or hologram of the person you want to meet. Google Maps will guide you down the street with real-time arrows to your destination.

        Being able to slip on a pair of glasses and enter a new world isn’t just an exciting concept for entertainment and gaming purposes; it’s the first step towards a new future for productivity and collaboration too.`
    }, {
        title: "Tourism",
        link: "https://bernardmarr.com/extended-reality-in-tourism-4-ways-vr-and-ar-can-enhance-the-travel-experience/",
        description: "As the industry looks to the future, one of its biggest concerns will be how to improve the whole travel experience and reduce some of the “pain points” that come with travel. I believe VR and AR could help with this. ",
        articleTitle: "Extended Reality In Tourism: 4 Ways VR And AR Can Enhance The Travel Experience",
        articleContent: `VR allows us to explore new places without physically traveling there, leading some to speculate whether virtual travel could ever replace the real thing. Personally, I don’t think it will. Virtual travel could never compete with the sights, sounds, smells and sensations of being in an exciting new place. But there’s certainly value in being able to explore parts of the world virtually – not least because we can check out destinations before we decide whether to travel there in real life.
        Virtual travel can also help visitors experience destinations that are remote, difficult to get to, or need to be preserved without humans trampling around all over the place. The Patagonia VR experience on Oculus Rift is one example of a particularly rich virtual travel experience. Exploring the mountain landmark of Monte Fitzroy, and specifically Laguna Sucia, the remote glacial lake that lies at the foot of the mountain, this VR experience gives users access to a stunning glacial lake that’s hard to reach in real life.
        Thanks to virtual tours, holidaymakers can check out hotels in more detail before they book – kind of like a “try before you buy” (or “fly” as the case may be). Several upscale resorts are now embracing virtual tours as a way to show off their stunning locations and world-class amenities, including a number of resorts in The Maldives. Importantly, many of these tours can be experienced using just a smartphone, tablet, or computer, meaning you don’t need a headset to explore your next holiday destination.

In one example, Atlantis, the Palm in Dubai – situated on The Palm Jumeirah, the famous manmade palm-shaped archipelago – has created a stunning 360 panoramic VR video. The video provides a whistle-stop tour of the hotel’s key features, taking in the impressive lobby, the Royal Bridge (the biggest suite in the hotel), one of the underwater suites (yes, underwater), the famous Nobu restaurant, the aquarium, pool, and waterpark, and finishing with a nighttime stroll around the gardens.
        `
    }]
    const handleClose = () => {
        setState(null);
    }
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
                        <div onClick={() => setState(index)} className="index-explore-container-link-back-link" href={card.link}><span>EXPLORE</span></div>
                    </div>
                    <Modal handleClose={handleClose} title={card.articleTitle} index={index + 1} content={card.articleContent} link={card.link} state={state === index} />

                </div>)}

            </div>
        </div>
    </div>)
}

export default Home