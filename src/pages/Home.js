import React from "react";
import "./Home.css"
import Chart from "react-apexcharts"

import Table from "../components/Table/Table";

const Home = () => {

    const state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
    };

    return(
        <div className="container-info">
            <div className="container-table">
                <Table/>
            </div>
            <div className="container-graphics">
                <div className="container-graphic">
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        width="450"
                    />
                </div>
                <div className="container-graphic">
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="line"
                        width="450"
                    />
                </div>
                <div className="container-graphic">
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="line"
                        width="450"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;