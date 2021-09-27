import React,{ Component } from 'react';


class Article extends Component{
    render() {
    return(
        <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
        </article>
    );
    }
}

// Page라는 파일을 외부에서 사용할수있게 허용해주는 코드
export default Article;