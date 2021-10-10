import React,{ Component } from 'react';


class Update extends Component{
    render() {
        console.log(this.props.data);
        console.log('Update render');
    return(
        <article>
            <h2>Update</h2>
            {/* form tag 에서 submit이라는 버튼을 클릭했을때, submit 버튼을 포함하는
            form tag의 onSubmit이라는 이벤트를 설치 해놓으면 그 이벤트가 실행되도록 
            약속되어있다 html의 form tag의 고유한 기능이다. */}
            <form action = "/create_process" method="post" onSubmit={(e)=>{
                e.preventDefault();
                this.props.onSubmit(e.target.title.value, e.target.desc.value);
            }}>
                <p>
                    <input type="text" name="title" placeholder="title"></input>
                </p>

                <p>
                    <textarea name="desc" placeholder="description"></textarea>
                </p>

                {/* 전송버튼 */}
                <p>
                    <input type="submit"></input>
                </p>
            </form>
        </article>
    );
    }
}

// Article라는 파일을 외부에서 사용할수있게 허용해주는 코드
export default Update;