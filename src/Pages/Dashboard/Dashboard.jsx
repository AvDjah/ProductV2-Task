import CompanyLogo from '../../assets/CompanyLogo.png'
import DropDown from '../../assets/dropdown.svg'
import Wallet from '../../assets/wallet.png'
import {NavBarItems } from '../Dashboard/Components/NavBarItem'
import { Body } from './Components/Body'



const NavBar = () => {
    const navBarItems = ["Home", "Orders", "Products", "Delivery", "Marketing", "Analytics", "Payments", "Tools", "Discounts", "Audience", "Appearance", "Plugins"]

    return (
        <div className="nav" >
            <div className='nav-top' >
                <div className="nav-header" >
                    <div className="nav-header-img" >
                        <img style={{ height: "39px", width: "39px" }} src={CompanyLogo} ></img>
                    </div>
                    <div className='nav-header-text' >
                        <div className="title"  >Nishyan</div>
                        <div className="subtitle"  >Visit Store</div>
                    </div>
                    <div className='dropdown' >
                        <img src={DropDown} ></img>
                    </div>
                </div>
                <div className='nav-pages' >
                    <NavBarItems />
                </div>
            </div>
            <div className='nav-bottom' >
                <div className='nav-bottom-body' >
                    <div className='nav-bottom-logo' >
                        <img height="24px" width="24px" style={{ margin: "6px" }} src={Wallet} ></img>
                    </div>
                    <div className='nav-bottom-body-text' >
                        <div className='title' >Available Credits</div>
                        <div className='subtitle' >222.10</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Dashboard() {





    return <div className="container" >
        <NavBar />
        <div>
            <Body />
        </div>
    </div>

}