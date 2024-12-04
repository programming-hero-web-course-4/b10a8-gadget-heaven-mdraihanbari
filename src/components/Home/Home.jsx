import { useEffect, useState } from "react";
import bannerImg from "../../assets/banner.jpg";
import Gadget from "../Gadget/Gadget";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
 
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  return (
    <div>
      <div className="bg-[#9538E2] rounded-b-xl ">
        <h2 className="font-bold text-3xl text-white">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h2>
        <p className="leading-2 text-white my-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <button className="btn mb-56">Shop Now</button>
      </div>
      <div className="w-3/4 h-96 mx-auto  border-2 border-white relative bottom-40 rounded-xl bg-[#9538e202] ">
        <img className="p-3 h-96 w-full " src={bannerImg} alt="" />
      </div>
      <div>
        <h3 className="text-3xl font-bold">Explore Cutting-Edge Gadgets</h3>

        <div className="flex gap-2 ">
          <div className=" border my-6 ">
            <div className="flex flex-col w-full gap-2 mt-4">
            {
              gadgets.map(gadget=> <Sidebar key={gadget.product_id} gadget={gadget}></Sidebar>)
            }
            </div>
          </div>
          <div className="grid flex-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
            {gadgets.map((gadget) => (
              <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
