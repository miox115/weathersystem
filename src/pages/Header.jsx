import React from 'react'

const Header = () => {
  return (
    <div>
      <div class="flex justify-center">
        <p class="text-3xl m-2 p-3 bg-gray-200 rounded-md">場所</p>
        <p class="text-3xl m-2 p-3 bg-green-500 rounded-md">運用中</p>
        <p class="text-3xl m-2 p-3 bg-green-500 rounded-md">モード</p>
        <p class="text-3xl m-2 p-3 bg-gray-200 rounded-md">バージョン</p>
        <button class="text-3xl m-2 p-3 bg-gray-500 rounded-md">操作</button>
        <button class="text-3xl m-2 p-3 bg-gray-500 rounded-md">コピー</button>
        <button class="text-3xl m-2 p-3 bg-gray-500 rounded-md">アラーム停止</button>
        <button class="text-3xl m-2 p-3 bg-gray-500 rounded-md">端末</button>
        <p class="text-3xl m-2 p-3 bg-gray-200 rounded-md">時刻</p>
      </div>
    </div>
  )
}

export default Header