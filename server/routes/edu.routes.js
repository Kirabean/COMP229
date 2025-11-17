import express from 'express'
import eduCtrl from '../controllers/edu.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/api/education').get(eduCtrl.list)
router.route('/api/education')
  .post(authCtrl.requireSignin, authCtrl.hasAdminRole, eduCtrl.create)
router.param('educationId', eduCtrl.educationByID)
router.route('/api/education/:educationId').get(eduCtrl.read)
router.route('/api/education/:educationId')
  .put(authCtrl.requireSignin, authCtrl.hasAdminRole, eduCtrl.update)
router.route('/api/education/:educationId')
  .delete(authCtrl.requireSignin, authCtrl.hasAdminRole, eduCtrl.remove)

export default router