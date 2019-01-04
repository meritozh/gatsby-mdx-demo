import { resolve } from 'path'
import { mkdir, writeFile } from 'fs'
import { slugize } from './slugize'

const postsDir = resolve(__dirname, `../../posts`)

const content = (name: string) => {
  return `---
title: "${name}"
data: "${new Date().toISOString().slice(0, 10)}"
category: "c"
tags:
  - "t"
---`
}

const parseArgs = (argv: string[]) => {
  if (argv.length < 3) {
    throw new Error('provide post name')
  }

  const name = process.argv[2]
  const slug = slugize(name)

  mkdir(resolve(postsDir, slug), err => {
    if (err) {
      throw err
    }

    mkdir(resolve(postsDir, slug, `assets`), err => {
      if (err) {
        throw err
      }
    })

    writeFile(resolve(postsDir, slug, `post.mdx`), content(name), err => {
      if (err) {
        throw err
      }
    })
  })
}

parseArgs(process.argv)
