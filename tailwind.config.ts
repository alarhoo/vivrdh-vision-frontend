import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    safelist: [
      'animate-[fade-in_1s_ease-in-out]',
      'animate-[fade-in-down_1s_ease-in-out]',
      'animate-[fade-in-up_1s_ease-in-out]',
      'animate-[fade-in_2s_ease-in-out]',
      'animate-[fade-in-down_2s_ease-in-out]',
      'animate-[fade-in-left_1s_ease-in-out]',
      'animate-[fade-in-right_1s_ease-in-out]',
    ],
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
};
export default config;
