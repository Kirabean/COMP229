import express from 'express'
import contactCtrl from '../controllers/contact.controller.js'

const router = express.Router()

router.route('/api/contact').get(contactCtrl.list)
router.route('/api/contact').post(contactCtrl.create)
router.param('contactId', contactCtrl.contactByID)
router.route('/api/contact/:contactId').get(contactCtrl.read)
router.route('/api/contact/:contactId').put(contactCtrl.update)
router.route('/api/contact/:contactId').delete(contactCtrl.remove)

export default router