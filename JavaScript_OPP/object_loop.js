let memberArray = ['egoing', 'graphittie', 'leezhce']
let i = 0;
while (i < memberArray.length){
    console.log(i,memberArray[i])
    i = i + 1
}

let memberObj = {
    manager: 'egoing',
    developer : 'graphittie',
    designer : 'leezhce'
}

console.group('object loop')
for(let name in memberObj){
    console.log(name, memberObj[name]); 
}

console.groupEnd('object loop')
