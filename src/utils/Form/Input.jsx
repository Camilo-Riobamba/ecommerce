import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {
    FilledInput,
    FormControl,
    FormHelperText,
    InputLabel,
    InputAdornment,
    IconButton,
    Select
} from '@mui/material';

import {
    AlternateEmailRounded,
    VisibilityOffRounded,
    VisibilityRounded
} from '@mui/icons-material';

export default function Input({
    name,
    label,
    defaultValue,

    rules: { required = true, ...rules } = {},
    handleChange,

    Input,
    ...inputProps
}) {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            rules={{ required, ...rules }}
            defaultValue={defaultValue ?? ''}
            render={({
                field: { ref, onChange, ...field },
                fieldState: { error }
            }) => {
                const config = {
                    ...inputProps,

                    inputRef: ref,
                    ...field,
                    onChange: (e) => {
                        if (handleChange) handleChange(e.target.value);

                        onChange(e);
                    },

                    error
                };

                return (
                    <FormControl
                        variant="filled"
                        fullWidth
                        required={rules.required}
                    >
                        {Input && (
                            <Input name={name} label={label} {...config} />
                        )}

                        {!Input && (
                            <>
                                <InputLabel htmlFor={name}>{label}</InputLabel>
                                <FilledInput
                                    id={name}
                                    {...config}
                                    error={!!error}
                                />
                                <FormHelperText>
                                    {error?.message}
                                </FormHelperText>
                            </>
                        )}
                    </FormControl>
                );
            }}
        />
    );
}

export function EmailInput({ name = 'email', label = 'Email', ...props }) {
    return (
        <Input
            name={name}
            label={label}
            {...props}
            type="email"
            rules={{
                pattern: {
                    value: /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                    message: 'El correo no tiene un formato válido.'
                }
            }}
            endAdornment={
                <InputAdornment position="end">
                    <AlternateEmailRounded />
                </InputAdornment>
            }
        />
    );
}

export function PasswordInput({
    name = 'password',
    label = 'Contraseña',
    ...props
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Input
            name={name}
            label={label}
            {...props}
            type={showPassword ? 'text' : 'password'}
            rules={{
                pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[/@$!%*#?&])[A-Za-z\d/@$!%*#?&]{8,}$/,
                    message:
                        'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial (@$!%*#?&).'
                }
            }}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((show) => !show)}
                        sx={{ p: 0 }}
                    >
                        {showPassword ? (
                            <VisibilityOffRounded />
                        ) : (
                            <VisibilityRounded />
                        )}
                    </IconButton>
                </InputAdornment>
            }
        />
    );
}

export function SelectInput({ name, label, children, ...inputProps }) {
    return (
        <Input
            name={name}
            label={label}
            {...inputProps}
            Input={({ name, label, error, ...config }) => (
                <>
                    <InputLabel htmlFor={name}>{label}</InputLabel>

                    <Select
                        input={<FilledInput {...config} error={!!error} />}
                        MenuProps={{ sx: { mt: 1 } }}
                        sx={{
                            '& .MuiSelect-select:focus': {
                                background: 'none !important'
                            }
                        }}
                    >
                        {children}
                    </Select>

                    <FormHelperText>{error?.message}</FormHelperText>
                </>
            )}
        />
    );
}
