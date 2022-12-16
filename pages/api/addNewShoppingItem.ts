import clientPromise from '../../lib/mongodb'

const handler = async (req, res) => {
    if (req.method === 'POST') {
      const data = req.body;
      const { id, shoppingListName, isAdded, price } = data;
  
      const client = await clientPromise;
      const database = client.db('shoppinglist');
      const shoppingListCollection = database.collection('shoppinglist');

    }

}