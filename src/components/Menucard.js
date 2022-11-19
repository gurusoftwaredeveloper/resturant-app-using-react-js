import React from 'react'
function Menucard({ name, price }) {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                <span className="card-number card-circle subtil"> 1 </span>
                <span className="card-author subtil">I AM </span>
                <h3 className="card-title">
                    {name}
                </h3>
                <span className="card-description subtil">
                    Three things are mandatory & that are 
                    import React from "react"
                    any one function (functional Component)
                    It should always return JSX.
                </span>
                <div className="card-read">
                    Read
                </div>
                <span className="card-tag subtil"> 
                    Order Now
                </span>
                </div>
            </div>
        </div>
    )
}

export default Menucard
