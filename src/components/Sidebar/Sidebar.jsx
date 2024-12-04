import { Link } from "react-router-dom";


const Sidebar = ({gadget}) => {
    const {category,}= gadget;
    // console.log(typeof category)
    
    return (
        <div className="flex px-5 w-full ">
            
            <Link>
            <button className="btn w-full btn-outline ">{category}</button>
            </Link>
        </div>
    );
};

export default Sidebar;