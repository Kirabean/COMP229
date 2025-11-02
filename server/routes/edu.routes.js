import express from 'express'
import eduCtrl from '../controllers/edu.controller.js'

const router = express.Router()

router.route('/api/education').get(eduCtrl.list)
router.route('/api/education').post(eduCtrl.create)
router.param('educationId', eduCtrl.educationByID)
router.route('/api/education/:educationId').get(eduCtrl.read)
router.route('/api/education/:educationId').put(eduCtrl.update)
router.route('/api/education/:educationId').delete(eduCtrl.remove)

export default router