import React,{ Component } from 'react';


class Page extends Component{
    render() {
        // key
        let list = [];
        let data = this.props.data
        let i = 0;
        while(i < data.length){
            // key라는 것은 <li>의 각각의 목록을 다른 것들과 구분 할 수 있는 식별자를 적어주면된다.
            // 우리가 필요해서 쓰는것이 아닌 react가 필요해서 우리에게 요청하는것
            // key를 적지않 으면 console에 에러가 뜬다.
            list.push(
                <li key={data[i].id}>
                    <a href={"/content/" + data[i].id}
                    data-id = {data[i].id}
                    onClick = {(e) => {
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }}>
                    {data[i].title}</a>
                    </li>)
            i++
        }
    return(
        <nav>
        <ul>
            {list}
        </ul>
    </nav>
    );
    }
}

// Page라는 파일을 외부에서 사용할수있게 허용해주는 코드
export default Page;