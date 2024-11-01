import { pbkdf2Sync } from "crypto";
import dotenv from "dotenv";
dotenv.config();

const {
    SALT,
    ITERATIONS,
    KEYLEN,
    DIGEST
} = process.env

export const hashPassword = (password: string ): string => {
    const hashPassword = pbkdf2Sync(password, SALT as string, Number(ITERATIONS), Number(KEYLEN), DIGEST as string)
    return hashPassword.toString('hex')
}