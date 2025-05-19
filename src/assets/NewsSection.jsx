import React from 'react'

const news = [
  { title: "New Album Released", summary: "Our latest album is out now!", date: "May 15, 2025" },
  { title: "Behind the Scenes", summary: "Take a look at how we recorded it.", date: "May 10, 2025" },
];
const NewsSection = () => {
  return (
     <section id="news" className="bg-white text-black py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Latest News</h2>
        <div className="space-y-6">
          {news.map((item, idx) => (
            <div key={idx} className="p-4 border-b border-gray-300">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection
