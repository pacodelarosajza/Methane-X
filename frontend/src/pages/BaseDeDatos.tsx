export default function Home(){
    return(
        <>
        <div className="body">
        <div className="head">
    
            <div className="Logo">
                <a href="./">UMBRELLA _MX</a>
            </div>
    
            <nav className="navbar">
                <a href="./">Quienes Somos</a>
                <a href="#">Nosotros</a>
                <a href="#">Descripcion del problema</a>
                <a href="#">Propuesta de valor</a>
                <a href="#">Solucion</a>
                <a href="#">Base de datos</a>
            </nav>
        </div>
        <div className="contenido">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Presencia de Gas Metano</th>
                        <th>Densidad</th>
                        <th>Temperatura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>14</td>
                        <td>YES</td>
                        <td>449</td>
                        <td>38.5</td>
                    </tr>
                    <tr>
                        <td>23</td>
                        <td>YES</td>
                        <td>509</td>
                        <td>37.9</td>
                    </tr>
                    <tr>
                        <td>47</td>
                        <td>YES</td>
                        <td>483</td>
                        <td>36.6</td>
                    </tr>
                    <tr>
                        <td>69</td>
                        <td>YES</td>
                        <td>449</td>
                        <td>39.5</td>
                    </tr>
                    <tr>
                        <td>89</td>
                        <td>NO</td>
                        <td>245</td>
                        <td>38.2</td>
                    </tr>
                    <tr>
                        <td>99</td>
                        <td>YES</td>
                        <td>426</td>
                        <td>38.7</td>
                    </tr>
                    <tr>
                        <td>114</td>
                        <td>NO</td>
                        <td>363</td>
                        <td>37.7</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        </div>
    </>
    )
}