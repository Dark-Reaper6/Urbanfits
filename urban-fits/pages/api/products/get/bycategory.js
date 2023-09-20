const mongoose = require('mongoose')
import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product";
import Category from "@/models/category";
import CorsMiddleware from "@/utils/cors-config"

const GetProductByCategory = async (req, res) => {
    try {
        await CorsMiddleware(req, res)
        if (req.method === 'GET') {
            const { id } = req.query;

            if (!id || !mongoose.Types.ObjectId.isValid(id))
                return res.status(400).json({
                    success: false,
                    msg: 'A valid category id is required. Query parameters: id',
                });

            await ConnectDB();

            const LIMIT = 50;
            let totalProducts = await Product.countDocuments({
                categories: { $in: [mongoose.Types.ObjectId(id)] }
            });

            const totalPages = Math.ceil(totalProducts / LIMIT);
            const page = parseInt(req.query.page) || 1;
            const skipProducts = (page - 1) * LIMIT;
            const products = await Product.find({ categories: { $in: [mongoose.Types.ObjectId(id)] } })
                .sort({ createdAt: -1 })
                .skip(skipProducts)
                .limit(LIMIT)
                .populate("categories");

            let childProducts = []
            if (page >= totalPages) {
                let category = await Category.findById(id);
                if (category && category.children.length !== 0) {
                    for (const child of category.children) {
                        let foundChildProducts = await Product.find({ categories: { $in: [child] } })
                            .sort({ createdAt: -1 })
                            .skip((page - 1) * LIMIT)
                            .limit(Math.ceil(category.children.length / LIMIT))
                            .populate("categories")

                        childProducts.push(...foundChildProducts)
                    }
                }
            }
            const finalProducts = products.concat(childProducts)

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
        } else res.status(405).json({ success: false, msg: 'Method not Allowed. Allowed methods: GET' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error, msg: "Internal Server Error occurred. Please retry later." })
    }
}

export default GetProductByCategory