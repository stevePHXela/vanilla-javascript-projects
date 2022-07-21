const magnifierEl = document.querySelector('.fa-magnifying-glass')
const searchBarContainerEl = document.querySelector('.searchBar-container')
const searchInputEL = document.querySelector('#search-input')

magnifierEl.addEventListener('click', () => {
    if (searchBarContainerEl.classList.contains('s-active')) {
        searchBarContainerEl.classList.remove('s-active')
        searchInputEL.focus()
    } else {
        searchBarContainerEl.classList.add('s-active')
    }
})