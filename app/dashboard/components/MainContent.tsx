'use client';



type mainContentProp = {
    firstname : string;
}


function MainContent({firstname}:mainContentProp) {
    console.log("helli")
    const today = new Date();
     const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
    console.log(today.getDate())
    console.log(today.getDay())
    console.log(today.toLocaleDateString())
  return (
    <div>
         <main className="flex-1 p-5 overflow-hidden">
      <h1 className='text-2xl '>Good Morning {firstname}</h1>
      <p className="text-gray-500 mt-1">{formattedDate}-keep streak alive</p>
    </main>
    </div>
  )
}

export default MainContent