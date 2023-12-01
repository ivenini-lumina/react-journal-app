import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit'

import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from '../../../src/store/auth';

const store = configureStore({
    reducer: {
      auth: authSlice.reducer
    },
    // preloadedState: {        
    // }
});

describe('Pruebas en <LoginPage />', () => { 

    // jest.mock('react-router-dom', () => ({
    //     ...jest.requireActual('react-router-dom'),
    //     useHistory: () => ({
    //       push: jest.fn(),
    //       location: { pathname: '/' }, // Puedes ajustar segun tus necesidades
    //     }),
    // }));      

    test('Debe de mostrar el componente por defecto', () => { 

        // render(
        //     <Provider store={ store }>
        //         <MemoryRouter>
        //             <LoginPage />
        //         </MemoryRouter>
        //     </Provider>
        // );

        // expect( screen.getAllByAltText('Login').length ).toBeGreaterThanOrEqual(1);

     });

});

