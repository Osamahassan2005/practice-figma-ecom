import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from 'eslint-define-config';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
              
         

export default eslintConfig  
 


export const defineConfig=({
  overrides: [
    {
      files: ['/.js', '/.jsx', '/.ts', '/.tsx'],
      rules: {
        '@next/next/no-img-element': 'off',
        'react/no-unescaped-entities': 'off'
      }
    }
  ]
});