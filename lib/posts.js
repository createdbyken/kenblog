import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    //get file names under the /post dir
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // Remove .md extension to get the post id
        const id = fileName.replace(/\.md$/, '')

        //Read mardown file as a string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        //Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })

    //Sort by posts date
    return allPostsData.sort((a, b) => {
        if(a.date < b.date){
            return 1
        } else {
            return -1
        }
    })
}