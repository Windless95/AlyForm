import "./App.css";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-solid border-10 m-8 flex h-3/4 w-3/4 items-center bg-gradient-to-bl from-cyan-400 via-white to-black">
        <div className="mx-auto max-h-full max-w-3xl">
          <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Generic Text
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Generic Text</p>
                </div>
                <div className="mt-6 flex w-full gap-3">
                  <div className="flex-1">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First input
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first"
                        id="first"
                        autocomplete="first"
                        className="block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className>
                    <label
                      htmlFor="operation"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Operator
                    </label>
                    <div className="mt-1">
                      <select
                        id="operator"
                        name="operator"
                        autocomplete="operator"
                        className="w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>X</option>
                        <option>+</option>
                        <option>-</option>
                        <option>÷</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="second"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Second Input
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="second"
                        id="second"
                        autocomplete="second"
                        className="block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="second"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Result
                    </label>
                    <div className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                      <p>{ result ? result : "Placeholder" }</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Get Results
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
