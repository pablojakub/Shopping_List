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
    console.log(result)
  
      
    }
  }

  export default handler