// api/editShoppingItem
import clientPromise from '../../lib/mongodb'

const handler = async (req, res) => {
  if (req.method === 'PUT') {
    const data = req.body;
    const { id, shoppingListName, isAdded } = data;

    const client = await clientPromise;
    const database = client.db('shoppinglist');
    const shoppingListCollection = database.collection('shoppinglist');
    const result = await shoppingListCollection.updateOne(
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
    res.status(201).json({ message: 'Udało się' })
  }
}

export default handler