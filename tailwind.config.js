module.exports = {
  content: [
    "./src/index.js",
    "./src/App.js",
    "./src/components/Porfolio.js",
    "./src/components/NavBar.js",
    "./src/components/pages/About.js",
    "./src/components/Hero.js",
    "./src/components/Footer.js",
    "./src/components/Project.js",
    "./src/components/pages/Projects.js",
    "./src/components/pages/Contact.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night"]
  }
}
