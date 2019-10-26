const bcrypt = require("bcrypt");
const saltRounds = 10;

export const hash = (plainText) => {
    return bcrypt.hash(plainText, saltRounds); 
};

export const compare = (plainText, hash) => {
    return bcrypt.compare(plainText, hash);
};