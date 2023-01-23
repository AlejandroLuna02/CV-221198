import Foto from '../../assets/img/mifoto.svg'
import { data } from '../../dataBase/data'
import '../../assets/Styles/Header.css'

function Header() {
    return ( 
        <header>
            <div className='container1'>
                <div className='contact'>
                    <img src={Foto} alt="yo" className='img' />
                    <h3 className='profession'>{data.profession}</h3><br />

{/* ------------------------------------------------Datos de contacto ------------------------------------------------------ */}

                    <h2 className='datos'>DATOS DEL CONTACTO</h2><br />
                        <h3><img src={data.icoUser} alt="" className='icon-Perfil' /> Nombre:</h3>
                            <p className='name'>{data.name}</p>
                                <h3><img src={data.icoUbication} alt="" className='icon-Ubicacion' /> Ubicacion:</h3>
                                    <p className='ubication'>{data.ubication}</p>
                                        <h3><img src={data.icoPhone} alt="" className='icon-phone' /> Telefono:</h3>
                                            <p className='phone'>{data.phone}</p>
                                                <h3><img src={data.icoFacebook} alt="" className='icon-facebook'/> Facebook:</h3>
                                                    <p className='facebook'>{data.facebook}</p>
                                                        <h3><img src={data.icoInstagram} alt="Instagram:" className='icon-instagram' /> Instagram:</h3>
                                                            <p className='instagram'>{data.instagram}</p><br /><br />

{/* ----------------------------------------Sobre mi-------------------------------------------------------------------- */}

                    <h2 className='sobre-mi'>SOBRE MI</h2><br />
                        <img src={data.icoMundo} alt="" className='icon-mundo'/>
                            <p className='info'>{data.aboutUs}</p>
                </div>
            </div>
            <div className='container2'>
                <div className='aboutUs'>

{/* -------------------------------------------------------------------------------------------------------------------------- */}

                    <h1 className='formacion'><img src={data.icoFormacion} alt="" className='icon-formacion'/>FORMACION ACADEMICA</h1>
                        <p className='telesecundaria'>{data.telesecundaria}</p>
                            <p className='preparatoria'>{data.preparatoria}</p>
                                <p className='universidad'>{data.universidad}</p>

{/* -------------------------------------------------------------------------------------------------------------------------- */}
                    <h1 className='habilidades'><img src={data.icoHabilidades} alt="" className='icon-habilidades'/> HABILIDADES</h1>
                    <div className='about skills'>
                        <div className='box'>
                            <p className='javascript'>{data.javascript}</p>
                            <div className='percent'></div>
                        </div>
                        <div className='box'>
                            <p className='java'>{data.java}</p>
                            <div className='percent'></div>
                        </div>
                        <div className='box'>
                            <p className='c-mas'>{data.C}</p>
                            <div className='percent'></div>
                        </div>
                        <div className='box'>
                            <p className='c'>{data.c}</p>
                            <div className='percent'></div>
                        </div>
                    </div>

                    <h1 className='experencias'><img src={data.icoLaboral} alt="" className='icon-laboral'/> EXPERENCIAS LABORALES</h1>
                        <p className='experencia'>{data.experencia}</p>

                    <h1 className='idiomas'><img src={data.icoIdiomas} alt="" className='icon-idioma'/> IDIOMAS</h1>
                    <p className='español'>{data.español}</p>
                    <p className='ingles'>{data.ingles}</p>
                </div>
            </div>
        </header>
     );
}

export default Header;