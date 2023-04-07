import React from "react"

export default function Toolbar(props) {
    
    
    return <ul className="toolbar-list"> 
    {props.filters.map((item, index) => {
         return <li 
                    className={item === props.selected ? "toolbar-filter selected" : "toolbar-filter"} 
                    onClick={() => props.onSelectFilter(item)}
                    tabIndex={"0"} key={index}>{item}
                </li> 
    })}
        </ul>
}