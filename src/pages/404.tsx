import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="bg-gray-900 w-full h-screen absolute text-yellow-300 text-center text-base font-serif">
    <h1 className="text-400  ">404 Not Found</h1>
    <p>ページが見当たらなかった。</p>
    <p>
      <Link to="/">トップに戻る</Link>
    </p>
  </div>
)
