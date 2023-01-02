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
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        my_bg_image: "url('/circuit-splash.svg')",
        laptopSwirl: "url('/laptop-swirl.svg')",
        qbert: "url('/qubert1.png')",
        groupbg: "url('/groupphoto.jpg')",
        events: "url('/events2.jpg')",
        equity: "url('/equity.jpg')",
        execs: "url('/exec.jpg')",
        academics: "url('/academics.jpg')",
        yearreps: "url('/year reps.jpg')",
        techteam:"url('/techteam.jpg')",

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
