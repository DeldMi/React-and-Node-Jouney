import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import { env } from '../../env'


export async function confirmParticipant(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get(
        '/participants/:participantId/confirm',
        {
            schema: {
                params: z.object({
                    tripId: z.string().uuid(),
                    participantId: z.string().uuid(),
                }),
            },
        },
        async (request, reply) => {
            const { participantId } = await request.params

            const participant = await prisma.participant.findUnique({
                where: { id: participantId }
            })

            if (!participant) {
                throw new Error('Participant not found.')
            }

            if (participant.is_confirmed) {
                return reply.redirect(`${env.WEB_BASE_URL}/trips/${participant.trip_id}`)
            }

            await prisma.participant.update({
                where: { id: participantId },
                data: { is_confirmed: true },
            });



            return reply.redirect(`${env.WEB_BASE_URL}/trips/${participant.trip_id}`)
        },
    )
}