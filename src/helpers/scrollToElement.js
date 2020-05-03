export default (event, selector, topMargin = 0) => {
  event.preventDefault()
  const element = document.querySelector(selector)
  if (element) {
    const currentScrollY = window.scrollY || window.pageYOffset
    const positionTop = element.getBoundingClientRect().top + currentScrollY
    window.scrollTo({
      top: positionTop + topMargin,
      left: 0,
      behavior: 'smooth'
    })
  }
}
