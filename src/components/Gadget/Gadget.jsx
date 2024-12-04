import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const {product_id, product_title, price, product_image } = gadget;
  return (
    <div className="border bg-gray-100 px-5  rounded-xl">
      <img className="w-72  p-5" src={product_image} alt="" />
      <h3 className="text-start  font-bold">{product_title}</h3>
      <h3 className="text-start flex-grow ">Price: {price} $</h3>
      <Link to={`/gadgets/${product_id}`}>
        <button className="btn btn-outline my-4 flex justify-start text-violet-500">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Gadget;
