import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from "../../store/store";
import Landing from './Landing';

describe('Landing Page Tests', () => {

    test('Landing page snapshot', () => {
        
        const landing = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Landing />
                </MemoryRouter>
            </Provider>);
        
        expect(landing).toMatchSnapshot()
    });

    

})