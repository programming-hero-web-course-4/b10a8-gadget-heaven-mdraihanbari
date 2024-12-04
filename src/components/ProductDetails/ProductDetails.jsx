import { useLoaderData, useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { RiStarSFill } from "react-icons/ri";
import { addToStoredCartList, addToStoredWishList } from "../Utility/AddToDb";

const ProductDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();

  const gadget = data.find((gadget) => gadget.product_id === product_id);

  const { product_image,description,price,product_title,specification,rating,availability} = gadget;

  //card list add section 
  const handleAddtoCard =(id)=>{
    
    addToStoredCartList(id)
  }
  //wish list add section 
  const handleAddToWishList =(id)=>{

    addToStoredWishList(id)
  }

  return (
    <div>
      <div className="bg-[#9538E2] text-white relative pb-48 mb-96 ">
        <h2>Product Details</h2>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="w-3/4 border absolute top-28 left-40 rounded">
          <div className="hero bg-slate-200 h-96">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={product_image}
                className="w-72 rounded-lg shadow-2xl"
              />
              <div className="text-start">
                <h1 className="text-2xl text-black font-bold">{product_title}</h1>
                <h5 className="text-xl text-black font-semibold">Price: ${price}</h5>
                <button className="btn btn-xs text-[#309C08] bg-[#2f9c082e] btn-outline">{availability?'In Stock':'Stok Out'}</button>
                <p className="py-3 text-black opacity-60 font-medium">
                  {description}
                </p>
                <h3 className="font-bold text-black ">Specification:</h3>
                
                {
                    specification.map((productdetails, index)=> <li className="list-decimal opacity-60 text-black" key={index}>{productdetails}</li> )
                }
                <div className="flex items-center gap-1">
                  <span className="font-bold text-black">Rating: {rating} </span>
                  <RiStarSFill className="text-yellow-500" />
                  <RiStarSFill className="text-yellow-500" />
                  <RiStarSFill className="text-yellow-500" />
                  <RiStarSFill className="text-yellow-500" />
                  <RiStarSFill className="text-yellow-100" />
                  
                  
                </div>
                <div className="flex gap-4 items-center">
                <button onClick={()=>handleAddtoCard(product_id)} className="btn btn-sm bg-[#9538E2] text-white">Add to Card <FaCartShopping /> </button>
                <div className="border rounded-full border-black p-1">
                <CiHeart onClick={()=>handleAddToWishList(product_id)} className="text-2xl text-black " />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
