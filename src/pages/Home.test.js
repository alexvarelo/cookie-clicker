import Home from "./Home";
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import { render } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks'
import App from "../App";
import PlayersHooks from "./components/PlayersHooks";


describe('create user', () => {
    // testear que se crea bien un user
    // testear que cuando juega vuelve con la informacion actualizada

    const obj1 = { name: 'Prueba 1', points: 5, autoclickers: 0 };
    const obj2 = { name: 'Prueba 2', points: 6, autoclickers: 1 };
    const obj3 = { name: 'Prueba 3', points: 8, autoclickers: 2 };

    it("a", () => {
        const { players } = renderHook(PlayersHooks);
        console.log(players);
        //Not showing
    }); 

    const component = render(<Home Players={[obj1,obj2,obj3]} ></Home>)


})