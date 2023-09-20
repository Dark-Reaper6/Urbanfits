import OTP from "@/models/otp";
import User from "@/models/user";
import ConnectDB from "@/utils/connect_db";
const CryptoJS = require("crypto-js")
import CorsMiddleware from "@/utils/cors-config"

const AuthOtpAndChangeEmail = async (req, res) => {
    try {
        await CorsMiddleware(req, res)
        if (req.method === 'PUT') {
            const { otp_id, otp, } = req.body;
            if (!otp_id || !otp) return res.status(400).json({ success: false, msg: "All valid parameters required. Body Parameters: otp_id, otp" })
            await ConnectDB()
            const dbOtp = await OTP.findById(otp_id)
            if (!dbOtp) return res.status(401).json({ success: false, msg: "OTP has expired." })
            if (otp !== dbOtp.otp) return res.status(401).json({ success: false, msg: "Incorrect OTP" })
            const newPassword = CryptoJS.AES.encrypt(dbOtp.new_password, process.env.SECRET_KEY).toString()
            await User.findByIdAndUpdate(dbOtp.user_id, {
                password: newPassword
            }, { new: true })

            res.status(200).json({
                success: true,
                msg: "Your password has been updated!"
            })
        }
        else res.status(405).json({ success: false, msg: "Method not allowed, Allowed Methods: PUT" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error, msg: "Internal server error occurred, please try again later." })
    }
}

export default AuthOtpAndChangeEmail