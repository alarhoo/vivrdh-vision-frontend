import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003270',
      },
    },
    safelist: [
      'animate-[fade-in_1s_ease-in-out]',
      'animate-[fade-in-down_1s_ease-in-out]',
      'animate-[fade-in-up_1s_ease-in-out]',
      'animate-[fade-in_2s_ease-in-out]',
      'animate-[fade-in-down_2s_ease-in-out]',
      'animate-[fade-in-left_1s_ease-in-out]',
      'animate-[fade-in-right_1s_ease-in-out]',
      'animate-[drop-in_0.5s]',
      'animate-[drop-out_0.5s]',
      'animate-[browse-in_0.5s]',
      'animate-[browse-out_0.5s]',
    ],
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
};
export default config;
