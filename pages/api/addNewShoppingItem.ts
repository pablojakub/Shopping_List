import { NextApiRequest, NextApiResponse } from 'next';
import { Int32 } from 'mongodb';
import clientPromise from '../../lib/mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body;

    const itemToInsert = {
      id: data.id,
      name: data.name,
      quantity: data.quantity,
      iconId: new Int32(data.iconId),
      price: data.price,
      isAdded: data.isAdded
    }

    const client = await clientPromise;
    const database = client.db('shoppinglist');
    const shoppingListCollection = database.collection('shoppinglist');
    const result = await shoppingListCollection.updateOne(
      { name: data.shoppingListName },
      { 
        $push: {
          shoppingList: itemToInsert
      }}
    );
    if (result.acknowledged) {
      return res.status(201).json({ message: 'Item was successfully added'})
    }
    return res.status(400).json({ message: 'Something went wrong' })
  }
}

export default handler;