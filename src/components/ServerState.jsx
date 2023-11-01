import React from 'react'

export const ServerState = () => {
  return (
    <div>
      <div class="flex justify-center">
        <div class="m-2">
          <p>中央サーバー</p>
          <div>
            <div>
              <button class="m-2">A系</button>
              <button class="m-2">B系</button>
            </div>
            <button class="m-2 p-2">その他</button>
          </div>
        </div>
        <div class="m-2">
          <p>内部サーバー</p>
          <div>
            <div>
              <button class="m-2">A系</button>
              <button class="m-2">B系</button>
            </div>
            <button class="m-2 p-2">その他</button>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="m-2">
          <p>外部サーバー</p>
          <div>
            <div>
              <button class="m-2">A系</button>
              <button class="m-2">B系</button>
            </div>
            <button class="m-2 p-2">その他</button>
          </div>
        </div><div class="m-2">
          <p>管理サーバー</p>
          <div>
            <div>
              <button class="m-2">A系</button>
              <button class="m-2">B系</button>
            </div>
            <button class="m-2 p-2">その他</button>
          </div>
        </div>
      </div>
    </div>
  )
}