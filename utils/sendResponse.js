export function sendResponse(res, statusCode, contentType, payLoad){
    res.setHeader("Content-Type", contentType);
    res.statusCode = statusCode;
    res.end(payLoad);
}