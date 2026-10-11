import app from '../app.js'
import connectDB from '../config/db.js'

export default async function handler(request, response) {
  try {
    await connectDB()
    return app(request, response)
  } catch (error) {
    console.error('Server startup error:', error.message)
    return response.status(500).json({
      success: false,
      message: 'Unable to connect to the database.',
    })
  }
}
