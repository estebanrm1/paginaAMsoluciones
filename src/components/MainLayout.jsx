import BarraDeNavegacion from "./BarraDeNavegacion"
import Footer from "./Footer"


const MainLayout = ({children}) => {
  return (
    <>
    <div className="page-container">
    <BarraDeNavegacion></BarraDeNavegacion>
    <div className="content-wrap">
        <main>{children}</main>
    </div>
    <Footer></Footer>
    </div>
    </>
  )
}

export default MainLayout