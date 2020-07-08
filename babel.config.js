/*
 * @Author: crli
 * @Date: 2020-07-02 10:44:26
 * @LastEditors: crli
 * @LastEditTime: 2020-07-08 13:07:04
 * @Description: file content
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
