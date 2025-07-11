import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import html from 'remark-html';
import { remark } from 'remark';

const postsDirectory = path.join(process.cwd(),'/src/Docs');


export function getDocuments(){
    const fileNames = fs.readdirSync(postsDirectory)
    const allDocuments = fileNames.map((fileName)=>{
        const id = fileName.replace(".md","");
        
        const fullPath = path.join(postsDirectory,fileName);
        const fileContents = fs.readFileSync(fullPath,"utf8");
      const matterResults = matter(fileContents);
   
      return {
        id,
        ...matterResults.data
      }
    })
    return allDocuments.sort((a,b)=>{
        if(a.order < b.order){
            return -1;
        }
        if(a.order > b.order){
            return 1;
        }
        return 0;
    })
}

export async function getDocumentContent(id){
    const fullPath = path.join(postsDirectory,`${id}.md`);
    const fileContents = fs.readFileSync(fullPath,'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}