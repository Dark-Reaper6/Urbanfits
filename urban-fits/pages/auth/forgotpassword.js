import React, { useEffect, useState } from 'react'
import AuthPage from '.'
import Link from 'next/link'
import Button from '@/components/buttons/simple_btn'
import Image from 'next/image'
import Tooltip from '@/components/tooltip'
import toaster from '@/utils/toast_function'
import { useSession, signIn } from "next-auth/react"
import useUser from '@/hooks/useUser'
import axios from 'axios'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import google_logo from '@/public/logos/google-logo.svg'
import { useRouter } from 'next/router'

export default function ForgotPassword() {
    const { data: session } = useSession()
    const router = useRouter()
    const { user } = useUser()
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState('')
    const [otpId, setOtpId] = useState(null)
    const [resendOption, setResendOption] = useState(
        <div className="mt-4 text-gray-400 text-xs md:text-sm text-left">
            Please enter your username or email address. You will receive an email with an OTP code, submit it here to reset password.
        </div>)

    const signInWithGoogle = async (values, x, oAuthQuery) => {
        try {
            setLoading(true)
            const res = await axios.post(`${process.env.HOST}/api/user/login${oAuthQuery ? oAuthQuery : ''}`, values)
            if (res.data.success && res.data.payload) {
                const { data } = res
                await updateUser(data.payload, true)
                toaster("success", data.msg)
                router.push('/user/myaccount')
            }
            else {
                const { data } = res.response
                toaster("error", data.msg)
            }
        }
        catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        setLoading(false)
    }

    const providerSignIn = (name) => {
        sessionStorage.setItem('oauth', true);
        sessionStorage.setItem('register_provider', name);
        return signIn(name)
    }

    useEffect(() => {
        if (user && user.email) return
        const oauth = sessionStorage.getItem('oauth')
        const register_provider = sessionStorage.getItem('register_provider')
        if (oauth && session && session.user) {
            let username = session.user.email.split('@')[0]
            let name = session.user.name.split(' ')
            let firstname = name[0]
            name.shift()
            let lastname = name.join(' ')
            const loginDetails = { email: session.user.email, username, firstname, lastname, image: session.user.image, register_provider }
            signInWithGoogle(loginDetails, null, '?auth=OAuth')
            return sessionStorage.removeItem('oauth')
        }
        else return
    }, [session])

    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues: { email: '', password: '', new_password: '' },
        validationSchema: Yup.object({
            email: Yup.mixed().test('valid', 'Invalid email or username', function (value) {
                const { path, createError } = this;
                if (Yup.string().required('Email or Username is required').email().isValidSync(value)) return true;
                if (Yup.string().required('Email or Username is required').min(5, 'Username must be atleast 5 characters').matches(/^[a-zA-Z0-9_]+$/, 'Invalid username').isValidSync(value)) return true;
                return createError({ path, message: 'Invalid Email or Username' });
            }),
            password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
            new_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Please confirm your password'),
        }),
        onSubmit: async (values) => {
            try {
                setLoading(true)
                const { data } = await axios.post(`${process.env.HOST}/api/user/forgotpassword`, values)
                if (data.success && data.otp_id) {
                    setOtpId(data.otp_id)
                    setResendOption(<span className='w-full flex justify-between items-center text-xs md:text-sm text-gray-400'> Didn't get the email? <button type='submit' className="border-b border-b-yellow-700">Resend Code</button></span>)
                    toaster("success", data.msg)
                }
                else {
                    const { data } = res.response
                    if (data) toaster("error", data.msg)
                }
            }
            catch (error) {
                console.log(error)
                setLoading(false)
                toaster("error", error.response.data.msg)
            }
            return setLoading(false)
        }
    })

    const onVerify = async () => {
        if (!otpId) return;
        setLoading(true)
        try {
            const { data } = await axios.put(`${process.env.HOST}/api/user/auth-otp-and-reset-password`, {
                otp_id: otpId,
                otp
            })
            if (data.success) {
                router.push('/auth/login')
                toaster("success", data.msg)
            }
            else toaster("error", "Something went wrong, please try again later.")
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        setLoading(false)
    }

    return <>
        <AuthPage loading={loading} mblNav="/auth/login" mblNavName="Sign in" >
            <form className="w-full h-full lg:h-auto bg-white p-2 lg:p-0 font_gotham text-base flex flex-col justify-between md:justify-around items-center lg:justify-center" onReset={handleReset} onSubmit={handleSubmit} >
                <section className="w-full mb-6 md:mb-0">
                    <h1 className="lg:hidden text-[22px] mb-5 text-left font_urbanist">Forgot Password</h1>
                    <div className={`relative data_field flex items-center border-b ${touched.email && errors.email ? "border-red-500" : "focus:border-yellow-700 hover:border-yellow-600"} transition py-2 mb-4`}>
                        {touched.email && errors.email ? <Tooltip classes="form-error" content={errors.email} /> : null}
                        <input className="w-full outline-none border-none" name="email" id="email" value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder='Username or Email' />
                        <button type='submit' className="font_urbanist_medium px-3 py-2 bg-gray-100 rounded-full text-sm whitespace-nowrap hover:text-white hover:bg-black transition-all">{otpId ? "Resend Code" : "Send Code"}</button>
                    </div>
                    <div className={`relative data_field flex items-center border-b ${touched.password && errors.password ? "border-red-500" : "focus:border-yellow-700 hover:border-yellow-600"} transition py-2 mb-4`}>
                        {touched.password && errors.password ? <Tooltip classes="form-error" content={errors.password} /> : null}
                        <input className={`w-full outline-none border-none ${values.password ? 'tracking-2' : null}`} type="password" id="password" value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder='Password' />
                    </div>
                    <div className={`relative data_field flex items-center border-b ${touched.new_password && errors.new_password ? "border-red-500" : "focus:border-yellow-700 hover:border-yellow-600"} transition py-2 mb-4`}>
                        {touched.new_password && errors.new_password ? <Tooltip classes="form-error" content={errors.new_password} /> : null}
                        <input className={`w-full outline-none border-none ${values.new_password ? 'tracking-2' : null}`} type="password" id="new_password" value={values.new_password} onBlur={handleBlur} onChange={handleChange} placeholder='Confirm password' />
                    </div>
                    {otpId ? <div className="relative data_field lex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                        <input className="w-full outline-none border-none" type='number' name="otp" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder='Enter OTP code' />
                    </div> : null}
                    {resendOption}
                </section>
                <section className='w-full mb-4 lg:m-0'>
                    <Button disabled={!otp || !otpId || otp.length < 5} onClick={onVerify} classes='w-full' type="button">Verfiy</Button>
                    <div className="lg:hidden w-full flex justify-between items-center font_urbanist text-sm">
                        <span className="w-2/5 h-px bg-gray-200"></span>
                        login via
                        <span className="w-2/5 h-px bg-gray-200"></span>
                    </div>
                    <Link href='/auth/login' className='hidden lg:block underline text-xs md:text-sm'><h1 className='w-full text-center' >Sign in with an exiting account</h1></Link>
                    <button type='button' onClick={() => providerSignIn("google")} name='google' className="lg:hidden group w-full h-12 my-4 py-2 px-2 flex justify-center items-center bg-gray-50 text-lg border border-gray-200 rounded-full hover:shadow-xl transition">
                        <Image src={google_logo} width={50} height={50} className='w-6 md:w-8 mr-3' alt="google" />
                        <span className='max-w-0 whitespace-nowrap overflow-hidden transition-all duration-500 group-hover:max-w-[10rem]'>Sign Up with&nbsp;</span>
                        Google
                    </button>
                </section>
            </form>
        </AuthPage>
    </>
}
