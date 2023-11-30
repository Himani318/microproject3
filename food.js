//usecase
let list=require('./food.json')

let food=list.map((a1)=>{
    return a1
})
//console.log(food)
//usecase2 
let item1=list.filter((a2)=>{
    return a2.category ==='Vegetable'
    
})
//console.log(item1)

//usecase 3
let item2=list.filter((a3)=>{
    return a3.category ==='Fruit'
      
})
//console.log(item2)

//usecase4
let item3=list.filter((a4)=>{
    return a4.category ==='Protein'
})
//console.log(item3)

//usecase5
let item4=list.filter((a5)=>{
    return a5.category ==='Nuts'
})
//console.log(item4)
//usecase6
let item5=list.filter((a6)=>{
    return a6.category ==='Grain'
})
//console.log(item5)

//usecase7
let item6=list.filter((a7)=>{
    return a7.category ==='Dairy'
})
//console.log(item6)
//usecase8
let item7=list.filter((a8)=>{
    return a8.calorie>100
})
//console.log(item7)
//usecase9
let item8=list.filter((a9)=>{
    return a9.calorie<100
})
//console.log(item8)
//usecase10
let item9=list.sort(function(a,b){
    return b.protiens-a.protiens
})
//console.log(item9)
//usecase11
let item10=list.sort(function(a,b){
    return a.cab-b.cab
})
console.log(item10)








