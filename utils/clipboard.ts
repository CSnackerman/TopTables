export function clipboardCopy(str: string) {
  const dummy = document.createElement('textarea')
  dummy.id = 'copyDummy'
  dummy.value = str
  document.body.appendChild(dummy)
  dummy.focus()
  dummy.select()
  try {
    document.execCommand('copy')
  }
  catch (e) {
    console.log(e)
  }
  document.body.removeChild(dummy)
}