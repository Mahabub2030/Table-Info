import { NavLink } from "react-router-dom";

const NavBar = () => {

        const Links = <>
             <div className="flex items-center bg-black py-4 px-4 rounded-lg text-blue-300">
             <li><NavLink to='./home'>Home</NavLink></li>
               <div className="flex gap-4 py-2 px-2 items-center drop-shadow-xl ">
               <li className=" hover:bg-blue-400 rounded-lg"><NavLink to='./landscipin'>Landsciping</NavLink></li>
                {/* <li><NavLink to='./home'>Landsciping</NavLink></li> */}
                <li className="btn btn-outline border-red-300"><NavLink to='./managment'>Managment</NavLink></li>
                <li className="btn btn-outline border-red-300"><NavLink to='./irrigation'>Irrigation</NavLink></li>
                <li className="btn btn-outline border-red-300"><NavLink to='./streetlight'>Street-Light</NavLink></li>
                <li className="btn btn-outline border-red-300"><NavLink to='./nursery'>Nursery</NavLink></li>
                <li className="btn btn-outline border-red-300"><NavLink to='./wastmanagment'>Wast-Managment</NavLink></li>
                <li className="btn btn-outline border-red-300"><NavLink to='./workshope'>Wrokshope</NavLink></li>
                <li className="btn btn-outline border-red-300"><NavLink to='./campeSecurety'>Campe & Securty</NavLink></li>
                <li className="btn btn-outline border-red-300"><NavLink to='./messhall'>Messhall</NavLink></li>
                <li className="btn btn-outline border-red-300"><NavLink to='./fenceRoadDrain'>Fence,Road,Drain</NavLink></li>
                {/* <li className="btn btn-outline border-red-300"><NavLink to='./DataTable'>Datatable</NavLink></li> */}
               </div>
             </div>
                

        </>

        return (
                <div className="navbar bg-base-100">
                        <div className="navbar-start">
                                <div className="dropdown">
                                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                {Links}
                                        </ul>
                                </div>
                                <a className="btn btn-ghost text-xl">daisyUI</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                        {Links}
                                </ul>
                        </div>
                        <div className="navbar-end">
                                <a className="btn">Button</a>
                        </div>
                </div>
        );
};

export default NavBar;