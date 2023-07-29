document.getElementById("conctenatestring").onclick=function(){
    let firstname='Usman'
    let lastname='Shahid'
    let fullname=firstname+" "+lastname
    document.getElementById('Result').innerHTML = fullname
    let statement="let firstname ="+ firstname +"<br> let lastname ="+lastname +'<br> let fullname=firstname+" "+lastname'
    document.getElementById('statement').innerHTML=statement

}
document.getElementById("promptenter").onclick=function(){
    let firstname =prompt('Enter Your First Name')
    document.getElementById('Result').innerHTML = firstname
    document.getElementById('statement').innerHTML=" let firstname =prompt('Enter Your First Name')"

}