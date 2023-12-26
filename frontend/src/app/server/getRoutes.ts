'use server'

import * as fs from 'fs'
import * as path from 'path'

function isDirectory(path: string) {
  return fs.statSync(path).isDirectory()
}

function getDirectories(basePath: string, dirPath = ''): string[] {
  const fullPath = path.join(basePath, dirPath)
  const entries = fs.readdirSync(fullPath)

  const directories = entries.reduce((result, entry) => {
    const entryPath = path.join(dirPath, entry)
    const fullEntryPath = path.join(basePath, entryPath)

    if (isDirectory(fullEntryPath)) {
      const subDirs = getDirectories(basePath, entryPath)
      return result.concat(entryPath, subDirs)
    }

    return result
  }, [] as string[])

  return directories
}

export const Base = {
  SRC: './src/app',
  APP: './app',
} as const

type Routes = (typeof Base)[keyof typeof Base]

export const getRoutes = async (base: Routes) => {
  function hasPage(dir: string) {
    const pagePath = path.join(basePath, dir, 'page.tsx')
    return fs.existsSync(pagePath)
  }

  function toRoute(dir: string) {
    const route = '/' + dir.replace(/\\/g, '/')
    const name = route.split('/').pop() || ''
    return { name: name.charAt(0).toUpperCase() + name.slice(1), path: route }
  }

  const basePath = path.resolve(base)
  const directories = getDirectories(basePath)
  const routes = directories.filter(hasPage).map(toRoute)
  return routes
}
