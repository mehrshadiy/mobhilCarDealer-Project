import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Montserrat: ['Montserrat']
            },
            colors: {
                primary: {
                    50: "rgba(228, 234, 255, 1)",
                    70: '#6276ea',
                    100: "#0D3DE5",
                    200: "rgba(13, 61, 229, 0.75)",
                    300: "rgba(13, 61, 229, 0.50)",
                    400: "rgba(13, 61, 229, 0.25)",
                },
                secondary: {
                    10: "rgba(159, 167, 171, 1)",
                    20: "#C4C4C4",
                    50: "rgba(89, 89, 89, 1)",
                    100: "#575757",
                    200: "#595959",
                    300: "#464646",
                    400: "#2C2C2C",
                },
                Purple: {
                    50: "rgba(165, 177, 223, 1)",
                    100: "rgba(154, 176, 255, 0.39)",

                },
                orange: {
                    100: "#FF9446"
                },
                White: {
                    50: "rgba(235, 235, 235, 1)",
                    100: "#C4C4C4",
                    200: "#F1F4FF",
                    300: "#F0F0F0",
                    400: "#F8F8F8",
                    500: "#EBEBEB",
                },
            },

            backgroundImage: {
                'searchBg': 'linear-gradient(0deg, rgba(255,255,255,0.4375) 0%, rgba(0,0,0,0.12097338935574231) 100%)',
                'linear-line': ' linear-gradient(90deg, rgba(61,59,59,1) 0%, rgba(196,196,196,0.6307773109243697) 100%)',
                'TrendingSliderBg:': 'linear-gradient(180deg, rgba(0, 0, 0, 0.31) 0%, rgba(0, 0, 0, 0.01) 100%);',
                'paginatedSliderBg': 'linear-gradient(180deg, rgba(0, 0, 0, 0.17) 0%, rgba(0, 0, 0, 0.67) 100%);',
                'about-banner': "url('/assets/images/bgBanners/aboutBanner.jpg')",
                'collection-banner' : "url('/assets/images/bgBanners/collectionBg.jpg')",
                "location-banner": "url('/assets/images/bgBanners/locationBg.jpg')",
                "contact-banner": "url('/assets/images/bgBanners/contactBg.jpg')",
            },

            boxShadow: {
                'Xl': '0px 26px 40px 0px rgba(38, 58, 126, 0.14)',
                '3xl': '0px 31px 81px 0px rgba(0, 17, 77, 0.20)',
                '4xl': '0px 49px 111px 0px rgba(1, 19, 86, 0.28)',
                '5xl': '0px 5px 39px 0px rgba(0, 0, 0, 0.08)',
                '6xl': '0px 12px 24px 0px rgba(13, 61, 229, 0.24)',
                '7xl': '0px 4px 10px 0px rgba(0, 0, 0, 0.18)',
                '8xl': '0px 16px 35px 0px rgba(0, 0, 0, 0.15)',
            },

            screens: {
                'xs': '400px'
            }
        },
    },
    plugins: [
        function ({addUtilities}: any) {
            const newUtilities = {
                '.gradient-black': {
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.46) 0%, rgba(7, 7, 7, 0.48) 100%)',
                },
            };
            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};
export default config;
