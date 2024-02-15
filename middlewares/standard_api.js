import ConnectDB from "@/utils/connect_db";
import mongoose from "mongoose";
import User from "@/models/user";
import CorsMiddleware from "@/utils/cors-config";
import { sendAdminNotification } from "@/utils/send_notification";
import { verify } from "jsonwebtoken"
import { adminRoles } from "@/uf.config";
import { parse } from "cookie";

export default async function StandardApi(req, res, { method = "GET", verify_user = true, verify_admin = false }, next) {
    try {
        await CorsMiddleware(req, res)
        if (req.method === method) {
            console.log(req.headers.host)

            if (verify_user || verify_admin) try {
                const { "session-token": sessionToken } = parse(req.headers.cookie || '')
                if (!sessionToken) return res.status(401).json("invalid session token");
                const decodedToken = verify(sessionToken, process.env.NEXT_PUBLIC_SECRET_KEY);
                if (!mongoose.Types.ObjectId.isValid(decodedToken._id)) throw new Error("invalid session token");
                // if (decode(decodedToken.user_agent) !== req.headers['user-agent']) throw new Error("invalid session token");
                if (verify_admin) {
                    await ConnectDB()
                    let admin = await User.findById(admin_id)
                    if (!admin || !adminRoles.includes(admin.role)) throw new Error("invalid session token");
                }
                req.user = decodedToken;
                await next()
            } catch (error) {
                console.log(error)
                return res.status(401).json({ success: false, error, msg: "Your session is invalid or expired. Please sign in again." })
            }
            else await next()

        } else return res.status(405).json({ success: false, msg: `Method not allowed, Allowed methods: '${method}'` })
    } catch (error) {
        console.log(error);
        sendAdminNotification({
            category: "system",
            data: {
                title: "System Error",
                msg: `A system error occurred in "${req.url}" .`,
                description: `Error Message: ${error.message}\n Stack trace: ${error.stack}`,
                type: "error"
            }
        })
        return res.status(500).json({ success: false, msg: "Internal Server Error occurred, please try again in a while.", error })
    }
}