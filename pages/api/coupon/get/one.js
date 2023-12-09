import ConnectDB from "@/utils/connect_db"
import Coupon from "@/models/coupon"
import CorsMiddleware from "@/utils/cors-config"
import { HashValue } from "@/utils/generatePassword"

const getCoupon = async (req, res) => {
    try {
        const { coupon_code } = req.query
        await CorsMiddleware(req, res)
        if (req.method === 'GET') {
            await ConnectDB()

            const hashedCouponCode = HashValue(coupon_code)
            let coupon = await Coupon.finOne({ coupon_code: hashedCouponCode })
            delete coupon._id
            delete coupon.coupon_code
            res.status(200).json({
                success: true,
                msg: "",
                coupon
            })
        }
        else res.status(405).json({ success: false, msg: "Method not Allowed, you are using wrong request method!" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error, msg: "Internal Server Error occurred. Please retry" })
    }
}
export default getCoupon