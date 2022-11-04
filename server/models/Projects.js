const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            required: true,
            unique: true,
        },
        alt: {
            type: String,
            required: true,
        },
        gitHub: {
            type: String,
            required: true,
            unique: true,
        },
        deployment: {
            type: String,
            required: true,
            unique: true,
        }
    }
);

const Projects = model("Projects", ProjectSchema);

module.exports = Projects;