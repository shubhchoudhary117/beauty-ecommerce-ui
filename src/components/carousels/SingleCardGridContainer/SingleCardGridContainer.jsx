import React from 'react'
import "./SingleCardGridContainer.scss"
import { Link } from 'react-router-dom'
const SingleCardGridContainer = ({ title, data }) => {
    return <>

        {/* single-card banners section ----------------- */}
        <div className="single-card-grid-section_">
            <div className="single-card-grid-container_">
                <div className="single-card-grid-heading_">{title}</div>
                <div className="single-card-grid-carousel_">
                    {
                        data?.map((item) => {
                            return <>
                                <div className="single-card-grid-banner_">
                                    <Link className='single-card-grid-banner-link_' to={item.link} >
                                        <img src={item.bannerImg} alt="" />
                                    </Link>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </div>

    </>
}

export default SingleCardGridContainer