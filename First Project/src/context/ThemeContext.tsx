import { createContext } from "react"
import type { themeType } from "../interface/welcome";

export const ContextTheme = createContext<themeType>({ theme: "light" });
