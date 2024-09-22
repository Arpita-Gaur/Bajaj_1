exports.validateFile = (base64Str) => {
    if (!base64Str) return { valid: false, mimeType: null, sizeKB: 0 };

    // Basic validation
    const mimeType = 'image/png';  // Assume PNG for this example
    const sizeKB = Buffer.byteLength(base64Str, 'base64') / 1024;

    return { valid: true, mimeType, sizeKB };
};
