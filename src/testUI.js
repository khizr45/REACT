import React from "react"
import "./UI.css"
let set1 = []
let set2 = []
let set3 = []
class Test extends React.Component{
    constructor() {
        super()
        this.state = {
            color1: 'BLUE',
            color2: 'BLUE',
            color3: 'BLUE',
            boxes1 : 0,
            boxes2: 0,
            boxes3: 0,
            FinalSetUp1 : [],
            FinalSetUp2 : [],
            FinalSetUp3 : [],

        }
        this.handleChange = this.handleChange.bind(this)
        this.boxCount1 = this.boxCount1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.boxCount2 = this.boxCount2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
        this.boxCount3 = this.boxCount3.bind(this)
        this.setBox = this.setBox.bind(this)
    }
    setBox(){
        set1 = []
        for(var i=0;i<this.state.boxes1;i++){
            set1.push(<div className={this.state.color1} key={i}></div>)
        }
        set2 = []
        for(var j=0;j<this.state.boxes2;j++){
            set2.push(<div className={this.state.color2} key={j}></div>)
        }
        set3 = []
        for(var k=0;k<this.state.boxes3;k++){
            set3.push(<div className={this.state.color3} key={k}></div>)
        }
        this.setState({
            FinalSetUp1 : set1,
            FinalSetUp2 : set2,
            FinalSetUp3 : set3,
        })
        
        
    }
    boxCount1(a){
        this.setState({
            boxes1 : a.target.value,
        })
        
    }
     boxCount2(b){
        this.setState({
            boxes2 : b.target.value,
        })
        
    }
     boxCount3(c){
        this.setState({
            boxes3 : c.target.value,
        })
        
    }
    handleChange(e){
        this.setState({
            color1 : e.target.value
        })
        
    }
    handleChange2(f){
        this.setState({
            color2 : f.target.value
        })
        
    }
    handleChange3(g){
        this.setState({
            color3 : g.target.value
        })
        
    }
    render(){
        return(
        <div>
            <h4>HOW MANY BOXES DO YOU WANT </h4>
            <input onChange = {this.boxCount1} value={this.state.boxes1}></input>
             <select onChange = {this.handleChange} value={this.state.color1}>
                <option>BLUE</option>
                <option>RED</option>
                <option>GREEN</option>
                <option>ORANGE</option>
            </select>  
            <h4>HOW MANY BOXES DO YOU WANT </h4>
            <input onChange = {this.boxCount2} value={this.state.boxes2}></input>
             <select onChange = {this.handleChange2} value={this.state.color2}>
                <option>BLUE</option>
                <option>RED</option>
                <option>GREEN</option>
                <option>ORANGE</option>
            </select>  
            <h4>HOW MANY BOXES DO YOU WANT </h4>
            <input onChange = {this.boxCount3} value={this.state.boxes3}></input>
             <select onChange = {this.handleChange3} value={this.state.color3}>
                <option>BLUE</option>
                <option>RED</option>
                <option>GREEN</option>
                <option>ORANGE</option>
            </select>  
            <div>
                <button className="btn btn-primary btn-sub" onClick={this.setBox}>SUBMIT</button>
            </div>
            <div>
                {this.state.FinalSetUp1}
            </div>
            <div>
                {this.state.FinalSetUp2}
            </div>
            <div>
                {this.state.FinalSetUp3}
            </div>
            
        </div>    
        )
    }
}
export default Test;