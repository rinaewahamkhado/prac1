import { useClient } from 'next/client';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("");
  const client = useClient();

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        const result = eval(display);
        setDisplay(result.toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Calculator</h1>
      <div className="bg-gray-200 p-4 rounded-lg mb-4">
        <input
          type="text"
          value={display}
          readOnly
          className="w-full h-12 text-2xl text-right"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {["7", "8", "9", "/"].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="w-full h-12 bg-blue-400 text-white font-bold rounded-lg"
          >
            {value}
          </button>
        ))}
        {["4", "5", "6", "*"].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="w-full h-12 bg-blue-400 text-white font-bold rounded-lg"
          >
            {value}
          </button>
        ))}
        {["1", "2", "3", "-"].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="w-full h-12 bg-blue-400 text-white font-bold rounded-lg"
          >
            {value}
          </button>
        ))}
        {["C", "0", "=", "+"].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="w-full h-12 bg-blue-400 text-white font-bold rounded-lg"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
