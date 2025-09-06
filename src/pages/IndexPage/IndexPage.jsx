import React, { useState } from 'react'
import "./IndexPage.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import main carousel images
import mc1 from "./images/main-carousel-images/image1.avif"
import mc2 from "./images/main-carousel-images/image2.jpg"


import { allAccessProducts } from '../../data/productsData/AllAccessProductsData';
import { boutiquesBannersData } from '../../data/productsData/BoutiqueBannersData';
import { BrandsWeLoveBannerData } from '../../data/productsData/BrandsWeLoveBannersData';
import { OfferBrandsProductsData } from '../../data/productsData/OfferBrandsProductsData';
import { HolidayBannersData } from '../../data/productsData/HolidayBannersData';


// Import Single banners--------------
import LuxuryOfferBanner from "./images/single-banners/luxuryOfferBanner.png"

import { BeautyProducts, PreciousDetailsData } from '../../data/productsData/PreciousDetailsData';
import BicesterCollectionBanner from "./images/single-banners/BicesterCollectionBanner.avif"
import BookHolidayBanner from "./images/single-banners/BookYourHolidayBanner.avif"
import assistedShippingBanner1 from "./images/single-banners/assistedShoppingBanner1.avif"
import assistedShippingBanner2 from "./images/single-banners/assistedShoppingBanner2.avif"
import { Link } from 'react-router-dom';
import BankOffers from '../../components/layouts/comman/BankOffers/BankOffers';
import TwoCardsGridContainer from '../../components/carousels/TwoCardsGridContainer/TwoCardsGridContainer';
import SingleCardGridContainer from '../../components/carousels/SingleCardGridContainer/SingleCardGridContainer';
const IndexPage = () => {
  const mainBanners = [{ imagePath: mc1 },
  { imagePath: mc2 }
  ]
  const [activeIndex, setActiveIndex] = useState(0);
  // Keep a reference to the Swiper instance
  const [swiperRef, setSwiperRef] = useState(null);

  return <>
    <div className="index-page_">
      <div className="index-page-container_">
        {/* main carouse----------------------------- */}
        <div className="main-page-carousel_">
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
            className="main-page-main-banner-swiper_">
            {
              mainBanners?.map((banner) => {
                return <>
                  <SwiperSlide className="main-page-main-banner-slide_">
                    <div className="main-carousel-banner_">
                      <img src={banner.imagePath} alt="Banner 1" className="main-banner-img_" />
                    </div>
                  </SwiperSlide>
                </>
              })
            }
          </Swiper>
          <div className="custom-bullets">
            {mainBanners.map((_, index) => (
              <span
                key={index}
                className={`bullet ${index === activeIndex ? "active" : ""}`}
                // Click bullet to jump to that slide
                onClick={() => swiperRef?.slideTo(index)}
              />
            ))}
          </div>
        </div>

        {/* end of main page carousel----------------- */}

        {/* offer banner------------------ */}
        <div className="single-banner-section_">
          <div className="single-banner_">
            <img src={LuxuryOfferBanner} alt="" />
          </div>
        </div>
      </div>

      {/* All Access products-------------- */}
      <div className="all-access-products-section_">
        <div className="all-access-products-container_">
          <div className="all-access-heading_">All Access</div>
          <div className="all-access-products-carousel_">
            {
              allAccessProducts.map((product) => {
                return <>
                  <div className="all-access-product_">
                    <img src={product.productImg} alt="" className='all-access-product-img_' />
                  </div>
                </>
              })
            }
          </div>
        </div>
      </div>


      <BankOffers />

      {/* end of bank offers------------------- */}

      {/* boutique banners section ----------------- */}
      {/* <div className="boutique-banners-section_">
        <div className="boutique-banners-container_">
          <div className="boutique-heading_">Boutique</div>
          <div className="boutique-banners-carousel_">
            {
              boutiquesBannersData?.map((boutique) => {
                return <>
                  <div className="boutique-banner_">
                    <Link className='boutique-link_' to={boutique.link} >
                      <img src={boutique.bannerImg} alt="" />
                    </Link>
                  </div>
                </>
              })
            }
          </div>
        </div>
      </div> */}

      <SingleCardGridContainer data={boutiquesBannersData} title={"Boutique"} />
      {/* end of boutique banners section------------- */}


      {/* Brands we love cards------------------------- */}
      <TwoCardsGridContainer data={BrandsWeLoveBannerData} title={"Brands We Love"} />

      {/* end of brands we love section ------------------ */}


      {/* new in offer section --------------------------- */}
      <div className="offer-brands-products-section_">
        <div className="offer-brands-products-container_">
          <div className="offer-brands-heading_">Brands We Love</div>
          <div className="offer-brands-products-carousel_">
            {
              OfferBrandsProductsData?.map((brand) => {
                return <>
                  <div className="offer-brands-product_">
                    <img src={brand.bannerImg} alt="" />
                  </div>
                </>
              })
            }
          </div>
        </div>
      </div>

      {/* holiday banners section ----------------- */}
      <div className="holiday-banners-section_">
        <div className="holiday-banners-container_">
          <div className="holiday-heading_"></div>
          <div className="holiday-banners-carousel_">
            {
              HolidayBannersData?.map((boutique) => {
                return <>
                  <div className="holiday-banner_">
                    <img src={boutique.bannerImg} alt="" />
                  </div>
                </>
              })
            }
          </div>
        </div>
      </div>


      <div className="banner-with-there-products-listing-section_">
        <div className="banner-with-products-listing-container_">
          <div className="banner-with-products-listing-heading_">{BeautyProducts.title}</div>
          <div className="banner-with-products-listing-banner_">
            <img src={BeautyProducts.mainBanner.bannerImg} alt="" />
          </div>
          <div className="banner-with-products-listing-products-carousel_">
            {
              BeautyProducts.products?.map((product) => {
                return <>
                  <div className="banner-with-product-listing-product_">
                    <img src={product.productImg} alt="" />
                  </div>
                </>
              })
            }
          </div>
        </div>
      </div>

      {/* precious details data----------------- */}
      <div className="banner-with-there-products-listing-section_">
        <div className="banner-with-products-listing-container_">
          <div className="banner-with-products-listing-heading_">{PreciousDetailsData.title}</div>
          <div className="banner-with-products-listing-banner_">
            <img src={PreciousDetailsData.mainBanner.bannerImg} alt="" />
          </div>
          <div className="banner-with-products-listing-products-carousel_">
            {
              PreciousDetailsData.products?.map((product) => {
                return <>
                  <div className="banner-with-product-listing-product_">
                    <img src={product.productImg} alt="" />
                  </div>
                </>
              })
            }
          </div>
        </div>
      </div>






      {/* single banner ------------------ */}
      <div className="single-banner-section_">
        <div className="single-banner_  bicester-collection-banners">
          <img src={BicesterCollectionBanner} alt="" />
        </div>
      </div>



      {/* single banner ------------------ */}
      <div className="single-banner-section_ ">
        <div className="single-banner_  book-holiday-banner">
          <img src={BookHolidayBanner} alt="" />
        </div>
      </div>



      {/* Assisted shoping sectiom ----------------- */}
      <div className="assisted-shopping-section_">
        <div className="assisted-shopping-container_">
          <div className="assisted-shopping-heading_">Assisted Shopping</div>
          <div className="assisted-shopping-banner_">
            <img src={assistedShippingBanner1} alt="" />
          </div>
          <div className="assisted-shopping-banner_">
            <img src={assistedShippingBanner2} alt="" />
          </div>
        </div>
      </div>



    </div>

  </>
}

export default IndexPage