import React from "react";

export const Participants = () => {
	return (
        <div class= " w-auto h-96   p-4 bg-white shadow rounded-lg ml-72 mr-72 ">
            <div class = "text-left ml-2" >
                <h2> Participantlist</h2>
            </div>
           
                <select class="block-justify-center w-40 text-gray-800  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 " >
    <option value="">
        name
    </option>
    <option value="dog">
        Dog
    </option>
    <option value="cat">
        Cat
    </option>
  
</select>    
     

<table class="table-auto p-4 bg-white shadow rounded-lg ml-2  mb-12">
    <thead>
        <tr>
            <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                #
            </th>
            <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
               Name
            </th>
            <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Email
            </th>
            <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Username
            </th>
			<th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
               Address
            </th>
			<th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Phone
            </th>
			<th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
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
