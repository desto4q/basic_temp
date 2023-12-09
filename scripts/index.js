let nav_bar = document.querySelector(".nav_links")
let side_nav = document.querySelector(".side_nav")
let nav_btn = document.querySelector(".nav_btn")
let side_nav_content =document.querySelector(".side_nav_links")

let div_maker = (type, content) => {
    let div = document.createElement(`${type}`)
    div.innerHTML = content
    return div
}

let appender = (parent) => {
    for (let i in links) {
        let a = div_maker("a", links[i].name)
        a.setAttribute("href", "#")
        parent.append(a)    
    }
}

appender(nav_bar)
appender(side_nav_content)




let side_nav_activator = () => {
    let shown = false
    return {
        switcher: () => {
            if (shown == false) {
                side_nav.classList.add("open")
                shown = true
                nav_btn.classList.add("checked")
            }
            else {
                side_nav.classList.remove("open")
                shown = false
                nav_btn.classList.remove("checked")
            }
        },
        nav_close: () => {
            if (shown != false) {
                side_nav.classList.remove("open")
                shown = false
                nav_btn.classList.remove("checked")
            }
        }
    }

}

let nav_activate = side_nav_activator()


nav_btn.onmousedown = () => {
    nav_activate.switcher()
}


console.log(nav_bar)

window.onresize = () => {

    if (window.innerWidth > 600) {
        nav_activate.nav_close()
    }
}