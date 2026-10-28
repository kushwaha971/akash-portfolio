import {defineConfig} from 'vite';
import {readdirSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
const input={home:resolve('index.html')};
for(const folder of ['work','about','blog','hire','contact']){
 if(existsSync(folder+'/index.html'))input[folder]=resolve(folder+'/index.html');
 for(const child of readdirSync(folder,{withFileTypes:true})){if(child.isDirectory()&&existsSync(folder+'/'+child.name+'/index.html'))input[folder+'-'+child.name]=resolve(folder+'/'+child.name+'/index.html');}
}
export default defineConfig({build:{rollupOptions:{input}}});
