import express from 'express'
import contactCtrl from '../controllers/contact.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/api/contact').get(contactCtrl.list)
router.route('/api/contact').post(contactCtrl.create)
router.param('contactId', contactCtrl.contactByID)
router.route('/api/contact/:contactId').get(contactCtrl.read)
router.route('/api/contact/:contactId')
  .put(authCtrl.requireSignin, authCtrl.hasAdminRole, contactCtrl.update)
router.route('/api/contact/:contactId')
  .delete(authCtrl.requireSignin, authCtrl.hasAdminRole, contactCtrl.remove)

export default router