document.addEventListener('DOMContentLoaded', () => {
    const button_darkmode = document.querySelector('.dark-mode');

    let isDarkMode = false

    button_darkmode.addEventListener('click', () => {
        isDarkMode = (isDarkMode) ? false : true;
        changeTheme()
    })

    function changeTheme(){
        return (isDarkMode) ? turnOnDarkMode() : turnOffDarkMode()
    }

    const turnOnDarkMode = ()=>{
        document.documentElement.style.setProperty('--background', 'var(--background-dark)')
        document.documentElement.style.setProperty('--background-card', 'var(--card-dark)')
        document.documentElement.style.setProperty('--background-items', 'var(--dark-items)')
        document.documentElement.style.setProperty('--text', 'var(--text-light)')
        document.documentElement.style.setProperty('--icons', 'var(--dark-icons)')
        document.documentElement.style.setProperty('--title', 'var(--title-light)')
      }

    const turnOffDarkMode = ()=>{
        document.documentElement.style.setProperty('--background', '#f2f2f2')
        document.documentElement.style.setProperty('--background-card', '#fff')
        document.documentElement.style.setProperty('--background-items', '#fff')
        document.documentElement.style.setProperty('--text', '#000')
        document.documentElement.style.setProperty('--icons', '#000')
        document.documentElement.style.setProperty('--title', '#000')
    }


});