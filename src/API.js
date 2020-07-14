import React from 'react';

class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
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
        const { error, isLoaded, items } = this.state;
        const tempArray = [];
        var test = "nilgiris"
        // return <div>items</div>

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            {
                items.find((v,i)=>{
                    if(v.detecteddistrict.toLowerCase() == test){
                        console.log(v);
                    }
                }) ;
                items.map(item => {
                    // console.log(item);
                    
                    tempArray.push({ state: item.detectedstate, state_code: item.statecode, district: item.detecteddistrict });
                })
            };
            // console.log(tempArray);
            return (
                <ul>
                    {tempArray.map((item, i) => (
                        <li key={i}>

                            {item.state} --- {item.state_code} --- {item.district}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default GetData;