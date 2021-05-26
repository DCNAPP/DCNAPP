class element_display {
    toggle(selector) {
        let el = document.querySelector(selector)
        if (el.style.display == "block")
            el.style.display = "none"
        else
            el.style.display = "block"
    }

    show(selector) {
        let el = document.querySelector(selector)
        if (el.style.display = "none") {
            el.style.display = "block"
        }
    }

    hide(selector) {
        let el = document.querySelector(selector)
        if (el.style.display = "block") {
            el.style.display = "none"
        }
    }
}

var display = new element_display()

