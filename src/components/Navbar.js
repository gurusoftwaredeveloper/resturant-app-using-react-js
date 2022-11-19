import React from 'react'

function Navbar({filterItem, category}) {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn btn-group__item" onClick={()=>filterItem(category)}> {category} </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
