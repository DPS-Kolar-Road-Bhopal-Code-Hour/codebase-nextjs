import React from 'react';
let date = (new Date("2022/02/01")).getTime();
let a = new Date(Math.abs(date - new Date().getTime()));
let initial = [a.getDate().toString().length == 1 ? "0" + a.getDate().toString() : a.getDate(), a.getHours().toString().length === 1 ? "0" + a.getHours().toString() : a.getHours(), a.getMinutes().toString().length == 1 ? "0" + a.getMinutes().toString() : a.getMinutes(), a.getSeconds().toString().length === 1 ? "0" + a.getSeconds().toString() : a.getSeconds()]
const Countdown = (props) => {
    const [state, setState] = React.useState(initial);

    React.useEffect(() => {
        setInterval(() => {
            let a = new Date(Math.abs(date - new Date().getTime()));
            setState(state => ([a.getDate().toString().length == 1 ? "0" + a.getDate().toString() : a.getDate(), a.getHours().toString().length === 1 ? "0" + a.getHours().toString() : a.getHours(), a.getMinutes().toString().length == 1 ? "0" + a.getMinutes().toString() : a.getMinutes(), a.getSeconds().toString().length === 1 ? "0" + a.getSeconds().toString() : a.getSeconds()]))
        }, 1000)
    }, [])
    console.log(state)
    return (
        <div className="countdown">
            <div className="countdown-container">
                <p className="countdown-container-title">A Countdown till the next ARAP Conference</p>
                <div className="countdown-container-timer">
                    <span>{state[0]}</span>:<span>{state[1]}</span>:<span>{state[2]}</span>:<span>{state[3]}</span>
                </div>
            </div>
        </div>)
}
export default Countdown;