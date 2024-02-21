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

            neptune: {
                50: "#f2f9f9",
                100: "#dfeeee",
                200: "#c3ddde",
                300: "#99c6c7",
                400: "#7eb2b5",
                500: "#4c898e",
                600: "#427178",
                700: "#3a5e64",
                800: "#364f54",
                900: "#304449",
                950: "#1d2b2f",
            },

            lividBrown: {
                50: "#faf5f9",
                100: "#f6edf4",
                200: "#eedce9",
                300: "#e1c0d8",
                400: "#cd99bd",
                500: "#bb79a6",
                600: "#a55d8a",
                700: "#8d4971",
                800: "#753f5f",
                900: "#633851",
                950: "#412033",
            },
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
