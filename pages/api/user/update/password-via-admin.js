import ConnectDB from "@/utils/connect_db"
import User from "@/models/user"
import CryptoJS from "crypto-js"
import StandardApi from "@/middlewares/standard_api"

const UpdateUserPasswordViaAdmin = async (req, res) => StandardApi(req, res, { method: "PUT", verify_admin: true }, async () => {
    const { user_id, admin_password, new_password, confirm_password } = req.body
    if (!user_id || !admin_password || !new_password || !confirm_password) return res.status(403).json({ success: false, msg: "All valid body parameters are required. Query parameters: user_id, admin_password, new_password, confirm_password" })
    else if (new_password !== confirm_password) return res.status(400).json({ success: false, msg: "new_password and confirm_password parameters must be same." })

    await ConnectDB()
    const originalAdminPassword = CryptoJS.AES.decrypt(admin.password, process.env.NEXT_PUBLIC_SECRET_KEY).toString(CryptoJS.enc.Utf8)
    if (admin_password !== originalAdminPassword) return res.status(403).json({ success: false, msg: "Your password is incorrect." })

    let user = await User.findById(user_id)
    if (!user) return res.status(404).json({ success: false, msg: "User not found" })
    if (user.register_provider !== "urbanfits") return res.status(404).json({ success: false, msg: "This user signed up with google therefore the password cannot be assigned." })
    const newUserPassword = CryptoJS.AES.encrypt(confirm_password, process.env.NEXT_PUBLIC_SECRET_KEY).toString()
    await User.findByIdAndUpdate(user_id, {
        password: newUserPassword
    })

    res.status(200).json({
        success: true,
        msg: `${user.username}'s password updated successfully.`
    })
})
export default UpdateUserPasswordViaAdmin