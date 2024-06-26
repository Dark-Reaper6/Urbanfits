import CustomerServices from './index'
import Link from 'next/link'

export default function Delivery() {
    return (
        <CustomerServices>
            <h1 className="mb-7 text-lg lg:text-xl font_urbanist_bold">Delivery</h1>

            <div className="w-full mb-6 text-black text-sm rounded-lg font_urbanist_light">
                <p>Every order that is sent from our warehouse is carefully inspected. You can track and trace your order via MyAccount.
                    Delivery Times, Areas, Tracking, Damages, Collect in Store.</p> <br />
                <h1 className="mb-3 font_urbanist_medium">Delivery Times</h1>
                <p>We do our best to get your order to you as quickly as possible. Please look at the table below for information on delivery time, cost, partners and options that we have available:</p><br />
                <h1 className="my-3 font_urbanist_medium">Standard Delivery</h1>
                <table className="w-full mb-3 table-auto">
                    <thead className='font_urbanist_medium' >
                        <tr>
                            <td className='text-left' >Carrier</td>
                            <td className='text-left' >Expected Time</td>
                            <td className='text-left' >Cost</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DHL</td>
                            <td>2 - 3 working days (may take longer for <br /> remote regions)</td>
                            <td>Free Shipping except for Cash on Delivery,<br /> which attracts AED 50 handling cost</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    Once AWB (Air Way Bill Number used to track your shipments) is generated by the shipping department, customers will be intimated by registered email and mobile number.<br />
                    Customers can track their shipments on the shipping company's website by using the AWB number supplied. Links are: DHL (for UAE) <Link className='underline' target='blank' href="https://www.dhl.com/ae-en/home/tracking.html">https://www.dhl.com/ae-en/home/tracking.html</Link> <br />
                    Please also note that orders placed during the weekend or on (official) holidays, will be processed on the next working day. If we are unable to ship your goods within this timeframe we will inform you whenever possible.<br />
                    We cannot change your order (product, size, color, address) once it has been shipped.
                </p>
            </div>
            <div className="w-full my-6 text-black text-sm rounded-lg font_urbanist_light">
                <h1 className="mb-3 font_urbanist_medium">Track you order</h1>
                <p>
                    You can always track your order(s) anytime/24 hours per day via My Account. As soon as your order is dispatched from our warehouse we send you an email that will include a tracking number for your order with a link to track the package whenever you want to check on its progress.<br />
                    You can also track your order simply by entering your tracking number here. Please note that the tracking number only becomes active and shows the parcel progress when it has entered the destination country.<br />
                    Should you need any assistance, please do not hesitate to contact us.
                </p>
            </div>
            <div className="w-full my-6 text-black text-sm rounded-lg font_urbanist_light">
                <h1 className="mb-3 font_urbanist_medium">Damages</h1>
                <p>
                    Every order that we send from our warehouse is carefully inspected.<br />
                    Should you receive a damaged parcel, we kindly ask you to contact our customer service team:<br />
                    Before accepting your delivery, please inspect the carton and its content for any potential damage that may have occurred during the shipment.<br />
                    It’s normal for the carton to show some wear, however, if the damage is significant, then we kindly ask you to do the following:<br />
                    - If the damage is minor, please accept the parcel but make a note of the damage on the delivery receipt, sign and date it.<br />
                    - If the carton looks seriously damaged, you may refuse your order. Under this circumstance, please contact us immediately.<br />
                    When you contact our Customer Service Team, please have your order number, item number and tracking number (all this information is included in your shipment confirmation e-mail) along with your e-mail address and phone number at hand.<br />
                    We will do our best to exchange/refund your purchase amount as soon as we receive the returned item.<br />
                    Your order will be cancelled so that you can place a new order.<br />
                    If you notice damage after accepting your delivery, you can return your parcel using the enclosed supplier return stickers. For more information about returns click here.
                </p>
            </div>
        </CustomerServices>
    )
}
