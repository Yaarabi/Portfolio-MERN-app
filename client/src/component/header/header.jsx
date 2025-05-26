
// import "./header.css"
import { FaUser, FaHome } from "react-icons/fa"

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-sm w-100 d-flex justify-content-evenly bg-primary text-white" style={{ height: "15vh" }}>
            <div className="navbar-nav w-25 d-flex justify-content-start gap-2">
                {/* <img  src="/assets/home.png" alt="" height={"30px"} width={"30px"} /> */}
                <FaHome size={30} />
                <h2>Portfolio</h2>
            </div>
            <input type="search"
            className="form-control w-25"
            style={{ height: "30px" }}
                placeholder="search 🔍​"
            />
            <div className="navbar-nav w-25 d-flex justify-content-end gap-2">
                <h2>{ props.name }</h2>
                <FaUser size={30} />
                {/* <img src="/assets/user (2).png" alt="" height={"30px"} width={"30px"} /> */}
            </div>
        </nav>
    )
}

export default Header
