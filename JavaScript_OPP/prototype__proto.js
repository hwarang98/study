let superObj = {
    superVal : 'super'
}
let subObj = {
    subVal : 'sub'
}
subObj.__proto__= superObj
console.log('subObj.subVal: ', subObj.subVbj)
console.log('subObj.superVal: ', subObj.superVal)