module.exports = {
  apps: [
    {
      name: 'Verodrip',
      exec_mode: 'cluster',
      instances: 1,
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      watch: true,
      env: {
        HOST: '0.0.0.0',
        PORT: 3047,
        NODE_ENV: 'production',
      },
    },
  ],
}
