import BarraDeNavegacion from "./BarraDeNavegacion"
import Footer from "./Footer"


const MainLayout = ({children}) => {
  return (
    <>
    <BarraDeNavegacion></BarraDeNavegacion>
        <main>{children}</main>
    <Footer></Footer>
    </>
  )
}

export default MainLayout