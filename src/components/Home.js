import React from 'react'

const Home = () => {

  return (
    <div style={{paddingLeft: 10}}>
      <h1>Home</h1>
      <div style={{fontSize: 18}}>
        Welcome to my blog. The purpose of this blog is twofold:
        <ul>
          <li>Teach myself full stack web design</li>
          <li>Show you some cool tech and handyman stuff I have built in my life that I think is pretty cool</li>
        </ul>

        As you can see, it is not the most aesthetically pleasing at the moment. That is because rather than paying
        for a blog platform, I am building this sucker from the ground up. That means everything you see on this page
        is designed and coded by me. I am starting off using React hosted on an Apache webserver, but hope to containerize
        the application and serve it using Kubernetes in the future. Things look bare now, but I promise the content will be worth
        your time!
        <br />
        <br />
        If you stumbled across this site let me know that you made it and what you think by shooting an email to
        codybrinkmansoccer@gmail.com
      </div>
    </div>
  )

}

export default Home
