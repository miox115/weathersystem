import React from 'react'

const Nav = () => {
  return (
    <div clss="m-4">
      <p>一覧表</p>
      <details>
        <summary>サーバー</summary>
        <ul class="m-1">中央サーバー</ul>
        <ul class="m-1">内部サーバー</ul>
        <ul class="m-1">外部サーバー</ul>
        <ul class="m-1">管理サーバー</ul>
      </details>
      <details>
        <summary>場所1</summary>
        <ul class="m-1">場所1_端末1</ul>
        <ul class="m-1">場所2_端末2</ul>
        <ul class="m-1">場所3_端末3</ul>
      </details>
      <details>
        <summary>場所2</summary>
        <ul class="m-1">場所2_端末1</ul>
        <ul class="m-1">場所2_端末2</ul>
        <ul class="m-1">場所3_端末3</ul>
      </details>
      <details>
        <summary>場所3</summary>
        <ul class="m-1">場所3_端末1</ul>
        <ul class="m-1">場所3_端末2</ul>
        <ul class="m-1">場所3_端末3</ul>
      </details>
    </div>
  )
}

export default Nav