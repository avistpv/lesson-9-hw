import {z} from 'zod';

export const taskFormSchema = z.object({
    name: z.string().min(1, 'Task name is required'),
    description: z.string().min(1, 'Description is required'),
    status: z.enum(['pending', 'in-progress', 'completed']),
    priority: z.enum(['low', 'medium', 'high']),
    deadline: z.string().optional().refine(
        (date) => {
            if (!date) return true;
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            selectedDate.setHours(0, 0, 0, 0);
            return selectedDate >= today;
        },
        {
            message: 'Deadline cannot be in the past',
        }
    ),
});

export type TaskFormData = z.infer<typeof taskFormSchema>;

