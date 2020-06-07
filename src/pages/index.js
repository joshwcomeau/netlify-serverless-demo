import React from "react"

import "../styles.css"

const IndexPage = () => {
  const [joke, setJoke] = React.useState(null)

  React.useEffect(() => {
    fetch("/.netlify/functions/get-joke")
      .then(res => res.json())
      .then(data => setJoke(data.joke))
  }, [])

  return (
    <main>
      <h1>Functions Demo</h1>
      <p>
        The following is a dad joke generated <span aria-label="cloud">☁️</span>{" "}
        in the cloud <span aria-label="cloud">☁️</span>
      </p>

      {joke && (
        <details>
          <summary>{joke.question}</summary>
          <p>{joke.answer}</p>
        </details>
      )}

      <Spacer size={200} />

      <p>
        Dad jokes are from <a href="">Wes Bos</a>.
      </p>
      <p>Copyright 2020 Josh Comeau</p>
    </main>
  )
}

const Spacer = ({ size }) => (
  <img
    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    alt=""
    style={{ display: "block", width: size, height: size }}
  />
)

export default IndexPage
