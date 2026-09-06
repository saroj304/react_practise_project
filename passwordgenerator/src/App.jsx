import { useState } from "react";
import InputBox from "./components/Input";
import "./App.css";
import useCurrencyInfo from "./hooks/userCurrencyInfo";

function App() {
    const [amount, setAmount] = useState(0);
    const [to, setTo] = useState("inr");
    const [from, setFrom] = useState("usd");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
   console.log("fetched info",currencyInfo)
    const options = Object.keys(currencyInfo);
    console.log(options)
    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
    };
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage:
                    `url('https://images.pexels.com/photos/27347529/pexels-photo-27347529.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >

                        {/* FROM */}
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(amt)=>setAmount(amt)}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                currencyOptions={options}
                                selectCurrency={from}
                            />
                        </div>

                        {/* SWAP */}
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                onClick={swap}
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            >
                                swap
                            </button>
                        </div>

                        {/* TO */}
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                selectCurrency={to}
                                currencyDisable={false}
                            />
                        </div>

                        {/* CONVERT */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;