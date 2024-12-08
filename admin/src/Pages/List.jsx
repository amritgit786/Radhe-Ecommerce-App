import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const res = await axios.get(backendUrl + "/api/product/listproduct");
      if (res.data.success) {
        setList(res.data.products);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const res = await axios.delete(
        backendUrl + `/api/product/removeproduct/${id}`,
        {
          headers: {
            token,
          },
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        await fetchList();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* -------List TAble Title ---------*/}

        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center px-2 py-1 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Product Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* ----------- Product List ----------- */}

        {list.map((item, index) => {
          return (
            <div
              className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
              key={index + 1}
            >
              <img className="w-12" src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>
                {currency}
                {item.price}
              </p>
              <p
                className="text-right md:text-center cursor-pointer text-lg"
                onClick={() => removeProduct(item._id)}
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
