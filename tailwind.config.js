/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      CascadiaCode: ["CascadiaCode"],
    },
    extend: {
      backgroundImage: {
        my_bg_image: "url('/circuit-splash.svg')",
        laptopSwirl: "url('/laptop-swirl.svg')",
        qbert: "url('/qubert1.png')",
        groupbg: "url('/group-photo.png')",
        events: "url('/events.jpg')",
        equity: "url('/equity.jpg')",
        execs: "url('/execs.jpg')",
        academics: "url('/academics.jpg')",
        yearreps: "url('/year-reps.jpg')",
      },
      screens: {
        aboutmb: "767px",

        mobileabout: "1220px",

        about: "1550px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
};
