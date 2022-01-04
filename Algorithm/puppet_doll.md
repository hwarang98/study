# 프로그래머스 

## 크레인 인형 뽑기

```javascript
function solution(board, moves) {
    // moves = 작동시킨 위치
    // board = 인형 보드
    // 리턴해야할 것 = 터진 인형의 갯수 즉, 1번 터질때마다 +2

    // 뽑은 인형을 담을 basket 의 빈 배열을 선언
    // basket 똑같은것이 쌓여서 터질때마다 +2 해줄 result 선언
    // moves의 0번째 인덱스로 board의[i][i]를 순회 하여 0 이아니면 basket에 담아줌
    // moves를 전부 순회하면 result 를 리턴
    
    let basket = [];
    let result = 0;

    for(let i = 0; i < moves.length; i++ ){
        const move = moves[i] - 1;
        for(let j = 0; j < board.length; j++){
            // console.log(board[j][moves[i]-1]) // board[0][0], board[0][]
            const doll = board[j][move] // 
            if(doll){ // 0이 아닐때를 찾음
                board[j][move] = 0; // 꺼낸 자리에 0을 대입
                if(basket.length !== 0 && basket[basket.length - 1] === doll){  // basket이 비어있지않고 마지막으로 꺼낸 것과 제일 마지막으로 담긴 것이 일치할때
                    basket.pop(); // 마지막인형 꺼내준다
                    result += 2; // result 에 2 씩 더해줌
                }
                else{
                    basket.push(doll)
                }
                break;
            }
        }
    }
    return result
}

```

