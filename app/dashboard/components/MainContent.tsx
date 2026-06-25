'use client';

type mainContentProp = {
    firstname : string;
}

function MainContent({firstname}:mainContentProp) {
    const today = new Date();
    const hour = today.getHours();
    let greeting = "Good evening";
    if (hour < 12) {
      greeting = "Good morning";
    } else if (hour < 18) {
      greeting = "Good afternoon";
    }

    const formattedDate = today.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="mb-6">
      <h1 className='text-[22px] font-bold text-gray-900'>{greeting}, {firstname} <span className="inline-block origin-bottom-right rotate-[-10deg]">👋</span></h1>
      <p className="text-[13px] font-medium text-gray-500 mt-0.5">{formattedDate} — keep the streak alive</p>
    </div>
  )
}

export default MainContent