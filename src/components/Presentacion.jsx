import videoPresentacion from "../assets/A.M (1).mp4";
import '../style/Presentacion.css';
import { Link, NavLink } from "react-router-dom";

const Presentacion = () => {
return (
    <section className="video-container Black">
        <video className="full-screen-video" autoPlay muted loop>
            <source src={videoPresentacion} type="video/mp4"/>
        </video>
        <NavLink as={Link} to='/inicio'>
        <button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;INGRESAR&nbsp;</span>
            <span aria-hidden="true" class="hover-text">&nbsp;INGRESAR&nbsp;</span>
        </button>
        </NavLink>
        
    </section>
)
}

export default Presentacion