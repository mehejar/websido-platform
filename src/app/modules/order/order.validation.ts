import { z } from 'zod'

export const orderSchemaValidation = z.object({
    body: z.object({
        buyer: z.string(),
        projectName: z.string(),
        service: z.string(),
        budget: z.number(),
        payment: z.enum(['paid', 'unpaid', 'half-paid']),
        duration: z.number(),
        orderStatus: z.enum(['pending', 'confirm'])
    })
})

export const OrderValidation = {
    orderSchemaValidation
}