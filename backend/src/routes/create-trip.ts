import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import dayjs from "dayjs";
import nodemailer from "nodemailer";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { getMailClient } from "../lib/mail";



export async function createTrip(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/trips', {
        schema: {
            body: z.object({
                destination: z.string().min(4),
                starts_at: z.coerce.date(),
                ends_at: z.coerce.date(),
                owner_name: z.string(),
                owner_email: z.string().email(),

            })
        }
    }, async (req, rep) => {
        const { destination, ends_at, starts_at, owner_name, owner_email } = req.body;

        if (dayjs(starts_at).isBefore(new Date())) {
            throw new Error('Invalid trip start date.')
        }

        if (dayjs(ends_at).isBefore(starts_at)) {
            throw new Error('Invalid trip and date.')
        }

        // await prisma.$transaction(tx=>{

        // })

        const trip = await prisma.trip.create({
            data: {
                destination,
                starts_at,
                ends_at,
                participants: {
                    create: {
                        email: owner_email,
                        name: owner_name,
                        is_owner: true,
                        is_confirmed: true,
                    },
                }
            }
        });


        const mail = await getMailClient();

        const massage = await mail.sendMail({
            from: {
                name: 'Equipe plann.er',
                address: 'test@test.com',
            },
            to: {
                name: owner_name,
                address: owner_email,
            },
            subject: 'Confirmação de criação de viagem',
            text: `Olá ${owner_name},\n\nSua viagem para ${destination} começa em ${dayjs(starts_at).format('DD/MM/YYYY')} e termina em ${dayjs(ends_at).format('DD/MM/YYYY')}.\n\nAtenciosamente,\nEquipe plann.er`,
        });

        console.log(nodemailer.getTestMessageUrl(massage));

        return { tripId: trip.id };
    });
}