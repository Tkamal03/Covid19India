import React from 'react';

class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            searchValue: props.value
        };
    }

    componentDidMount() {
        fetch("https://api.covid19india.org/raw_data8.json")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result.raw_data
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
        const { error, isLoaded, items, searchValue } = this.state;
        const tempArray = [];
        var test = "Chennai"
        // console.log(searchValue);
        // console.log(items);
        // return <div>items</div>

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            var testData = '';

            {
                items.find((v, i) => {

                    if (v.detecteddistrict.split(" ").join("").toLowerCase() == test.split(" ").join("").toLowerCase()) {
                        testData = v;
                    }
                    else if (v.detectedstate.split(" ").join("").toLowerCase() == test.split(" ").join("").toLowerCase()) {
                        testData = v;
                    }

                    tempArray.push({ state: testData.detectedstate, state_code: testData.statecode, district: testData.detecteddistrict });

                });

                var tempData = tempArray.filter(function (element) {
                    // console.log(element);
                    return element.state !== undefined || element.state_code !== undefined || element.district !== undefined;
                });
                console.log(tempData);
            };

            return (
                <ul>
                    {tempData.map((item, i) => (
                        <li key={i}>

                            State : {item.state} --- State Code : {item.state_code} --- District : {item.district}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default GetData;