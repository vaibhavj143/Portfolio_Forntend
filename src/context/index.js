





import { configureStore } from '@reduxjs/toolkit'


import navReducer from './features/navSlices/navSlices'

import visitorSlices from './features/visitorSlices/visitorSlices'

const store = configureStore({
  reducer: {
    navReducer,
    visitor : visitorSlices
  }
})


export default store