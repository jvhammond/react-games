import { useState } from "react";

export default function useThemeToggle() {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme((prevMode) => {
            if (prevMode === "light"){
              return "dark"
            } else {
              return "light"
            }
        }
      )
    }

    console.log('jhammond inside usethemetoggle')

    /*const { toggleColorMode } = useMemo(
        () => ({
          toggleColorMode: () => {
            setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
          }
        }),
        []
      );*/
    


    return [theme, toggleTheme]
}