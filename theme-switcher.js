function setTheme(themeName) {
  localStorage.setItem('theme', themeName)
  document.body.className = themeName
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    setTheme('light-theme')
  } else {
    setTheme('dark-theme')
  }
}

function getPreferredTheme() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    return savedTheme
  }

  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark-theme'
    : 'light-theme'
}

setTheme(getPreferredTheme())

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark-theme' : 'light-theme')
    }
  })

document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.getElementById('theme-toggle')
  toggleButton.addEventListener('click', toggleTheme)
})
