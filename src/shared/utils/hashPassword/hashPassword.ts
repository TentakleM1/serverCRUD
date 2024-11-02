import { pbkdf2Sync } from "crypto";
import dotenv from "dotenv";
import { config } from "../../../config";
dotenv.config();

const {
    salt,
    iterations,
    keylen,
    digest
} = config

export const hashPassword = (password: string ): string => {
    const hashPassword = pbkdf2Sync(password, salt, iterations, keylen, digest)
    return hashPassword.toString('hex')
}