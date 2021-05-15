(() => {
  setInterval(() => {
    const cpu = document.getElementsByClassName("progress-bar bg-info")
    const mine = document.getElementsByClassName("btn btn-block btn-primary mb-2")
    const autoMine = document.getElementById("autoMineCheck")
    if (parseInt(cpu[0].textContent, 10) < 90 && !mine[0].disabled && mine[0].textContent === 'Mine' && autoMine["checked"]) {
      mine[0].click()
    }
  }, 2000)
})()

