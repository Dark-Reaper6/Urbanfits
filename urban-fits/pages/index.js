import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import HomeCarousel from "@/components/carousels/homeCarousel";
import HomeCarousel2 from "@/components/carousels/homeCarousel2";
import Link from "next/link";
import ListingShopSection from "@/components/listingShop_section";
import Card from "@/components/cards/card";
import PicCard from "@/components/cards/picCard";
import Shoppingcard from "@/components/cards/shoppingcard";
// Modal imports
import LoadingModal from "../components/modals/loadingmodal";
import LanguageModal from "../components/modals/languagemodal";
// imports for images
import image1 from "@/public/card imgs/card img5.jpg";
import image2 from "@/public/card imgs/card img6.jpg";
import image3 from "@/public/card imgs/card img1.jpg";
import image4 from "@/public/card imgs/card img8.jpg";
import image5 from "@/public/card imgs/card img9.jpg";
import image7 from "@/public/card imgs/card img7.jpg";
import image6 from "@/public/card imgs/card img11.jpg";
import listingBg2 from '@/public/listingbg2.jpg'

export default function Home() {
    // states and function for modals
    const [modal1, setModal1] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [hideNav, setHideNav] = useState(true);
    const [carouselContainer, setCarouselContainer] = useState('h-screen');
    const [carouselClasses, setCarouselClasses] = useState('w-full h-screen');
    const [carousel_textContainer, setTextContainer] = useState('bottom-[8%] left-[4%]')

    useEffect(() => {
        let item = localStorage.getItem("loadingModal");
        if (item) return;
        setModal1(true);
        localStorage.setItem("loadingModal", true);
    }, []);

    useEffect(() => {
        const setSizefunc = (e) => {
            let position = window.pageYOffset;
            if (position >> 0) {
                // window.location.assign('#blabla')
                setCarouselContainer('layout_height')
                setCarouselClasses('w-11/12 lg:w-11/12 h-80vh lg:h-86vh rounded-2rem')
                setTextContainer('bottom-[26.4%] left-[4%] lg:bottom-[26.4%] lg:left-[4%]')
                setHideNav(false)
                window.removeEventListener('scroll', setSizefunc);
            }
        }
        window.addEventListener('scroll', setSizefunc);
    }, []);

    useEffect(() => {
        // Get all sections on the page
        const sections = document.querySelectorAll('section');
        // Listen for the scroll event on the window
        window.addEventListener('scroll', () => {
            // Loop through each section to check if it's in view
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                // Check if the section is in view
                if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                    // Scroll to the section with smooth scrolling
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

    })

    const toggleModal = (e) => {
        if (e.target.name === "modal1") {
            if (modal1 === false) return setModal1(true);
            if (modal1 === true) return setModal1(false);
        } else if (e.target.name === "modal3") {
            if (modal3 === false) return setModal3(true);
            if (modal3 === true) return setModal3(false);
        }
    };

    // temporary product object for shopping card
    const product = {
        name: 'Sample Product name',
        price: '76.99',
        variants: [1, 2, 3, 4]
    }

    return (
        <>
            <Head>
                <title>Urban Fits</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className="w-full h-full">
                <LoadingModal show={modal1} toggleModal={toggleModal} />
                <LanguageModal show={modal3} toggleModal={toggleModal} />
                <Navbar hideNav={hideNav} />
                <main className='w-full bg-white flex justify-center lg:justify-end transition-all ease-linear  overflow-hidden' >
                    <div className="w-full flex flex-col justify-center items-center gap-y-5 transition-all ease-linear  overflow-x-hidden">
                        <section id="section1" className={`box_1 ${carouselContainer} w-screen mb-7 lg:mb-10 flex justify-center items-center transition-all  ease-linear`}>
                            <div className={`${carouselClasses} flex justify-center items-center font_gotham transition-all  ease-linear overflow-hidden`} >
                                <HomeCarousel carousel_textContainer={carousel_textContainer} />
                            </div>
                        </section>
                        {/* Collection Section */}
                        <div className="w-full px-5 md:px-7 lg:px-10 flex justify-between items-center">
                            <h2 className="font_gotham_medium text-sm lg:text-[20px] tracking-expand" >NEW COLLECTION</h2>
                            <Link href="products/New In" className="flex items-center group">
                                <span className="w-10 h-[2px] group-hover:w-16 mr-4 bg-black transition-all" ></span>
                                <h3 className="font_gotham_medium tracking-[1.5em] text-xs lg:text-sm">MORE</h3>
                            </Link>
                        </div>
                        <section id="section2" className="box_2 w-full px-5 md:px-7 lg:px-10 flex justify-between flex-wrap">
                            <Shoppingcard margin='0' product={product} img={image5} />
                            <Shoppingcard margin='0' product={product} img={image6} />
                            <Shoppingcard margin='0' product={product} img={image4} />
                            <Shoppingcard margin='0' product={product} img={image7} />
                        </section>
                        {/* Shopping Card Section */}
                        <div className="box_1 w-full mt-10 lg:mt-20 px-5 md:px-7 lg:px-10 flex items-center mb-3 text-sm lg:text-[20px] leading-3 font_gotham_medium tracking-expand"><h3>URBAN FITS COLLECTION&nbsp;</h3><span className="w-14 md:w-20 h-[2px] mx-1 bg-black transition-all"></span></div>
                        <section id="section3" className="w-full h-screen md:h-auto lg:h-[85vh] px-5 md:px-7 lg:px-10 flex flex-col lg:flex-row justify-between gap-y-5 font_gotham">
                            <PicCard h1="NEW IN" h2="READY TO WEAR" btnValue="SHOP WOMEN" img={image1} />
                            <PicCard h1="NEW IN" h2="READY TO WEAR" btnValue="SHOP MEN" img={image2} />
                        </section>
                        {/* Shopping Card Section */}
                        <section id="section4" className="box_2 w-full h-screen md:h-auto lg:h-[85vh] px-5 md:px-7 lg:px-10 my-5 flex flex-col lg:flex-row justify-between gap-y-5 font_gotham">
                            <PicCard h1="NEW IN" h2="READY TO WEAR" btnValue="SHOP WOMEN" img={image4} />
                            <PicCard h1="NEW IN" h2="READY TO WEAR" btnValue="SHOP MEN" img={image3} />
                        </section>
                        {/* second carousel */}
                        <section id="section5" className="relative bg_metal_gold w-full h-[70vh] lg:h-87vh min-h-[300px] my-5 lg:my-10 lg:px-10 lg:pr-0 flex flex-col-reverse lg:flex-row items-center justify-center font_gotham overflow-hidden">
                            <div className="hidden lg:flex left-0 w-full lg:w-[35vw] lg:h-full md:pl-10 mb-3 lg:m-0 leading-7 flex-col justify-center items-start">
                                <h2 className="text-xl md:text-3xl lg:text-[32px] word-wrap font_gotham_medium leading-tight">URBAN<br />NEW ARRIVAL</h2>
                            </div>
                            <div className="h-full w-full lg:w-[65vw] flex items-center">
                                <HomeCarousel2 />
                            </div>
                        </section>
                        {/* Collection Section */}
                        <div className="w-full px-5 md:px-7 lg:px-10 flex justify-between items-center">
                            <h2 className="font_gotham_medium text-sm lg:text-[20px] tracking-expand" >NEW COLLECTION</h2>
                            <Link href="products/New In" className="flex items-center group">
                                <span className="w-10 h-[2px] group-hover:w-16 mr-4 bg-black transition-all" ></span>
                                <h3 className="font_gotham_medium tracking-[1.5em] text-xs lg:text-sm">MORE</h3>
                            </Link>
                        </div>
                        <section id="section6" className="w-full px-5 md:px-7 lg:px-10 flex justify-between flex-wrap">
                            <Shoppingcard margin='0' product={product} img={image5} />
                            <Shoppingcard margin='0' product={product} img={image6} />
                            <Shoppingcard margin='0' product={product} img={image4} />
                            <Shoppingcard margin='0' product={product} img={image7} />
                        </section>
                        <section id="section7" className="w-full h-auto lg:h-80vh p-5 flex flex-col lg:flex-row justify-center items-center gap-5">
                            <Card href="/contact" title="CONTACT US" value="If you have any query then please contact us." valueCenter btnClasses="w-1/2 py-5" btnValue="COTNACT US" btnFont='font_gotham_light' classes="w-full h-full md:w-60vw md:h-3/4 lg:w-30pr py-20 lg:py-16 justify-center items-center" />
                            <Card href="/customercare" title="CUSTOMER CARE" value="Do you have any questions? We are here to help you. You can contact our customer care team by email or over the phone." valueCenter btnClasses="w-1/2 py-5" btnValue="GET IN TOUCH" btnFont='font_gotham_light' classes="w-full md:w-60vw py-20 justify-center items-center h-full lg:w-30pr md:h-3/4" />
                            <Card href="/faq" title="FAQ" value="Find all the answers to the frequently asked questions below." valueCenter btnClasses="w-1/2 py-5" btnValue="SEE OUR FAQs" btnFont='font_gotham_light' classes="w-full md:w-60vw py-20 justify-center items-center h-full lg:w-30pr md:h-3/4" />
                        </section>
                    </div>
                </main>
                <ListingShopSection classes='translate-y-5' img={listingBg2} whiteTheme />
                <Footer />
            </main>
        </>
    );
}
