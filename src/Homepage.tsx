import React from 'react'

const App = () => {
  return (
    <main>
        <section className=''>
          <h1 className='header'>Welcome to the ultimate personal assistant;</h1>
          <p className='description'>Introducing Persistant – Your Ultimate Personal Assistant!
            Efficiency redefined with Persistant – your dedicated companion for seamless task management. Say goodbye to stress and hello to productivity!
          </p>
          <div className='pictureContainer'>
            <article className='thumbnail'><img src="./Images/happythroughpersistant.jpg" alt="" /><div className='pictureDatails'><h1>Hello</h1><p></p></div></article>
            <article className='tabThumbnail'><img src="./Images/focus.jpeg" alt="" /><div className='pictureDatails'><h1></h1><p></p></div></article>
            <article className='tabThumbnail'><img src="./Images/nomoredaysofsuffering.jpeg" alt="" /><div className='pictureDatails'><h1></h1><p></p></div></article>
            <article className='tabThumbnail'><img src="./Images/weatherapp.jpeg" alt="" /><div className='pictureDatails'><h1></h1><p></p></div></article>
          </div>
        </section>
    </main>
  )
}
export default App
