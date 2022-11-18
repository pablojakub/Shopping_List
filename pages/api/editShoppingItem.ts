// api/editShoppingItem
import mongoose from 'mongoose';
import clientPromise from '../../lib/mongodb'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const data = req.body;
    const { id, shoppingListId } = data;
    const collectionId = new mongoose.Types.ObjectId(shoppingListId);

    const client = await clientPromise;
    const database = client.db('shoppinglist');
    const shoppingListCollection = database.collection('shoppinglist');
    const shoppingList = await shoppingListCollection.findOne({ _id: collectionId });

    const shoppingListItem = shoppingList!.find(item => item.id === id);
    shoppingListItem.isAdded = !shoppingListItem.isAdded

    // console.log(shoppingListItem)

    res.status(201).json({ message: id })
  }
}

export default handler