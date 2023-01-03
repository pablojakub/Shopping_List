import { NextApiRequest, NextApiResponse } from 'next';
import { Int32 } from 'mongodb';
import clientPromise from '../../lib/mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body;

    console.log(data);

    const client = await clientPromise;
    const database = client.db('shoppinglist');
    const shoppingListCollection = database.collection('shoppinglist');
  }
    
}

export default handler;