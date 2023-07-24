import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"

const getManyProducts = async (req, res) => {
    try {
        if (req.method === 'GET') {
            await ConnectDB()
            const LIMIT = 50;
            let totalProducts = await Product.countDocuments();

            const totalPages = Math.ceil(totalProducts / LIMIT);
            const page = parseInt(req.query.page) || 1;
            const skipProducts = (page - 1) * LIMIT;
            const products = await Product.find()
                .sort({ createdAt: -1 })
                .skip(skipProducts)
                .limit(LIMIT)
                .populate("category");

            res.status(200).json({
                length: products.length,
                totalProducts,
                totalPages,
                currentPage: page,
                products
            })
        }
        else {
            res.status(405).json({ success: false, msg: "Method not Allowed, you are using wrong request method!" })
        }
    }
    catch (err) {
        res.status(500).send("Internal Server Error occurred. Please retry")
    }
}

export default getManyProducts