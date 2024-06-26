import Head from 'next/head'
import LinkBtn from '../components/buttons/link_btn';
export default function HttpErrorPage(props) {
    return <>
        <Head><title>{props.error} - UF</title></Head>
        <main className="bg-gray-700 overflow-hidden">
            <section className="w-screen h-screen bg_404 bg-no-repeat bg-cover bg-right lg:bg-top">
                <div className="w-full h-full px-2 lg:px-0 flex flex-col lg:flex-row justify-center items-center bg-right lg:bg-top lg:space-x-20">
                    <h1 className="text-white mb-6 text-8xl lg:text-[12rem]">{props.error}</h1>
                    <div className="lg:w-[37vw] flex flex-col justify-center items-center lg:items-start lg:flex-start space-y-8">
                        <h2 className='text-xl font-bold lg:text-[32px] gradient_txt font_urbanist' >{props.heading}</h2>
                        <p className="text-center font_urbanist text-white lg:text-justify lg:text-xl leading-7">{props.message}</p>
                        <LinkBtn href="/" classes="w-48" >Back To Home</LinkBtn>
                    </div>
                </div>
            </section>
        </main>
    </>
}