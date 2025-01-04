/**
 * Compares a given data with an encrypted hash to check if they match.
 *
 * @param data - The plain data (string or Buffer) to compare.
 * @param encrypted - The encrypted hash to compare against.
 * @returns A promise that resolves to a boolean indicating whether the data matches the encrypted hash.
 * @throws {InternalServerErrorException} If an error occurs during the comparison process.
 */
import { InternalServerErrorException } from "@nestjs/common";
import Loggin from 'library/Logging';
import * as bcrypt from 'bcrypt';
import Logging from "library/Logging";

export const hash = async (data: string, salt = 10): Promise<string> => {
    try {
        const generatedSalt = await bcrypt.genSalt(salt)
        return bcrypt.hash(data, generatedSalt)
    } catch (error) {
        Logging.error(error)
        throw new InternalServerErrorException('Something went wrong while hashing password')
    }
}

export const compareHash = async (data: string | Buffer, encryptedData: string): Promise<boolean> => {
    try {
        return bcrypt.compare(data, encryptedData)
    } catch (error) {
        Logging.error(error)
        throw new InternalServerErrorException('Something went wrong while comparing hash.')
    }
}