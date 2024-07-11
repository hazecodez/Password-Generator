export default function App() {
  const checkboxData = [
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ];
  return (
    <div className="flex items-center h-screen">
      <div className="w-96 h-80 mx-auto bg-gray-200 rounded-xl shadow-2xl">
        <div className="flex items-center p-3">
          <div className="px-1">
            <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
          </div>
          <div className="px-1">
            <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
          </div>
          <div className="px-1">
            <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
          </div>
        </div>

        {/* PassWord Text and Copy Button */}

        <div className="flex justify-between pl-5 pr-5">
          <div className="font-bold text-xl">dksfgsduyfyg</div>
          <button
            className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
            title="Attach"
            onClick={() => {}}
          >
            <i className="fa-solid fa-copy text-xl"></i>
          </button>
        </div>

        {/* Character length Range Bar */}

        <div className="flex flex-col text-lg pb-5 pr-5 pl-5 pt-3">
          <span className="w-full flex justify-between pb-3">
            <label> Character Length</label>
            <label>4</label>
          </span>
          
            <input
              type="range"
              min="4"
              max="20"
              
              // value={}
              // onChange={}
            />
         
        </div>

        {/* Checkboxes */}

        <div className="flex">
          {checkboxData.map((data, index) => {
            return (
              <div key={index} className="">
                <input type="checkbox" checked={data.state} />
                <label>{data.title}</label>
              </div>
            );
          })}
        </div>

        {/* Strength */}

        <div></div>

        {/* Generate Button */}

        <div className="flex justify-center mt-5">
          <button
            className={`w-80 relative py-2 px-8 text-black text-base 
              font-bold nded-full overflow-hidden
               bg-gray-300 rounded-full transition-all 
               duration-400 ease-in-out shadow-md 
               hover:scale-105 hover:text-white 
               hover:shadow-lg active:scale-90 
               before:absolute before:top-0 before:-left-full 
               before:w-full before:h-full 
               before:bg-gradient-to-r before:from-blue-500
                before:to-blue-300 before:transition-all 
                before:duration-500 before:ease-in-out 
                before:z-[-1] before:rounded-full hover:before:left-0`}
                onClick={()=>{}}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}
