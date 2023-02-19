import NewChat from "./NewChat"

const SideBar = () => {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                {/* Newchat */}
                <NewChat/>
                <div>
                    {/* Model Selection */}

                </div>
                {/* Map through the chart rows */}
            </div>
            
        </div>
    </div>
  )
}

export default SideBar