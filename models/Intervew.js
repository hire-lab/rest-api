const {Schema, model} = require('mongoose');

const schema = new Schema({
    job: {type: Schema.Types.ObjectId, ref: 'Job'},
    potentialCandidates: [{type: Schema.Types.ObjectId, ref: 'Candidate'}]
})

module.exports = model('Interview', schema)