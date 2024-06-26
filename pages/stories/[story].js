import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import CloseUpCarousel from "@/components/carousels/closeUpCarousel";
import Link from "next/link";
import Aos from "aos";
import 'aos/dist/aos.css';
import Image from "next/image";
const hero_bg = process.env.NEXT_PUBLIC_BASE_IMG_URL + '/website-copyrights/cartbg.webp'
import img1 from '@/public/stories/img1.webp'
import img2 from '@/public/stories/img3.webp'
import img3 from '@/public/stories/img4.webp'
import img4 from '@/public/stories/img2.webp'
import img5 from '@/public/stories/img5.webp'
import img6 from '@/public/stories/img6.webp'
import img7 from '@/public/stories/img7.webp'
import img8 from '@/public/stories/img8.webp'


export default function Storeis() {
    const router = useRouter()
    const { story } = router.query
    const [sliderModal, setSliderModal] = useState(false)
    const images = [img1, img2, img3, img4, img5, img6, img7, img8]

    const toggleStoryCarousel = () => {
        if (sliderModal === false) return setSliderModal(true)
        if (sliderModal === true) return setSliderModal(false)
    }

    const StoryImage = (props) => {
        return <Image onClick={toggleStoryCarousel} width={1400} height={500} alt="story image" data-aos-duration='1000' data-aos-once={props.once} data-aos-delay={props.data_aos_delay ? props.data_aos_delay : null} data-aos={props.data_aos} src={props.src} placeholder='blur' className="w-full h-full object-cover cursor-pointer" />
    }

    useEffect(() => {
        Aos.init({ once: true })
    }, [])

    return (
        <>
            <CloseUpCarousel slideData={images} show={sliderModal} toggleStoryCarousel={toggleStoryCarousel} />
            <Head>
                <title>Storeis - Urban Fits</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className='w-full bg-white transition-all ease-linear duration-500 overflow-hidden' >
                <section className="relative w-full layout_height flex flex-col justify-center items-center gap-y-5 transition-all ease-linear duration-500 overflow-hidden" >
                    <Image width={1400} height={512} src={hero_bg} alt='Storeis background' className="h-full lg:w-full absolute top-0 left-0 object-cover object-top" />
                    <div className="z-10 flex flex-col justify-center items-center gap-5">
                        <span className="font_urbanist text-white text-sm"><Link className="underline underline-offset-8" href='/' >Main Page</Link> / <Link className="underline underline-offset-8 capitalize" href='/stories' >{story}</Link></span>
                        <h1 className="font_copper text-2xl lg:text-[32px] text-white tracking-[0.15em]">{story && story.toUpperCase()}</h1>
                    </div>
                </section>
                <section className="w-full lg:px-12 xl:px-16 2xl:px-20 flex flex-col">
                    <div className="w-full px-7 lg:px-0 lg:w-4/5 -translate-y-[10%]">
                        <StoryImage data_aos='fade-up-right' once={false} src={images[0]} />
                    </div>

                    <div className="relative w-full lg:my-28 2xl:my-36 flex flex-col-reverse lg:flex-row justify-between">
                        <div className="w-full lg:w-[45%] my-5 flex justify-between">
                            <div className="w-48pr h-full">
                                <StoryImage data_aos="fade-right" src={images[1]} />
                            </div>
                            <div className="w-48pr h-full">
                                <StoryImage data_aos="fade-right" data_aos_delay='500' src={images[2]} />
                            </div>
                        </div>
                        <div className="w-full px-7 lg:px-7 lg:w-[35%] lg:absolute lg:-translate-y-[60%] right-0 ">
                            <StoryImage data_aos="fade-up-left" src={images[3]} />
                        </div>
                    </div>

                    <div className="relative w-full lg:h-[150vh] px-7 lg:px-0 gap-y-5 lg:gap-y-0 flex flex-col">
                        <div className="lg:absolute top-0 right-0 w-full lg:w-70pr">
                            <StoryImage data_aos="fade-up-right" src={images[4]} />
                        </div>
                        <div className="lg:absolute bottom-0 left-0 w-full lg:w-70pr">
                            <StoryImage data_aos="fade-up-left" src={images[5]} />
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <div className="w-full lg:w-48pr my-5 flex justify-between lg:-translate-y-[15%]">
                            <div className="w-48pr h-full">
                                <StoryImage data_aos="fade-left" data_aos_delay='500' src={images[6]} />
                            </div>
                            <div className="w-48pr h-full">
                                <StoryImage data_aos="fade-left" src={images[7]} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}