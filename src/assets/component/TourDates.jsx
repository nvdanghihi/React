import React from 'react'

const tours = [
  { date: "June 20, 2025", location: "New York, NY", venue: "Madison Square Garden" },
  { date: "July 5, 2025", location: "Los Angeles, CA", venue: "Hollywood Bowl" },
  { date: "August 12, 2025", location: "Chicago, IL", venue: "United Center" },
];
const TourDates = () => {
  return (
    <section id="tour" className="bg-white text-black py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Upcoming Tour Dates</h2>
        <div className="space-y-6">
          {tours.map((tour, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded shadow">
              <h3 className="text-xl font-semibold">{tour.date}</h3>
              <p>{tour.location} – {tour.venue}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourDates
