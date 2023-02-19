import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

const Homepage = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
        <h1 className="text-5xl font-bold mb-20">Chat GPT</h1>
        
        
        <div className='flex space-x-2 text-center'>

          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className='w-8 h-8'/>
              {/* h2 tag */}
              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"What is the difference between a dog and a cat?"</p>
              <p className="infoText">"What is the color of the sun?"</p>

            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <BoltIcon className='w-8 h-8'/>
              {/* h2 tag */}
              <h2>Capabilities</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"What is the difference between a dog and a cat?"</p>
              <p className="infoText">"What is the color of the sun?"</p>
              
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <ExclamationTriangleIcon className='w-8 h-8'/>
              {/* h2 tag */}
              <h2>Limitations</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"What is the difference between a dog and a cat?"</p>
              <p className="infoText">"What is the color of the sun?"</p>
              
            </div>
          </div>


        </div>
    </div>
  )
}

export default Homepage