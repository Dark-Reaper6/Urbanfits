import React, { useState, useEffect } from 'react'
import useUser from '@/hooks/useUser';
import User from '..';
import Link from 'next/link'
import CreateShopListModal from '@/components/modals/createshoppinglist';
import useShoppingList from '@/hooks/useShoppingList';
import Head from 'next/head';
import Loader from '@/components/loaders/loader';
import { EditIcon } from '@/public/accountIcons';

export default function EmailPassword() {
    const { user } = useUser()
    const { lists, getShoppingLists, listLoading } = useShoppingList()
    const [listModal, setListModal] = useState(false)

    useEffect(() => {
        getShoppingLists()
    }, [])

    if (window.matchMedia('(max-width: 760px)').matches) return <>
        <Head><title>Email</title></Head>
        <main className='w-screen h-screen bg-white flex flex-col transition-all duration-500'>
            <div className="w-full p-4 border-b border-gray-50 flex justify-between items-center">
                <Link href="/user/myaccount" className='fa-solid fa-chevron-left text-xl'></Link>
                <h1 className="font_urbanist_medium text-lg">Shopping Lists</h1>
                <i className='w-0 h-0' />
            </div>
            <div className="w-full mt-7 px-4 flex flex-col">
                <button className="w-1/2 py-4 flex flex-col justify-center items-center font_urbanist text-sm md:text-base lg:text-lg border border-dashed border-black">
                    +<span>Create a Shopping List</span>
                </button>
            </div>
        </main>
    </>
    else return <>
        <Head><title>Shopping Lists - Urban Fits</title></Head>
        {listLoading ? <Loader /> : null}
        <CreateShopListModal show={listModal} setListModal={setListModal} />
        <User>
            <section className="w-full mt-10">
                {lists && lists.length ? lists.map((list, index) => {
                    return <div key={index} className="group w-full mb-3 p-3 flex justify-between items-center border border-transparent bg-gray-50 hover:border-gray-100 hover:bg-white rounded-xl hover:rounded-md shadow-lg transition-all duration-500 overflow-hidden">
                        <Link href={`/user/shopping-lists/${list._id}`} className="w-3/5 h-full">
                            <h2 className="group-hover:translate-y-1/2 font_urbanist_bold transition-all duration-500">{list.name}</h2>
                            <h3 className="font_urbanist_medium text-sm group-hover:translate-y-20 transition-all duration-500">{list.products.length} Products</h3>
                        </Link>
                        <div className="flex items-center">
                            <button className="fa-regular fa-trash-can text-sm hover:bg-black hover:text-white transition-all px-3 py-2 rounded-full" />
                            <button className="fa-regular fa-pen-to-square text-sm mr-10 ml-2 hover:bg-black hover:text-white transition-all px-3 py-2 rounded-full"></button>
                            <i className="text-sm fa-solid fa-chevron-right mr-7 group-hover:translate-x-3 transition-all duration-500" />
                        </div>
                    </div>
                }) : null}
                <button onClick={() => setListModal(true)} className="w-60 mt-10 py-5 flex flex-col justify-center items-center font_urbanist text-sm border border-dashed border-black">
                    +<span>Create a Shopping List</span>
                </button>
            </section>
        </User>
    </>
}