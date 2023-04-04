import React, { useState } from 'react'
import Link from 'next/link';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

import Image from 'next/image';
import Logo from '@/public/logos/logo_black.svg'
import displayImg1 from '@/public/catalogueCarousel imgs/display_img1.png'
import displayImg2 from '@/public/catalogueCarousel imgs/display_img2.png'
import displayImg3 from '@/public/catalogueCarousel imgs/display_img3.png'
import pairImg1 from '@/public/catalogueCarousel imgs/img1.png'
import pairImg2 from '@/public/catalogueCarousel imgs/img2.png'
import pairImg3 from '@/public/catalogueCarousel imgs/img3.png'

export default function CatalogueCarousel() {
    const slideData = [{ img: displayImg1, pairImg: pairImg1 }, { img: displayImg2, pairImg: pairImg2 }, { img: displayImg3, pairImg: pairImg3 }, { img: displayImg1, pairImg: pairImg1 }, { img: displayImg2, pairImg: pairImg2 }]

    const onPGMounted = () => {
        let pagination = document.querySelector('.splide__pagination')
        if (window.matchMedia('(min-width: 1000px)').matches) {
            pagination.style.left = `calc(25% - ((${slideData.length * 0.9 * 2}rem + ${slideData.length * 2}px) / 2))`
        }
        else {
            pagination.style.left = `50%`
            pagination.style.transform = `translateX(-50%)`
        }
        let pageItems = document.querySelectorAll('.splide__pagination__page')
        pageItems.forEach((item) => {
            item.style.width = '2px'
            item.style.height = '10px'
            item.style.borderRadius = '0'
            item.style.background = 'gray'
            item.style.margin = '0.9rem'
            item.style.transition = 'all 0.4s'
        })
    }

    return (
        <Splide onPaginationMounted={onPGMounted} className="catalogue_carousel w-screen h-screen relative transition-all duration-1000" hasTrack={false}
            options={{
                type: 'loop',
                fixedWidth: '100vw',
                fixedHeight: '100vh',
                speed: 700,
                gap: '0.5rem',
                arrows: false,
                autoplay: true,
                padding: '0',
                waitForTransition: true,
                interval: 3200,
                drag: false,
                pauseOnHover: false,
                pauseOnFocus: false,
            }}>
            <SplideTrack className='w-full h-full transition-all duration-1000 ease-linear' >
                {slideData.map((pair, index) => {
                    return <SplideSlide key={index} className="w-full h-full p-10">
                        <Link href='/products/Carousel Item' className="flex justify-center items-center w-full h-full bg-white">
                            <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
                                <Image src={pair.pairImg} className='w-[65%] md:w-1/2 lg:w-2/5 z-10' />
                            </div>
                            <div className="absolute top-0 left-0 z-[5] opacity-10 lg:opacity-100 lg:static pointer-events-none lg:pointer-events-auto w-full lg:w-1/2 h-full">
                                <Image className='h-full object-cover' src={pair.img} alt="Urban images" />
                            </div>
                        </Link>
                        <Link href="/products/New Item" className="hidden lg:block absolute z-20 left-1/2 bottom-10 -translate-x-1/2 font_gotham_medium tracking-[1.5em] hover:tracking-[2.5em] transition-all duration-500 text-xs md:text-base" >SHOP</Link>
                    </SplideSlide>
                })}
            </SplideTrack>

            <Image src={Logo} className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[9%]" />
        </Splide>
    )
}