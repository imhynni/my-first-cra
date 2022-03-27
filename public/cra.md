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
