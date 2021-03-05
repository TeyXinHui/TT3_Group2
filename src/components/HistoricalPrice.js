import axios from 'axios';

const API_URL = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical';

class HistoricalPrice extends React.Component{
  constructor () {
    super();

    this.state = {
        tableData: [{
            price: '',
            assetSymbol: '',
            timestamp: ''
        }],
    };
  }
  componentDidMount () {
    axios.post(API_URL,
      {
        headers: {
          "x-api-key": "PXeFPCR73iU4khaSqcRM1KBX5SblxPm4R1Rzt07a"
        },
      },{
      responseType: 'json'
    }).then(response => {
      this.setState({ tableData: response.data });
    });
  }
  render () {
    const { tableData } = this.state;

      return (<ReactTable.default
        data={tableData}
            columns={[
                {
                  Header: 'Historical Price',
                    columns: [
                        {
                          Header: 'Price',
                          accessor: 'price',
                        },
                        {
                          Header: 'Asset',
                          accessor: d => d.assetSymbol,
                        },
                        {
                          Header: 'Timestamp',
                          accessor: d => d.timestamp
                        }
                    ],
                },

            ]}
            defaultPageSize={10}
            className="-striped -highlight"
      />);
    }
  

}

export default new HistoricalPrice();
