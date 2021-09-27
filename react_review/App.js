import{ Component } from 'react';
import Page from "./components/Page" // Page.js파일을 불러옴
import Article from "./components/Article" // Article.js파일을 불러옴
import Subject from "./components/Subject" // Subject.js파일을 불러옴
import './App.css';

class App extends Component{
  render() {
    return(
      // !!컴포넌트를 만들때에는 반드시 하나의 최상위 태그로 시작해야하며 존재해야한다.<div>
      <div className="App">
        {/* 각 컴포넌트에서 props의 값을 전달받음 
          Subject 컴포넌트의 title,sub 의 " " 안의 내용이 바뀐다. 
          Article 컴포넌트의 title, desc의 " "안의 내용이 바뛴다. */}
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Page></Page>
        <Article title="HTML" desc="HTML is HyperText Markup Language."></Article>
      </div>
    )
  }
}


export default App;
