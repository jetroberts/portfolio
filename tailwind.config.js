module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                'fade': 'inset 0px 0px 7px 7px rgba(255,255,255,1)',
                'card': '-4px 4px 6px 0px rgba(0,0,0,0.35)',
                'raised': '-14px 14px 16px 4px rgba(0,0,0,0.25)'
            },
            maxHeight: {
                '3/4': '75%'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
