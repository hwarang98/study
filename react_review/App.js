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
      mode:"welcome",
      subject:{title: "WEB", sub: "world wide web!"},
      welcome: {title: "Welcome", desc: "Hello, React!"},
      contents:[
        {id:1, title: "HTML", desc:"HTML is for information"},
        {id:2, title: "CSS", desc:"CSS is for design"},
        {id:3, title: "JavaScript", desc:"JavaScript is for interactive"},
        {id:4, title: "phython", desc:"파이썬 공부해보자"},
      ]
    }
  }
  // **state**

  render() {
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return(
      // !!컴포넌트를 만들때에는 반드시 하나의 최상위 태그로 시작해야하며 존재해야한다.<div>
      <div className="App">
        {/* 각 컴포넌트에서 props의 값을 전달받음 
          Subject 컴포넌트의 title,sub 의 " " 안의 내용이 바뀐다. 
          Article 컴포넌트의 title, desc의 " "안의 내용이 바뛴다. */}
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage = {()=>{
            this.setState({mode:'welcome'})
            alert("ㅎ2")
          }}
          >
        </Subject>
        {/* <header> 
          <h1><a href="/" onClick={ (e)=> {
            console.log(e);
            e.preventDefault(); // 기본적은 동작 금지
            this.state.mode = 'welcome' // arrow function 사용시 자동으로 바인딩 해줌
            this.setState({
              mode:'welcome'
            })
          }}>{this.state.subject.title}</a></h1>
        {this.state.subject.sub}
        </header> */}
        {/* key */}
        <Page data={this.state.contents}></Page>
        <Article title={_title} desc={_desc}></Article>
      </div>
    )
  }
}


export default App;
