# React

## Create React App

- 리액트 앱을 만드는 최고의 방법
- create-react-app을 사용하면 React 앱 스캐폴딩을 제공해준다.

```
npx create-react-app my-app
npx start
```

- 한 컴포넌트 당 하나의 .js 파일을 가질 수 있어 모듈화가 가능하다.
- 컴포넌트별 .module.css 파일을 생성해 import 후 스타일을 입혀줄 수 있다. (className or id에 import한 스타일 객체의 property를 전달하여 적용)

```
import styles from "./Button.module.css";
..
<button className={styles.btn}>
..
```

- 기존의 특정 class나 id에 적용하는 방식이 아닌, 특정 jsx element에 적용하는 방식 : react가 컴파일 과정 중 random class or id를 생성하기 때문에 스타일을 적용하기 위해 className을 굳이 외울 필요가 없다

## useEffect

### problem #1

- state가 변경되면 모든 컴포넌트가 리렌더링되는데, 특정 코드는 맨 처음 렌더링될 때 한번만 실행되도록 제한하고 싶을 때가 있다. (ex. API 호출)
- useEffect(function, [])를 이용하면 function 코드가 단 한번만 실행되도록 보장해준다.

### problem #2

- 코드의 특정 부분만 변화했을 때, 원하는 코드를 실행하고 싶다.
- useEffect 함수의 두번째 인자로 감시하고 싶은 state를 넣어준다.

```
useEffect(function, [keyword]);
```

- 위의 코드에서는 keyword가 변할 때만 function이 실행된다.
- 두번째 인자에 빈 array를 주게 되면 react가 지켜볼 대상이 없기 때문에 처음 한 번만 실행되는 것
- array 안에 여러개 넣을 수도 있음
- useEffect는 react.js가 동작하는 관점에서 말하자면 '방어막' 같은 것

## CleanUp

- component가 destroyed 될 때도 뭔가를 실행하고 싶다면, effect function의 return에 넣어주면 된다

## State

### state가 배열일 때 setState를 사용해 배열을 수정하는 방법

```
setState(currentArray => [newItem, ...currentArray]);
```

- setState의 인자로 함수를 전달한다.
- 현재 배열과 새로운 요소를 합쳐 새로운 배열을 만들어내는 방법 : '...' 사용

### state 배열의 요소들을 각각의 컴포넌트로 만들기

- map 함수 사용
  - map 함수는 배열의 각각의 요소마다 함수를 실행한 결과를 새로운 배열로 반환한다.
  - map 함수의 첫번째 인자로 현재 요소를 가져올 수 있다.
  - map 함수의 두번째 인자로 현재 요소의 인덱스를 가져올 수 있다.
- 각각의 요소를 태그 안에 넣어 단순한 텍스트에서 컴포넌트로 만들어준다.
- map을 쓸 때마다 key를 element에 주어야 한다!

## then 대신 사용하는 async-await

- 이중으로 await 사용 가능
- await는 async 함수 내부에 있지 않으면 사용할 수 없음
- 사용 예시

```
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
  };
  useEffect(() => {
    getMovie();
  }, []);
```

## React Router

- 페이지 전환
- 하나의 route는 home, 홈스크린, 홈페이지 등 부를 때는 스크린, route, 페이지 부르고 싶은 대로
- Router를 먼저 렌더링 해주고, 그 안에 들어가는 건 유저가 있는 url에 따라 보여줄 컴포넌트를 넣어줌

### Switch

- Switch는 Route를 찾는 건데, Route는 url을 의미하고, Route를 찾으면 컴포넌트를 렌더링 할 것, Switch 컴포넌트를 넣어주면 한 번에 하나의 컴포넌트만 렌더링되게 할 수 있음

### Link

- Link는 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트

### Dynamic(동적) URL

- React Router는 다이나믹 url을 지원
- url에 변수를 넣을 수 있다는 것
- path에서 넣으려는 변수 이름 앞에 : 를 넣어주어야 함
- react router에서 url에 있는 변수를 알려주는 함수를 제공함 : 내가 쓴 변수명 그대로 받게 됨
