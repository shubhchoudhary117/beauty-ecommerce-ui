import React from 'react'
import "./LuxuryProduct.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const LuxuryProduct = ({item}) => {
    return <>

        <div className="luxury-product_">
            <div className="offer-marker_">{item.onOfferInfo}</div>
            <div className="favorite-action_"><FavoriteBorderIcon className='favorite-icon_'/></div>
            <div className="luxury-product-body_">
                <div className="luxury-product-image_">
                    <img className='luxury-product-img_' src={item.image} alt="" />
                </div>
                <div className="luxury-product-details_">
                    <div className="luxury-product-name_">{item.name}</div>
                    <div className="luxury-product-info_">{item.info}</div>
                    <div className="product-pricing_">
                        <div className="salling-price_"> {item.sellingPrice}</div>
                        <div className="orignal-price_">{item.orignalPrice?item.orignalPrice:""} </div>
                        <div className='percent-off'> {item.percentOff?item.percentOff:""}</div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default LuxuryProduct