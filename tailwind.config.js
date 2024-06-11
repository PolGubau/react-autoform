import { poluiPlugin } from "pol-ui";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/pol-ui/lib/**/*.js"],
  plugins: [poluiPlugin()],
};
