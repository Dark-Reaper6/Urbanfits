import ConnectDB from "@/utils/connect_db"
import User from "@/models/user";
import Addresses from "@/models/addresses";
import UFpoints from "@/models/ufpoints";
import Newsletter from "@/models/newsletter";
import Notification from "@/models/notification";
import Shoppinglist from "@/models/shoppinglist";
import Order from "@/models/order";
import mongoose from "mongoose";
import CorsMiddleware from "@/utils/cors-config"

// Only accessable by Admin 
const DeleteUsers = async (req, res) => {
    try {
        await CorsMiddleware(req, res)
        if (req.method === 'PUT') {
            const { user_id } = req.query
            const { users } = req.body
            if (!user_id || !mongoose.Types.ObjectId(user_id)) return res.status(403).json({ success: false, msg: "A valid user id required." })

            await ConnectDB()
            let user = await User.findById(user_id)
            if (!user || user.role !== "administrator") return res.status(403).json({ success: false, msg: "The user with corresponding id must exist and should be administrator create categories" })

            if (!users || users.length === 0) return res.status(400).json({ success: false, msg: "Products array is required with atleast one valid id." })
            else {
                await User.deleteMany({ _id: { $in: users } })
                await Addresses.deleteMany({ user_id: { $in: users } })
                await Newsletter.deleteMany({ user: { $in: users } })
                await Notification.deleteMany({ user_id: { $in: users } })
                await Order.deleteMany({ user_id: { $in: users } })
                await Shoppinglist.deleteMany({ user_id: { $in: users } })
                await UFpoints.deleteMany({ user_id: { $in: users } })
                res.status(200).json({
                    success: true,
                    msg: `${users.length} users deleted successfully`
                })
            }
        }
        else res.status(405).json({ success: false, msg: "Method not Allowed. Allowed methods: PUT" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error, msg: "Internal Server Error occurred. Please retry." })
    }
}

export default DeleteUsers