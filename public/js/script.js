(() => {
  // login
  setTimeout(() => {
    const login = document.getElementsByClassName("btn btn-outline-light my-2 my-sm-0").item(0)
    if (login.textContent === 'Log In') {
      login.click()
    }
  }, 1000)

  // mine
  var seconds = 2000
  const interval = setInterval(() => {
    const cpu = document.getElementsByClassName("progress-bar bg-info").item(0)
    var mine = document.getElementsByClassName("btn btn-block btn-primary mb-2").item(0)
    if (parseInt(cpu.textContent, 10) >= 100) {
      seconds = 2000
      clearInterval(interval)
    }
    if (parseInt(cpu.textContent, 10) < 100 && !mine.disabled && mine.textContent === 'Mine') {
      seconds = 36000
      mine.click()
    }
  }, seconds)
})()
