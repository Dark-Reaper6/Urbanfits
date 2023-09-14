const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"],
        maxLength: [30, "Username cannot exceed 30 characters"],
        minLength: [4, "Username should have more than 4 characters"],
        unique: [true, "This username is already in use"]
    },
    register_provider: {
        type: String,
        enum: ["urbanfits", "google", "apple"],
        default: "urbanfits"
    },
    image: {
        type: String,
        default: ""
    },
    phone_prefix: {
        type: String
    },
    phone_number: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Please enter a valid email address"],
        unique: [true, "This email address is already in use"],
    },
    password: {
        type: String,
        minLength: [8, "Password should be greater than 8 characters"]
    },
    two_fa_secret: {
        type: String,
        minLength: 20,
        select: false
    },
    two_fa_activation_date: Date,
    two_fa_enabled: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['guest', 'subscriber', 'customer', 'administrator', 'editor', 'author'],
        default: "customer"
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    title: {
        type: String
    },
    gender: {
        type: String
    },
    country: String,
    is_active: {
        type: Boolean,
        default: true
    },
    date_of_birth: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.models.User || mongoose.model("User", UserSchema)