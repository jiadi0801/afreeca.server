const ProjectService = require('../services/ProjectService');
const RequestService = require('../services/RequestService');
const ResponseService = require('../services/ResponseService');

module.exports = {
    getServiceByName(name) {
        return this[name] || undefined;
    },
    projectService: new ProjectService(),
    requestService: new RequestService(),
    responseService: new ResponseService(),
}