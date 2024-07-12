import fastify from "fastify";
import cors from "@fastify/cors";
import { createTrip } from "./routes/create-trip";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { env } from "../env";
import { confirmTrip } from "./routes/confirm-trip";

const app = fastify()

app.register(cors, {
     origin: "*",
     credentials: true,
})

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip)
app.register(confirmTrip)

app.listen({port: env.PORT}).then( async () => {
     await console.log(`Server running to port: ${env.PORT}`)
})
