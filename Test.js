//bai1
console.log("Bài 1")
function findOppositeNumber(n,inputNumber) {
    if (inputNumber<n/2)
        return inputNumber+(n/2)
    else return inputNumber-(n/2)
}
findOppositeNumber(18,5)
console.log(findOppositeNumber(18,5))

//bai2
console.log("Bài 2")
function merge2String(s1,s2) {
    let result=" ";
    for (let i = 0; i < s1.length||i<s2.length; i++) {
        if (i<s1.length ){
            result+=s1[i];
        }
        if (i<s2.length) {
            result+=s2[i];
        }       
    }
    return result;
}

console.log(merge2String("abcd","123"));


//bai3
console.log("Bài 3")
localStorage.setItem("turn",3)
function start(){

    let random_number=Math.floor(Math.random()*10)+1;
    // console.log(random_number);
    let button =document.getElementById("button").addEventListener("click",function(){
        let t=localStorage.turn;
        if(t > 1) {
            let input = document.getElementById("input").value;
            t--;
            localStorage.setItem("turn", t)
            if (input > random_number) {
                document.getElementById("ketqua").innerHTML="Bé hơn chút nữa"
                document.getElementById("turn").innerHTML = "Bạn còn "+t+" lượt"
            } else
                if (input < random_number) {
                    document.getElementById("ketqua").innerHTML="Lớn hơn chút nữa"
                    document.getElementById("turn").innerHTML = "Bạn còn "+t+" lượt"
                }
            else if(input==random_number){
                localStorage.setItem("turn", 0)
                document.getElementById("ketqua").innerHTML="Bạn đã chiến thắng"
                document.getElementById("turn").innerHTML = "Bạn còn "+t+" lượt"
                alert("Chúc mừng!!! Bạn đã chiến thắng")
            }
        }
        else
            {
                let input = document.getElementById("input").value;
                localStorage.setItem("turn", t)
                if (input != random_number) {
                    document.getElementById("ketqua").innerHTML="Bạn đã thua"
                    document.getElementById("turn").innerHTML = "Bạn đã hết lượt"
                }
                else{
                    localStorage.setItem("turn", 0)
                    document.getElementById("ketqua").innerHTML="Bạn đã chiến thắng"
                    document.getElementById("turn").innerHTML = "Bạn còn "+t+" lượt"
                    alert("Chúc mừng!!! Bạn đã chiến thắng")
                }
            }
 
    })
    
}
start()