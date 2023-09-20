const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    notifications: [
        {
            cateogry: {
                type: String,
                default: "account",
                enum: ["account", ""]
            },
            heading: String,
            message: {
                type: String,
                required: true
            },
            href: String,
            seen: {
                type: Boolean,
                default: false
            },
            timestamp: Date
        }
    ],
    description: String
}, { timestamps: true })

module.exports = mongoose.models.Notification || mongoose.model("Notification", NotificationSchema)