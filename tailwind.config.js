/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/assets/images/hero-bg.avif')",
      }
    }
  }
}
