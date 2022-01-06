
const Upcoming = (props) => {
    let products = [];
    const addProduct = (name, date, link, features) => {
        products.push({ name, date, link, features });
    }
    addProduct("Oculus Quest Pro", "April 2022", "https://www.laptopmag.com/news/oculus-quest-pro-with-mini-led-displays-to-release-in-q2-2022-leak-claims#:~:text=Meta's%20rumored%20Oculus%20Quest%20Pro,capabilities%20and%20a%20design%20overhaul.", "Face and Eye Tracking, Improved Lenses, better processors than previous models")
    addProduct("Apple AR/VR Headset", "Q4 2022 or Q1 2023", "https://www.tomsguide.com/news/heres-how-the-apple-arvr-headset-could-actually-be-comfortable-to-wear", "AMOLED Displays, Peripheral Vison, Developer/Professional Oriented ")
    addProduct("Apple Glasses", "Late 2023", "https://www.tomsguide.com/news/apple-glasses", "A projection-based system that beams images directly into the user's eye, ring like controller, etc")
    addProduct("Sony PlayStation VR2", "Late 2022", "https://www.cnbc.com/2022/01/05/sony-teases-new-playstation-vr2-virtual-reality-headset.html", "4K OLED Display, Tactile Vibrations and eye tracking features")

    console.log(products)
    return (<div className="upcoming">
        <table className="upcoming-table">
            <thead>
                <tr className="upcoming-table-heading">
                    <th className="upcoming-table-heading-title">Name</th>
                    <th className="upcoming-table-heading-title"> Expected Release Date</th>
                    <th className="upcoming-table-heading-title">Rumored Features</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, key) => {
                    return (
                        <tr key={key} className="upcoming-table-row" onClick={() => {
                            window.open(product.link);
                        }}>
                            <td className="upcoming-table-row-cell">{product.name}</td>
                            <td className="upcoming-table-row-cell">{product.date}</td>
                            <td className="upcoming-table-row-cell">{product.features}</td>
                        </tr>
                    )

                })}
            </tbody>

        </table>
    </div>)
}

export default Upcoming;