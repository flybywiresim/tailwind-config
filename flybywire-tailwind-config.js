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
