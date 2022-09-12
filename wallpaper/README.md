# 요구사항

## 1. pixabay API 연동하기

## 2. 배경화면 검색 기능

- src/component/Search.js 컴포넌트를 활용해서 배경화면 검색 기능을 구현해주세요.
- 검색어를 입력하지 않아도 어플리케이션 시작 시 최초 1회는 이미지를 가져와야 합니다. (q="")
- 검색창에 검색어를 입력하고 Enter 키를 입력하면 입력한 검색어로 이미지를 검색합니다.
- 검색한 후에는 검색창 input값이 빈 문자열 상태가 되어야 합니다.(두가지방법)
- 1)SearchInput를 따로 컴포넌트로 빼 제어컴포넌트로 관리

```js
const [inputValue, setInputValue] = useState('')

<SearchInput
  placeholder="검색어 입력 후 ENTER"
  onKeyDown={onSearch}
  onChange={(e) => setInputState(e.target.value)}
  value={inputState}
/>
```

- 2. ref 활용(비제어컴포넌트)

- 검색 결과가 없을 시에는 src/component/EmptyResult.js 컴포넌트를 활용해서 검색 결과 없음을 표시해주세요.
