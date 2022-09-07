import { React, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import Popup from './popup';


function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-solid border-10 m-8 flex h-3/4 w-3/4 items-center bg-gradient-to-bl from-cyan-400 via-white to-black">
        <div className="mx-auto max-h-full max-w-3xl">
          <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8">
                <div>
                  <h3 className="text-lg text-center font-medium leading-6 text-gray-900">
                    Calculation
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 text-center">Demo</p>
                </div>
                <div className="mt-6 flex w-full gap-3">
                  <div className="flex-1">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pre-suit settlement demand
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
                  
                  <div className="flex-1">
                    <label
                      htmlFor="second"
                      className="block text-sm px-2 font-medium text-gray-700"
                    >
                      Pre-suit settlement offer
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
                  
                </div>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex justify-center">
                <button
                onclick={()=>Popup}
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Calculate Percentage
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App