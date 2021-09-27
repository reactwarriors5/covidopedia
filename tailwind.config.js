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
      }),
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
