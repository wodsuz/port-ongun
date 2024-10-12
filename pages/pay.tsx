import { useState } from "react";

const Payment = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="px-6 py-2">
      {/* Crypto Payment */}
      <div className="my-4">
        <h5 className="text-xl font-semibold">Crypto</h5>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-1000 rounded-full text-md group "
          href="https://commerce.coinbase.com/checkout/923b8005-792f-4874-9a14-2992d0b30685"
        >
          <div className="mt-1">
            Click to Pay & Send crypto
            <span className="block max-w-0 group-hover:max-w-48 transition-all duration-1000 h-0.5 bg-primary"></span>
          </div>
        </a>
      </div>

      {/* Fiat Payment */}
      <div className="my-4">
        <h5 className="text-xl font-semibold">
          Turkish (Bank Transfer) Enpara
        </h5>
        <div className="flex items-center ">
          <span className="mr-2">Name: Ongun Demirag</span>
        </div>{" "}
        <div className="flex items-center ">
          <span className="mr-2">
            IBAN TR: TR68 0011 1000 0000 0096 4312 52
          </span>
          <button
            onClick={() => handleCopy("TR68 0011 1000 0000 0096 4312 52")}
            className="px-3 py-1 ml-2 text-white bg-blue-500 rounded hover:bg-blue-300"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      <div className="my-4">
        <h5 className="text-xl font-semibold">
          Turkish (Bank Transfer) Denizbank
        </h5>
        <div className="flex items-center ">
          <span className="mr-2">Name: Ongun Demirag</span>
        </div>{" "}
        <div className="flex items-center ">
          <span className="mr-2">
            IBAN TR: TR24 0013 4000 0074 8028 3000 01
          </span>
          <button
            onClick={() => handleCopy("TR24 0013 4000 0074 8028 3000 01")}
            className="px-3 py-1 ml-2 text-white bg-blue-500 rounded hover:bg-blue-300"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="flex items-center ">
          <span className="mr-2">Name: Ongun Demirag</span>
        </div>{" "}
        <div className="flex items-center ">
          <span className="mr-2">
            IBAN Euro: TR67 0013 4000 0074 8028 3000 03
          </span>
          <button
            onClick={() => handleCopy("TR67 0013 4000 0074 8028 3000 03")}
            className="px-3 py-1 ml-2 text-white bg-blue-500 rounded hover:bg-blue-300"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {/* Additional payment methods can be added here */}
    </div>
  );
};

export default Payment;
