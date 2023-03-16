
// Sử dụng module trung gian để export dữ liệu của module khác

// Kiểu thông thường
// import logger from './logger.js'
// export default logger;

// Cách viết tắt
export { default } from './logger.js'

// có thể export kiểu thường với tên bí danh
export { default as logger2 } from './logger.js'
// Bên file app.js có thể import kiểu thường
// import { logger2 } from './logger/index.js'
// logger2('Message...', consts.TYPE_WARN)