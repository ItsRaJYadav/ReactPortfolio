import React from 'react'

const processSteps = [
    {
      date: '1-6 May, 2021',
      title: 'Registration',
      description: 'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)'
    },
    {
        date: '1-6 May, 2021',
        title: 'Registration',
        description: 'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)'
      },
      {
        date: '1-6 May, 2021',
        title: 'Registration',
        description: 'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)'
      },
      {
        date: '1-6 May, 2021',
        title: 'Registration',
        description: 'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)'
      },
      {
        date: '1-6 May, 2021',
        title: 'Registration',
        description: 'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)'
      },
      {
        date: '1-6 May, 2021',
        title: 'Registration',
        description: 'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)'
      },
    // Add your processStep here
    {
      date: '15 May, 2021',
      title: 'Closing Ceremony',
      description: 'Join us for the closing ceremony where we will announce the winners and wrap up the fest with some amazing performances!'
    }
  ];
  
  function Test() {
    return (
      <section>
        <div className="bg-gray-900 text-white py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-yellow-300 uppercase tracking-loose">Working Process</p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Fest</p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the
                fest.
              </p>
              <a href="ab"
                className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                Explore Now
              </a>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  {processSteps.map((step, index) => (
                    <div className={`mb-8 flex justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center w-full ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`} key={index}>
                      <div className="order-1 w-5/12"></div>
                      <div className={`order-1 w-5/12 px-1 py-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <p className="mb-3 text-base text-yellow-300">{step.date}</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">{step.title}</h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  

export default Test