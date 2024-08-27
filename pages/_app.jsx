import { jsx } from "theme-ui"
import { ThemeUIProvider } from "theme-ui"
import theme from "../theme"
import Nav from "../src/components/nav"

export default function App({ Component, pageProps }) {

  return (
    <ThemeUIProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeUIProvider>
  )
}