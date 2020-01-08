# Container Components

상태관리를 담당

- 여기서 리덕스 스토어 상태를 불러옵니다.
    - 상태를 조회할때 사용하는 함수 useSelector, dispatch 하는 함수 useDispatch
    - `import { useSelector, useDispatch } from 'react-redux';`
    - 필요한 `dispatch(조회와 업데이트 및 추가기능)`를 만들어서 `presentation components`로 넘깁니다.
    - `presentation components`는 `components 폴더`에 있으며 주로 `UI를 담당`합니다.
- state 값은 index.js의 Provider 함수덕분에 전역에서 사용이 가능합니다. 