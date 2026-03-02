
export default function MainpageheaderComp({ text, active }) {
    return (
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium transition 
          ${active 
            ? "bg-blue-500 text-white shadow-md" 
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
      >
        {text}
      </button>
    );
  }