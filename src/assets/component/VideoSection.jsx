import React from 'react'

const VideoSection = () => {
  return (
    <section id="videos" className="bg-black text-white py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Watch Our Videos</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/ScMzIvxBSi4"
            title="YouTube Video"
            className="w-full h-96 mx-auto"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default VideoSection
