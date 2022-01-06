const Modal = (props) => {
    return (<div style={{ transition: 'all 0.2s' }} className={`modal modal-${props.state} modal-${props.index}`}>
        <div onClick={props.handleClose} className={`modal-close-${props.state}`}>

        </div>
        <div className="modal-outer">
            <div style={{ position: 'relative' }} className={"modal-container"}>
                <div className="modal-header">

                    <h2 className="modal-heading">
                        {props.title}
                    </h2>
                    <div onClick={props.handleClose} className={`modal-close-icon`}>
                        X
                    </div>
                </div>
                <p className="modal-content">
                    {props.content}
                </p>
                <a target="_blank" className="modal-link" href={props.link} rel="noreferrer"><span>Continue Reading</span></a>
            </div>
        </div>
    </div >)
}

export default Modal;