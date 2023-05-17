import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import useUser from '@/hooks/useUser';
import User from '.';
import Head from 'next/head';
import useAddress from '@/hooks/useAddress';
import countryCodes from '@/static data/countryCodes';
import Button from '../../components/buttons/simple_btn';
import Loader from '@/components/loader';
// imports for the schema and validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Tooltip from '../../components/tooltip';

const AddressForm = (props) => {
    const router = useRouter()
    const { tag } = props
    const { address, updateAddress } = useAddress()
    // getting data from input fields andrelative  applying validation
    const { values, errors, touched, handleChange, handleReset, handleBlur, handleSubmit, setValues } = useFormik({
        initialValues: {
            tag: props.tag,
            address_title: '',
            firstname: '',
            lastname: '',
            address: '',
            apt_suite: '',
            city: '',
            country: 'Country',
            phone_prefix: 'Select Country Code',
            phone_number: ''
        },
        validationSchema: Yup.object({
            tag: Yup.string().required(),
            address_title: Yup.string().required("Please enter your address title"),
            firstname: Yup.string().min(2).max(30).required("Please enter your firstname"),
            lastname: Yup.string().min(2).max(30).required("Please enter your lastname"),
            address: Yup.string().min(2).required("Please enter your address"),
            apt_suite: Yup.string(),
            city: Yup.string().required("Please enter your city"),
            country: Yup.string().required("Please enter your country"),
            phone_prefix: Yup.string().required("Please enter your phone prefix"),
            phone_number: Yup.string().min(9).required("Please enter your phone number"),
        }),
        onSubmit: props.onsubmit
    })
    useEffect(() => {
        if (address.addresses.length === 0) return
        let userAddress = address.addresses.filter((address) => {
            return address.tag === tag
        })
        if (userAddress.length === 0) return
        setValues(userAddress[0])
    }, [])

    return (
        <form className="mt-10 font_gotham space-y-10 overflow-hidden" onReset={handleReset} onSubmit={handleSubmit} >
            <h1 className='text-xl lg:text-[22px] font_gotham_medium tracking-widest' >{props.heading}</h1>
            <div className="relative w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                {touched.address_title && errors.address_title ? <Tooltip classes="form-error" content={errors.address_title} /> : null}
                <input className="w-full bg-transparent outline-none border-none" type="text" name="address_title" id="address_title" value={values.address_title} onBlur={handleBlur} onChange={handleChange} placeholder="Address Title*" />
            </div>
            <div className="flex justify-between w-full ">
                <div className="relative w-48pr data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                    {touched.firstname && errors.firstname ? <Tooltip classes="form-error" content={errors.firstname} /> : null}
                    <input className="w-full bg-transparent outline-none border-none" type="text" name="firstname" id="firstname" value={values.firstname} onBlur={handleBlur} onChange={handleChange} placeholder="First Name" />
                </div>
                <div className="relative w-48pr data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                    {touched.lastname && errors.lastname ? <Tooltip classes="form-error" content={errors.lastname} /> : null}
                    <input className="w-full bg-transparent outline-none border-none" type="text" name="lastname" id="lastname" value={values.lastname} onBlur={handleBlur} onChange={handleChange} placeholder="Last Name" />
                </div>
            </div>
            <div className="relative w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                {touched.address && errors.address ? <Tooltip classes="form-error" content={errors.address} /> : null}
                <input className="w-full bg-transparent outline-none border-none" type="text" name="address" id="address" value={values.address} onBlur={handleBlur} onChange={handleChange} placeholder="Address 1*" />
            </div>
            <div className="flex justify-between w-full ">
                <div className="relative w-48pr data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                    {touched.city && errors.city ? <Tooltip classes="form-error" content={errors.city} /> : null}
                    <input className="w-full bg-transparent outline-none border-none" type="text" name="city" id="city" value={values.city} onBlur={handleBlur} onChange={handleChange} placeholder="City*" />
                </div>
                <div className="relative w-48pr data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                    {touched.apt_suite && errors.apt_suite ? <Tooltip classes="form-error" content={errors.apt_suite} /> : null}
                    <input className="w-full bg-transparent outline-none border-none" type="text" name="apt_suite" id="apt_suite" value={values.apt_suite} onBlur={handleBlur} onChange={handleChange} placeholder="Apt or Suite (optional)" />
                </div>
            </div>
            <div className="relative w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                {touched.country && errors.country ? <Tooltip classes="form-error" content={errors.country} /> : null}
                <select className="w-full border-none outline-none bg-transparent border-b-gray-800" name='country' value={values.country} onBlur={handleBlur} onChange={handleChange} >
                    <option disabled >Country</option>
                    <option value="uae">UAE</option>
                    <option value="usa">USA</option>
                    <option value="pk">Pakistan</option>
                </select>
            </div>
            <div className="flex justify-between w-full">
                <div className="relative w-48pr data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                    {touched.phone_prefix && errors.phone_prefix ? <Tooltip classes="form-error" content={errors.phone_prefix} /> : null}
                    <select value={values.phone_prefix} name='phone_prefix' onBlur={handleBlur} className="w-full border-none outline-none bg-transparent border-b-gray-800" onChange={handleChange}>
                        {countryCodes.map((item) => {
                            if (!item.code) return <option disabled>{item.name}</option>
                            return <option value={item.code}>{item.name} {item.code}</option>
                        })}
                    </select>
                </div>
                <div className="relative w-48pr data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                    {touched.phone_number && errors.phone_number ? <Tooltip classes="form-error" content={errors.phone_number} /> : null}
                    <input className="w-full bg-transparent outline-none border-none" type="tel" name="phone_number" id="phone_number" size="15" maxLength={15} value={values.phone_number} onBlur={handleBlur} onChange={handleChange} placeholder="Phone Number" />
                </div>
            </div>
            <div className="w-full flex justify-end space-x-4">
                <Button type="reset" bg="bg-gray-200" text="black" classes="w-full md:w-1/3" >Cancel</Button>
                <Button type="submit" classes="w-full md:w-1/3" >Save</Button>
            </div>
        </form>
    )
}

export default function Address() {
    const { user } = useUser()
    const { updateAddress } = useAddress()
    //state to handle loader component
    const [loader, setLoader] = useState(false)
    const onsubmit = async (values) => {
        setLoader(<Loader />)
        await updateAddress(values)
        setLoader(null)
    }

    return (
        <>
            <Head>
                <title>Addresses - UF</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {loader}
            <User>
                <AddressForm tag="shipping" heading="ADD OR CHANGE THE SHIPPING ADDRESS" onsubmit={onsubmit} />
                <AddressForm tag="billing" heading="ADD OR CHANGE THE BILLING ADDRESS" onsubmit={onsubmit} />
            </User>
        </>
    )
}