const { Schema } = require ("mongoose");

const requestSchema = new Schema(
    {
        fromId: String,
        requestType: String,
        accepted: Boolean,
        message: String,
        requestDate: Date, 
    }
);

module.exports = requestSchema;