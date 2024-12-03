const fs = require('fs');
const path = require('path');

const raiz = ('../../../../../Estudos de Progamação');

// Listar arquivos e pastas
// const filesAndFolders = fs.readdirSync(raiz);
// console.log(filesAndFolders);
// retonar como lista, por ordem alfabetica

//Verificar tipo de arquivo
// const stats = fs.statSync('./functions.js');;
// console.log(`É arquivo: ${stats.isFile()}`);
// console.log(`É pasta: ${stats.isDirectory()}`);

// Ler conteúdo de um arquivo
// const content = fs.readFileSync('./functions.js', 'utf-8');
// console.log(content);


const items = fs.readdirSync(raiz, { withFileTypes: true });
console.log(items);
/*

[
  Dirent {
    name: '.git',
    path: '../../../../../Estudos de Progamação',
    [Symbol(type)]: 2
  },
  Dirent {
    name: '.vscode',
    path: '../../../../../Estudos de Progamação',
    [Symbol(type)]: 2
  },
  Dirent {
    name: 'index.html',
    path: '../../../../../Estudos de Progamação',
    [Symbol(type)]: 1
  },
  Dirent {
    name: 'README.md',
    path: '../../../../../Estudos de Progamação',
    [Symbol(type)]: 1
  },
  Dirent {
    name: 'site-configuration',
    path: '../../../../../Estudos de Progamação',
    [Symbol(type)]: 2
  },
  Dirent {
    name: 'study-material',
    path: '../../../../../Estudos de Progamação',
    [Symbol(type)]: 2
  }
]

*/

path.join(dir, item.name)
// Combina o caminho do diretório atual (dir) com o nome do item (item.name) para formar o caminho completo do item.

path.extname(item.name); // '.js', '.html', etc.
// path.extname(item.name) retorna a extensão do arquivo.


//__dirname
//é o caminho da pasta onde o arquivo tá sendo rodado