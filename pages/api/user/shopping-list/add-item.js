import ConnectDB from "@/utils/connect_db";
import mongoose from "mongoose";
import Shoppinglist from "@/models/shoppinglist";
import StandardApi from "@/middlewares/standard_api";

const AddInShoppinglist = async (req, res) => StandardApi(req, res, { method: "PUT" }, async () => {
    const { list_id, product_id } = req.query
    if (!mongoose.Types.ObjectId(list_id) || !mongoose.Types.ObjectId(product_id)) return res.status(403).json({ success: false, msg: "Valid shoppinglist id and list name are required. Query parameters: list_id, product_id" })
    await ConnectDB()

    let shoppinglist = await Shoppinglist.findById(list_id)
    if (!shoppinglist) return res.status(403).json({ success: false, msg: `The shopping list you want to add in does not exist.` })
    if (shoppinglist.products.length >= 50) return res.status(403).json({ success: false, msg: "Max limit reached, each shopping list can only contain 50 products." })
    if (shoppinglist.products.includes(mongoose.Types.ObjectId(product_id))) return res.status(403).json({ success: false, msg: "This item already exists in this shopping list." })
    shoppinglist = await Shoppinglist.findByIdAndUpdate(list_id, {
        $push: { products: mongoose.Types.ObjectId(product_id) }
    }, { new: true })

    res.status(200).json({
        msg: `Item added successfully.`,
        shoppinglist
    })
})
export default AddInShoppinglist