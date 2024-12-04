

const WishList = ({gadget}) => {
    const {price,description,product_image,product_title} = gadget;
    return (
        <div className="border flex items-center gap-5 p-3 my-5 bg-slate-100 rounded-lg">
            <div>
                <img className="w-52 rounded-2xl" src={product_image} alt="" />
            </div>
            <div className="text-start">
                <h3 className="font-bold text-xl">{product_title}</h3>
                <p className="opacity-60 my-3">{description}</p>
                <p className="font-bold ">Price: ${price}</p>
                <button className="btn btn-sm mt-3 text-white bg-[#9538E2]">Add Cart</button>
            </div>
        </div>
    );
};

export default WishList;