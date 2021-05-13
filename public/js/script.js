(function () {
  // auto login
  setTimeout(function () {
    var login = document.getElementsByClassName("btn btn-outline-light my-2 my-sm-0")
    if (login[0].textContent === 'Log In') {
      login[0].click()
    }
  }, 3000)

  // auto mine when cpu < 90%
  var WaitForReady = setInterval(function () {
    var cpu = document.getElementsByClassName("progress-bar bg-info")
    var mine = document.getElementsByClassName("btn btn-block btn-primary mb-2")
    if (parseInt(cpu[0].textContent, 10) < 90) {
      if (!mine[0].disabled && mine[0].textContent === 'Mine') {
        mine[0].click()
      }
    }
  }, 2000)
})()

