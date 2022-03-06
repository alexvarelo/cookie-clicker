import Home from "./Home";
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import { render } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks'
import App from "../App";
import PlayersHooks from "./components/PlayersHooks";


describe('create user', () => {
    // Testear que se crea bien un user
    // Testear que cuando juega vuelve con la informacion actualizada

    const obj1 = { name: 'Prueba 1', points: 5, autoclickers: 0 };
    const obj2 = { name: 'Prueba 2', points: 6, autoclickers: 1 };
    const obj3 = { name: 'Prueba 3', points: 8, autoclickers: 2 };

    /*
    Para poder probar el componente Home es necesario los hooks dependientes de este componente, los cuales se han creado y se
    retornan en PlayersHooks, en cambio, no he sido capaz de poder extraer dichos hooks al hacer players.current.'hook'. 
    De esta forma, no puedo comprobar el renderizado de este componente ni del game. Me ha faltado tiempo y conocimiento para 
    poder hacerlo funcionar.
    */
    it("get hooks", () => {
        const { players } = renderHook(PlayersHooks);
        console.log(players);
    });

    const component = render(<Home Players={[obj1, obj2, obj3]} ></Home>)


})