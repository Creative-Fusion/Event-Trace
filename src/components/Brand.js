import logo from "../logo.jpg"

const Brand = () => {
    return ( 
        <a href="/" className="flex">
            <div className="self-center mr-3">
                <img src= { logo } alt="Brand Logo" className="h-6"/>
            </div>
            <span className="self-center md:text-2xl font-semibold whitespace-nowrap text-[#0A1C5C] dark:text-white">EventTrace</span>
        </a>
     );
}
 
export default Brand;