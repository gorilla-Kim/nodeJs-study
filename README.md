# nodeJs-study



## ✅ npm init

package.json 파일 생성



## ✅ npm i express --save

Express 프레임워크 설치

* --save

  package.json 에 express 모듈 정보를 추가



## ✅ 기타 모듈

`npm i cookie-parser --save`

* 쿠키를 읽어들이고 해석하는 모듈(라이브러리)

`npm i body-parser`

* 네트워크상에서 파일을 읽어들이고 해석하는 모듈

`npm i helmet`

* 보안관련 기능을 제공하는 모듈



## ✅ Static

img, html, css 와 같이 자주 바뀌지 않는 정적인 파일들을 다룬다.

assets와 같은 폴더를 만들고 그 안에서 파일들을 관리한다.

`npm i serve-static --save`



## ✅ Chaching Layers

`npm i redis --save`

`npm i redis-cluster --save`



## 📗 JS 문법

`class`

- super() 와 super. 의 용법은 각각 무엇인가?
  super()은 부모클래스의 constructor 즉, 생성자로서의 역할을 수행한다.
  super. 은 부모클래스 자체를 의미하며 super.<무엇>에서 <무엇>에는 부모클래스의
  키값이나 메서드가 올수 있다.

- super가 없다면 어떤점이 불편한가? 있다면 어떤점이 편리한가?
  super가 없다면 class를 사용하는 의미가 없어지며, 부모클래스와 중복되는
  코드를 모두 다시 한번 작성해야하기 때문에 효율성이 떨어진다.
  그런데 이를 사용하게되면 부모가 가지고있는 기능들을 모두 가져다 쓸수 있어
  중복을 제거할 수 있고, 유지보수에 좋다.

- 상속의 기능으로 인해 생기는 단점을 어떤게 보완하는가?
  상속받은 기능은 변경할수 없었는데 super를 통해 중복되는 부분은 끌어다 쓰고, 추가적인 부분은 추가하여 보완할 수 있다.  

-------------

`setTimeout`을 이용한 이벤트 처리

* `setTimeout`의 경우 `unref`하면 이벤트 루프를 깨울 분리된 타이머를 생성한다. 이 타이머를 너무 많이 생성하면 이벤트 루프 성능에 역효과를 줄 수 있다. -- 잘 사용해라.

-------