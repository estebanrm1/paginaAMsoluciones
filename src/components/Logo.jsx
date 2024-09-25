import { Image } from "react-bootstrap"
import logo from "../assets/A.M.jpg"

const Logo = () => {
return (
    <div>
        <Image className="logo" src={logo} roundedCircle></Image>
    </div>
)
}

export default Logo