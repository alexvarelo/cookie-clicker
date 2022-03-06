import UserTable from "./UserTable";
import { render } from '@testing-library/react';

test('renders content and orders the table', () =>  {
    const obj1 = {name:'Prueba 1', points:5, autoclickers:0};
    const obj2 = {name:'Prueba 2', points:6, autoclickers:1};
    const obj3 = {name:'Prueba 3', points:8, autoclickers:2};

    const component = render(<UserTable CurrentPlayers={[obj1,obj2, obj3]} />)

    const rows = component.container.querySelector('tbody');

    //Se muestran ordenados de forma descendente
    expect(rows.children.item(0)).toHaveTextContent('Prueba 3');
    expect(rows.children.item(1)).toHaveTextContent('Prueba 2');
    expect(rows.children.item(2)).toHaveTextContent('Prueba 1');
})