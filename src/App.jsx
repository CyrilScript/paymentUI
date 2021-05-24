import paymentCard from "./asset/paymentCard.svg";
import user from "./asset/cyril.jpeg";
import {ReactComponent as Paypal} from "./asset/paypal.svg";
import {ReactComponent as Visa} from "./asset/visa.svg";
import {ReactComponent as Discover} from "./asset/discover.svg";

function App() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 pb-24">
      <header className="flex items-center gap-2 sm:gap-6 md:gap-12 my-10 md:mb-14 font-medium text-xs sm:text-sm md:text-base">
        <span className="flex-1"></span>
        <span>TRIPS</span>
        <span>RECENTLY VIEWED</span>
        <span>BOOKINGS</span>
        <span><img src={user} alt="" className="rounded-full h-10 w-10 bg-blue-600 hidden sm:block"/></span>
      </header>

      <div className="flex flex-col lg:flex-row border-t justify-between pt-8 gap-12">
        <div className="">
          <h3 className="text-xl">Payment Information</h3>
          <p className="pt-3 text-gray-400 text-sm">
            Choose your method of payment
          </p>
          <div className="max-w-sm mt-8">
            <img src={paymentCard} alt="" className="w-full" />
          </div>
        </div>
        <div className="w-full max-w-xl">
          <div className="flex items-center">
            <span className="flex-1"></span>
          <Paypal width="4rem" height="4rem"/> <Visa width="4rem" height="4rem" className="p-3"/> <Discover width="4rem" height="4rem" className="pt-2"/>
          </div>
          <form className="">
            <div className="flex flex-col sm:flex-row my-4 gap-8">
              <div className="w-full text-sm">
                <p>Credit Card Number</p>
                <input
                  type="text"
                  defaultValue="4324 5433 9382 1030"
                  className="bg-gray-100 p-4 my-4 w-full rounded border border-gray-300"
                />
              </div>
              <div className="w-full text-sm">
                <p>Expiration Date</p>
                <input
                  type="text"
                  defaultValue="03/24"
                  className="bg-gray-100 p-4 my-4 w-full rounded border border-gray-300"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row my-4 gap-8">
              <div className="w-full text-sm">
                <p>Security code</p>
                <input
                  type="text"
                  defaultValue="420"
                  className="bg-gray-100 p-4 my-4 w-full rounded border border-gray-300"
                />
              </div>
              <div className="w-full text-sm">
                <p>Postal Code</p>
                <input
                  type="text"
                  defaultValue="10119"
                  className="bg-gray-100 p-4 my-4 w-full rounded border border-gray-300"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="card"
                name="saveCard"
                value={true}
                className="rounded pr-3"
              />
              <label htmlFor="card" className="pl-4 text-sm">
                Use this card for next time purchase
              </label>
            </div>
            <br />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-medium rounded"
            >
              Add card
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t font-medium">
        <div className="flex justify-between pt-4 ">
          <div>Subtotal</div>
          <div>₦2,497.00</div>
        </div>
        <div className="flex justify-between pt-4 ">
          <div>Estimated TAX</div>
          <div>₦119.64</div>
        </div>
        <div className="flex justify-between pt-4 ">
          <div>
            Promotional Code: <span className="text-gray-400">Z4KXLM9A</span>
          </div>
          <div>₦2,497.00</div>
        </div>
      </div>

      <div className="mt-16 pt-8 flex flex-col sm:flex-row  gap-6 justify-between border-t">
        <button className="p-3 bg-blue-600 rounded text-white font-bold">Complete Payment</button> 
        <span className="text-base sm:text-lg font-bold">TOTAL: ₦2556.64</span>
      </div>
    </div>
  );
}

export default App;
