const ProjectService = require('../services/ProjectService');

module.exports = {
    getServiceByName(name) {
        return this[name] || undefined;
    },
    projectService: new ProjectService()
}