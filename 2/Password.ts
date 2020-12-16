import fs from 'fs';

export class filestuff {
    validate() {
        console.log(`Test`);
    }

    readfile() {
        return fs.readFileSync(`passwords.txt`, 'utf-8').trim().split('\r\n');

      
   }
}
