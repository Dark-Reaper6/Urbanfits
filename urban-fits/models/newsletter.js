const mongoose = require('mongoose')

const NewsletterSchema = mongoose.Schema({
    email: {
        type: String,
        unique: [true, "This email address is already in use"]
    },
    phone: {
        type: String,
        unique: [true, "This email address is already in use"]
    },
    gender: {
        type: String,
        required: [true, "Please enter a valid gender"]
    },
    interests: {
        type: Array,
        required: true
    },
    active_by_email: {
        type: Boolean,
        default: true
    },
    active_by_phone: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        set: function (value) {
            if (mongoose.Types.ObjectId.isValid(value)) {
                return mongoose.Types.ObjectId(value);
            }
            return value.toString();
        },
        default: 'guest'
    },

}, { timestamps: true })

module.exports = mongoose.models.Newsletter || mongoose.model("Newsletter", NewsletterSchema)