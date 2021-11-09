// //babel.config.js
// module.exports = {
//   presets: [
//     ['@babel/preset-env', { 'modules': false }]
//   ],
//   'plugins': [
//     [
//       "import",
//       {
//         libraryName: 'element-plus',
//         customStyleName: (name) => {
//           name = name.slice(3)
//           return `element-plus/packages/theme-chalk/src/${name}.scss`;
//         },
//       },
//     ],
//   ]
// }

//babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { 'modules': false }]
  ],
  'plugins': [
    [
      'component',
      {
        'libraryName': 'element-ui' / 'element-plus',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}