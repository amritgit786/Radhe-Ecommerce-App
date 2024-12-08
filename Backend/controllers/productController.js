import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
// function for add product

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    );
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };
    // console.log(imagesUrl);
    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    return res
      .status(200)
      .json({ success: true, message: "Product uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for list product

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    return res
      .status(200)
      .json({ success: true, message: "Fetching products", products });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "error fetching products", error });
  }
};

// function for removing products

const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Products deleted successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({ message: "error removing product" });
  }
};

// function for Single Product info

const singleProductInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    return res
      .status(200)
      .json({ success: true, message: "Single product fetching", product });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching single products" });
  }
};

export { addProduct, listProducts, removeProduct, singleProductInfo };
