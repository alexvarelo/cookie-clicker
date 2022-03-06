import React from 'react'
import { Button } from 'react-bootstrap';

/*
Funcion que renderiza un boton con el cual se puede borrar todos los usuarios (vaciando el localStorage)
*/
export default function Footer(props) {
    return (
        <div className="footer">
            @Alejandro Varela 06/03/2022
            <Button
                className="btn btn-danger Home__deleteplayers"
                onClick={() => {
                    if (window.confirm('Estás seguro que quiere borrar todos los usuarios? (Recargue la página para aplicar los cambios)'))
                        localStorage.clear();
                    props.setShowGame(false);
                }}>
                Reset
            </Button>

        </div>
    )
}
