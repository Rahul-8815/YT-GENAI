const mongoose = require('mongooose')
const { applyTimestamps } = require('./user.model')


const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "tokken is required to be added in blacklist"]
    }
}, {
    timestamps: true  
})

const tokenblacklistModel = mongoose.model("blacklistTokens", blacklistTokenSchema)

module.exports = tokenBlacklistModel