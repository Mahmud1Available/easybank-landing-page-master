document.addEventListener('DOMContentLoaded', () => {
    const menuBarImage = document.querySelector('#image-display')
    const menuBarImageClicked = document.querySelector('#image-close')
    const menuBarDropdown = document.querySelector('.mobileNav')
    const mockops = document.getElementById('mockops')
    const overlay = document.querySelector('.overlay')
    menuBarImage.onclick = () => {
        menuBarImage.style.display = 'none'
        menuBarImageClicked.style.display = 'block'
        mockops.style.display = 'none'
        menuBarImageClicked.style.backgroundColor = 'white'
        menuBarDropdown.style.display = 'flex'
        overlay.style.display = 'block'
    }

    menuBarImageClicked.onclick = () => {
        menuBarImage.style.display = 'block'
        menuBarImageClicked.style.display = 'none'
        mockops.style.display = 'flex'
        menuBarDropdown.style.display = 'none'
        overlay.style.display = 'none'
    }
})