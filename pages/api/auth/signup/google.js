import ConnectDB from "@/utils/connect_db"
import { OAuth2Client } from 'google-auth-library';
import User from "@/models/user"
import UFpoints from "@/models/ufpoints"
import createUFcard from "@/utils/create-ufcard"
import axios from "axios"
import { sendNotification, sendAdminNotification } from "@/utils/send_notification"
import { SignJwt, SetSessionCookie } from "@/utils/cyphers";
import StandardApi from "@/middlewares/standard_api"
import UAParser from "ua-parser-js";

const SignupWithGoogle = async (req, res) => StandardApi(req, res, { method: "POST", verify_user: false, verify_admin: false }, async () => {
    const { token } = req.body;
    if (!token || token.length < 20) return res.status(400).json({ success: false, msg: "A valid google token as `credential` is required." })

    const googleClient = new OAuth2Client(process.env.CLIENT_ID);
    let ticket;
    try {
        ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
        });
    } catch (e) { return res.status(401).json({ success: false, msg: "Invalid token, user unauthorized. Please try registring again with valid google account." }) }
    const { name, email, picture } = ticket.getPayload();

    let username = email.split('@')[0]
    let splittedName = name.split(' ')
    let firstname = splittedName[0]
    splittedName.shift()
    let lastname = splittedName.join(' ')

    await ConnectDB();
    let user = await User.findOne().or([{ email }, { username }]);
    if (user) return res.status(409).json({ success: false, msg: "This Email or Username already in use." });

    const currentUserAgent = req.headers['user-agent']
    const parser = new UAParser(currentUserAgent)
    const ufCardData = await createUFcard()
    user = await User.create({
        email,
        username,
        firstname,
        lastname,
        image: picture,
        uf_wallet: ufCardData,
        user_agent: SignJwt(currentUserAgent),
        register_provider: "google"
    })
    await UFpoints.create({
        user_id: user._id,
        card_number: user.uf_wallet.card_number,
        points: 500,
        source: "signup"
    })
    axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/tasks/create-tasks-record?user_id=${user._id}`)

    SetSessionCookie(res, {
        _id: user._id,
        username: user.username,
        email: user.email,
        register_provider: user.register_provider,
        user_agent: user.user_agent,
        uf_wallet: user.uf_wallet,
        last_checkin: user.last_checkin,
        createdAt: user.createdAt,
        ...(user.role && { role: user.role })
    });

    res.status(200).json({
        success: true,
        msg: "You are Resgistered successfully !",
        session_token: SignJwt(user)
    })
    sendNotification(user._id, {
        category: "reward",
        heading: "Signup Bonus",
        type: "signup",
        mini_msg: `Congratulations, You won 500 UF Points as a signup bonus!`,
        message: `Congratulations ! You're a part of Urban Fits now. You got 500 UF Points as a signup bonus, Happy Shopping! Sign up device: ${parser.getOS()} - ${parser.getBrowser()}`
    }, { notify: true })
    sendAdminNotification({
        category: "user",
        data: {
            title: "New Signup",
            msg: `A new user ${user.username} just signed up with google through ${parser.getOS()} - ${parser.getBrowser()}.`,
            href: "/user/userlist",
            type: "success"
        }
    })
})
export default SignupWithGoogle