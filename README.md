Для того что бы node смог запустить js файл с ECMA6 нужно установить babel

Устанавливаем babel глобально
npm install - g babel-cli

Устанавливаем babel локально
npm install --save-dev babel-cli

Устанавливаем допольнительные модули
npm install --save-dev @bable/core @babel/cli @babel/node @babel/preset-env 

Устанавливаем плагины для async/await
npm install babel-plugin-transform-runtime --save-dev
npm install babel-plugin-transform-async-to-generator --save-dev

Устанавливаем пресеты для babel 
npm install babel-preset-stage-0 babel-preset-es2015

Создаем файл .babelrc в него помещаем
{
    "presets":["es2015","stage-0"],
    "plugins":["transform-runtime"]
}

Для конвертации в es2015 и запуска сконвертированного файла добавить команду в package.json

"scripts": {
    "start": "babel src --out-dir dist && node dist/index.js"
  },