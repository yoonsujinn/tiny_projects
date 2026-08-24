import {useEffect, useState} from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function BoardTemp() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    //useEffect는 React 컴포넌트가 렌더링된 후 특정 작업을 실행할 때 사용
    fetch("https://jsonplaceholder.typicode.com/posts") //데이터를 불러온다.
      .then((response) => response.json()) //response는 받은 응답을 나타내며, json() 메서드를 사용하여 JSON 형식으로 변환
      .then((data) => {
        setPosts(data); //setPosts를 사용하여 posts 상태를 업데이트
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default BoardTemp;
