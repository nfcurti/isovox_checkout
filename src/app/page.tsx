'use client';

import Image from 'next/image'
import React, { useState } from 'react';
import countries from './countries.json';
import axios from 'axios';

export default function Home() {
  const [isVat, setIsVat] = useState(false);
  // @ts-expect-error

  var data
  var items = []
  var currency
  var items_subtotal_price

  if (typeof window !== 'undefined') {
       data = (JSON.parse((decodeURIComponent(window.location.href.split("?cart=")[1]))))
       items = data.items
       currency = data.currency
       items_subtotal_price = data.items_subtotal_price

      items.forEach(element => console.log(element));
  }


  //var items = []

  return (
    
        <main className=" dark:text-black">
          <div className="mainSection">
            <h3 className="font-bold text-lg dark:text-black">ISOVOX</h3>

            
              <nav className="flex pb-10 pt-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <a href="#" className=" bready inline-flex items-center text-sm font-medium">
                       Cart
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                      <a href="#" className="  ml-1 text-sm font-medium  md:ml-2 ">B2C/B2B</a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                      <a href="#" className=" bready ml-1 text-sm font-medium  md:ml-2 ">Information</a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                      <a href="#" className=" bready ml-1 text-sm font-medium  md:ml-2 ">Shipping</a>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                      <span className=" bready ml-1 text-sm font-medium  md:ml-2 ">Payment</span>
                    </div>
                  </li>
                </ol>
              </nav>    



          <div className="max-w-2xl mx-auto bg-white accord rounded space-y-4">
            <p className="font-bold text-sm dark:text-black">Buying Options</p>
            <div id="accordion-collapse " data-accordion="collapse" className="space-y-4">
              
              <h2 id="accordion-collapse-heading-2">
                <button type="button" className="flex w-full p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg text-left justify-between" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span>I'm shopping as an individual</span>
              </button>
              </h2>

              <h2 id="accordion-collapse-heading-3">
                <button onClick={() => setIsVat(!isVat)} type="button" className="flex w-full p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg text-left justify-between" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span>I'm shopping as a business</span>
                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
              </h2>
              {isVat==true ?  
              <div id="accordion-collapse-body-3"  aria-labelledby="accordion-collapse-heading-3">
                <div className="p-5 ">
                  <form>
                      <div className="mb-6 ">
                          <input  id="name" className="w-full p-3 pl-5 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg text-left justify-between focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none dark:placeholder-gray-900" placeholder="Company Name" required/>
                          <input  id="vatid" className="mb-4 w-full p-3 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg text-left justify-between focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none dark:placeholder-gray-900" placeholder="Tax/VAT ID" required/>
                          <input  id="address" className="mb-4 w-full p-3 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg text-left justify-between focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none dark:placeholder-gray-900" placeholder="Address" required/>
                          <input  id="address2" className="mb-4 w-full p-3 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg text-left justify-between focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none dark:placeholder-gray-900" placeholder="Apartment, suite, etc" required/>
                          <div className="grid gap-6 mb-6 md:grid-cols-2">
                              <div>
                                  <input type="number" id="postal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 pl-5  dark:placeholder-gray-400  focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none dark:placeholder-gray-900" placeholder="Postal Code" required/>
                              </div>
                              <div>
                                  <input type="text" id="cities" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 pl-5  dark:placeholder-gray-400  focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none dark:placeholder-gray-900" placeholder="City" required/>
                              </div>
                          </div>
                          <div>
                                  <select id="countries" className=" bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 pl-4  dark:placeholder-gray-400   ">
                                    
                                    {
                                      countries.map(account => (
                                          <option>{account.country}</option>  
                                      ))
                                    }
                                  </select>
                          </div>
                      </div> 
                  <button type="submit" className="flex w-32 float-right justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Continue</button>
                  </form>
                </div>
              </div>
              : ''}

          <div className="flex items-center  bottom-2 p-4">
              <svg  aria-hidden="true" className="w-6 h-6 text-gray-400 svgy" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              <a href="#" className=" bready ml-1 text-sm font-bold  md:ml-2 ">Back to Cart</a>
          </div>
            </div>
          </div>
          </div>
          <div className="sideSection dark:text-black">
             {items.map(item => {
                return (
            <div className="flex items-center space-x-4 w-96">
                <div className="relative">
                    <img className="w-14 h-10 rounded border-solid border border-gray-300" src={item.image} alt=""/>
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-gray-600 rounded-full">{item.quantity}</span>
                </div>
                <div className="w-96 font-medium dark:text-black">{item.product_title}<span className="float-right">{currency} {((item.line_price)/100).toLocaleString()}</span></div>
            </div>
                );
              })}


            <form>
                <div className=" gap-6 mb-4 flex mt-6 w-96">
                  
                        <input type="text" id="discount_code" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 " placeholder="Discount Code" required />
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/6 sm:w-auto px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700">Apply</button>
         
                </div>
            </form>
            <div className="w-96 font-medium dark:text-black">Subtotal <span className="float-right">{currency} {((items_subtotal_price)/100).toLocaleString()}</span></div>
            <div className="w-96 font-medium dark:text-black">Shipping <span className="float-right">Free</span></div>
            <div className="flex items-center space-x-4 w-96">
                <div className="font-medium dark:text-black w-1/2">
                    <div>Total</div>
                    <div className="text-xs  text-gray-700 dark:text-gray-600">Including zł428.02 in taxes</div>
                </div>
                <div className=" text-right  font-medium dark:text-black  w-1/2">{currency}  <span>{((items_subtotal_price)/100).toLocaleString()}</span></div>
            </div>

          </div>
        </main>)
}
