'use strict'

module.exports = api => {
  // api.describeConfig({
  //   id: 'vue-cli-plugin-fleetup',
  //   name: 'FleetUp vue-cli-plugin',
  //   description: 'org.vue.common.description',
  //   link: 'https://github.com/chinazdg/vue-cli-plugin-fleetup',
  //   onRead: ({ data, cwd }) => ({
  //     prompts: [
  //       // todo
  //     ]
  //   }),
  //   onWrite: ({ prompts,answers, data, files, cwd, api}) => {
  //     // todo
  //   }
  // })

  api.addClientAddon({
    id: 'org.vue.webpack.client-addon',
    path: '@vue/cli-ui-addon-webpack/dist'
  })
  // 在这里使用 API...
  api.describeTask({
    match: /gulp/,
    description: 'org.vue.tasks.pre-task',
    // “More info”链接
    link: 'https://www.gulpjs.com.cn/',
    icon: '/_plugin/vue-cli-plugin-fleetup/gulp.png'
  })
  api.describeTask({
    match: /aws s3 sync .\/dist\//,
    description: 'org.vue.tasks.s3-upload',
    link: 'https://s3.console.aws.amazon.com/',
    icon: '/_plugin/vue-cli-plugin-fleetup/aws-s3.png'
  })
}
