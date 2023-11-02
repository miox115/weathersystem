import React from 'react'

const Header = () => {
  return (
    <div class="border-2">
      <div class="flex justify-center">
        <p class="text-3xl m-2 p-3 bg-gray-200 rounded-md">場所</p>
        <p class="text-3xl m-2 p-3 bg-green-500 rounded-md">運用中</p>
        <p class="text-3xl m-2 p-3 bg-green-500 rounded-md">モード</p>
        <p class="text-3xl m-2 p-3 bg-gray-200 rounded-md">バージョン</p>
        <button class="text-3xl m-2 p-3 bg-gray-500 rounded-md hover:shadow-sm hover:translate-y-0.5">操作</button>
        <button class="text-3xl m-2 p-3 bg-gray-500 rounded-md hover:shadow-sm hover:translate-y-0.5">コピー</button>
        <button class="text-3xl m-2 p-3 bg-gray-500 rounded-md hover:shadow-sm hover:translate-y-0.5">アラーム停止</button>
        <button class="text-3xl m-2 p-3 bg-gray-500 rounded-md hover:shadow-sm hover:translate-y-0.5">端末</button>
        <p class="text-3xl m-2 p-3 bg-gray-200 rounded-md">時刻</p>
      </div>
    </div>
  )
}

export default Header