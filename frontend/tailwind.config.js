/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "0px",
            ...defaultTheme.screens,
        },
        extend: {
            backgroundImage: {
                login: "url('../src/static/loginBack.jpg')",
                logo: "url('../src/static/logo.png')",
            },
        },
    },
    plugins: [],
};
