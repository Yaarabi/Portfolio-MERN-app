
import "./header.css"

const Header = (props) => {
    return (
        <nav>
            <div>
                <img src="/assets/home.png" alt="" height={"30px"} />
                <h2>Portfolio</h2>
            </div>
            <input type="search"
                placeholder="search 🔍​"
            />
            <div>
                <h2>{ props.name }</h2>
                <img src="/assets/user (2).png" alt="" height={"30px"} />
            </div>
        </nav>
    )
}

export default Header
