import React from 'react';

class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            stateData: [],
            districtData: [],
            dat:[]
        };
    }

    componentDidMount() {
        this.GetStateData("https://api.covid19india.org/data.json");
        this.GetDistrictData("https://api.covid19india.org/state_district_wise.json");


        // var stateData = PostData("https://api.covid19india.org/raw_data8.json", "");
        // console.log(stateData);
        // this.sendData();
    }

    GetStateData(url) {
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    stateData: result
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    GetDistrictData(url) {
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    districtData: result
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    sendData() {
        const { stateData, districtData } = this.state;

        let tempArray;
        var tempStateList = [];
        var count = 1;

        var test = "Tamil Nadu";
        // e.preventDefault();

        stateData['statewise'].forEach(element => {

            tempStateList.push({ id: count, stateName: element.state, stateCode: element.statecode, active: element.active, confirmed: element.confirmed, recovered: element.recovered, districtList: districtData[element.state] });
            count++;
        });
        // console.log(districtData);
        // console.log(tempStateList);

        const data = tempStateList.filter((item) => item.stateName === test);
        if (data.length > 0) {
            tempArray = data;
        }
        else {
            tempArray = tempStateList;
        }
        // console.log(tempArray);
        this.props.functionCallFromParent(tempArray);
        // this.setState({data:tempArray});
        return tempArray;
    }

    // shouldComponentUpdate(nextProps, nextState){
        
    // }

    render() {

        const { error, isLoaded } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            
             this.sendData();
            return (
                <React.Fragment>

                    {/* {this.state.data} */}

                    {/* <ul>
                        {this.sendData().map((item, i) => (
                            <li key={i}>

                                State : {item.stateName} --- State Code : {item.stateCode} --- Active : {item.active} ---
                            Confirmed : {item.confirmed} --- Recovered : {item.recovered}
                            </li>
                        ))}
                    </ul> */}
                    {/* <div><button onClick={this.sendData.bind(this)}>Click</button></div> */}
                </React.Fragment>
            );
        }
    }
}

export default GetData;