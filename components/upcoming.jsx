
const Upcoming = (props) => {
    let products = [];
    const addProduct = (name, date, link, features) => {
        products.push({ name, date, link, features });
    }
    addProduct("Meta Headset", "21 December 2022", "https://about.fb.com/news/2021/10/facebook-company-is-now-meta/", "Everything")
    addProduct("Meta Headset", "21 December 2022", "https://about.fb.com/news/2021/10/facebook-company-is-now-meta/", "Everything")
    addProduct("Meta Headset", "21 December 2022", "https://about.fb.com/news/2021/10/facebook-company-is-now-meta/", "Everything")
    addProduct("Meta Headset", "21 December 2022", "https://about.fb.com/news/2021/10/facebook-company-is-now-meta/", "Everything")

    console.log(products)
    return (<div className="upcoming">
        <table className="upcoming-table">
            <thead>
                <tr className="upcoming-table-heading">
                    <th className="upcoming-table-heading-title">Name</th>
                    <th className="upcoming-table-heading-title">Release Date</th>
                    <th className="upcoming-table-heading-title">Features</th>
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