process.stdout.isTTY = true;
process.stderr.isTTY = true;

const winston = require('winston');
const chalk = require('chalk');

winston.addColors({
    warn: 'yellow',
    error: 'red',
    info: 'green',
});


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: []
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        timestamps: () => {
            return +new Date();
        },
        format: winston.format.printf(info => {
            const now = new Date();
            let ts = chalk.cyan(timestamps())
            let type = ' ' + chalk[winston.config.npm.colors[info.level]](info.level.toUpperCase()) + ' ';
            return ts + type + info.message;
        })
    }));
} else {
    logger.add(new winston.transports.File({ filename: 'error.log', level: 'error' }));
    logger.add(new winston.transports.File({ filename: 'combined.log' }));
}

module.exports = logger;

function padLeft(n, m, p) {
  p = p || '0';
  m = m || 2;
  n = n.toString();
  return n.length >= m ? n : new Array((m - n.length) + 1).join(p) + n;
}

function timestamps() {
    const now = new Date();
    return `[${padLeft(now.getHours())}:${padLeft(now.getMinutes())}:${padLeft(now.getSeconds())}]`;
}