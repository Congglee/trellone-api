// Libraries import
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// Routes import
import boardsRouter from '~/routes/boards.routes'
import columnsRouter from '~/routes/columns.routes'
import cardsRouter from '~/routes/cards.routes'
import authRouter from '~/routes/auth.routes'
import usersRouter from '~/routes/users.routes'

// Middlewares import
import { defaultErrorHandler } from '~/middlewares/error.middlewares'
import { corsOptions } from '~/config/cors'

const app = express()

// Enable JSON parsing for request bodies
app.use(express.json())

// Use middleware
app.use(cookieParser())
app.use(cors(corsOptions))

// Use app routes
app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/boards', boardsRouter)
app.use('/columns', columnsRouter)
app.use('/cards', cardsRouter)

// Error handling middleware
app.use(defaultErrorHandler)

export default app
