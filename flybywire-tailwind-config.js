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
                        'DEFAULT': 'hsl(183,100%,40%)',
                        'regular': 'hsl(183,100%,40%)',
                        // deprecated
                        'light': 'hsl(183,100%,40%)',
                        'regular-contrast': 'hsl(183,100%,36%)',
                        // deprecated
                        'light-contrast': 'hsl(183,100%,36%)',
                        'medium': 'hsl(183,100%,32%)',
                        'medium-contrast': 'hsl(183,100%,28%)',
                        'dark': 'hsl(183,100%,24%)',
                        'dark-contrast': 'hsl(183,100%,20%)',
                        'darker': 'hsl(182,100%,16%)',
                        'darker-contrast': 'hsl(183,100%,12%)',
                        'darkest': 'hsl(183,100%,8%)',
                        'darkest-contrast': 'hsl(183,100%,4%)',
                        '50': 'hsl(186,9%,78%)',
                        '100': 'hsl(183,16%,76%)',
                        '200': 'hsl(183,29%,72%)',
                        '300': 'hsl(183,37%,68%)',
                        '400': 'hsl(183,45%,64%)',
                        '500': 'hsl(183,50%,60%)',
                        '600': 'hsl(183,54%,56%)',
                        '700': 'hsl(183,58%,52%)',
                        '800': 'hsl(183,67%,48%)',
                        '900': 'hsl(183,82%,44%)',
                    },
                    navy: {
                        'DEFAULT': 'hsl(218,32%,15%)',
                        'lightest': 'hsl(218,29%,22%)',
                        'lighter': 'hsl(218,28%,19%)',
                        'regular': 'hsl(218,32%,15%)',
                        // deprecated
                        'light': 'hsl(218,32%,15%)',
                        'regular-contrast': 'hsl(219,32%,14%)',
                        // deprecated
                        'light-contrast': 'hsl(219,32%,14%)',
                        'medium': 'hsl(219,31%,13%)',
                        'medium-contrast': 'hsl(219,31%,11%)',
                        'dark': 'hsl(216,32%,9%)',
                        'dark-contrast': 'hsl(220,30%,8%)',
                        '50': 'hsl(220,3%,19%)',
                        '100': 'hsl(216,5%,19%)',
                        '200': 'hsl(216,11%,18%)',
                        '300': 'hsl(220,17%,17%)',
                        '400': 'hsl(219,24%,16%)',
                        '500': 'hsl(221,32%,15%)',
                    },
                    // Legacy, prefer above colors
                    blue: {
                        'DEFAULT': 'hsl(197,32%,54%)',
                        'light': 'hsl(183,100%,40%)',
                        'light-contrast': 'hsl(183,100%,33%)',
                        'medium': 'hsl(183,100%,20%)',
                        'dark': 'hsl(218,32%,15%)',
                        'darker': 'hsl(219,41%,13%)',
                    },
                    grey: {
                        'light': 'hsl(195,10%,85%)'
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
                animation: ['responsive', 'motion-safe', 'motion-reduce']
            }
        },
    },
    handler: function() {}
}
