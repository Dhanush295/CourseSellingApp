const bcrypt = require('bcryptjs');
const saltRounds = 10;

const hashPassword = (req) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    if (hashedPassword) {
        return hashedPassword;
    } else {
        throw new Error('Error hashing the password');
    }
};

const comparePasswords = (req, hashedPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(req.headers.password, hashedPassword, (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = { hashPassword, comparePasswords };
