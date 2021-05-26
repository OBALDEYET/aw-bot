(() => {
  setTimeout(() => {
    const login = document.getElementById("loginBtn")
    const autoMine = document.getElementById("autoMineCheck")
    if (login.textContent === 'Log In') {
      grecaptcha.execute('6LeUFfEaAAAAANVtcitooxJl4W7DCpNuCdaxUp5n', {action: 'submit'}).then(function(token) {
        login.click()
        autoMine.click()
      });
    }
  }, 1000)

  setInterval(() => {
    const cpu = document.getElementById("cpuPercent")
    const cpuLimit = document.getElementById("formControlRange")
    const mine = document.getElementById("mineBtn")
    const autoMine = document.getElementById("autoMineCheck")
    if (parseInt(cpu.textContent, 10) < cpuLimit.value && !mine.disabled && autoMine.checked) {
      mine.click()
    }
  }, 2000)
})()
