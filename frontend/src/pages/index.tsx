export default function Home(){
    return(
        <>
        <div className="body">
        <div className="head">
    
            <div className="Logo">
                <a href="#">UMBRELLA _MX</a>
            </div>
    
            <nav className="navbar">
                <a href="#">Quienes Somos</a>
                <a href="#">Nosotros</a>
                <a href="#">Descripcion del problema</a>
                <a href="#">Propuesta de valor</a>
                <a href="#">Solucion</a>
                <a href="./BaseDeDatos">Base de datos</a>
            </nav>
    
        </div>
    
        <header className="content header">
            <h2 className="title">Quienes Somos</h2>
            <p>
                En Umbrella_MX, nos dedicamos al bienestar de las vacas y a mejorar la ganadería con tecnología. Somos un
                equipo apasionado por encontrar soluciones innovadoras para el cuidado de los animales.
            </p>
            <a href="#" className="btn">Saber mas</a>
        </header>
    
        <section className="content about">
            <h2 className="title">Nosotros</h2>
            <p>
                El equipo conformado
            </p>
            <div className="box-container2">
    
                <div className="box">
                    <img src="../Images/User.png" alt=""/>
                    <h3>Jose Francisco de la Rosa Ibarra</h3>
                    <p>Lider Del Equipo</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
    
                </div>
    
                <div className="box">
                    <img src="Images/User.png" alt=""/>
                    <h3>Josue Gurrola Gomez</h3>
                    <p>BackEnd</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
    
                </div>
    
                <div className="box">
                    <img src="Images/User.png" alt=""/>
                    <h3>Diego Martinez Lozada</h3>
                    <p>FrontEnd</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
    
                </div>
    
                <div className="box">
                    <img src="Images/User.png" alt=""/>
                    <h3>Nicolas Gloria Tiscareño</h3>
                    <p>Marketing</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
    
                </div>
    
            </div>
        </section>
    
        <section className="content problem">        
            <article className="contain">
    
                <h2 className="title">Descripcion del Problema</h2>
                <p>
                    Las vacas son los animales que más gas metano producen en el mundo, lo que supone un riesgo para su
                    salud
                    y el medio ambiente.
                    La acumulación excesiva de este gas puede provocar trastornos como el timpanismo, causando malestar y
                    dificultando la respiración y la digestión.
                </p>
                <p>
                    Es crucial controlar la salud del ganado para garantizar su bienestar y la calidad de los productos
                    derivados. Detectar y tratar a tiempo problemas como el timpanismo es esencial para evitar la producción
                    de productos de baja calidad y mantener la salud general del ganado.
                </p>
    
            </article>
    
        </section>
    
        <section className="content sau">
            <h2 className="title">Solucion</h2>
            <p>
                El proyecto consiste en un sistema de monitoreo para animales ganaderos (vacas). Se emplearán herramientas
                enfocadas en el área desarrollo de software, como sensores biométricos, análisis de datos y recolección de
                datos importantes.
            </p>
            <p>
                Se busca un sistema funcional y seguro para la monitorización de animales ganaderos, la detección de gas
                metano y anormalidades, es indispensable para la salud del animal y control, se busca la versatilidad
                aplicando otro enfoque que es el control de salud.
            </p>
    
        </section>
    
    
    
        <section className="content solution">
            <h2 className="title">Propuesta de Valor</h2>
            <p>
                Este proyecto será una automatización para que a la hora de que una vaca pase por un camino estrecho llegue
                a un sensor de temperatura donde esos datos se almacenan en una base de datos después llegara a un comedero
                donde este tendrá sensores de gas metano y medirán la concentración que hacen las vacas al comer y si
                exceden los limites encenderá un led y una alarma que avisara a la persona que la vaca exhala mucho gas
                metano y con esto saber que la vaca necesita atención de un veterinario, cambiar su dieta.
            </p>
        </section>
    
        <section className="content contact">
            <h2 className="title">Contactos</h2>
    
            <div className="footer-section">
    
                <div>
                    <p>+52 4492882314</p>
                
    
                    <p>+52 449727822</p>
                
                </div>
            </div>
        </section>
        </div>
    </>
    )
}