// tailwind.config.js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}", // Assurez-vous d'inclure tous les fichiers Vue
    ],
    theme: {
        extend: {
            animation: {
                fadeInDown: "fadeInDown 1s ease-out", // Animation fadeInDown
            },
            keyframes: {
                fadeInDown: {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-20px)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                    },
                },
            },
        },
    },
    plugins: [],
};
