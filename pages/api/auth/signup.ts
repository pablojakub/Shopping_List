import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import { hashPassword } from "../../../lib/auth";
import { mongoObjectId } from "../../../components/utils/createUUID";
import { ObjectId } from "mongodb";

interface UserInput {
    email: string,
    password: string,
}

async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        
        const { email, password }  = req.body as UserInput;
        //Validate
        if (!email || !email.includes('@') || !password) {
            res.status(422).json({ message: 'Invalid Data' });
            return;
        }
        //Connect with database
        const client = await clientPromise
        const db = client.db('shoppinglist');
        //Check existing
        const checkExisting = await db
            .collection('users')
            .findOne({ email: email });
        //Send error response if duplicate user is found
        if (checkExisting) {
            res.status(422).json({ message: 'User already exists' });
            client.close();
            return;
        }

        //Hash password
        const hashedPassword = await hashPassword(password);
        const mongoDbId = mongoObjectId();

        const status = await db.collection('users').insertOne({
            _id: new ObjectId(mongoDbId),
            email,
            password: hashedPassword,
        });
        //Send success response
        res.status(201).json({ message: 'User created', ...status });
        //Close DB connection
        client.close();
    } else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }
}

export default handler