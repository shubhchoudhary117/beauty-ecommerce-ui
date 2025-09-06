import React from 'react'
import "./TwoCardsGridContainer.scss"
const TwoCardsGridContainer = ({ title, data }) => {
    return <>
        <div className="tow-grid-container-section_">
            <div className="tow-grid-container-banners-container_">
                <div className="tow-grid-container-heading_">{title}</div>
                <div className="tow-grid-container-banners-carousel_">
                    {
                        data?.map((brand) => {
                            return <>
                                <div className="tow-grid-container-banner_">
                                    <img src={brand.bannerImg} alt="" />
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </div>


    </>
}

export default TwoCardsGridContainer