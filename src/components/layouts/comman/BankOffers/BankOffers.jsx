import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./BankOffers.scss"
import { bankOffersData } from './data/BankOffersData';

// import bank offers cards


const BankOffers = () => {
    return <>

        {/* bank offers banners_--------------------- */}
        <div className="bank-offers-section_">
            <div className="bank-offers-section-container_">
                <div className="bank-offer-heading_">Bank Offers</div>
                <div className="bank-offers-banners-carousel_">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={2}
                        pagination={false}
                        navigation={true}
                        id='bank-offer-swiper'
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        className="bank-offers-swiper_">
                        {
                            bankOffersData?.map((bank) => {
                                return <>
                                    <SwiperSlide className="bank-offer-swiper-slide_">
                                        <div className="bank-offer-banner_">
                                            <img src={bank.bankLogo} alt="" />
                                        </div>
                                    </SwiperSlide>
                                </>
                            })
                        }

                    </Swiper>

                </div>
            </div>
        </div>

    </>
}

export default BankOffers