import dbConnect from '../../../utils/dbConnect';
import Item from '../../../models/Item';
import { } from 'lodash';

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    await dbConnect();

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const item = await Item.find({ title: id });
                if (!item) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: item });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        // case 'PUT' /* Edit a model by its ID */:
        //     try {
        //         const item = await Item.findByIdAndUpdate(id, req.body, {
        //             new: true,
        //             runValidators: true,
        //         });
        //         if (!item) {
        //             return res.status(400).json({ success: false });
        //         }
        //         res.status(200).json({ success: true, data: item });
        //     } catch (error) {
        //         res.status(400).json({ success: false });
        //     }
        //     break;

        // case 'DELETE' /* Delete a model by its ID */:
        //     try {
        //         const deletedItem = await Item.deleteOne({ _id: id });
        //         if (!deletedItem) {
        //             return res.status(400).json({ success: false });
        //         }
        //         res.status(200).json({ success: true, data: {} });
        //     } catch (error) {
        //         res.status(400).json({ success: false });
        //     }
        //     break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}
