import React from 'react'
import Button from '../buttons/simple_btn'
import Image from 'next/image'
import image from '@/public/card imgs/card img3.jpg'
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const OrderItem = (props) => {
    return (
        <div className={`w-full flex items-center py-3 px-1 border-b font_gotham text-[10px] md:text-xs ${props.index % 2 ? 'bg-white' : 'bg-gray-50'}`}>
            <span className="w-[10%]">{props.index}</span>
            <div className="w-[15%]">
                <div className="w-11 h-11 rounded-xl overflow-hidden">
                    <Image src={image} className='w-full h-full object-cover object-center' />
                </div>
            </div>
            <span className="w-[20%]">Order item number {props.index}</span>
            <span className="w-[29%]">Leather Shoe with high sole, 12 days replacement warrenty</span>
            <span className="w-[7.66%]">{3}</span>
            <span className="w-[9.66%]">$77.67</span>
            <span className="w-[8.66%]">${77.67 * 3}</span>
        </div>
    )
}

export default function Invoice(props) {

    const downloadInvoice = ()=> {
        const element = document.getElementById('invoice');
        html2canvas(element, {scale: 6}).then((canvas) => {
          canvas.toBlob(function(blob) {
            saveAs(blob, 'invoice.png');
          });
        });
      }

    const shareInvoice = ()=> {
        const element = document.getElementById('invoice');
        html2canvas(element).then((canvas) => {
          canvas.toBlob(function(blob) {
            const filesArray = [new File([blob], 'invoice.png', { type: 'image/png' })];
            const shareData = {
              files: filesArray,
            };
            if (navigator.share) {
              navigator.share(shareData)
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.log('Error sharing:', error));
            } else {
              alert('Share API not supported');
            }
          });
        });
      }
      
      

    if (props.show) return (
        <main className={`w-full h-screen overflow-y-scroll py-3 px-[5%] fixed left-0 top-0 z-50 bg-gray-200/40 backdrop-blur transition-all duration-500 ${props.show === false ? "opacity-0 pointer-events-none" : ''}`}>
            <div className="w-full h-full">
                <section className="w-full flex justify-between items-center">
                    <h1 className="font_gotham_medium text-lg md:text-3xl tracking-expand">INVOICE</h1>
                    <div className="flex items-center gap-2">
                        <Button onclick={props.toggleInvoice} bg='bg-white' text='black border' fontSize='text-[10px] md:text-xs' font='font_gotham tracking-widest'><i className="fa-solid fa-chevron-left mr-2"/>BACK</Button>
                        <Button onclick={downloadInvoice} bg='bg-gold' fontSize='text-[10px] md:text-xs' font='font_gotham tracking-widest'><i className="fa-solid fa-download text-white mr-2" />DOWNLOAD</Button>
                        <Button bg='bg-gold' fontSize='text-[10px] md:text-xs' font='font_gotham tracking-widest'><i className="fa-solid fa-print text-white mr-2" />PRINT</Button>
                        <Button onclick={shareInvoice} bg='bg-gold' fontSize='text-[10px] md:text-xs' font='font_gotham tracking-widest'><i className="fa-solid fa-share-nodes text-white mr-2" />SHARE</Button>
                    </div>
                </section>

                <section id='invoice' className="w-full px-[3.5%] py-7 bg-white rounded-3xl">
                    <h2 className="mb-4 font_gotham_medium text-base md:text-lg tracking-widiest">INVOICE #36</h2>
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col items-start justify-start font_gotham_light text-xs gap-y-2">
                            <h3 className="font_gotham text-xs md:text-sm">To</h3>
                            <span>Bilawal Ashraf</span>
                            <span>47 Elita Squre, VIP Chowk,</span>
                            <p className="font_gotham">Email: <span className="font_gotham_light">urbansoftware@gmail.com</span></p>
                            <p className="font_gotham">Phone: <span className="font_gotham_light">+91 5264 251 325</span></p>
                        </div>

                        <div className="flex justify-between items-start">
                            <div className="flex flex-col items-start justify-start font_gotham_light text-xs gap-y-2">
                                <h3 className="font_gotham text-xs md:text-sm">Detials</h3>
                                <span>Bilawal Ashraf</span>
                                <span>47 Elita Squre, VIP Chowk,</span>
                                <p className="font_gotham">Email: <span className="font_gotham_light">urbansoftware@gmail.com</span></p>
                                <p className="font_gotham">Phone: <span className="font_gotham_light">+91 5264 251 325</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full overflow-y-scroll mt-5">
                        <div className="w-full flex items-center py-3 px-1 border-b font_gotham text-sm">
                            <span className="w-[10%] text-gray-400">#</span>
                            <span className="w-[15%] text-gray-400">Image</span>
                            <span className="w-[20%] text-gray-400">Item</span>
                            <span className="w-[29%] text-gray-400">Description</span>
                            <span className="w-[7.66%] text-gray-400">Units</span>
                            <span className="w-[9.66%] text-gray-400">Unit-Cost</span>
                            <span className="w-[8.66%] text-gray-400">Total</span>
                        </div>
                        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                            return <OrderItem key={index} index={index} />
                        })}
                    </div>

                    <div className="w-full pt-10 flex flex-col items-end">
                        <div className="w-1/5 flex justify-between font_gotham text-[10px] md:text-xs gap-y-3">
                            <div className="flex flex-col gap-y-3">
                                <span>Subtotal</span>
                                <span>Vat</span>
                                <span>Total</span>
                            </div>

                            <div className="flex flex-col gap-y-3">
                                <span>${1134.58}</span>
                                <span>$100</span>
                                <span>${1034.58}</span>
                            </div>
                        </div>
                        <Button fontSize='text-[10px] md:text-xs' classes='w-1/5' font='font_gotham tracking-widest'>DOWNLOAD</Button>
                    </div>
                </section>
            </div>
        </main>
    )
}