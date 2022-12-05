// api/editShoppingItem
import { Int32 } from 'mongodb';
import clientPromise from '../../lib/mongodb'

const handler = async (req, res) => {
  if (req.method === 'PUT') {
    const data = req.body;
    const { id, shoppingListName, isAdded, price } = data;

    const client = await clientPromise;
    const database = client.db('shoppinglist');
    const shoppingListCollection = database.collection('shoppinglist');

    console.log(price);

    if (isAdded !== undefined) {
      await shoppingListCollection.updateOne(
        {
          "name": shoppingListName,
          "shoppingList.id": id,
        },
        {
          '$set': {
            "shoppingList.$.isAdded": !isAdded
          }
        }
      )
    } else {
      await shoppingListCollection.updateOne(
        {
          "name": shoppingListName,
          "shoppingList.id": id,
        },
        {
          '$set': {
            "shoppingList.$.price": new Int32(price),
          }
        }
      )
    }
    res.status(201).json({ message: 'Udało się' })
  }
}

export default handler