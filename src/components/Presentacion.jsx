import videoPresentacion from "../assets/A.M (1).mp4";
import sonidoPresentacion from "../assets/the-technology-corporate-198151.mp3"
import '../App.css';

const Presentacion = () => {
return (
    <>
    <div className="video-container">
    <video className="full-screen-video" autoPlay muted loop>
        <source src={videoPresentacion} type="video/mp4"/>
    </video>
    <div>
    <button>
    INGRESAR
    </button>
    </div>
    </div>
    </>
)
}

export default Presentacion