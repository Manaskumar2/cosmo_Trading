const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendOtp = async (message, phone) => {
    try {
        await client.messages.create({
                body: message,
                from: '',
                to: `+91${phone}`
            })
        return true;
    } catch (err) {
        console.log(err)
        return false
    }
}


module.exports = sendOtp