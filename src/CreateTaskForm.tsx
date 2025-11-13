import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import './CreateTaskForm.css';
import {createTask, type CreateTaskData} from './utilities';
import {taskFormSchema, type TaskFormData} from './taskFormSchema';

const CreateTaskForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
    } = useForm<TaskFormData>({
        resolver: zodResolver(taskFormSchema),
        mode: 'onChange',
        defaultValues: {
            status: 'pending',
            priority: 'low',
            deadline: undefined,
        },
    });

    const onSubmit = async (data: TaskFormData): Promise<void> => {
        try {
            const taskData: CreateTaskData = {
                name: data.name,
                description: data.description,
                status: data.status,
                priority: data.priority,
                deadline: data.deadline,
            };

            await createTask(taskData);

            setIsSuccess(true);

            setTimeout(() => {
                reset();
                setIsSuccess(false);
            }, 1000);
        } catch (error) {
            console.error('Error creating task:', error);
            alert('Failed to create task. Please check if json-server is running.');
        }
    };

    return (
        <div className="main-content">
            <div className={`form-section ${isSuccess ? 'success' : ''}`}>
                <h2>Create New Task</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={`task-form ${isSuccess ? 'success' : ''}`}>
                    <div className="form-group">
                        <label htmlFor="task-name">Task Name</label>
                        <input
                            type="text"
                            id="task-name"
                            {...register('name')}
                            placeholder="Enter task name"
                            className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <span className="error-message">{errors.name.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="task-description">Description</label>
                        <textarea
                            id="task-description"
                            {...register('description')}
                            placeholder="Enter task description"
                            className={errors.description ? 'error' : ''}
                        />
                        {errors.description && (
                            <span className="error-message">{errors.description.message}</span>
                        )}
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="task-status">Status</label>
                            <select id="task-status" {...register('status')}>
                                <option value="pending">Pending</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="task-priority">Priority</label>
                            <select id="task-priority" {...register('priority')}>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="task-deadline">Deadline</label>
                        <input type="date" id="task-deadline" {...register('deadline')}
                               className={errors.deadline ? 'error' : ''}/>
                        {errors.deadline && (
                            <span className="error-message">{errors.deadline.message}</span>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting || isSuccess}>
                        {isSubmitting ? 'Creating Task...' : isSuccess ? '✓ Task Created!' : 'Create Task'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTaskForm;
