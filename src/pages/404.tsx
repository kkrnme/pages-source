import React from "react"

export default () => (
  <div
    className="bg-gray-900 w-full h-screen absolute text-yellow-300 text-center text-base font-serif"
    css={{ fontFamily: "Appli" }}
  >
    <h1 className="text-4xl  ">404 Not Found</h1>
    <p>「{location.href}」が見当たらなかった。</p>
    <p>
      <a href="/">トップに戻る</a>
    </p>
  </div>
)
