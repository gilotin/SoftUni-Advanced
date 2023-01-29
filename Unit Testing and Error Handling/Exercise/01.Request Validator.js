function requestValidator(object) {
  let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  let patternUri = /^[\w.]+$/g;
  let supportedVer = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let patternMsg = ["<", ">", "\\", "&", `"`, `'`];

  if (!validMethods.includes(object.method)) {
    throw new Error(`Invalid request header: Invalid Method`);
  }
  if (!object.hasOwnProperty("uri")) {
    throw new Error(`Invalid request header: Invalid URI`);
  }
  if (object.uri !== "*" && !object.uri.match(patternUri)) {
    throw new Error(`Invalid request header: Invalid URI`);
  }
  if (!supportedVer.includes(object.version)) {
    throw new Error(`Invalid request header: Invalid Version`);
  }
  if (!object.hasOwnProperty("message")) {
    throw new Error(`Invalid request header: Invalid Message`);
  }
  for (let ch of object.message) {
    if (patternMsg.includes(ch)) {
      throw new Error(`Invalid request header: Invalid Message`);
    }
  }
  return object;
}
