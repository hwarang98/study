// Todo: Call back Hell example
// !! 콜백지옥의 문제점
// 1.가독성이 떨어진다.
// 2.에러나 디버깅을 해야할경우 어렵다.
// 3.유지보수가 어렵다.

class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === ' ellie' && password === 'dream') ||
                (id === ' coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000)
    }
}

getRoles(userm, onSuccess, onError)
setTimeout(() => {
    if(user === 'ellie'){
        onSuccess({name: 'ellie', role: 'admin'});
    }else{
        onError(new Error('no access'));
    } 
}, 1000)

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(

            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, your have a ${userWithRole.role} role`)
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);


