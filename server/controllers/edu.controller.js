import Education from '../models/edu.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'

const create = async (req, res) => {
    const education = new Education(req.body)
    try {
        await education.save()
        return res.status(200).json(education)
    } catch (err) {
        return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
    }
}

const list = async (req, res) => {
    try {
        const items = await Education.find()
        res.json(items)
    } catch (err) {
        return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
    }
}

const educationByID = async (req, res, next, id) => {
    try {
        const item = await Education.findById(id)
        if (!item) return res.status(400).json({ error: 'Education not found' })
        req.education = item
        next()
    } catch (err) {
        return res.status(400).json({ error: 'Could not retrieve education' })
    }
}

const read = (req, res) => res.json(req.education)

const update = async (req, res) => {
    try {
        let item = req.education
        item = extend(item, req.body)
        item.updated = Date.now()
        await item.save()
        res.json(item)
    } catch (err) {
        return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
    }
}

const remove = async (req, res) => {
    try {
        const item = req.education
        const deleted = await item.deleteOne()
        res.json(deleted)
    } catch (err) {
        return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
    }
}

const removeAll = async (req, res) => {
    try {
        await Education.deleteMany({})
        res.json({ message: 'All education records removed' })
    } catch (err) {
        return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
    }
}

export default { create, list, educationByID, read, update, remove, removeAll }