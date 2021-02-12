module.exports = {
    config: {
        theme: {
            extend: {
                // Extend heights
                height: () => ({
                    120: '30rem',
                    144: '36rem',
                    160: '40rem',
                    map: '40.3rem',
                }),
                // Extend screen sizes
                screens: {
                    'xs': '475px'
                },
                // Add color classes to the 'active' state
                backgroundColor: ['active'],
                textColor: ['active'],
                // Animations
                keyframes: {
                    wiggle: {
                        '0%, 100%': { transform: 'rotate(-1deg)' },
                        '50%': { transform: 'rotate(2.5deg)' },
                    },
                },
                animation: {
                    wiggle: 'wiggle 15s ease-in-out infinite',
                },
                // Color Extension
                colors: {
                    teal: {
                        'DEFAULT': '#00c2cc',
                        'light:': '#00c2cc',
                        'light-contrast': '#00afb7',
                        'medium': '#009ba2',
                        'medium-contrast': '#00888e',
                        'dark': '#00747a',
                        'dark-contrast': '#006166',
                        'darker': '#004e51',
                        'darker-contrast': '#003a3d',
                        'darkest': '#002729',
                        'darkest-contrast': '#001314',
                        '50': '#c2cbcc',
                        '100': '#b8cbcc',
                        '200': '#a3cacc',
                        '300': '#8fc9cc',
                        '400': '#7ac8cc',
                        '500': '#66c7cc',
                        '600': '#52c6cc',
                        '700': '#3dc5cc',
                        '800': '#29c4cc',
                        '900': '#14c3cc',
                    },
                    navy: {
                        'DEFAULT': '#1b2434',
                        'light:': '#1b2434',
                        'light-contrast': '#18202f',
                        'medium': '#161d2a',
                        'medium-contrast': '#131924',
                        'dark': '#10161f',
                        'dark-contrast': '#0e121a',
                        '50': '#303133',
                        '100': '#2e3033',
                        '200': '#292d33',
                        '300': '#242933',
                        '400': '#1f2633',
                        '500': '#1a2233',
                    },
                    // Legacy, prefer above colors
                    blue: {
                        'DEFAULT': '#6399AE',
                        'light': '#00C2CB',
                        'light-contrast': '#009da6',
                        'medium': '#006166',
                        'dark': '#1B2434',
                        'darker': '#141E30',
                    },
                    grey: {
                        'light': '#D4DADC'
                    }
                },
                boxShadow: {
                    'md-dark': '1px 1px 7px 1px rgba(0, 0, 0, 0.2)',
                    'md-dark-contrast': '1px 1px 7px 1px rgba(0, 0, 0, 0.35)',
                    'lg-dark': '1px 1px 10px 1px rgba(0, 0, 0, 0.15)',
                    '2xl-light': '0 0 50px -20px rgba(255, 255, 255, 0.15)',
                },
            },
        },
        variants: {
            extend: {
                // Add opacity classes to the 'disabled' state
                opacity: ['disabled'],
            }
        },
    },
    handler: function() {}
}
