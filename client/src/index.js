import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DataProvider from './context/DataProvider'
import './index.css'
import App from './App'
import UserProvider from './context/UserProvider';
export const { Consumer, Provider } = React.createContext()


ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <DataProvider>
                <App />
            </DataProvider>
        </UserProvider>
    </BrowserRouter>
, document.getElementById('root'))


