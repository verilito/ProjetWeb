import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const dataa = [
    {
        genre: 'Drama',
        note: 4,
    },
    {
        genre: 'Thriller',
        note: 5,
    },
    {
        genre: 'Action',
        note: 4.8,
    },
];


class Graph extends Component {

    constructor() {
        super();
        this.state = { data: [] };
    }

    render() {

        const datas = this.state.data;
        const infos = JSON.stringify(datas, ['genre', 'note']);
        const test = JSON.parse(infos)

        console.log(test);

        return (
            <ResponsiveContainer width="100%" aspect={2}>
                <BarChart
                    width={500}
                    height={300}

                    data={test}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="genre" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="note" fill="#3B3F88" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
    componentDidMount() {
        fetch(`http://localhost:5000/users/`)
            .then(response => response.json())
            .then((myJson) => {
                this.setState({ data: myJson });

            })
            .catch(error => console.log('Error! ' + error.message))
    }

}
export default Graph;