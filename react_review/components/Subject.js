import React,{ Component } from 'react';

class Subject extends Component{
    render() {
    return(
        <header>
            {/* prps를 사용하여 App.js의 App 컴포넌트안에 있는 Subject 컴포넌트의
                title의 값을 더욱 쉽게 변경 가능하게 만들어줌. this.props.title의
                부분에서 title을 동일하게 바꿔주면 된다.(sub도 마찬가지) */}
        <h1><a href="/" onClick={(e)=>{
            e.preventDefault(); 
            this.props.onChangePage();
        }}>{this.props.title}</a></h1>
        {this.props.sub}
        </header>
    );
    }
}

// Subject라는 파일을 외부에서 사용할수있게 허용해주는 코드
export default Subject;