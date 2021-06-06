document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  let isAccessible = true
  const returnData = {}
  const allData = document.querySelectorAll('.question__required')
  for (const data of allData) {
    const radios = data.querySelectorAll('input[type=radio]')
    const input = data.querySelector('input[type=text]')
    const email = data.querySelector('input[type=email]')
    const mobile = data.querySelector('input[type=mobile]')
    let isValid = true
    if (input) {
      returnData[input.name] = input.value
      isValid = input.value ? true : false // eslint-disable-line
    } else if (email) {
      returnData[email.name] = email.value
      isValid = email.value ? true : false // eslint-disable-line
    } else if (mobile) {
      returnData[mobile.name] = mobile.value
      isValid = /^09\d{8}$/.test(mobile.value)
    } else if (radios.length) {
      isValid = [...radios].some((radio) => radio.checked)
      if (isValid) {
        const radiosName = data.querySelector('input[type=radio]:checked')
        returnData[radiosName.name] = radiosName.value
      }
    } else {
      continue
    }
    isValid ? data.classList.add('hide-error') : data.classList.remove('hide-error')
    isAccessible &= isValid
  }

  if (isAccessible) {
    alert(JSON.stringify(returnData))
  }
})
