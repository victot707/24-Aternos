const mineflayer = require('mineflayer');

console.log('Starting...')

function createBot () {
    const bot = mineflayer.createBot({
    host: "VelVik123.aternos.me:58156",
    port: "58156",
    username: "Byden876",
    version: false
    })
    bot.on('login', function() {
      bot.chat('/reginster 123123123 123123123')
      bot.chat('/login 123123123 123123123')
    })
    bot.on('chat', (username, message) => {
      if (username === bot.username) return
      switch (message) {
        case ';start':
          bot.chat('24 ATERNOS > Bot started! - Made By Fortcote')
          bot.setControlState('forward', true)
          bot.setControlState('jump', true)
          bot.setControlState('sprint', true)
          break
          case ';stop':
            bot.chat('24 ATERNOS > Bot stoped! - Made By Fortcote')
            bot.clearControlStates()
            break
          }
        })
        bot.on('spawn', function() {
          bot.chat('Bot > Spawned')
        })
        bot.on('death', function() {
          bot.chat('Bot > I died, respawn')
        })
        bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
        bot.on('error', err => console.log(err))
        bot.on('end', createBot)
}
createBot()
