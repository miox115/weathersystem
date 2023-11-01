import React from 'react'

export const ServerState = () => {
  return (
    <div>
      <div class="flex justify-center">
        <div class="m-2 p-1 border-2">
          <p class="text-center text-xl">中央サーバー</p>
          <div>
            <div>
              <button class="text-xl m-2 p-4 bg-green-500 rounded">A系</button>
              <button class="text-xl m-2 p-4 bg-green-500 rounded">B系</button>
            </div>
            <button class="flex m-auto m-2 p-4 bg-green-500 rounded">その他</button>
          </div>
        </div>
        <div class="m-2 p-1 border-2">
          <p class="text-xl">内部サーバー</p>
        <div>
            <div>
              <button class="text-xl m-2 p-4 bg-green-500 rounded">A系</button>
              <button class="text-xl m-2 p-4 bg-green-500 rounded">B系</button>
            </div>
            <button class="flex m-auto m-2 p-4 bg-green-500 rounded">その他</button>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="m-2 p-1 border-2">
          <p class="text-xl">外部サーバー</p>
        <div>
            <div>
              <button class="text-xl m-2 p-4 bg-green-500 rounded">A系</button>
              <button class="text-xl m-2 p-4 bg-green-500 rounded">B系</button>
            </div>
            <button class="flex m-auto m-2 p-4 bg-green-500 rounded">その他</button>
          </div>
        </div>

        <div class="m-2 p-1 border-2">
          <p class="text-xl">管理サーバー</p>
        <div>
            <div>
              <button class="text-xl m-2 p-4 bg-green-500 rounded">A系</button>
              <button class="text-xl m-2 p-4 bg-green-500 rounded">B系</button>
            </div>
            <button class="flex m-auto m-2 p-4 bg-green-500 rounded">その他</button>
          </div>
        </div>
      </div>
    </div>
  )
}