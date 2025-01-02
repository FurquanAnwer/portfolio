import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Furquan Anwer",
  description: "Portfolio project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} animate-fadeIn`}>{children}</body>
    </html>
  );
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // ... other config
//   theme: {
//     extend: {
//       animation: {
//         fadeIn: 'fadeIn 0.5s ease-in-out',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: 0 },
//           '100%': { opacity: 1 },
//         },
//       },
//     },
//   },
// }

