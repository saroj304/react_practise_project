
function currencyConvertor(){
    const [amount,setAmount]=useState("");
    const[fromCurrency,setFromCurrency]=useState("NPR");
    const[toCurrency,setToCurrency]=useState("USD");


    const NPR_TO_USD = 0.0075;

    const convertCurrenty=()=>{
        if(!amount){
            return 0;
        }

    }


return (
    <div>
        <h1>Currency Converter</h1>

        <div>
            <label>From</label>

            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                <option value="NPR">NPR - Nepali Rupee</option>
                <option value="USD">USD - US Dollar</option>
            </select>

            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
        </div>

        <button onClick={swapCurrency}>
            ⇅
        </button>

        <div>
            <label>To</label>

            <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
            >
                <option value="NPR">NPR - Nepali Rupee</option>
                <option value="USD">USD - US Dollar</option>
            </select>

            <input
                type="text"
                value={convertCurrency().toFixed(2)}
                readOnly
            />
        </div>

        <p>
            1 {fromCurrency} ={" "}
            {fromCurrency === "NPR"
                ? NPR_TO_USD
                : 1 / NPR_TO_USD}{" "}
            {toCurrency}
        </p>
    </div>
);
}
