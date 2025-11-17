import express from 'express'
import projCtrl from '../controllers/project.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/api/projects').get(projCtrl.list)
router.route('/api/projects')
  .post(authCtrl.requireSignin, authCtrl.hasAdminRole, projCtrl.create)
router.param('projectId', projCtrl.projectByID)
router.route('/api/projects/:projectId').get(projCtrl.read)
router.route('/api/projects/:projectId')
  .put(authCtrl.requireSignin, authCtrl.hasAdminRole, projCtrl.update)
router.route('/api/projects/:projectId')
  .delete(authCtrl.requireSignin, authCtrl.hasAdminRole, projCtrl.remove)

export default router