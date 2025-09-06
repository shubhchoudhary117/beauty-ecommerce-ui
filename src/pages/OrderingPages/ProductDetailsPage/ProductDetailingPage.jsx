import React, { useState } from 'react'
import "./ProductDetailingPage.scss"
import {Link} from "react-router-dom"
const ProductDetailingPage = () => {
  const [PagesLinks,setPagesLinks]=useState([
    {name:"Luxury",path:""},
    {name:"Beauty & Grooming",path:""},
    {name:"Fragrances and Perfumes",path:""},
    {name:"Fragrances",path:""},
    {name:"Perfumes",path:""}
  ])
  return <>
    <section className="product-detailing-page_">
      <div className="product-detailing-page-container_">
        <div className="pd-product-images-section_">

        </div>
        <div className="pd-product-details-section_">
            <div className="pd-product-details-section-container_">
              <div className="pd-product-details-section-header_">
                <div className="pd-other-pages-links_">
                  {
                    PagesLinks?.map((link)=>{
                      return <> <Link className='pd-other-page-link_' to={link.path} >{link.name}</Link></>
                    })
                  }
                 
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </>
}

export default ProductDetailingPage