const onScroll = target => {
    const element = document.querySelector(target)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
}

export default onScroll