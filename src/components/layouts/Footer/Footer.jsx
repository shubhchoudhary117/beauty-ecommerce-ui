import React from 'react'
import "./Footer.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
// import assest of benifits of tata cliq
import { ReactComponent as AuthenticImage } from "./images/benifits-images/authentication.svg"
import { ReactComponent as PromiseImage } from "./images/benifits-images/promise.svg"
import { ReactComponent as ReturnImage } from "./images/benifits-images/return.svg"
import Android from "./images/app-type-images/Android.png"
import Ios from "./images/app-type-images/Ios.png"
import { footerLinks } from '../../../data/FooterData/FooterLinks';
const Footer = () => {
    return <>

        <footer className="footer-section_">
            <div className="footer-header_">
                <div className="footer-container_">
                    <div className="footer-header-container_">
                        <div className="header-left_">
                            <div className="connect-with-us-content_">
                                <div className="connect-us-heading_">Connect With Us</div>
                                <div className="connect-us-message_">Be the first to know about new products, exclusive collections, latest trends, stories and more.</div>
                                <div className="subscribe-form-group_">
                                    <input type="text" placeholder='Enter your email address' />
                                    <button className="subscribe-btn_">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="header-mid_"></div>
                        <div className="header-right_">
                            <div className="benifits-cards_">
                                <div className="benifit-card_">
                                    <AuthenticImage className="benifit-icon" />
                                    <div className="benifit-title_">Authentic and Genuine Brands</div>
                                </div>
                                <div className="benifit-card_">
                                    <PromiseImage className="benifit-icon" />
                                    <div className="benifit-title_">Tata Promise</div>
                                </div>
                                <div className="benifit-card_">
                                    <ReturnImage className="benifit-icon" />
                                    <div className="benifit-title_">Easy Returns And Exchanges</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom_">
                <div className="footer-bottom-container_">
                    <div className="footer-links-container_">
                        {
                            footerLinks?.map((link) => {
                                return <>
                                    <div className="footer-links-column_">
                                        <div className="footer-link-category_">{link.title}</div>
                                        <div className="footer-links-list_">
                                            {
                                                link.menus?.map((menu) => {
                                                    return <div className="footer-link_">{menu }</div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </>
                            })
                        }

                        {/* App Types links----------------------- */}
                        <div className="footer-links-column_">
                            <div className="footer-link-category_">Downloads</div>
                            <div className="footer-links-list_">
                                <div className="footer-link_ img">
                                    <img src={Android} alt="" />
                                </div>
                                <div className="footer-link_ img">
                                    <img src={Ios} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* social links-------------------- */}
                        <div className="footer-links-column_">
                            <div className="footer-link-category_">Follow Us</div>
                            <div className="footer-links-list_">
                                <div className="footer-link_ social-list_">
                                    <FacebookOutlinedIcon className='social-icon' />
                                    <YouTubeIcon className='social-icon' />
                                    <TwitterIcon className='social-icon' />
                                    <InstagramIcon className='social-icon' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    </>
}

export default Footer