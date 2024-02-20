/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            primary: "#493657",
            secondary: "#CE7DA5",
            ashGray: "#AAC0AF",
            champagnePink: "#EFD5C3",
            darkGreen: "#3E442B",
        },

        extend: {
            gridRowStart: {
                13: "13",
                21: "21",
                38: "38",
                61: "61",
                100: "100",
            },
        },
    },
    plugins: [],
};
