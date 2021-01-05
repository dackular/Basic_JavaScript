let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ : ")
let random_number = Math.floor(Math.random()*1000)
document.getElementById("random").innerHTML = random_number
if(lotto_number == random_number){
    document.getElementById("result").innerHTML = "ยินดีด้วย ! คุณถูกรางวัลเลขท้าย 3 ตัว"
}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วย ! คุณไม่ถูกรางวัลเลขท้าย 3 ตัว"
}
