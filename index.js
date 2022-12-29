document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.hamburger').addEventListener('click',function(){
        document.querySelector('.mobilenav').style.cssText = `height:100vh;opacity:1`
    })

    document.querySelector('.closenav').addEventListener('click',function(){
        document.querySelector('.mobilenav').style.cssText = `height:0vh;opacity:0`
    })
})