import React,{useState} from 'react'
import Menucard from './Menucard';
import MenuAPI from './MenuApi.js';
import Navbar from './Navbar'
import './style.css'

const UniqueList = [ ...new Set(MenuAPI.map((curElem) => {
    return curElem.category;
}))]
console.log(UniqueList)

function Resturant() {
    const [menuData, SetmenuData] = useState(MenuAPI)
    const filterItem = (category) => {
        const UpdateList = MenuAPI.filter((currEle) => {
            return currEle.category === category;
        })
        SetmenuData(UpdateList)
    }
    return (
        <>
            <div className="navbar">
            {
                UniqueList.map((items, index) => {
                    return  <Navbar filterItem={filterItem} category={items}/>
                })
            }
            </div>
           
            <div className="main-card--cointainer"> 
                {
                menuData.map((items) => {
                       return <Menucard name={items.name} price={items.price}/>
                    })
                }
            </div>
        </>
    )
}

export default Resturant
