import{ Component } from 'react';
import Page from "./components/Page" // Page.js파일을 불러옴
import Article from "./components/Article" // Article.js파일을 불러옴
import Subject from "./components/Subject" // Subject.js파일을 불러옴
import './App.css';

class App extends Component{ 
  // !!state는 정보를 은닉화 하는것.
  // **state**
  constructor(props){
    super(props);
    // TODO: 컴포넌트가 실행될때 constructor라는 함수가있다면 제일먼저 실행되고 초기화를 담당한다.
    this.state = {
      subject:{title: "WEB", sub: "world wide web!"},
      contents:[
        {id:1, title: "HTML", desc:"HTML is HyperText ..."},
        {id:2, title: "CSS", desc:"CSS is for design"},
        {id:3, title: "JavaScript", desc:"JavaScript is for interactive"},
        {id:4, title: "phython", desc:"파이썬 공부해보자"},
      ]
    }
  }
  // **state**

  render() {  
    return(
      // !!컴포넌트를 만들때에는 반드시 하나의 최상위 태그로 시작해야하며 존재해야한다.<div>
      <div className="App">
        {/* 각 컴포넌트에서 props의 값을 전달받음 
          Subject 컴포넌트의 title,sub 의 " " 안의 내용이 바뀐다. 
          Article 컴포넌트의 title, desc의 " "안의 내용이 바뛴다. */}
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        {/* key */}
        <Page data={this.state.contents}></Page>
        <Article title="HTML" desc="HTML is HyperText Markup Language."></Article>
      </div>
    )
  }
}


export default App;
