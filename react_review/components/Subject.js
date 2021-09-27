import React,{ Component } from 'react';

class Subject extends Component{
    render() {
    return(
        // !!컴포넌트를 만들때에는 반드시 하나의 최상위 태그로 시작해야하며 존재해야한다.<header>
        <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
        </header>
    );
    }
}

export default Subject;