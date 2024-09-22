const { validateFile } = require('../utils/fileValidation');

function extractNumbersAndAlphabets(dataArray) {
    const numbers = [];
    const alphabets = [];
    let highestLowercase = null;

    dataArray.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item === item.toLowerCase()) {
                if (!highestLowercase || item > highestLowercase) {
                    highestLowercase = item;
                }
            }
        }
    });

    return { numbers, alphabets, highestLowercase };
}

exports.bfhlPost = (req, res) => {
    const { data, file_b64 } = req.body;
    const { numbers, alphabets, highestLowercase } = extractNumbersAndAlphabets(data);

    const fileInfo = validateFile(file_b64);

    res.status(200).json({
        is_success: true,
        user_id: "john_doe_17091999",  // Replace dynamically
        email: "john@xyz.com",  // Replace dynamically
        roll_number: "ABCD123",  // Replace dynamically
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
        file_valid: fileInfo.valid,
        file_mime_type: fileInfo.mimeType,
        file_size_kb: fileInfo.sizeKB
    });
};

exports.bfhlGet = (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
};
