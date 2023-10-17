import UFpoints_history from "@/models/ufpoints_history"
import axios from "axios";

const SavePointsHistory = async (user_id, card_number, update) => {
    try {
        const {
            earned = 0,
            spent = 0
        } = update;
        const monthNames = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];

        const { data } = await axios.get(`${process.env.HOST}/api/user/uf-wallet/get-balance?user_id=${user_id}&card_number=${card_number}`)
        console.log(data)

        const currentDate = new Date();
        const startOfDay = new Date(currentDate).setHours(0, 0, 0, 0);
        const endOfDay = new Date(currentDate).setHours(23, 59, 59, 999);
        await UFpoints_history.findOneAndUpdate({
            user_id,
            card_number,
            createdAt: {
                $gte: startOfDay,
                $lte: endOfDay,
            }
        },
            {
                $inc: { earned: earned, spent: spent },
                month: monthNames[currentDate.getMonth()],
                year: currentDate.getFullYear(),
                balance: data.balance,
            }, { upsert: true })
    } catch (error) { console.log(error) }
}
export default SavePointsHistory