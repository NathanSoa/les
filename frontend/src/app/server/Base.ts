export const Base = {
  SRC: './src/app',
  APP: './app',
} as const

export type Routes = (typeof Base)[keyof typeof Base]
