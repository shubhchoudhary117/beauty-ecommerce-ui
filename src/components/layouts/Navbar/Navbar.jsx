import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { menusData, new_in } from '../../../data/MenusData/MenusData';
import { brands } from '../../../data/MenusData/MenusData';
import { men } from "../../../data/MenusData/MenusData"
import { women } from "../../../data/MenusData/MenusData"
import { kids } from '../../../data/MenusData/MenusData';
import { beauty_grooming } from '../../../data/MenusData/MenusData';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState("");
    const [activeMenuData, setActiveMenuData] = useState([]);

    // menus of navbar------------------------
    const menus = [
        { menu: 'New In', accessKey: "new_in" },
        { menu: 'Brands', accessKey: "brands" }
        , { menu: 'men', accessKey: "men" },
        , { menu: 'women', accessKey: "women" },
        { menu: 'kids', accessKey: "kids" },
        { menu: 'Beauty & Grooming', accessKey: "beauty_grooming" },
        { menu: 'Home', accessKey: "home" },
        { menu: 'Watches & Jewellery', accessKey: "watches_jewellery" },
        { menu: 'Eyewear', accessKey: "eyewear" },
        { menu: 'Eyewear', accessKey: "eyewear" },
        { menu: 'Timeless Icons', accessKey: "timeless_icons" },
        { menu: 'Featured Stores', accessKey: "featured_stores" }
    ]

    // handle mouse move event on menu
    const handleMenuMouseMove = (menu, index) => {
        setActiveMenu(menu)
        console.log(menusData[index])
        setActiveMenuData(menusData[index]);
    }




    return <>
        <header className="header_">
            <div className="parent-header_" onMouseMove={() => setActiveMenu("")}>
                <nav className="nav_">
                    <div className="left-content_">
                        <div className="nav-logo_">LUXURY</div>
                        <div className="nav-logo-divider_"></div>
                        <div className="brand-name_"><Link className='link_' to={"#"}>BOUTIQUE</Link></div>
                    </div>
                    <div className="mid-content_">
                        <div className="mid-logo_">
                            <div className="custom-logo_">
                                <div class="logo-tata">TATA</div>
                                <div class="logo-container">
                                    <div class="logo-main">
                                        <span class="logo-cliq">
                                            CL<span class="logo-cliq-i">i</span>QLUXURY
                                        </span>
                                    </div>
                                    <div class="logo-tagline">
                                        WHERE QUALITY IS NURTURED
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="right-content_">
                        <div className="actions_">
                            <Link className='action_' to={"#"}><SearchIcon className='icon_' /></Link>
                            <Link className='action_' to={"#"}><PersonOutlineOutlinedIcon className='icon_' /></Link>
                            <Link className='action_' to={"#"}><ShoppingBagOutlinedIcon className='icon_' /></Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="sub-header_" >
                <div className="sub-header-list_">
                    {menus?.map((menu, index) => {
                        return <>
                            <div onMouseMove={() => handleMenuMouseMove(menu.accessKey, index)} className="menu_" key={index}>{menu.menu}</div>
                        </>
                    })}
                </div>

                {
                    activeMenu !== "" &&
                    <div className="active-menu-menus-listing_" onMouseLeave={() => setActiveMenu("")}>
                        <div className="active-menu-menus-container_"  >
                            <div className="active-menu-menus-list_" >
                                {
                                    activeMenuData?.map((menu, _i) => {
                                        return <>
                                            <div className="active-menus-menu_">
                                                <div className="active-menu-menus-category_">{menu.title}</div>
                                                <div className="active-menu-menus_">
                                                    {
                                                        menu.menus?.map((_menu, _id) => {
                                                            return <div className="active-menu-menus-menu_">{_menu}</div>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    })}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </header>
    </>
}

export default Navbar