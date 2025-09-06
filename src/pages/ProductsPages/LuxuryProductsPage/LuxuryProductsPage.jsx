import React, { useState } from 'react'
import "./LuxuryProductsPage.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LuxuryProduct from '../../../components/ProductsCards/LuxuryProduct/LuxuryProduct';
import { luxuryProductsData } from '../../../data/productsData/luxuryProductsData/luxuryProductsData';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const LuxuryProductsPage = () => {
    const [showPopularities, setShowPopularities] = useState(false);
    const [openFilters, setOpenFilters] = useState({});
    const [appliedFilters, setAppliedFilters] = useState({});

    const popularitys = [
        { key: "New Arrivals", id: 1 },
        { key: "Discounts", id: 1 },
        { key: "Popularity", id: 1 },
        { key: "Price Low To High", id: 1 },
        { key: "Price High To Low", id: 1 }
    ]

    const filterOptions = [
        {
            category: "Department",
            id: 1,
            options: [
                { option: "Beauty and Grooming", id: 11, totalProducts: 768 }
            ]
        },
        {
            category: "Group",
            id: 2,
            options: [
                { option: "Bath, Body & Hygiene", id: 22, totalProducts: 768 }
            ]
        },
        {
            category: "Category",
            id: 3,
            options: [
                { option: "Bath & Shower", id: 33, totalProducts: 768 },
                { option: "Body Care", id: 331, totalProducts: 768 },
                { option: "Body Lotion & Oils", id: 332, totalProducts: 768 },
                { option: "Feminine Hygiene", id: 334, totalProducts: 768 },
                { option: "Hand & Foot Care", id: 335, totalProducts: 768 },
                { option: "Bath & Shower", id: 33, totalProducts: 768 },
                { option: "Body Care", id: 331, totalProducts: 768 },
                { option: "Body Lotion & Oils", id: 332, totalProducts: 768 },
                { option: "Feminine Hygiene", id: 334, totalProducts: 768 },
                { option: "Hand & Foot Care", id: 335, totalProducts: 768 }
            ]
        }
    ]

    // handle on open filter
    const handleFilterOpen = (id) => {
        setOpenFilters((prev) => {
            return { ...prev, [id]: !openFilters[id] }
        })
    }

    // show hide popularities select box
    const togglePopularities = () => {
        setShowPopularities((prev) => {
            return !prev;
        })
    }

    // toggle applied filter
    const toggleAppliedFilter = (id) => {
        setAppliedFilters((prev) => {
            return { ...prev, [id]: !appliedFilters[id] }
        })
    }
    return <>

        <section className="lx-products-page-section_">
            <div className="lx-products-page-container_">

                {/* Products page header----------------------- */}
                <div className="lx-products-page-header_">
                    <div className="lx-total-products-info_">
                        <div className="lx-total-products-title_">Luxury</div>
                        <div className="lx-total-products-value_">7316</div>
                    </div>
                </div>

                <div className="luxury-page-actions-header_">
                    <div className="lx-actions-header-container_">
                        {/* products sorting custom action button--------------- */}
                        <div className="lx-sorting-action-box_">
                            <div className="sortin-box-groups_ active">
                                <div className="lx-sorting-event-tab_"></div>
                                <div className="lx-sorting-event-tab_"></div>
                            </div>
                            <div className="sortin-box-groups_">
                                <div className="lx-sorting-event-tab_ black"></div>
                                <div className="lx-sorting-event-tab_ black"></div>
                                <div className="lx-sorting-event-tab_ black"></div>
                            </div>
                        </div>

                        {/* Select popularity select input---------------- */}
                        <div className="select-popularity-action_">
                            <div className="select-popularity-select_">
                                <div onClick={togglePopularities} className="select-popularity-label_">
                                    <ArrowBackIosIcon className='select-label-icon' />Popularity
                                </div>
                                {
                                    showPopularities &&
                                    <div className="select-options_">
                                        {popularitys?.map((popularity) => {
                                            return <>
                                                <div className="select-option_">{popularity.key}</div>
                                            </>
                                        })}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <div className="lx-products-section_">
                    <div className="lx-products-container_">
                        <div className="lx-products-filtering-section_">
                            <div className="filter-products-section_">
                                <div className="filter-products-container_">
                                    <div className="filter-options-list_">
                                        {/* Filter option--------------- */}
                                        {
                                            filterOptions?.map((option) => {
                                                return <>
                                                    <div className="filter-row_">
                                                        <div className="filter-option-row_">
                                                            <div className="filter-name_">{option.category}</div>
                                                            <div className="filter-option-action_">
                                                                {openFilters[option.id] ? <RemoveIcon onClick={() => handleFilterOpen(option.id)} className='add-icon_' /> :
                                                                    <AddIcon onClick={() => handleFilterOpen(option.id)} className='add-icon_' />
                                                                }
                                                            </div>
                                                        </div>
                                                        {
                                                            openFilters[option.id] &&
                                                            <div className="filter-options_">
                                                                {
                                                                    option?.options?.map((subOption) => {
                                                                        return <>
                                                                            <div className="filter-option_">
                                                                                <div className="filter-option-left_">
                                                                                    <div onClick={() => toggleAppliedFilter(subOption.id)} className="custom-check_">
                                                                                        {appliedFilters[subOption.id] && <div className="check-point_"></div>}

                                                                                    </div>
                                                                                    <div className="option-name_">{subOption.option}</div>
                                                                                </div>
                                                                                <div className="total-products-of-option_">{subOption.totalProducts}</div>

                                                                            </div>
                                                                        </>
                                                                    })
                                                                }
                                                            </div>
                                                        }

                                                    </div>
                                                </>
                                            })
                                        }

                                        {/* Filter option ---------------- */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lx-products-listing-section_">
                            <div className="lx-products-listing-container_">
                                {
                                    luxuryProductsData?.map((item) => {
                                        return <> <LuxuryProduct item={item} /></>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section >

    </>
}

export default LuxuryProductsPage