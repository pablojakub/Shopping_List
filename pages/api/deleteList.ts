import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { ListItem } from "../../components/types/globalTypes";
import clientPromise from '../../lib/mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'DELETE') {
      const data: ListItem = req.body;
      const mongoDbId = new ObjectId(data.id);

      console.log(data)
  
      const client = await clientPromise;
      const database = client.db('shoppinglist');
      const shoppingListCollection = database.collection('shoppinglist');
    const result = await shoppingListCollection.deleteOne({ _id: mongoDbId });
    if (result.deletedCount === 1) {
      return res.status(200).json({message: 'Item deleted successfully'})
    }
    return res.status(500)
      
    } 
    return res.status(405).json('method not allowed')
  }

  export default handler