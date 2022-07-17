const purgeCss =
  process.env.NODE_ENV === "production"
    ? [
        "@fullhuman/postcss-purgecss",
        {
          content: [
            "./pages/**/*.{js,jsx,ts,tsx}",
            "./components/**/*.{js,jsx,ts,tsx}",
          ],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        },
      ]
    : undefined;

module.exports = {
  plugins: ["tailwindcss", purgeCss, "postcss-preset-env"],
};
