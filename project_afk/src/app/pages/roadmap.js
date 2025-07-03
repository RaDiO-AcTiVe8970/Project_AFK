function RoadMap() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-6xl font-bold mb-8 text-center">Event Roadmap</h1>
      <p className="text-center mb-8">
        Follow our tournament schedule from registration to the grand Finals. Mark these important dates in your calendar to be part of ASCENSION 2025.
      </p>
      
      <div className="divider my-0"></div>
      
      <ul className="timeline timeline-vertical">
        {/* Registration Opens */}
        <li>
          <div className="timeline-start timeline-box">
            <h3 className="font-bold">Registration Opens</h3>
            <p>Event Launch & Registration Opens</p>
            <p className="text-sm mt-2">June 27, 2025</p>
            <p className="text-sm">Online Round</p>
            <p className="text-sm">Online rounds commence</p>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr className="bg-primary" />
        </li>
        
        {/* Registration Closes */}
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">
            <h3 className="font-bold">Registration Closes</h3>
            <p>End of time for registration</p>
          </div>
          <hr className="bg-primary" />
        </li>
        
        {/* Finale and Prize Giving Ceremony */}
        <li>
          <hr className="bg-primary" />
          <div className="timeline-start timeline-box">
            <h3 className="font-bold">Finale and Prize Giving Ceremony</h3>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default RoadMap;