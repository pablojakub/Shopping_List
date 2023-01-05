import { NextApiRequest, NextApiResponse } from 'next';
import { Int32 } from 'mongodb';
import clientPromise from '../../lib/mongodb'
import { NewItem } from '../../components/Modal/Modal.types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data: NewItem = req.body;

    const client = await clientPromise;
    const database = client.db('shoppinglist');
    const shoppingListCollection = database.collection('shoppinglist');
    const dataDonor = await shoppingListCollection.findOne({ name: data.name })
  }

}

export default handler;