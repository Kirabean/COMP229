import mongoose from 'mongoose'

const EducationSchema = new mongoose.Schema({
    title:      { type: String, trim: true, required: true },
    firstname:  { type: String, trim: true },
    lastname:   { type: String, trim: true },
    email:      { type: String, trim: true, match: /.+\@.+\..+/ },
    completion: Date,
    description:{ type: String },
    created:    { type: Date, default: Date.now },
    updated:    Date
})

export default mongoose.model('Education', EducationSchema)