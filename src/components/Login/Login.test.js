import { fireEvent, render } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Login Page Tests', () => {
    test('Login Page Snapshot Test', () => {
        const loginPage = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>
        );

        expect(loginPage).toMatchSnapshot();
    });

    test('Login Required Error Check', () => {
        const loginPage = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>
        );

        const login = loginPage.getByDisplayValue('Login');
        fireEvent.click(login);
        loginPage.getByText('Username is Required');
        loginPage.getByText('Password is Required');
    });

    test('Login Validation Check', () => {
        const loginPage = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>
        );
        const username = loginPage.getByTestId('username-input');
        const password = loginPage.getByTestId('password-input');
        fireEvent.change(username, { target: { value: 'abc' } });
        fireEvent.change(password, { target: { value: 'abc' } });
        const login = loginPage.getByDisplayValue('Login');
        fireEvent.click(login);
        loginPage.getByText('Invalid Username');
        loginPage.getByText('Password is too short', { exact: false });
    });
});
