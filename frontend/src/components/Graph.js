import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Drama',
        moyenne: 7.7,
    },
    {
        name: 'Thriller',
        moyenne: 9,
    },
    {
        name: 'Romance',
        moyenne: 7.4,
    },
    /*{
        name: 'Horror',
        moyenne: 8,
    },*/
];

class Graph extends PureComponent {
    /*  constructor() {
          super();
          this.state = { datas: [], note: [] };
      } */

    render() {
        // let note = this.state.note;
        return (
            <ResponsiveContainer width="100%" aspect={2}>
                <BarChart
                    width={500}
                    height={300}

                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="moyenne" fill="#3B3F88" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
    /* componentDidMount() {
         fetch(`http://localhost:5000/users/countMovies`)
             .then((response1 => response1.json()))
             .then((jsonResponse) => {
                 const indice = Number(jsonResponse) - 1;
                 fetch(`http://localhost:5000/users/`)
                     .then(response => response.json())
                     .then((myJson) => {
 
                         //  for (var i = 0; i < indice + 1; i++) {
                         this.setState({ note: myJson.note });
                         //  console.log(myJson[i].note)
                         // this.setState.datas.map(myJson => (<li key={myJson.note}>{myJson._id}</li>))
                         // }
                     })
                     .catch(error => console.log('Error! ' + error.message))
             }).catch(error => console.log('Error! ' + error.message))
     } */

}
export default Graph;