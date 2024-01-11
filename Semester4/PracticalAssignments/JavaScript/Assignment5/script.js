function printNum(){

    const elem = document.getElementById("solution1");
    elem.classList.remove("hidden");

    for(let i=1;i<=10;i++){
        elem.innerHTML += i+" ";
    }

}

function fibonacci(){

    const elem = document.getElementById("solution2");
    elem.classList.remove("hidden");

    const n = Number(document.getElementById("input_2").value);
    let temp=0,n1=0,n2=1;

    for(let i=1;i<=n;i++){  

        elem.innerHTML += n1+" ";
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
}

function count(){

    const elem = document.getElementById("solution3");
    elem.classList.remove("hidden");

    const word = document.getElementById("input_3").value.toLowerCase();
    const len = word.length;
    let counter=0;

    for(let i=0;i<len;i++){
        if(word[i]>="a" && word[i]<="z")
            counter++;
    }
    elem.innerHTML = counter;
}

function oddnum(){

    const elem = document.getElementById("solution4");
    elem.classList.remove("hidden");

    const list = document.getElementById("input_4").value;
    const array = list.split(",");
    let len = array.length;


    for(let i=0;i<len;i++){
        if(Number(array[i])%2!=0)
            elem.innerHTML += array[i]+", ";
    }
}

function sumofN(){

    const elem = document.getElementById("solution5");
    elem.classList.remove("hidden");

    const n = Number(document.getElementById("input_5").value);
    let sum=0;

    for(let i=1;i<=n;i++)
        sum+=i

    elem.innerHTML = sum;
}

function pascal(){

    const elem = document.getElementById("solution6");
    elem.classList.remove("hidden");

    const n = parseInt(document.getElementById("input_6").value);
    let arr = ""  
    for (let i = 0; i < n; i++) {
        let row = "";
        let coefficient = 1;

        for(let j=n-i-1;j>0;j--){
            row+="&nbsp;&nbsp;"
        }
        for (let j = 0; j <= i; j++) {
            row += coefficient+"&nbsp;&nbsp;";
            coefficient = coefficient * (i - j) / (j + 1);
        }
        arr+=row+"<br>";
    }
    elem.innerHTML = arr;
}

function patt(){

    const elem = document.getElementById("solution7");
    elem.classList.remove("hidden");

    let str = "JULY";
    for(let i=0;i<5;i++){
        for(let j=0;j<i;j++){
            document.getElementById("right_triangle").innerHTML += str[j];
        }
        document.getElementById("right_triangle").innerHTML += "<br>";
    }
    
    for(let i=5;i>0;i--){
        for(let j=i;j>0;j--){
            document.getElementById("reverse_right_triangle").innerHTML += j;
        }
        document.getElementById("reverse_right_triangle").innerHTML += "<br>";
    }

    let n=5;
    for(let i=1;i<=n;i++){

        for(let j=1;j<=n+1-i;j++){
            document.getElementById("triangle").innerHTML += j;
        }

        for(let j=1;j<i;j++){
            document.getElementById("triangle").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }

        for(let j=n-i+1;j>0;j--){
            document.getElementById("triangle").innerHTML += j;
        }

        document.getElementById("triangle").innerHTML += `<br>`;
    }
}

function table(){

    const elem = document.getElementById("solution8");
    elem.classList.remove("hidden");

    let temp;
    for(let i=11;i<16;i++){
        elem.innerHTML += `<span style="padding: 0 15px" id="table${i}"> </span>`;
        for(let j=1;j<11;j++){
            temp = i+" x "+j+" = "+(i*j)+" <br>"
            document.getElementById(`table${i}`).innerHTML += temp;
        }
    }
}