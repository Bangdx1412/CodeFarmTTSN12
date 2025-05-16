import Product from "../models/Product.js";
export const getAllProducts = async (req,res) => {
	try {
		// api products
		const products = await Product.find();
		if (!products) {
			return res.status(404).json({ message: "Không tồn tại trang" });
		}
		return res.status(200).json(products);
	} catch (error) {
		return res.status(500).json({ message: "Lỗi server" });
	}
};
