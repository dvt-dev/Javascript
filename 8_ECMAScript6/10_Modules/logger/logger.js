
import { TYPE_LOG } from '../constants.js'

function logger(log, type = TYPE_LOG) {
    console[type](log);
}

export default logger;
// Một module chỉ có thể có 1 export default

