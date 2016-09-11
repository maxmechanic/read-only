const inputTypes = ['input', 'textarea']

const collectElements = selector => document.querySelectorAll(selector)

const disableElements = els =>
  Array.from(els)
       .forEach(el => el.disabled = true)

const collectAndDisableElements = type => disableElements(collectElements(type))

const makeReadOnly = fn => inputs => () => inputs.forEach(fn)

const readOnly = makeReadOnly(collectAndDisableElements)(inputTypes)

const observer = new MutationObserver(readOnly)
observer.observe(document.body, {childList: true, subtree: true})

readOnly()
