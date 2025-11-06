export interface propsData {
  name: string
  value: number
}

export interface themeType {
  theme: string
  setTheme?: (theme: string) => void
}
