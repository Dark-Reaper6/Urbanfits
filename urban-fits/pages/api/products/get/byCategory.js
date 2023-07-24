import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"
import Category from "@/models/category"
const mongoose = require('mongoose')

const GetProductByCategory = async (req, res) => {
    try {
        if (req.method === 'GET') {
            const { id } = req.query;

            if (!id || !mongoose.Types.ObjectId.isValid(id))
                return res.status(400).json({
                    success: false,
                    msg: 'A valid category id is required',
                });

            await ConnectDB();

            const LIMIT = 50;
            let totalProducts = await Product.countDocuments({
                category: mongoose.Types.ObjectId(id),
            });

            const totalPages = Math.ceil(totalProducts / LIMIT);
            const page = parseInt(req.query.page) || 1;
            const skipProducts = (page - 1) * LIMIT;
            const products = await Product.find({ category: mongoose.Types.ObjectId(id) })
                .sort({ createdAt: -1 })
                .skip(skipProducts)
                .limit(LIMIT)
                .populate("category");

            let childProducts = []
            if (page >= totalPages) {
                let category = await Category.findById(id);
                if (category && category.children.length !== 0) {
                    for (const child of category.children) {
                        let foundChildProducts = await Product.find({ category: child })
                            .sort({ createdAt: -1 })
                            .limit(Math.ceil(category.children.length / LIMIT))
                            .populate("category")

                        childProducts.push(...foundChildProducts)
                    }
                }
            }
            const finalProducts = [...products, ...childProducts]

            if (!finalProducts)
                return res.status(404).json({
                    success: false,
                    msg: 'No products found with corresponding category',
                });

            res.status(200).json({
                success: true,
                currentPage: page,
                totalPages,
                msg: `Products found with the category of id ${id}`,
                products: finalProducts,
            });
        } else {
            res.status(405).json({
                success: false,
                msg: 'Method not Allowed, you are using the wrong request method!',
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: 'Internal Server Error occurred. Please retry' });
    }
}

export default GetProductByCategory