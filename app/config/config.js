module.exports = {
    development: {
        dialect: 'mysql',
        database: 'afreeca',
        username: 'root',
        password: 'jingdongfe',
        host: '192.168.182.85',
        port: '22306'
    },
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: 'mysql',
    },
    tableNames: {
      'af_project': 'Project',
      'af_request_response': 'ReqRes',
      'af_request': 'Req',
      'af_response': 'Res',
      'af_tag_req': 'Tag',
      'sys_user': 'User'
    }
};