import express from "express";
import { saveSentEmails, getEmails, saveDraftEmails, moveEmailsToBin, toggleStarredEmails, deleteEmails } from "../controller/mailController.js";
const route = express.Router()

route.post('/emails/save', saveSentEmails)
route.get('/emails/:type', getEmails)
route.post('emails/save-draft', saveDraftEmails)
route.post('/emails/bin', moveEmailsToBin)
route.post('/emails/starred', toggleStarredEmails)
route.delete('/emails/delete', deleteEmails)

export default route