
function storeData(v) {
    var oldValue=document.getElementById('inp')
    let sign=['+','-','*','/']
    if (sign.includes(v)) {
        if (sign.includes(oldValue.value.slice(-1))) {
            alert('put right arithmetic')
        } else {
            oldValue.value+=v
        }
    } else {
        oldValue.value+=v
    }
}
function clearData() {
    let inp = document.querySelector('#inp')
    inp.value=''
}
function popot(){
    var oldValue=document.querySelector('#inp')
    let nv=oldValue.value.slice(0,-1)
    oldValue.value=nv
}
function cal() {
    var oldValue=document.getElementById('inp')
    let cal=eval(oldValue.value)
    oldValue.value=cal
}