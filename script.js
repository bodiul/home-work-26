const greet = (name) => {
    return `polash, ${name}!`;
   };
   console.log(greet("islam"));
// home work number 2

const arrayAverage = () =>{
let sum = 0;
let numbers = [50, 20, 30, 40, 50];
for(i=0;i<numbers.length;i++){
    sum += numbers[i];
}
let average = sum / numbers.length;
    let res = average;
    document.getElementById('print1st').innerHTML = res;
}

// home work number 3

const counterFunc = (counter) =>{
    if (counter > 100) {
        counter = 0;
         }else {
         counter++;
        }
        
        return counter;
}

// home work number 4
function obj(){
let obj = {
    StudentName: 'Polash Islam',
    Class: 'VI',
    RollNo: 12
}
document.write('Student Name : ' + obj.StudentName + '<br>')
document.write('Class : ' + obj. Class+"<br>")
document.write('Roll No : ' + obj.RollNo)
}


// home work number 4
function deleteroll(){
let obj = {
    StudentName: 'Polash Islam',
    Class: 'VI',
    RollNo: 12
}
document.write('Student Name : ' + obj.StudentName + '<br>')
document.write('Class : ' + obj. Class+"<br>")
document.write('Roll No : ' + obj.RollNo.pop())
}
