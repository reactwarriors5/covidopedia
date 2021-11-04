module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        Emergency: "url('/images/images-adnan/emergency-CTA.jpg')",
        BookAppointment: "url('/images/images-adnan/appointment.jpg')",
        Testimonial: "url('/images/images-adnan/testimonial.jpg')",
        vendorBg: `url("/asset/images-atik/meteor.svg")`,
        newsBannerBg: `url("https://image.freepik.com/free-vector/covid19-coronavirus-lower-third-background-with-text-space_1017-24694.jpg")`,
      }),
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
