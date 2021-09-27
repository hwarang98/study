import React,{ Component } from 'react';


class Page extends Component{
    render() {
    return(
        <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="1.html">CSS</a></li>
            <li><a href="1.html">JavaScript</a></li>
        </ul>
    </nav>
    );
    }
}

// Page라는 파일을 외부에서 사용할수있게 허용해주는 코드
export default Page;