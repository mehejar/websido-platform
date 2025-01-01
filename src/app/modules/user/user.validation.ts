import { z } from 'zod'

const userCreateValidation = z.object({
    body: z.object({
        name: z.object({
            firstName: z.string({ required_error: 'First Name is Required' }),
            middleName: z.string().optional(),
            lastName: z.string({ required_error: 'Last Name is Required' })
        }),
        email: z.string({ required_error: 'Email is Required' }),
        password: z.string({ required_error: 'password is Required' }),
        role: z.enum(['user']).default('user').optional(),
        status: z.enum(['in-progeess', 'blocked']).default('in-progeess').optional(),
        isDeleted: z.boolean().default(false)
    })
})

export const UserValidations = {
    userCreateValidation
}