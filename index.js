document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.hamburger').addEventListener('click',function(){
            this.classList.toggle('closeicon')
            if(this.classList.contains('closeicon')){
                document.querySelector('.mobilenav').style.cssText = `max-height:242px;opacity:1`
            }
            else{
                document.querySelector('.mobilenav').style.cssText = `max-height:0px;opacity:0`
            }
    })
})