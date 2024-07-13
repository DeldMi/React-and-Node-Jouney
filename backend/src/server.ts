import fastify from 'fastify'
import cors from '@fastify/cors'
import { createTrip } from './routes/create-trip'
import {
     serializerCompiler,
     validatorCompiler,
} from 'fastify-type-provider-zod'
import { confirmTrip } from './routes/confirm-trip'
import { confirmParticipants } from './routes/confirm-participant'
import { createActivity } from './routes/create-activity'

import { getLinks } from './routes/get-links'

import { createLink } from './routes/create-linls'
import { getActivities } from './routes/get-activitys'
import { errorHandler } from './error-handler'
import { env } from './env'

const app = fastify()

app.register(cors, {
     origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler(errorHandler)

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipants)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)
app.register(getLinks)

// app.get('*', async (request, reply) => {
//      return "Erro 404!"
// })


app.listen({ port: env.PORT }).then(() => {
     console.log('Server running!')
})