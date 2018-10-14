var imgs = document.getElementsByClassName('img')
var modal = document.getElementById('modal')
var close = document.getElementById('close')
var modalImg = document.getElementById('modalImg')

for (var i = 0; i < imgs.length; i++) {
    imgs[i].onmouseover = function() {
        document.body.style.backgroundImage = "url(" + this.src + ")"
        document.body.style.backgroundAttachment = "fixed"
    }
    
    imgs[i].onmouseout = function() {
        window.document.body.style.backgroundImage = ""
    }

    imgs[i].onclick = function() {
        console.log(this.src)
        modal.style.display = "flex"
        modalImg.src = this.src
    }
}

close.onclick = function() {
    modal.style.display = "none"
}