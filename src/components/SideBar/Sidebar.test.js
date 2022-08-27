import { render } from '@testing-library/react';
import Sidebar from './Sidebar';
import { MemoryRouter } from 'react-router-dom';

describe('Sidebar Tests', () => {

    test('User Card Snapshot Test', () => {
        const sideBar = render(
            <MemoryRouter>
                <Sidebar/>
            </MemoryRouter>
        );

        expect(sideBar).toMatchSnapshot()
    });

    test('Sidebar text and icon verification', () => {
        const sideBar = render(
            <MemoryRouter>
                <Sidebar/>
            </MemoryRouter>
        );

        sideBar.getByText("Home");
        sideBar.getByText("Users");
        sideBar.getByAltText("Home");
        sideBar.getByAltText("Users");
    })
})