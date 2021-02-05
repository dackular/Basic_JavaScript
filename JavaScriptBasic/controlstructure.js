age = 15;
// let result = (age==15);  // true / false

if(age < 15){
    //คำสั่งให้ทำอะไร
    console.log("คำนำหน้าเป็น เด็กชาย / เด็กหญิง")
}

if(age >= 15 && age <=25){
    console.log("วัยรุ่น")
}

if(age > 25 && age <= 45){
    console.log("วัยกลางคน")
}


let balance = 5000;
let withDraw = 6000;

if(withDraw<=balance){
    // เมื่อเงื่อนไขเป็นจริง
    console.log("ดำเนินการถอนเงิน = ",withDraw);
    balance-=withDraw;
    console.log("ยอดคงเหลือ = ",balance);
}else{
    // เมื่อเงื่อนไขเป็นเท็จ
    console.log("ยอดเงินของคุณไม่พอ")
}

let score = 70;

/*
มากกว่า 40 => D
มากกว่า 50 => C
มากกว่า 60 => B
มากกว่า 70 => A
*/

if(score>70){
    console.log("เกรด A");
}
else if(score>60){
    console.log("เกรด B");
}
else if(score>50){
    console.log("เกรด C");
}
else if(score>40){
    console.log("เกรด D");
}
else{
    console.log("เกรด F");
}
