import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
    lastname: {
        type: String,
        required: [
            true,
            errorRequiredMessage("un titre"),
        ],
        trim: true,
    },
    firstname: {
        type: String,
        required: [
            true,
            errorRequiredMessage("un titre"),
        ],
        trim: true,
    },
    content: {
        type: String,
        maxlength: [
            200,
            'Le champ "contenu" ne peut pas dépasser 200 caractères',
        ],
        trim: true,
    },
    email: {
        type: String,
        required: [
            true,
            errorRequiredMessage("un titre"),
        ],
        trim: true,
    },
});