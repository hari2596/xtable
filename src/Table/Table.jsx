import { useState } from 'react'
import './Table.css'

const Tabledata = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]

const Table = () =>
{
    const [ sortedData, setSortedData ] = useState(Tabledata);

    function sortedByDate()
    {
        let sortedByDate = [...Tabledata].sort((a,b)=>   
            {
                let dateA = new Date(a.date);
                let dateB = new Date(b.date);
                return dateB - dateA;
            })
        setSortedData(sortedByDate)
    }     

    function sortedByViews()
    {
        let sortedByViews = [...Tabledata].sort((a,b)=>b.views-a.views)
        setSortedData(sortedByViews)
    }

    console.log(sortedData);

    return(
        <div className="container">
            <h1>Date and Views Table</h1>
            <div>
                <button onClick={sortedByDate}>Sort by Date</button>

                <button onClick={sortedByViews}>Sort by Views</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((data, index)=>
                    (
                        <tr key={index}>
                            <td>{data.date}</td>
                            <td>{data.views}</td>
                            <td>{data.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;