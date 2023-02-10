import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb'
import { NewList } from '../../components/Modal/Modal.types';
import { mongoObjectId } from '../../components/utils/createUUID';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data: NewList = req.body;

    console.log(data);

    const client = await clientPromise;
    const database = client.db('shoppinglist');
    const shoppingListCollection = database.collection('shoppinglist');
    const dataDonor = await shoppingListCollection.findOne({ _id: data.id.toLowerCase() });

    if (dataDonor) {
      const mongoDbId = mongoObjectId()
      dataDonor._id = new ObjectId(mongoDbId);
      dataDonor.isDonor = false;
      dataDonor.name = data.name;
      dataDonor.email = data.email;
      const result = await shoppingListCollection.insertOne(dataDonor);

      result.acknowledged
        ? res.status(201).json({ message: 'Successfully added new list' })
        : res.status(400).json({ message: 'Something went wrong' })
    }
    res.status(500).json({ message: 'Internal server error. Please contact support'})
  }
}

export default handler;