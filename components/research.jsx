import React from 'react';
const Research = () => {
    const [value, setValue] = React.useState("");
    let links = [{ name: "Workspace", link: "https://www.xrtoday.com/mixed-reality/the-metaverse-workplace-get-ready-for-virtual-work/" },
    { name: "gaming", link: "https://www.xrtoday.com/virtual-reality/gaming-in-the-metaverse-the-next-frontier/" },
    { name: "Tourism", link: "https://bernardmarr.com/extended-reality-in-tourism-4-ways-vr-and-ar-can-enhance-the-travel-experience/" },
    { name: "Meta", link: "https://about.facebook.com/meta/" }, { name: "Meta Competition", link: "https://www.benzinga.com/analyst-ratings/analyst-color/22/01/24853626/apple-vs-facebook-how-the-race-for-the-metaverse-space-is-shaping-up" }]

    return (
        <div className="research">
            <div className="research-helper">
                <div className="research-helper-left">
                    <h2 className="research-helper-left-title">
                        Citations
                    </h2>
                    <div className="research-helper-left-links">
                        {links.map((a, key) => {
                            return (<a target="_blank" className="research-helper-left-links-each" key={key} href={a.link} rel="noreferrer">{a.name}</a>)
                        })}
                    </div>
                </div>
                <div className="research-helper-right">
                    <h2 className="research-helper-right-title">
                        Research Helper
                    </h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        window.open(`https://www.google.com/search?q=Meta AR VR ${value}`)
                    }}>
                        <input placeholder='Search...' value={value} onChange={(e) => setValue(e.target.value)} className="research-helper-right-input"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Research;