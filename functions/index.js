/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'razaamjad057@gmail.com', // Your email
        pass: 'Abujiamiji@123', // Your email password
    },
});

// Cloud Function to send approval email
exports.sendApprovalEmail = functions.firestore.document('PapersQueueCollection/{paperId}').onUpdate((change, context) => {
    const before = change.before.data();
    const after = change.after.data();

    if (before.status !== 'approved' && after.status === 'approved') {
        const mailOptions = {
            from: 'razaamjad057@gmail.com',
            to: after.clientEmail, // Ensure clientEmail is stored in the paper data
            subject: 'Your Paper Has Been Approved',
            text: `Congratulations! Your paper titled "${after.title}" has been accepted.`,
        };

        return transporter.sendMail(mailOptions)
            .then(() => console.log('Approval email sent successfully'))
            .catch((error) => console.error('Error sending approval email:', error));
    }
});

// Cloud Function to send rejection email
exports.sendRejectionEmail = functions.firestore.document('PapersQueueCollection/{paperId}').onUpdate((change, context) => {
    const before = change.before.data();
    const after = change.after.data();

    if (before.status !== 'rejected' && after.status === 'rejected') {
        const mailOptions = {
            from: 'razaamjad057@gmail.com',
            to: after.clientEmail, // Ensure clientEmail is stored in the paper data
            subject: 'Your Paper Has Been Rejected',
            text: `Unfortunately, your paper titled "${after.title}" has been rejected. Reason: ${after.rejectionMessage || 'No reason provided.'}`,
        };

        return transporter.sendMail(mailOptions)
            .then(() => console.log('Rejection email sent successfully'))
            .catch((error) => console.error('Error sending rejection email:', error));
    }
});
