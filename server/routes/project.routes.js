import express from 'express'
import projCtrl from '../controllers/project.controller.js'

const router = express.Router()

router.route('/api/projects').get(projCtrl.list)
router.route('/api/projects').post(projCtrl.create)
router.param('projectId', projCtrl.projectByID)
router.route('/api/projects/:projectId').get(projCtrl.read)
router.route('/api/projects/:projectId').put(projCtrl.update)
router.route('/api/projects/:projectId').delete(projCtrl.remove)

export default router