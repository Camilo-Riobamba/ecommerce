import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { grey } from '@mui/material/colors';

const customTheme = responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                main: '#212121',
                contrastText: '#fff'
            },

            secondary: {
                main: '#fe3227',
                contrastText: '#fff'
            }
        },

        typography: {
            fontFamily: ['Lato', 'sans-serif'].join(','),

            h1: { fontSize: '3rem', fontFamily: 'Poppins', fontWeight: 800 },
            h2: { fontSize: '2.25rem', fontFamily: 'Poppins', fontWeight: 800 },
            h3: { fontSize: '1.75rem', fontFamily: 'Poppins', fontWeight: 600 },
            h4: { fontSize: '1.25rem', fontFamily: 'Poppins', fontWeight: 600 },
            h5: { fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 600 },
            h6: { fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 600 },

            button: { fontSize: '1rem', fontFamily: 'Poppins' }
        },

        shape: {
            borderRadius: 10
        },

        shadows: [
            'none',
            'rgba(149, 157, 165, 0.2) 0px 1px 3px',
            'rgba(149, 157, 165, 0.2) 0px 2px 6px',
            'rgba(149, 157, 165, 0.2) 0px 3px 9px',
            'rgba(149, 157, 165, 0.2) 0px 4px 12px',
            'rgba(149, 157, 165, 0.2) 0px 5px 15px',
            'rgba(149, 157, 165, 0.2) 0px 6px 18px',
            'rgba(149, 157, 165, 0.2) 0px 7px 21px',
            'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            'rgba(149, 157, 165, 0.2) 0px 9px 27px',
            'rgba(149, 157, 165, 0.2) 0px 10px 30px',
            'rgba(149, 157, 165, 0.2) 0px 11px 33px',
            'rgba(149, 157, 165, 0.2) 0px 12px 36px',
            'rgba(149, 157, 165, 0.2) 0px 13px 39px',
            'rgba(149, 157, 165, 0.2) 0px 14px 42px',
            'rgba(149, 157, 165, 0.2) 0px 15px 45px',
            'rgba(149, 157, 165, 0.2) 0px 16px 48px',
            'rgba(149, 157, 165, 0.2) 0px 17px 51px',
            'rgba(149, 157, 165, 0.2) 0px 18px 54px',
            'rgba(149, 157, 165, 0.2) 0px 20px 60px',
            'rgba(149, 157, 165, 0.2) 0px 22px 66px',
            'rgba(149, 157, 165, 0.4) 0px 24px 72px',
            'rgba(149, 157, 165, 0.4) 0px 26px 78px',
            'rgba(149, 157, 165, 0.6) 0px 28px 84px',
            'rgba(149, 157, 165, 0.6) 0px 30px 90px'
        ],

        // Components
        components: {
            MuiListItemButton: {
                variants: [
                    {
                        props: { variant: 'navigation' },
                        style: {
                            borderRadius: '10px'
                        }
                    }
                ]
            },

            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none'
                    }
                }
            },

            MuiFilledInput: {
                defaultProps: {
                    disableUnderline: true
                },

                styleOverrides: {
                    root: {
                        borderRadius: '10px',
                        border: `2px solid ${grey[300]}40`,
                        backgroundColor: grey[300] + '40',
                        '&:hover': {
                            backgroundColor: grey[400] + '40'
                        },
                        '&.Mui-focused': {
                            backgroundColor: grey[200] + '40'
                        }
                    },

                    error: ({ theme }) => ({
                        border: `2px solid ${theme.palette.error.light}60`,
                        backgroundColor: theme.palette.error.light + '30',

                        '&:hover': {
                            backgroundColor: theme.palette.error.light + '30'
                        },
                        '&.Mui-focused': {
                            backgroundColor: theme.palette.error.light + '30'
                        }
                    })
                }
            },

            MuiSlider: {
                styleOverrides: {
                    root: {
                        color: '#52af77',

                        height: 8,

                        '& .MuiSlider-track': {
                            border: 'none'
                        },

                        '& .MuiSlider-thumb': {
                            height: 24,
                            width: 24,
                            backgroundColor: '#fff',
                            border: '2px solid currentColor',

                            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible':
                                {
                                    boxShadow: 'inherit'
                                },

                            '&:before': {
                                display: 'none'
                            }
                        },

                        '& .MuiSlider-valueLabel': {
                            lineHeight: 1.2,
                            fontSize: 12,
                            background: 'unset',
                            padding: 0,
                            width: 32,
                            height: 32,
                            borderRadius: '50% 50% 50% 0',
                            backgroundColor: '#52af77',
                            transformOrigin: 'bottom left',
                            transform:
                                'translate(50%, -100%) rotate(-45deg) scale(0)',

                            '&:before': { display: 'none' },

                            '&.MuiSlider-valueLabelOpen': {
                                transform:
                                    'translate(50%, -100%) rotate(-45deg) scale(1)'
                            },

                            '& > *': {
                                transform: 'rotate(45deg)'
                            }
                        }
                    }
                }
            }
        }
    })
);

export default customTheme;
