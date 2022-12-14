function Set_Url(){
    document.querySelector('#Facebook_share').href = `https://twitter.com/share?url=${window.location.href}`
    document.querySelector('#Twitter_share').href = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
    document.querySelector('#Whatsapp_share').href = `https://wa.me/?text=${window.location.href}`
    document.querySelector('#telegram_share').href = `https://t.me/share/url?url=${window.location.href}`
}
function copyToClipboard(element) {
    element = window.location.href
    navigator.clipboard.writeText(element);

}
