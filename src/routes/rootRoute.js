import express from 'express'
import userRoute from './userRoute.js'
import restaurantRoute from './restaurantRoute.js'

const rootRoute = express.Router()

rootRoute.use('/user', userRoute)
rootRoute.use('/restaurant', restaurantRoute)

export default rootRoute
