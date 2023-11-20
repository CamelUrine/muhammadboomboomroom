import Head from 'next/head'
import videoLinks from '../components/videolinks'
import { useState } from 'react'

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(videoLinks[0])
  //<div className="px-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-slate-200  overflow-y-auto h-full lg:h-[39rem] gap-2 flex flex-col">
  return (
    <>
      <Head>
        <title>{`Muhammad's Boom Boom Room TV`}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
        />
      </Head>

      <div className="w-full h-screen bg-[#23251F]">
        <div className="w-inherit p-7 border-b-2">
          <p className="text-3xl text-white font-bold">
            {`Muhammad's Boom Boom Room TV`}
          </p>
        </div>
        <div className="flex gap-x-6 flex-row w-full px-8 py-10">
          <div className="w-3/5">
            <iframe
              className="mb-6 w-full border-2 bg-slate-700 border-slate-700 h-[30rem]"
              src={currentVideo.src}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <p className="text-white text-2xl font-semibold">
              {currentVideo.name}
            </p>
          </div>
          <div className="w-2/5">
            <p className="text-[#a4dc9a] text-2xl font-semibold p-2">
              Episode list
            </p>
            <div className="w-inherit h-[500px] overflow-y-scroll flex items-start flex-col">
              {videoLinks.map((item, key) => (
                <button
                  onClick={() => setCurrentVideo(item)}
                  className="text-white font-semibold p-2"
                  key={key}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
