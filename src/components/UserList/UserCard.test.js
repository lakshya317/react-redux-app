import { render } from '@testing-library/react';
import UserCard from './UserCard';
import { MemoryRouter } from 'react-router-dom';

describe('User Card Tests', () => {
    test('User Card Snapshot Test', () => {
        const userCard = render(
            <MemoryRouter>
                <UserCard
                    user={{
                        id: 1,
                        email: 'george.bluth@reqres.in',
                        first_name: 'George',
                        last_name: 'Bluth',
                        avatar: 'https://reqres.in/img/faces/1-image.jpg'
                    }}
                />
            </MemoryRouter>
        );

        expect(userCard).toMatchSnapshot();
    });

    test('Name and Email test verification', () => {
        const userCard = render(
            <MemoryRouter>
                <UserCard
                    user={{
                        id: 1,
                        email: 'george.bluth@reqres.in',
                        first_name: 'George',
                        last_name: 'Bluth',
                        avatar: 'https://reqres.in/img/faces/1-image.jpg'
                    }}
                />
            </MemoryRouter>
        );

        userCard.getByText('George Bluth');
        userCard.getByText('george.bluth@reqres.in');
    });
});
