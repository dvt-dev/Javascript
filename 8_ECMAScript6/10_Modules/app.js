
// Destructuring (phân rã) một đối tượng
// import { TYPE_ERROR, TYPE_LOG, TYPE_WARN } from "./logger.js"

// * hoặc dùng dấu phẩy để gộp cả 2 trong 1 import
// nếu cả 2 cùng trong 1 file
// (gộp cả logger với các loại TYPE_...)
// import logger, {
//     TYPE_ERROR,
//     TYPE_LOG,
//     TYPE_WARN } from './logger.js'

import logger from './logger/index.js';

// import export không phải default
import {
    TYPE_LOG,
    TYPE_WARN, 
    TYPE_ERROR
} from './constants.js';

/**
 * Không dùng destructuring
 * -- Constants nhận được là 1 đối tượng chứa các export không phải default
 * -- * là lấy tất cả
 * -- as là alidas: bí danh
 */

import * as constants from './constants.js';
console.log(constants);

// logger('Test message...', TYPE_LOG);

// -----

import { logger2 } from './logger/index.js';
logger2('Test message...', TYPE_WARN);
