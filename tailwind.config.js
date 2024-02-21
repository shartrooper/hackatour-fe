/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
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
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: ["tailwindcss-animate"],
};
