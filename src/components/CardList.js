import React, {Component} from 'react'
import Data from "./../Data";

class FoodCard extends Component{
    constructor(props){
        super(props)
        this.state = {
        filter_item: '',
        menuData:  Data
        }
    }
    componentDidMount() {
    }
filterData =(Val)=>{
    const {menuData, filter_item} = this.state
    const newMenuData = Data.filter((newVal)=> {
        return newVal.category === Val

    })
    this.setState({menuData: newMenuData})
}
    render() {
        const {menuData} = this.state
        console.log('menuData', menuData.length)
        const menuItems = [...new Set(Data.map((Val) => Val.category))];
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="d-flex justify-content-center">
                            {menuItems.map((Val, id) => {
                                return (
                                    <button
                                        className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                                        onClick={() => this.filterData(Val)}
                                        key={id}
                                    >
                                        {Val}
                                    </button>
                                );
                            })}
                            <button
                                className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
                                onClick={() => this.setState({ menuData: Data})}
                            >
                                All
                            </button>
                            <div className="form-group">
                                <select className="form-select form-select-md mb-3"
                                onChange={(e)=>{
                                    const {value, name} = e.target
                                    this.filterData(value)
                                }}
                                >
                                    <option selected disabled>Please select</option>
                                    {menuItems.map((mVal, i) =>{
                                       return(
                                           <option value={mVal}>{mVal}</option>
                                       )
                                        }
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {menuData.map((Val)=>{
                        return(
                            <div
                                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                                key={Val.id}
                            >
                                <div className="card-img-top text-center">
                                    <img src={Val.img} alt={Val.title} className="photo w-75" />
                                </div>
                                <div className="card-body">
                                    <div className="card-title fw-bold fs-4">
                                        {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                                        {Val.price}
                                    </div>
                                    <div className="card-text">{Val.desc}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default FoodCard