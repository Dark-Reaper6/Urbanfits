import React, { useEffect } from "react";
// images imports
import Image from "next/image";
import image1 from "../../public/carousel2 imgs/img1.png";
export default function HomeCarousel2() {
    useEffect(() => {
        const script = document.createElement("script");
        script.innerHTML = `
    $('.hero-slider').slick({
      dots: true,
      arrows:false,
      infinite: true,
      rtl: true,
      speed: 700,
      centerMode: false,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      appendDots: $('.slider-pagi-wrapper'),
      dotsClass: 'hero-slide-pagi',
     
      responsive: [
    
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
        $('.hero-slide-pagi').css({
            'display': 'flex',
            'align-items': 'flex-end',
        });
    `;
        document.body.appendChild(script);
    }, []);
    return (
        <>
            <div className="w-full h-[40vh] lg_layout_height my-14 bg_metal_gold px-5 lg:px-14">
                <div className="w-full h-full flex flex-col-reverse justify-center lg:flex-row items-center -mx-4">
                    <div className="lg:w-1/3 w-full px-4 md:flex md:flex-row lg:block">
                        <div className="content-wrapper md:mb-12 mb-3">
                            <h2 className="text-lg lg:text-[32px] font_gotham_medium md:mb-5 tracking-widest">URBAN <br /> NEW ARRIVAL</h2>
                        </div>
                        {/*.pagination-wrapper*/}
                        <div className="slider-pagi-wrapper"></div>
                    </div>
                    {/*.col-grid*/}
                    <div className="md:w-2/3 w-full px-4" dir="rtl">
                        <div className="hero-slider">
                            <div className="2xl:h-[44rem] xl:h-[36rem] lg:h-[34rem] md:h-[24rem] sm:h-[16rem] h-[10rem] ">
                                <div className="hero-slider-img-wrapper flex justify-center items-center h-full">
                                    <div className="hero-slider-img-inner relative">
                                        <Image width={500} height={900} src={image1} alt="" />
                                        <div className="info-dots info-dot-one bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[2rem] right-[5rem]" />
                                        <div className="info-dots info-dot-two bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[10rem] right-[5rem]" />
                                        <div className="info-dots info-dot-three bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[20rem] right-[5rem]" />
                                        <div className="info-dots info-dot-four bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[40rem] right-[5rem]" />
                                    </div>
                                </div>
                            </div>
                            {/*.slider-item*/}
                            <div className="2xl:h-[44rem] xl:h-[36rem] lg:h-[34rem] md:h-[24rem] sm:h-[16rem] h-[10rem] ">
                                <div className="hero-slider-img-wrapper flex justify-center items-center h-full">
                                    <div className="hero-slider-img-inner relative">
                                        <Image width={500} height={900} src={image1} alt="" />
                                        <div className="info-dots info-dot-one bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[2rem] right-[5rem]" />
                                        <div className="info-dots info-dot-two bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[10rem] right-[5rem]" />
                                        <div className="info-dots info-dot-three bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[20rem] right-[5rem]" />
                                        <div className="info-dots info-dot-four bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[40rem] right-[5rem]" />
                                    </div>
                                </div>
                            </div>
                            {/*.slider-item*/}
                            <div className="2xl:h-[44rem] xl:h-[36rem] lg:h-[34rem] md:h-[24rem] sm:h-[16rem] h-[10rem] ">
                                <div className="hero-slider-img-wrapper flex justify-center items-center h-full">
                                    <div className="hero-slider-img-inner relative">
                                        <Image width={500} height={900} src={image1} alt="" />
                                        <div className="info-dots info-dot-one bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[2rem] right-[5rem]" />
                                        <div className="info-dots info-dot-two bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[10rem] right-[5rem]" />
                                        <div className="info-dots info-dot-three bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[20rem] right-[5rem]" />
                                        <div className="info-dots info-dot-four bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[40rem] right-[5rem]" />
                                    </div>
                                </div>
                            </div>
                            {/*.slider-item*/}
                            <div className="2xl:h-[44rem] xl:h-[36rem] lg:h-[34rem] md:h-[24rem] sm:h-[16rem] h-[10rem] ">
                                <div className="hero-slider-img-wrapper flex justify-center items-center h-full">
                                    <div className="hero-slider-img-inner relative">
                                        <Image width={500} height={900} src={image1} alt="" />
                                        <div className="info-dots info-dot-one bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[2rem] right-[5rem]" />
                                        <div className="info-dots info-dot-two bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[10rem] right-[5rem]" />
                                        <div className="info-dots info-dot-three bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[20rem] right-[5rem]" />
                                        <div className="info-dots info-dot-four bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[40rem] right-[5rem]" />
                                    </div>
                                </div>
                            </div>
                            {/*.slider-item*/}
                            <div className="2xl:h-[44rem] xl:h-[36rem] lg:h-[34rem] md:h-[24rem] sm:h-[16rem] h-[10rem] ">
                                <div className="hero-slider-img-wrapper flex -space-x-2 justify-center items-center h-full">
                                    <div className="hero-slider-img-inner relative">
                                        <Image width={500} height={900} src={image1} alt="" />
                                        <div className="info-dots info-dot-one bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[2rem] right-[5rem]" />
                                        <div className="info-dots info-dot-two bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[10rem] right-[5rem]" />
                                        <div className="info-dots info-dot-three bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[20rem] right-[5rem]" />
                                        <div className="info-dots info-dot-four bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[40rem] right-[5rem]" />
                                    </div>
                                </div>
                            </div>
                            {/*.slider-item*/}
                            <div className="2xl:h-[44rem] xl:h-[36rem] lg:h-[34rem] md:h-[24rem] sm:h-[16rem] h-[10rem] ">
                                <div className="hero-slider-img-wrapper flex justify-center items-center h-full">
                                    <div className="hero-slider-img-inner relative">
                                        <Image width={500} height={900} src={image1} alt="" />
                                        <div className="info-dots info-dot-one bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[2rem] right-[5rem]" />
                                        <div className="info-dots info-dot-two bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[10rem] right-[5rem]" />
                                        <div className="info-dots info-dot-three bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[20rem] right-[5rem]" />
                                        <div className="info-dots info-dot-four bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[40rem] right-[5rem]" />
                                    </div>
                                </div>
                            </div>
                            {/*.slider-item*/}
                            <div className="2xl:h-[44rem] xl:h-[36rem] lg:h-[34rem] md:h-[24rem] sm:h-[16rem] h-[10rem] ">
                                <div className="hero-slider-img-wrapper flex justify-center items-center h-full">
                                    <div className="hero-slider-img-inner relative">
                                        <Image width={500} height={900} src={image1} alt="" />
                                        <div className="info-dots info-dot-one bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[2rem] right-[5rem]" />
                                        <div className="info-dots info-dot-two bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[10rem] right-[5rem]" />
                                        <div className="info-dots info-dot-three bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[20rem] right-[5rem]" />
                                        <div className="info-dots info-dot-four bg-white hover:outline-8 hover:outline outline-white/25 w-7 h-7 rounded-full absolute top-[40rem] right-[5rem]" />
                                    </div>
                                </div>
                            </div>
                            {/*.slider-item*/}
                        </div>
                        {/*.hero-slider*/}
                    </div>
                    {/*.col-grid*/}
                </div>
                {/*.row*/}
            </div>
            {/*.container*/}
        </>
    );
}
