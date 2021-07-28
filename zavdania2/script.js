
function prost(num){
    num = prompt('Введіть число');
    for(let i = 2; i < num; i++){
        if(num % i == 0) {
            console.log(`Число ${num} не є простим`);
        	break;
        }
        else{
            console.log(`Число ${num} є простим`);
        }
    }
}
prost();


