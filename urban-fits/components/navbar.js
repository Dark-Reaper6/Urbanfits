import React, { useState, useEffect } from 'react';
import { useCart } from "react-use-cart";
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import Link from 'next/link'
import LanguageModal from './modals/languagemodal';
import Search from './search';
import Cart from './cart';
import Image from 'next/image';
import Logo from '@/public/logos/logo_black.svg'

const ListItem = (props) => {
    const router = useRouter()
    return (
        <>
            <Link onClick={props.handleMenu} href={router.asPath === props.href ? '/' : props.href} className={`${props.classes} stroke_text hover:text-gotham-black transition-all duration-500`}>{router.asPath === props.href ? 'Home' : props.children}</Link>
        </>
    )
}

const SocialIcons = ({ classes }) => {
    return (
        <div className={`${classes} w-full lg:w-auto flex justify-between space-x-20 text-base text-black`}>
            <Link href='#' ><i className="fa-brands fa-twitter"></i></Link>
            <Link href='#' ><i className="fa-brands fa-facebook-f"></i></Link>
            <Link href='#' ><i className="fa-solid fa-paper-plane"></i></Link>
            <Link href='#' ><i className="fa-brands fa-instagram"></i></Link>
        </div>
    )
}

export default function Navbar(props) {
    const [bars, setBars] = useState('')
    const [menu, setMenu] = useState('-translate-y-[100vh]')
    const handleMenu = () => {
        if (bars === '') {
            setBars('open')
            setMenu('')
        }
        if (bars === 'open') {
            setBars('')
            setMenu('-translate-y-[100vh]')
        }
    }

    // states and function for modals
    const [modal3, setModal3] = useState(false)
    const toggleModal = (e) => {
        if (e.target.name === "modal3") {
            if (modal3 === false) return setModal3(true)
            if (modal3 === true) return setModal3(false)
        }
    }

    // state for search componenet
    const [search, setSearch] = useState(false)
    const toggleSearch = () => {
        if (search === false) return setSearch(true)
        if (search === true) return setSearch(false)
    }
    // state for cart componenet
    const [cart, setCart] = useState(false)
    const toggleCart = () => {
        if (cart === false) return setCart(true)
        if (cart === true) return setCart(false)
    }
    const { totalUniqueItems } = useCart()

    // getting user payload form jwt token in localstorage
    // const [user, setUser] = useState(false)
    // useEffect(() => {
    //     const userData = jwt.decode(localStorage.getItem("authToken"))
    //     if (userData) return setUser(userData._doc)
    // }, [])
    return (
        <>
            <Search search={search} toggleSearch={toggleSearch} />
            <Cart cart={cart} toggleCart={toggleCart} />
            <LanguageModal show={modal3} toggleModal={toggleModal} />
            <Link href="/" ><Image src={Logo} className={`${props.hideNav ? 'translate-x-40' : ''} fixed ${props.lowerLogo ? 'top-[18vh]' : 'top-[14vh]'} right-6 md:top-[17vh] md:right-10 z-40 w-14 md:w-24 lg:w-20 transition-all duration-1000 ease-linear`} alt="Urban images" /></Link>
            <div className={`${props.hideNav ? 'h-0 -translate-y-full' : 'h-[50px]'} w-full -z-10 overflow-hidden transition-all duration-1000 ease-linear`}></div>
            <nav className={`${props.hideNav ? 'bg-transparent' : 'bg-white'} h-[50px] fixed z-40 top-0 left-0 lg:translate-x-0 w-full  p-7 lg:px-14 shadow-sm bg-transparent font_gotham_medium text-sm flex justify-between items-center overflow-hidden transition-all duration-[1.2s] ease-linear`}>
                <button onClick={handleMenu} className='menu_parent gap-10 flex items-center cursor-pointer' >
                    <div className={`${bars} menu btn3`}>
                        <div className="icon"></div>
                    </div>
                    <span className='hidden lg:block tracking-[1.5em]'>MENU</span>
                </button>
                <button onClick={toggleSearch} className='hidden absolute left-1/2 -translate-x-1/2 group lg:flex lg:flex-col justify-center items-center text-center tracking-[1.5em]' >&nbsp;SRCH<span className="w-0 group-hover:w-full h-[2px] bg-black transition-all"></span></button>
                <button onClick={toggleCart} className='group flex justify-center items-center gap-5 lg:gap-10' >
                    <div className="flex">
                        <span className="hidden lg:block w-5 group-hover:w-0 h-[2px] mx-1 bg-black transition-all"></span>
                        <span className="w-16 group-hover:w-28 h-[2px] mx-1 bg-black transition-all"></span>
                    </div>
                    <span className="tracking-[0.7em] lg:tracking-[1.5em]">CART</span>
                    <span>{totalUniqueItems}</span>
                </button>
            </nav>

            <div className={`${menu} w-full layout_height fixed left-0 bottom-0 z-30 flex justify-center items-center transition-all ${props.transition ? props.transition : 'duration-700'} bg-white shadow-lg`}>
                <ul className='w-90pr h-auto list-none flex flex-col gap-[7vh] lg:gap-[10vh] leading-[0.7] lg:leading-[0.74em] font_gotham_bold text-5xl lg:text-8xl'>
                    <li className='w-full border-b' >
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[10%]' href='/products/Women'>Women</ListItem>
                    </li>
                    <li className='w-full border-b flex'>
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[30%]' href='/products/Men'>Men</ListItem>
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[10%] hidden lg:block' href='/products/Kids'>Kids</ListItem>
                    </li>
                    <li className='w-full border-b flex lg:hidden'>
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[10%]' href='/products/Kids'>Kids</ListItem>
                    </li>
                    <li className='w-full border-b flex justify-start lg:justify-between lg:px-14' >
                        <ListItem handleMenu={handleMenu} href='/stories'>Stories</ListItem>
                        <ListItem handleMenu={handleMenu} classes='hidden lg:block' href='/sale'>Sale</ListItem>
                    </li>
                    <li className='w-full border-b flex lg:hidden'>
                        <ListItem handleMenu={handleMenu} classes='lg:ml-[10%]' href='/products/sale'>Sale</ListItem>
                    </li>
                    <button onClick={toggleSearch} className='lg:hidden group font_gotham_medium flex justify-center items-center text-base tracking-[1.5em]'>SRCH<span className="w-full group-focus:w-0 h-[2px] bg-black transition-all"></span></button>
                    <Link href='/login' className='lg:hidden group font_gotham_medium w-full flex justify-center items-center text-base tracking-[1.5em]'>LOGIN<span className="w-full group-focus:w-0 h-[2px] bg-black transition-all"></span></Link>
                    <div className="w-full flex flex-col items-start lg:flex-row lg:justify-between font_gotham_medium">
                        <div className='hidden  group lg:flex justify-center items-center tracking-[1.5em] text-base'><Link className='hidden lg:block' href="/login">LOGIN</Link><Link className='hidden lg:block' href="/signup">/SIGNUP</Link>
                            <span className="flex my-auto">
                                <span className="w-20 group-hover:w-28 h-[2px] mx-1 bg-black transition-all"></span>
                                <span className="w-5 group-hover:w-0 h-[2px] mx-1 bg-black transition-all"></span>
                            </span>
                        </div>
                        <SocialIcons classes='hidden lg:block' />
                    </div>
                    <SocialIcons classes='lg:hidden' />
                </ul>
            </div>
        </>
    )
}
export async function getServerSideProps(context) {
    return { props: { ...context } }
}