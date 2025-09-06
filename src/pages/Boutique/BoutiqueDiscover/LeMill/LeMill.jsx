import React from 'react'
import "./LeMill.scss"
import SingleCardGridContainer from "../../../../components/carousels/SingleCardGridContainer/SingleCardGridContainer"
// import assets
import MainBanner from "./imgs/main-banners/banner1.avif"
import { PopularCategoriesProducts } from './data/PopularCategoriesProducts'
import AboutBrandBanner from "./imgs/single-banners/AboutBrandBanner.png"

const LeMill = () => {
    return <>
        <section className="le-mill-section_">
            <div className="le-mill-section-container_">
                {/* Top main banner------------------- */}
                <div className="le-mill-section-top-main-swiper_">
                    <div className="le-mill-section-top-main-swiper-banner_">
                        <img className="le-mill-section-top-main-swiper-img_" src={MainBanner} alt="" />
                    </div>
                </div>
                {/* Single card swiper-------------- */}
                <div className="popular-categories-section_">
                    <SingleCardGridContainer data={PopularCategoriesProducts} title={"Popular Categories"} />
                </div>

                <div className="about-brand-section_">
                    <div className="about-brand-container_">
                        <div className="about-brand-heading_">About Brand</div>
                        <div className="about-brand-content_">
                            <div className="about-brand-img_">
                                <img className="about-brand-banner_" src={AboutBrandBanner} alt="" />
                            </div>

                            <div className="about-brand-text-box_">
                                <div className="lemill-about-text_">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla officia consectetur nostrum at dolor est, voluptas placeat numquam iste beatae!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellendus! Qui perspiciatis explicabo laborum, aliquam ut, iste debitis quod, praesentium quibusdam eligendi corporis repellendus. Illum consequatur facilis molestiae placeat, eum saepe nobis ex asperiores inventore est obcaecati doloribus accusamus commodi voluptatem odio rem possimus quibusdam! Unde fugit perspiciatis rem ad?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default LeMill