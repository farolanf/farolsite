/* credit https://gist.github.com/Igloczek/2e8f5596490bc56eda1486e5ed8f4a07 */
import path from 'node:path'
import fs from 'node:fs/promises'
import { globby } from 'globby'

const files = await globby('./dist/**/index.html')

await Promise.all(
  files.map(async (htmlPath) => {
    const pageStyles = []
    const stylesPaths = []

    let file = await fs.readFile(htmlPath, 'utf-8')

    file = file.replace(
      /<link rel="stylesheet" href="(.*?)"\s*\/?>/g,
      (match, p1) => {
        stylesPaths.push(p1)
        return `{{${p1}}}`
      }
    )

    await Promise.all(
      stylesPaths.map(async (stylesPath) => {
        stylesPath = path.resolve(path.join(path.dirname(htmlPath), stylesPath))
        const styles = await fs.readFile(stylesPath, 'utf-8')
        pageStyles.push(styles)
      })
    )

    stylesPaths.forEach((p, i) => {
      file = file.replace(`{{${p}}}`, `<style>${pageStyles[i]}</style>`)
    })

    await fs.writeFile(htmlPath, file)
  })
)
