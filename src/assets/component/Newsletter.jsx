import React from 'react'

const Newsletter = () => {
  return (
    <section className="bg-red-600 text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Stay in the loop</h2>
      <p className="mb-6">Get updates about our music and tours</p>
      <form className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded w-full text-black"
        />
        <button type="submit" className="bg-black px-6 py-3 rounded hover:bg-gray-800">Subscribe</button>
      </form>
    </section>
  )
}

export default Newsletter
