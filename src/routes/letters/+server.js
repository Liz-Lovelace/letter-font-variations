import path from 'node:path'
import fs from 'node:fs/promises'
import { error } from '@sveltejs/kit'

export const GET = async () => {
    const pathName = path.resolve('./static/letters.svg')
  
    try {
        const file = await fs.readFile(pathName)
        return new Response(file)
    } catch {
        throw error(404)
    }
}
