module.exports = {
  // plugins: [
  //   [
  //     'module-resolver',
  //     {
  //       root: ['.'],
  //       alias: {
  //         '@components': './components'
  //       }
  //     }
  //   ]
  // ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
}
