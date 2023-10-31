import React from 'react'

const Nav = () => {
  return (
    <div>
      <p>一覧表</p>
      <details>
        <summary>サーバー</summary>
        <ul>中央サーバー</ul>
        <ul>内部サーバー</ul>
        <ul>外部サーバー</ul>
        <ul>管理サーバー</ul>
      </details>
      <details>
        <summary>場所1</summary>
        <ul>場所1_端末1</ul>
        <ul>場所2_端末2</ul>
        <ul>場所3_端末3</ul>
      </details>
      <details>
        <summary>場所2</summary>
        <ul>場所2_端末1</ul>
        <ul>場所2_端末2</ul>
        <ul>場所3_端末3</ul>
      </details>
      <details>
        <summary>場所3</summary>
        <ul>場所3_端末1</ul>
        <ul>場所3_端末2</ul>
        <ul>場所3_端末3</ul>
      </details>
    </div>
  )
}

export default Nav