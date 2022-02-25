import React from "react";
import { Cards } from "../../components/eventcards";



export const UserHomeScreen = () => {
return(
    <div class = "h-96 w-screen">
    <div class="bg-gradient-to-b from-indigo-500 to-transparent h-96 w-screen">
</div>

<div class = "flex flex-row  text-black font-bold pt-3 pl-32">
    Registered Events

</div>
<div class = "flex flex-row-reverse  text-red-600 font-bold pr-32 ">
    see more...

</div>

<div class="sm:flex flex-wrap justify-center items-center text-center gap-3">
    <Cards/>
    <Cards/>
    <Cards/>
  </div>
  <div class = "flex flex-row text-black font-bold  pt-9 pl-32 ">
   Favourite Events

</div>
<div class = "flex flex-row-reverse text-red-600 font-bold  pr-32">
    see more...

</div>
<div class="sm:flex flex-wrap justify-center items-center text-center gap-3">
    <Cards/>
    <Cards/>
    <Cards/>
  </div>
  <div class = "flex flex-row text-black font-bold  pt-9 pl-32 ">
   Find Events	
</div>
<div class = "flex flex-row-reverse text-red-600 font-bold  pr-32">
    see more...

</div>
</div>
 
    );
}