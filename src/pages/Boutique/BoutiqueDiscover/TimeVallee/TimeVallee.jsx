import React from 'react'
import "./TimeVallee.scss"
import bannerImage from "./banners/timevalleeBanner.avif";
import { bestsellersData, maisonsData, timevalleeData } from './data/TimeValleeData';
import { Link } from "react-router-dom"
const TimeVallee = () => {
    return <>

        <section className="timevallee-brand-products-section_">
            <div className="timevallee-brands-products-section-container_">
                {/* Main banner ---------------- */}
                <div className="timevallee-brands-main-banner-carousel_">
                    <div
                        className="timevallee-brand-banner_"
                        style={{
                            backgroundImage: `url(${bannerImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </div>

                {/* maisons products-------------------- */}
                <div className="explore-maisons-section_">
                    <div className="explore-maisons-section-container_">
                        <div className="explore-maisons-heading_">
                            <img className='explore-maisons-heading-img_' src={maisonsData.timevalleeHeadingImage} alt="" />
                        </div>
                        <div className="explore-maisons-products-carousel_">
                            {
                                maisonsData.products.map((product) => {
                                    return <>
                                        <div className="explore-maisons-product_">
                                            <Link to={product.link}>
                                                <img src={product.productImg} className='explore-maisons-product-img_' alt="" />
                                            </Link>
                                        </div>
                                    </>
                                })
                            }

                        </div>
                    </div>
                </div>



                <div className="best-sellers-section_">
                    <div className="best-sellers-section-container_">
                        <div className="best-sellers-section-heading_">
                            <img className='best-sellers-section-heading-img_' src={bestsellersData.timevalleeHeadingImage} alt="" />
                        </div>
                        <div className="best-sellers-products-carousel_">
                            {
                                bestsellersData.products.map((product) => {
                                    return <>
                                        <div className="bets-seller-product_">
                                            <img src={product.productImg} className='best-seller-product-img_' alt="" />
                                            <div className="product-content_">
                                                <div className="product-title_">By Cartier</div>
                                                <div className="product-details-text_">The first modern wristwatch with a squared design, the Santos de Cartier is the watch of the bold</div>
                                                <button className="discover-btn_">Discover</button>
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>


            </div>
        </section>

    </>
}

export default TimeVallee