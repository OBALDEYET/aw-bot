(function () {
  // auto login
  // setTimeout(function () {
  //   var login = document.getElementsByClassName("btn btn-outline-light my-2 my-sm-0").item(0)
  //   if (login.textContent === 'Log In') {
  //     login.click()
  //   }
  // }, 1000)

  // auto mine when cpu < 90%
  var WaitForReady = setInterval(function () {
    var cpu = document.getElementsByClassName("progress-bar bg-info").item(0)
    var mine = document.getElementsByClassName("btn btn-block btn-primary mb-2").item(0)
    if (parseInt(cpu.textContent, 10) < 90) {
      if (!mine.disabled && mine.textContent === 'Mine') {
        mine.click()
      }
    }
  }, 2000)
})()
