import React from 'react'

const Nav = () => {
  return (
    <div class="m-2 p-4 border-2 text-xl">
      <p>一覧表</p>
      <details class="m-2">
        <summary>サーバ</summary>
        <ul class="m-1">中央サーバ</ul>
        <ul class="m-1">内部サーバ</ul>
        <ul class="m-1">外部サーバ</ul>
        <ul class="m-1">管理サーバ</ul>
      </details>
      <details class="m-2">
        <summary>場所1</summary>
        <ul class="m-1">端末1</ul>
        <ul class="m-1">端末2</ul>
        <ul class="m-1">端末3</ul>
      </details>
      <details class="m-2">
        <summary>場所2</summary>
        <ul class="m-1">端末1</ul>
        <ul class="m-1">端末2</ul>
        <ul class="m-1">端末3</ul>
      </details>
      <details class="m-2">
        <summary>場所3</summary>
        <ul class="m-1">端末1</ul>
        <ul class="m-1">端末2</ul>
        <ul class="m-1">端末3</ul>
      </details>
    </div>
  )
}

export default Nav