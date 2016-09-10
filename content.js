const disableElements = els =>
  Array.from(els)
       .forEach(el => el.disabled = true)

disableElements(document.querySelectorAll('input'))
disableElements(document.querySelectorAll('textarea'))