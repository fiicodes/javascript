let num1=8
let num2=10

document.getElementById('num1-el').textContent=num1
document.getElementById('num2-el').textContent=num2
let sum=document.getElementById('sum-el')

let ans=0
function add(){
    ans=num1+num2
    sum.textContent=ans



}
function sub(){
    ans=num1-num2
    sum.innerHTML=ans



}
function multi(){
    ans=num1*num2
    sum.innerHTML=ans



}
function div(){
    ans=num1/num2
    sum.innerHTML=ans



}