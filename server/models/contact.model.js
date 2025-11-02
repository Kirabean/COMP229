import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
    firstname: { type: String, trim: true, required: true },
    lastname:  { type: String, trim: true, required: true },
    email:     { type: String, trim: true, required: true, match: /.+\@.+\..+/ },
    created:   { type: Date, default: Date.now },
    updated:   Date,
    description: String
})

export default mongoose.model('Contact', ContactSchema)