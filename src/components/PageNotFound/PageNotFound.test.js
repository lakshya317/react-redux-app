import { render } from '@testing-library/react';
import PageNotFound from './PageNotFound';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "../../store/store";

describe('PageNotFound Tests', () => {

    test('PageNotFound Snapshot Test', () => {
        const notFound = render(
            <Provider store={store}>
                <MemoryRouter>
                    <PageNotFound current={2} perPage={6} total={17} totalPages={3} handlePageChange={(newPage)=>{console.log(newPage)}}/>
                </MemoryRouter>
            </Provider>
        );

        expect(notFound).toMatchSnapshot()
    });
});