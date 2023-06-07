import { useState } from 'react';

import { Box } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

export default function Form({ action, children, ...props }) {
    const form = useForm();

    const [status, setStatus] = useState({});

    const submit = form.handleSubmit((data) => {
        setStatus((prevStatus) => ({ ...prevStatus, loading: true }));

        action(data)
            .then(() => {
                setStatus((prevStatus) => ({
                    ...prevStatus,
                    loading: false,
                    success: true
                }));
            })
            .catch((error) => {
                setStatus((prevStatus) => ({
                    ...prevStatus,
                    loading: false,
                    error: error.message
                }));
            });
    });

    return (
        <FormProvider {...form}>
            <Box component="form" noValidate onSubmit={submit} {...props}>
                {children(
                    {
                        ...form,

                        reset: () => {
                            form.reset();

                            setStatus({});
                        }
                    },

                    status
                )}
            </Box>
        </FormProvider>
    );
}
