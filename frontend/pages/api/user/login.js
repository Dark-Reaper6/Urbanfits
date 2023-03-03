import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
const CryptoJS = require("crypto-js")
import NextCors from 'nextjs-cors';
const jwt = require("jsonwebtoken")

const Login = async (req, res) => {
    try {
        await NextCors(req, res, {
            // Options
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        });
        if (req.method === 'POST') {
            await ConnectDB()
            let user = await User.findOne({ email: req.body.email })
            if (!user) user = await User.findOne({ username: req.body.email })
            if (!user) return res.status(404).json({ success: false, msg: "User not found, please create an account" })
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8)
            if (req.body.password !== originalPassword) return res.status(404).json({ success: false, msg: "Your password is incorrect" })
            const payload = jwt.sign({ ...user }, process.env.SECRET_KEY)
            res.status(200).json({
                success: true,
                msg: "You are Logged in successfully !",
                payload
            })
        }
        else {
            res.status(400).json({ success: false, msg: "bad request, you are using wrong request method!" })
        }
    }
    catch (error) {
        res.status(500).json({ success: false, msg: "Internal server error occured, please try again later" })
    }
}
export default Login