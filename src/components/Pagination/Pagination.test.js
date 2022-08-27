import { render } from '@testing-library/react';
import Pagination from './Pagination';
import { MemoryRouter } from 'react-router-dom';

describe('Pagination Tests', () => {

    test('Pagination Snapshot Test', () => {
        const pagination = render(
            <MemoryRouter>
                <Pagination current={2} perPage={6} total={17} totalPages={3} handlePageChange={(newPage)=>{console.log(newPage)}}/>
            </MemoryRouter>
        );

        expect(pagination).toMatchSnapshot()
    });

    test('Pagination Page Numbers and icon verification', () => {
        const pagination = render(
            <MemoryRouter>
                <Pagination current={2} perPage={6} total={17} totalPages={3} handlePageChange={(newPage)=>{console.log(newPage)}}/>
            </MemoryRouter>
        );

        pagination.getByText("1");
        pagination.getByText("2");
        pagination.getByText("3");
        pagination.getByAltText("First");
        pagination.getByAltText("Previous");
        pagination.getByAltText("Next");
        pagination.getByAltText("Last");
    })

    test('Pagination Text verification', () => {
        const pagination = render(
            <MemoryRouter>
                <Pagination current={2} perPage={6} total={17} totalPages={3} handlePageChange={(newPage)=>{console.log(newPage)}}/>
            </MemoryRouter>
        );

        pagination.getByText("Showing 7 - 12 of 17", {exact: false});
    })
})