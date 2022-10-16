import React from "react";
import Button from "../../Button";
import Input from "../../Input";
import Label from "../../Label";
import { BtnSearch, InputSearch } from "../../Styles";

const Search = ({
    label, style, divStyle, name, type, ...otherProps
}) => (
    <div class={divStyle}>
        <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <Input 
                type="search" 
                name="search"
                style={InputSearch} 
                placeholder="Search Mockups, Logos..." 
                required 
                />
            <Button
                style={BtnSearch}
                type="submit"
                name="Search"
                />
        </div>
    </div>
);

export default Search;