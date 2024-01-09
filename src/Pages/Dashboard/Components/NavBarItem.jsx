import HomeLogo from '../../../assets/PageLogos/Navbar/Home.png';
import OrdersLogo from '../../../assets/PageLogos/Navbar/Orders.png';
import ProductsLogo from '../../../assets/PageLogos/Navbar/Products.png';
import DeliveryLogo from '../../../assets/PageLogos/Navbar/Delivery.png';
import MarketingLogo from '../../../assets/PageLogos/Navbar/Marketing.png';
import AnalyticsLogo from '../../../assets/PageLogos/Navbar/Home.png';
import PaymentsLogo from '../../../assets/PageLogos/Navbar/Payments.png';
import ToolsLogo from '../../../assets/PageLogos/Navbar/Tools.png';
import DiscountsLogo from '../../../assets/PageLogos/Navbar/Discounts.png';
import AudienceLogo from '../../../assets/PageLogos/Navbar/Audience.png';
import AppearanceLogo from '../../../assets/PageLogos/Navbar/Appearance.png';
import PluginsLogo from '../../../assets/PageLogos/Navbar/Plugins.png';


const navBarItems = ["Home", "Orders", "Products",
    "Delivery", "Marketing", "Analytics", "Payments",
    "Tools", "Discounts", "Audience", "Appearance", "Plugins"]

export function NavBarItem(props) {
    const name = props.name;
    const logo = props.image;
    return (
        <div className='item'  >
            <div className='nav-item-img' >
                <img style={{
            height: name === "Products" ? "20px" : "16px", width: name === "Products" ? "20px" : "16px"

        }} src={logo} ></img>
            </div>
            <div className='nav-item-body'>
                {name}

            </div>
        </div>)

}


export function NavBarItems(props) {


    const navBarItems = [
        { Name: "Home", Img: HomeLogo },
        { Name: "Orders", Img: OrdersLogo },
        { Name: "Products", Img: ProductsLogo },
        { Name: "Delivery", Img: DeliveryLogo },
        { Name: "Marketing", Img: MarketingLogo },
        { Name: "Analytics", Img: AnalyticsLogo },
        { Name: "Payments", Img: PaymentsLogo },
        { Name: "Tools", Img: ToolsLogo },
        { Name: "Discounts", Img: DiscountsLogo },
        { Name: "Audience", Img: AudienceLogo },
        { Name: "Appearance", Img: AppearanceLogo },
        { Name: "Plugins", Img: PluginsLogo }
    ];



    return <>{navBarItems.map((item, index) => {

        return <span key={index} ><NavBarItem name={item.Name} image={item.Img} /></span>
    })}</>
}


