import React from "react";

let purchaseItem;
window.itemsArray = [{ title: "No Items", price: "0" }];

export default function Modals({ title }) {
  const [showModal, setShowModal] = React.useState(false);
  const [price, setPrice] = React.useState();
  const [items, setItems] = React.useState([]);

  function purchaseOnChange(e) {
    e.preventDefault();
    setPrice(e.target.value);
  }

  function math() {
    return Math.random();
  }

  function purchase() {
    purchaseItem = {
      id: { math },
      title: { title },
      price: price,
    };
    setItems([...items, purchaseItem]);
    setPrice("");
  }
  window.itemsArray = items;

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="rounded-3xl mt-5 w-1/4 py-2 px-4 border border-white text-md font-medium rounded-md text-white bg-green-600 hover:bg-white hover:text-green-600 hover:border-green-600"
      >
        Purchase
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    >
                      Price in R
                    </label>
                    <input
                      onChange={purchaseOnChange}
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="number"
                      value={price}
                      placeholder="R"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b gap-2">
                  <button
                    className="text-white bg-green-600 rounded-3xl border hover:bg-white hover:border-green-600 hover:text-green-600 font-bold uppercase px-6 py-2 text-sm outline-none "
                    type="button"
                    onClick={purchase}
                  >
                    Confirm
                  </button>
                  <button
                    className="text-white bg-red-600 rounded-3xl border hover:bg-white hover:border-red-600 hover:text-red-600 font-bold uppercase px-6 py-2 text-sm outline-none "
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
