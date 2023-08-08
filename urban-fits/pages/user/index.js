import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import useLocation from '@/hooks/useLocation'
import useUser from '@/hooks/useUser'
import Error403 from '@/pages/403';
import Loader from '@/components/loaders/loader'
import Logout from '@/components/modals/logout'
import Link from 'next/link'
import uploadImage from '@/utils/uploadImage'
import Button from '@/components/buttons/simple_btn'
import ifExists from '@/utils/if_exists'
// image imports
import Image from 'next/image';
import Spinner from '@/components/loaders/spinner'
const DefaultPfp = 'https://urban-fits.s3.eu-north-1.amazonaws.com/website-copyrights/default-pfp.jpg'


const Option = (props) => {
    const router = useRouter()
    const route = router.pathname
    return (
        <Link className={`${route === props.href ? 'font_gotham_medium' : null} group w-full h-[67px] flex justify-between items-center mb-[2px] pr-3 text-sm rounded-sm bg-white shadow-md transition-all overflow-hidden`} href={props.href || '#'}><span className={`bg-gold w-2 group-hover:h-full ${route === props.href ? 'h-full' : 'h-0'} transition-all duration-300`}></span>{props.children}<i className=" arrow material-symbols-outlined text-lg text-gray-600 transition-all">chevron_right</i></Link>
    )
}
// Menu for mobile devices
const Option_sm = (props) => {
    const router = useRouter()
    const route = router.pathname
    return (
        <Link className={`h-full group flex flex-col justify-between items-center transition-all `} href={props.href || '#'}>{props.children}<span className={`bg-gold-land h-1 mt-1 rounded-lg group-hover:w-full ${route === props.href ? 'w-full' : 'w-0'} transition-all duration-300`}></span></Link>
    )
}

export default function User(props) {
    const router = useRouter()
    const route = router.pathname
    const { user, logOut, updateUser } = useUser()
    const [imgSpinner, SetImgSpinner] = useState(null)

    const menuRef = useRef(null)
    useEffect(() => {
        let screen = window.screen.width
        if (route === "/user/email&password") return menuRef.current.scroll((screen / 2.1), 0)
        if (route === "/user/address") return menuRef.current.scroll((screen / 1.1), 0)
        if (route === "/user/paymentmethods") return menuRef.current.scroll((screen / 0.8), 0)
        if (route === "/user/orders/orders") return menuRef.current.scroll((screen * 1.5), 0)
    }, [])

    // states and function for modals
    const [modal5, setModal5] = useState(false)
    const toggleModal = (e, name) => {
        if (name || e.target.name === "modal5") {
            if (modal5 === false) return setModal5(true)
            if (modal5 === true) return setModal5(false)
        }
    }
    //state and function for the file selection
    const getPfp = () => {
        if (!user) return
        if (user.image) return user.image
        else return DefaultPfp
    }

    const [photo, setPhoto] = useState(getPfp)
    const onFileChange = async (e) => {
        const file = e.target.files[0]
        SetImgSpinner(<Spinner />)
        const imgUrl = await uploadImage(file, user._id, 'user-profiles/')
        setPhoto(imgUrl)
        await updateUser({ image: imgUrl })
        SetImgSpinner(null)
    }
    if (!user) return <Error403 />
    return <main className={`bg-white w-full flex font_gotham transition-all duration-700`}>
        <Logout logOut={logOut} modal5={modal5} toggleModal={toggleModal} />
        <div className="w-[33%] min-h-screen hidden lg:block">
            <div className="flex flex-col sticky top-[100px] left-20 2xl:left-28 items-center w-[280px] list-none font_gotham">
                <Option href='/user/personalinfo'>Personal Information</Option>
                <Option href='/user/email&password'>Email & Password</Option>
                <Option href='/user/address'>My Address</Option>
                <Option href='/user/paymentmethods'>My Payment Methods</Option>
                <Link className={`${route === '/user/orders/orders' ? 'font_gotham_medium' : null} group w-full h-[67px] flex justify-between items-center mb-[2px] pr-3 text-sm rounded-sm bg-white shadow-md transition-all `} href='/user/orders/orders'><span className={`bg-gold w-2 group-hover:h-full ${route.startsWith('/user/orders') ? 'h-full' : 'h-0'} transition-all duration-300`}></span>My Orders<i className=" arrow material-symbols-outlined text-lg text-gray-600 transition-all">chevron_right</i></Link>
                <Button onClick={toggleModal} name="modal5" classes="w-full">Logout</Button>
            </div>
        </div>
        {/* To be displayed on the mobile devices */}
        <div ref={menuRef} className='hide_scrollbar absolute z-10 top-[50px] left-0 w-full bg-white shadow-md text-sm md:text-base lg:hidden overflow-x-scroll scroll-smooth transition-all duration-300'>
            <div className="w-[230%] md:w-full h-full px-4 pt-8 flex justify-between">
                <Option_sm href='/user/personalinfo'>Personal Information</Option_sm>
                <Option_sm href='/user/email&password'>Email & Password</Option_sm>
                <Option_sm href='/user/address'>My Address</Option_sm>
                <Option_sm href='/user/paymentmethods'>My Payment Methods</Option_sm>
                <Link className={`h-full group flex flex-col justify-between items-center transition-all`} href="/user/orders/orders">My Orders<span className={`bg-gold-land h-1 mt-1 rounded-lg group-hover:w-full ${route === "/user/orders/orders" ? 'w-full' : 'w-0'} transition-all duration-300`}></span></Link>
                <button onClick={(e) => { toggleModal(e, "modal5") }} name="modal5" className={`h-full group flex flex-col justify-between items-center transition-all `}> <span className="flex"><span className="material-symbols-rounded">logout</span>Logout</span><span className={`bg-gold-land w-0 h-1 mt-1 rounded-lg group-hover:w-full group-active:w-full group-focus:w-full transition-all duration-300`}></span></button>
            </div>
        </div>
        <section className='w-full lg:w-[67%] px-4 pt-24 pb-20 lg:pl-7 lg:pt-9 font_gotham text-left overflow-x-hidden overflow-y-scroll' >
            <div className="w-full lg:w-5/6 lg:pt-6">
                <div className={`${props.profileNull ? 'hidden' : null} flex flex-row-reverse md:flex-row items-center gap-3`}>
                    <div className="w-3/5 md:w-auto flex flex-col items-center">
                        <label htmlFor='pfp' className="group relative md:w-[150px] aspect-square rounded-full cursor-pointer border-2 border-gray-300 overflow-hidden">
                            <span className="opacity-0 group-hover:opacity-100 text-white font_gotham_medium text-xs cursor-pointer flex flex-col items-center gap-y-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                <i className="fa-solid fa-camera text-lg text-white" />Upload
                            </span>
                            {imgSpinner}
                            <Image className="w-full h-full object-cover" width={150} height={150} src={photo} alt="avatar" />
                        </label>
                        <input type="file" id='pfp' name='pfp' accept="image/*" onChange={onFileChange} className="opacity-0 w-0 h-0 appearance-none" />
                        <label htmlFor='pfp' className="lg:hidden mt-1.5 flex items-center font_gotham_medium text-[10px] tracking-widest ">EDIT<i className="fa-sharp fa-regular fa-pen-to-square mx-1 -translate-y-[1px]" /></label>
                    </div>
                    <span>
                        <h2 className="text-2xl lg:text-[30px] font_gotham_medium mb-4">My Account</h2>
                        <p className='text-sm lg:text-base' >Welcome {ifExists(user.firstname)} !<br />Save your address details and phone number here for easy and fast in delivery process in the future.</p>
                    </span>
                </div>
                {props.children}
            </div>
        </section>
    </main >
}
