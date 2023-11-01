import React from 'react'

const Setting = () => {
  return (
    <div class="m-2 p-4 border-2 text-xl">
      <div class="flex ">
        <div class="m-2">
          <ul>
            <li>端末</li>
            <li>種別</li>
          </ul>
        </div>
        <div class="m-2">
          <ul>
            <li>A-1</li>
            <li>端末1</li>
          </ul>
        </div>
      </div>
      <button >設定変更</button>

      <div class="flex">
        <button class="m-2">メモリ</button>
        <button class="m-2">CPU</button>
        <button class="m-2">世代</button>
      </div>
    </div>
  )
}

export default Setting