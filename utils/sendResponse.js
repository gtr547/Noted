export function sendResponse(res, statusCode, contentType, payLoad){
    res.setHeader("Constent-Type", contentType);
    res.statusCode = statusCode;
    res.end(payLoad);
}