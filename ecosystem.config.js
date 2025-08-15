module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "npm",
      args: "start",
      env: {
        PORT: 3001,
        API_KEY: "abcd1234"
      },
     time:true,
    }
  ]
}
