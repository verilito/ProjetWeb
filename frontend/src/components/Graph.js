import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const note = 9;

const data = [
    {
        name: 'Drama',
        moyenne: 7.7,
    },
    {
        name: 'Thriller',
        moyenne: note,
    },
    {
        name: 'Romance',
        moyenne: 7.4,
    },
    {
        name: 'Horror',
        moyenne: 8,
    },
];

export default class Graph extends PureComponent {

    render() {
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
}