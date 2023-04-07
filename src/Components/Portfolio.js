import React, { Component } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";
import Projects from "./Projects";

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state={
            selected: "All"
        }
        this.projects = Projects;
    }
     


    render() {
        return <>
                <Toolbar  
                    filters={["All", "Websites", "Flayers", "Business Cards"]}
                    selected={this.state.selected}
                    onSelectFilter={(filter) => {this.setState({
                        selected: filter
                    })}}
                />
                <ProjectList projects={this.projects.filter((item)=> {return this.state.selected === "All" ? 
                item : 
                item.category === this.state.selected
                })} />
                </>
    }
}