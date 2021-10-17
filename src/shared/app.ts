/* eslint-disable @typescript-eslint/no-var-requires */
import Fastify, { FastifyInstance } from 'fastify'
import fastifyCors from 'fastify-cors'
import * as dotenv from 'dotenv'
dotenv.config()
import { healthcheckRoutes } from './routes/healthcheckRoutes'

const app: FastifyInstance = Fastify({})

app.register(fastifyCors)

app.register(healthcheckRoutes.params)

export { app }
