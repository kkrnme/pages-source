import React from "react"
import GeoPattern from "geopattern"

export default () => {
  const [date, setDate] = React.useState(GeoPattern.generate(String(90)))
  const onc = () => {
    setDate(GeoPattern.generate(String(Date.now())))
    console.log(date)
  }
  React.useEffect(() => {
    const intervalId = setInterval(onc, 1000)
    console.log(date)
    return function() {
      clearInterval(intervalId)
    }
  }, [date])
  return (
    <div
      className="min-h-screen h-full"
      css={{
        backgroundColor: date.color,
        backgroundImage: date.toDataUrl(),
      }}
    >
      <button onClick={onc}>Push</button>
    </div>
  )
}
