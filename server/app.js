import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import passport, { configurePassport } from './config/passport.js'
import adminRoutes from './routes/adminRoutes.js'
import authRoutes from './routes/authRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
configurePassport()

const app = express()

app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/users', userRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/contact', contactRoutes)

app.get('/api/health', (_request, response) => {
  response.json({ success: true, message: 'KVAudio API is running' })
})

export default app
