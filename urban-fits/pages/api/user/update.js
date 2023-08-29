import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

const UpdateUser = async (req, res) => {
    try {
        if (req.method === 'PUT') {
            await ConnectDB()
            if (!req.query.id) return res.status(400).json({ success: false, msg: "User id not provided" })
            // authenticating user password if authpassword query exists
            if (req.query.authpassword) {
                let user = await User.findById(req.query.id)
                const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
                const originalPassword = bytes.toString(CryptoJS.enc.Utf8)
                if (req.query.authpassword !== originalPassword) return res.status(404).json({ success: false, msg: "Your password is incorrect" })
            }
            // updating the user profile
            let user = await User.findById(req.query.id)
            if (!user) return res.status(404).json({ success: false, msg: "User not found" })
            delete req.body.email
            await User.findByIdAndUpdate(req.query.id, req.body)
            user = await User.findById(req.query.id)
            const payload = jwt.sign({ ...user }, process.env.SECRET_KEY)
            res.status(200).json({
                success: true,
                msg: `Your data has been updated successfully`,
                payload
            })
        }
        else res.status(405).json({ success: false, msg: "bad request, you are using wrong request method!" })
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error occurred. Please retry")
    }
}

export default UpdateUser