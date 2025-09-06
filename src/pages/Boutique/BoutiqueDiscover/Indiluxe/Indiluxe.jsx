import React, { useState } from 'react'
import "./Indiluxe.scss"
import { indiluxeBannersWiperData } from './data/indiluxeBannersSwiperData'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { indiluxeAllAccessProducts } from './data/indiluxeAllAccessProducts';
import BankOffers from '../../../../components/layouts/comman/BankOffers/BankOffers';
import { offerBrandsData } from './data/offerBrandsData';
import TwoCardsGridContainer from '../../../../components/carousels/TwoCardsGridContainer/TwoCardsGridContainer';
import SingleCardGridContainer from '../../../../components/carousels/SingleCardGridContainer/SingleCardGridContainer';
import { curatedForYouProductsData } from './data/curatedForYouProducts';
import { moreExploreProductsData } from './data/moreExploreProductsData';
import CircularProgramesBanner from "./imgs/single-banners/CircularProgramesBanner.avif"
const Indiluxe = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    // Keep a reference to the Swiper instance
    const [swiperRef, setSwiperRef] = useState(null);

    return <>
        <section className="indiluxe-section_">
            <div className="indiluxe-section-container_">
                {/* main carouse----------------------------- */}
                <div className="indiluxe-page-main-carousel_">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        onSwiper={(swiper) => setSwiperRef(swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={false}
                        navigation={false}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="indiluxe-main-banner-swiper_">
                        {
                            indiluxeBannersWiperData?.map((banner) => {
                                return <>
                                    <SwiperSlide className="main-page-main-banner-slide_">
                                        <div className="indiluxe-main-carousel-banner_">
                                            <img src={banner.banner} alt="Banner 1" className="indiluxe-main-banner-img_" />
                                        </div>
                                    </SwiperSlide>
                                </>
                            })
                        }
                    </Swiper>
                    <div className="custom-bullets">
                        {indiluxeBannersWiperData.map((_, index) => (
                            <span
                                key={index}
                                className={`bullet ${index === activeIndex ? "active" : ""}`}
                                // Click bullet to jump to that slide
                                onClick={() => swiperRef?.slideTo(index)}
                            />
                        ))}
                    </div>
                </div>
                {/* end of indiluxe  page carousel----------------- */}


                {/* All Access products-------------- */}
                <div className="all-access-indiluxe-products-section_ ">
                    <div className="all-access-indiluxe-products-container_">
                        <div className="all-access-indiluxe-heading_">All Access</div>
                        <div className="all-access-indiluxe-products-carousel_">
                            {
                                indiluxeAllAccessProducts.map((product) => {
                                    return <>
                                        <div className="all-access-indiluxe-product_">
                                            <img src={product.productImage} alt="" className='all-access-indiluxe-product-img_' />
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* banks offers----------- */}
                <div className="indiluxe-banks-offers_">
                    <BankOffers />
                </div>

                {/* brands in offer section ---------- */}
                <div className="brands-on-offer-section_">
                    <TwoCardsGridContainer data={offerBrandsData} title={"Brands On Offer"} />
                </div>


                <div className="curated-for-you_">
                    <SingleCardGridContainer data={curatedForYouProductsData} title={"Curated For You"} />
                </div>

                {/* More to explore section --------------------- */}
                <div className="more-to-explore-section_">
                    <div className="more-to-explore-container_">
                        <div className="more-to-explore-heading_">More To Explore</div>
                        <div className="more-to-explore-products-carousel_">
                            {
                                moreExploreProductsData?.map((product) => {
                                    return <>
                                        <div className="more-to-explore-product_">
                                            <img src={product.product} className='more-to-explore-product-img_' alt="" />
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>


                {/* Single banner section -------------- */}

                <div className="single-banner-section_">
                    <img src={CircularProgramesBanner} className="single-banner-img_" alt="" />
                </div>



            </div>
        </section>

    </>
}

export default Indiluxe