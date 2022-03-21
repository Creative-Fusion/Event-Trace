import React from "react";

export const Participants = () => {
	return (
        <div class= " w-auto h-auto p-4 bg-white shadow rounded-lg ml-72 mr-72 ">
            <div class = "text-left ml-2 flex justify-start" >
                
            <h2> Participantlist</h2>
            <select class="block w-40 text-gray-800  ml-20 mr-4 mb-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 " >
    <option value="">
        name
    </option>
    <option value="dog">
        Nista
    </option>
    <option value="cat">
        Simkhada
    </option>
  
</select>    

<select class="block flex justify-start w-40 text-gray-800 mr-20 mb-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 " >
    <option value="">
        Ascending
    </option>
    <option value="dog">
        Descending
    </option>
</select> 

<div class="flex relative w-40 mb-2">
    <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
            </path>
        </svg>
    </span>
    <input type="text" id="email-with-icon" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="search" placeholder="search"/>
    </div>   
            </div>
           

<table class="table-auto  p-2 bg-white shadow rounded-lg ml-2  ">
    <thead >
        <tr>
            <th class="border bg-[#3b82f6] p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                #
            </th>
            <th class="border bg-[#3b82f6] p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
               Name
            </th>
            <th class="border bg-[#3b82f6] p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Email
            </th>
            <th class="border bg-[#3b82f6] p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Username
            </th>
			<th class="border bg-[#3b82f6] p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
               Address
            </th>
			<th class="border bg-[#3b82f6] p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Phone
            </th>
			<th class="border bg-[#3b82f6] p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
               Actions
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="text-gray-700">
            <td class="border p-4 dark:border-dark-5">
               1
            </td>
            <td class="border p-4 dark:border-dark-5">
             Nista 
            </td>
            <td class="border p-4 dark:border-dark-5">
               nisasimkh100@gmail.com
            </td>
            <td class="border p-4 dark:border-dark-5">
               Nishu
            </td>
            <td class="border p-4 dark:border-dark-5">
               Thali
               </td>
               <td class="border p-4 dark:border-dark-5">
               983456234
               </td>
               <td class="border p-4 dark:border-dark-5">
               registered
               </td>
        </tr>
        <tr class="text-gray-700">
            <td class="border p-4 dark:border-dark-5">
              2
            </td>
            <td class="border p-4 dark:border-dark-5">
         hdhffdifjd
            </td>
            <td class="border p-4 dark:border-dark-5">
              jjjjjjjjj
            </td>
            <td class="border p-4 dark:border-dark-5">
      kkkkkkkkkkkkkkkk
            </td>
            <td class="border p-4 dark:border-dark-5">
               lllllllllllllll
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
        </tr>
        <tr class="text-gray-700">
            <td class="border p-4 dark:border-dark-5">
              2
            </td>
            <td class="border p-4 dark:border-dark-5">
         hdhffdifjd
            </td>
            <td class="border p-4 dark:border-dark-5">
              jjjjjjjjj
            </td>
            <td class="border p-4 dark:border-dark-5">
      kkkkkkkkkkkkkkkk
            </td>
            <td class="border p-4 dark:border-dark-5">
               lllllllllllllll
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
        </tr>
        <tr class="text-gray-700">
            <td class="border p-4 dark:border-dark-5">
              2
            </td>
            <td class="border p-4 dark:border-dark-5">
         hdhffdifjd
            </td>
            <td class="border p-4 dark:border-dark-5">
              jjjjjjjjj
            </td>
            <td class="border p-4 dark:border-dark-5">
      kkkkkkkkkkkkkkkk
            </td>
            <td class="border p-4 dark:border-dark-5">
               lllllllllllllll
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
        </tr>
        <tr class="text-gray-700">
            <td class="border p-4 dark:border-dark-5">
              2
            </td>
            <td class="border p-4 dark:border-dark-5">
         hdhffdifjd
            </td>
            <td class="border p-4 dark:border-dark-5">
              jjjjjjjjj
            </td>
            <td class="border p-4 dark:border-dark-5">
      kkkkkkkkkkkkkkkk
            </td>
            <td class="border p-4 dark:border-dark-5">
               lllllllllllllll
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
        </tr>

        <tr class="text-gray-700">
            <td class="border p-4 dark:border-dark-5">
              2
            </td>
            <td class="border p-4 dark:border-dark-5">
         hdhffdifjd
            </td>
            <td class="border p-4 dark:border-dark-5">
              jjjjjjjjj
            </td>
            <td class="border p-4 dark:border-dark-5">
      kkkkkkkkkkkkkkkk
            </td>
            <td class="border p-4 dark:border-dark-5">
               lllllllllllllll
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
        </tr>

        <tr class="text-gray-700">
            <td class="border p-4 dark:border-dark-9">
              
            </td>
            <td class="border p-4 dark:border-dark-9">
               
            </td>
            <td class="border p-4 dark:border-dark-9">
             
            </td>
            <td class="border p-4 dark:border-dark-5">
           
            </td>
            <td class="border p-4 dark:border-dark-5">
               
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
        </tr>
        <tr class="text-gray-700">
            <td class="border p-4 dark:border-dark-5">
               
            </td>
            <td class="border p-4 dark:border-dark-5">
                
            </td>
            <td class="border p-4 dark:border-dark-5">
              
            </td>
            <td class="border p-4 dark:border-dark-5">
               
            </td>
            <td class="border p-4 dark:border-dark-5">
               
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
               <td class="border p-4 dark:border-dark-5">
               
               </td>
        </tr>
    </tbody>
</table>
</div>
// </div>
	);
};
