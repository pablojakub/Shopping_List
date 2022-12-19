import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body;
    const { id, shoppingListName, isAdded, price, iconId, name, quantity } = data;

    const itemToInsert = {
      id: id,
      name: name,
      quantity: quantity,
      iconId: iconId,
      price: price,
      isAdded: isAdded
    }

    const client = await clientPromise;
    const database = client.db('shoppinglist');
    const shoppingListCollection = database.collection('shoppinglist');
    const result = await shoppingListCollection.updateOne(
      { name: shoppingListName },
      { $push: { itemToInsert }}
    );
    console.log(result);
  }
}

export default handler;