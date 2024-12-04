import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  addToStoredCartList,
  getStoredCartList,
  getStoredWishList,
} from "../Utility/AddToDb";
import CartList from "../CartList/CartList";
import WishList from "../WishList/WishList";
import successfullPic from "../../assets/Group.png";

const Dashboard = () => {
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const allGadgets = useLoaderData();

  useEffect(() => {
    const storedCartList = getStoredCartList();
    const addCartList = allGadgets.filter((gadget) =>
      storedCartList.includes(gadget.product_id)
    );
    setCartList(addCartList);
  }, []);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const addWishList = allGadgets.filter((gadget) =>
      storedWishList.includes(gadget.product_id)
    );
    setWishList(addWishList);
  }, []);

  const handlePurches = () => {
    document.getElementById("purchesModal").showModal();
  };

  return (
    <div>
      <div className="bg-[#9538E2] text-white py-7">
        <h3 className="font-bold text-2xl">Dashboard</h3>
        <p className="font-light leading-tight">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices <br /> to the coolest accessories, we have
          it all!
        </p>

        {/* <div className="gap-4 flex justify-center py-8">
          <NavLink>
            {" "}
            <button className="btn btn-outline btn-sm ">Cart</button>
          </NavLink>
          <NavLink>
            {" "}
            <button className="btn  btn-outline  btn-sm ">Wishlist</button>
          </NavLink>
        </div> */}
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Cart</Tab>
            <Tab>Wish List </Tab>
          </TabList>

          <TabPanel>
            <div className="flex justify-between items-center">
              <h3 className="font-bold ">Cart </h3>
              <div className="flex gap-3 items-center">
                <h3>Total Price: </h3>
                <button className="btn btn-outline btn-sm font-bold text-[#9538E2] border-2-purple-600 hover:bg-[#9538e27a]">
                  Sort By Price{" "}
                </button>
                <button
                  onClick={handlePurches}
                  className="btn btn-sm bg-[#9538e284]"
                >
                  Purches
                </button>
              </div>
            </div>
            {cartList.map((gadget) => (
              <CartList key={gadget.product_id} gadget={gadget}></CartList>
            ))}
          </TabPanel>
          <TabPanel>
            <h2 className="font-bold text-start">Wish list </h2>
            {wishList.map((gadget) => (
              <WishList key={gadget.product_id} gadget={gadget}></WishList>
            ))}
          </TabPanel>
        </Tabs>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn hidden"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button>
      <dialog id="purchesModal" className="modal">
        <div className="modal-box">
          <div className="flex justify-center">
            <img src={successfullPic} alt="" />
          </div>
          <h3 className="font-bold text-lg py-3">Payment Successfully</h3>
          <hr />
          <p className="py-4">Thanks for Purchesing </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn w-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
