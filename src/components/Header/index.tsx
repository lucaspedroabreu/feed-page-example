import { ReactElement, ReactPropTypes } from "react"
import reactLogo from "../../assets/react-logo.svg"
import viteLogo from "../../assets/vite-logo.svg"
import igniteLogo from "../../assets/ignite-logo.svg"

import styles from "./Header.module.css"

export function Header() {
  return (
    <header className="bg-gray-700 h-24 !p-14 px-0 flex justify-center items-center gap-16">
      <div className="flex items-center gap-5 justify-center">
        <a
          href="https://www.rocketseat.com.br/ignite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={igniteLogo}
            className={styles.logoIgnite}
            alt="Ignite logo"
          />
        </a>

        <h1 className="text-gray-50 text-3xl font-bold tablet:text-2xl">
          Ignite Feed
        </h1>
      </div>
      <h2 className="text-gray-50 text-3xl font-bold tablet:hidden">+</h2>
      <div className="flex items-center gap-5 justify-center tablet:hidden">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className={styles.logoVite} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className={styles.logoReact} alt="React logo" />
        </a>
      </div>
    </header>
  )
}
