const ProjectService = require('../services/ProjectService');
const RequestService = require('../services/RequestService');

module.exports = {
    getServiceByName(name) {
        return this[name] || undefined;
    },
    projectService: new ProjectService(),
    requestService: new RequestService(),
}