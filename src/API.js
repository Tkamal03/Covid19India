import React from 'react';

class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            stateData: [],
            districtData: []
        };
    }

    componentDidMount() {
        this.GetStateData("https://api.covid19india.org/data.json");
        this.GetDistrictData("https://api.covid19india.org/state_district_wise.json");


        // var stateData = PostData("https://api.covid19india.org/raw_data8.json", "");
        // console.log(stateData);
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

    render() {

        const { error, isLoaded, stateData, districtData } = this.state;
        let tempArray;
        var tempStateList = [];
        var count = 1;

        var test = "Tamil Nadu";
        // console.log(districtData);
        // console.log(stateData['statewise']);
        // return <div>items</div>

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            {

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
                console.log(tempArray);

            };

            return (
                <ul>
                    {tempArray.map((item, i) => (
                        <li key={i}>

                            State : {item.stateName} --- State Code : {item.stateCode} --- Active : {item.active} ---
                            Confirmed : {item.confirmed} --- Recovered : {item.recovered}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default GetData;