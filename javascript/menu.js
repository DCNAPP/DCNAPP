docReady(() => {

    // toggle expand arrow
    document.getElementById("expand").addEventListener("click", () => {
        document.getElementById("expand").classList.toggle("up")
        display.toggle("#menu-body")
    })

    // open settings
    document.getElementById("elm-body-settings").addEventListener("click", () => {
        display.hide("#elm-body-settings")
        display.hide("#elm-body-info")
        display.show("#settings-inside")

        document.getElementById("expand").addEventListener("click", () => {
            display.show("#elm-body-settings")
            display.show("#elm-body-info")
            display.hide("#settings-inside")
        })
    })

    // open [settings][theme]
    document.getElementById("elm-body-settings-theme").addEventListener("click", () => {
        display.hide("#settings-inside")
        display.show("#settings-inside-theme")

        document.getElementById("expand").addEventListener("click", () => {
            display.show("#elm-body-settings")
            display.hide("#settings-inside-theme")
        })
    })

    document.getElementById("elm-body-settings-filler-mark").addEventListener("click", () => {
        display.hide("#settings-inside")
        display.show("#settings-inside-filler-mark")

        document.getElementById("expand").addEventListener("click", () => {
            display.show("#elm-body-settings")
            display.hide("#settings-inside-filler-mark")
        })
    })

    // open [settings][info]
    document.getElementById("elm-body-info").addEventListener("click", () => {
        document.getElementById('version').innerHTML = `version: ${version}`
        display.hide("#elm-body-settings")
        display.hide("#elm-body-info")
        display.show("#info-inside")

        document.getElementById("expand").addEventListener("click", () => {
            display.show("#elm-body-settings")
            display.show("#elm-body-info")
            display.hide("#info-inside")
        })
    })

    document.getElementById("elm-body-settings-theme-in-dark").addEventListener("click", () => {
        localStorage.setItem('theme', 'dark')
        location.reload()
    })
    
    document.getElementById("elm-body-settings-theme-in-light").addEventListener("click", () => {
        localStorage.setItem('theme', 'light')
        location.reload()
    })

    document.getElementById("elm-body-settings-theme-in-filler-tag").addEventListener("click", () => {
        localStorage.setItem("filler-mark", "filler-tag")
    })

    document.getElementById("elm-body-settings-theme-in-border-color").addEventListener("click", () => {
        localStorage.setItem("filler-mark", "border-color")
    })
})