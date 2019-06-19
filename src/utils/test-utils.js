// test-utils.js
import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from 'redux/store'

const AllTheProviders = ({ children }) => {
    // return <Provider store={store}>{children}</Provider>
    return children
}

const customRender = (ui, options) =>
    render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
