const nodemailer = require("nodemailer");
const env=require('./environment');
const { getMaxListeners } = require("process");
let transporter = nodemailer.createTransport(env.smtp);

  module.exports = {
    transporter: transporter,
}