'use strict'

module.exports = api => {
  api.describeConfig({
    id: 'vue-cli-plugin-fleetup',
    name: 'FleetUp vue-cli-plugin',
    description: 'FleetUp Customer Task for Vue.js',
    link: 'https://github.com/chinazdg/vue-cli-plugin-fleetup'
  })

  api.addClientAddon({
    id: 'org.vue.webpack.client-addon',
    // 包含构建出来的 JS 文件的文件夹
    path: '@vue/cli-ui-addon-webpack/dist'
  })
  // 在这里使用 API...
  api.describeTask({
    // 用于匹配脚本命令的 RegExp 对象，来选择要被描述的任务
    match: /gulp/,
    description: '前置任务预执行，elementUi、国际化',
    // “More info”链接
    link: 'https://www.gulpjs.com.cn/',
    icon: '/_plugin/vue-cli-plugin-fleetup/gulp.png'
  })
  api.describeTask({
    // 用于匹配脚本命令的 RegExp 对象，来选择要被描述的任务
    match: /aws s3 sync .\/dist\//,
    description: '部署到AWS S3',
    link: 'https://s3.console.aws.amazon.com/',
    icon: '/_plugin/vue-cli-plugin-fleetup/aws-s3.png'
  })
}
