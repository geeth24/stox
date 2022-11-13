import { extendTheme } from "@chakra-ui/react"

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}
const colors = {
  brand: {
    '50': '#f1f6fd',
    '100': '#cde0f6',
    '200': '#a8c8f0',
    '300': '#7fafe8',
    '400': '#5896e1',
    '500': '#347fdb',
    '600': '#236abf',
    '700': '#1b5192',
    '800': '#164278',
    '900': '#123662',
  },
};

// 3. extend the theme
export const theme = extendTheme({ config, colors });
