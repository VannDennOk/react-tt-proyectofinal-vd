import React from 'react'
import crueltyFree from '../assets/crueltyFree.png'
import libreAzucar from '../assets/libreAzucar.png'
import libreGluten from '../assets/libreGluten.png'
import vegano from '../assets/vegano.png'
import './styles/BannerBottom.css'

const BannerBottom = () => {
    return (
        <div className='container_banner'>
            <div className='banner_box'>
                <img className='banner_img' src={crueltyFree} alt='cruelty free' />
                <div className='banner_txt-box'>
                    <p className='banner_txt'>CRUELTY</p>
                    <p className='banner_txt-strong'>FREE</p>
                </div>
            </div>
            <div className='banner_box'>
                <img className='banner_img' src={vegano} alt='vegano' />
                <div className='banner_txt-box'>
                    <p className='banner_txt'>APTO</p>
                    <p className='banner_txt-strong'>VEGANO</p>
                </div>
            </div>
            <div className='banner_box'>
                <img className='banner_img' src={libreGluten} alt='libre de gluten' />
                <div className='banner_txt-box'>
                    <p className='banner_txt'>LIBRE DE</p>
                    <p className='banner_txt-strong'>GLUTEN</p>
                </div>
            </div>
            <div className='banner_box'>
                <img className='banner_img' src={libreAzucar} alt='libre de azucar' />
                <div className='banner_txt-box'>
                    <p className='banner_txt'>LIBRE DE</p>
                    <p className='banner_txt-strong'>AZÚCAR</p>
                </div>
            </div>
        </div>
    )
}

export default BannerBottom
