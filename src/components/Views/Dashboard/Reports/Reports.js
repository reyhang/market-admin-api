import React from "react";
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';



export default function Reports() {

  const data = [
    { year: '1950', population: 2.525 },
  { year: '1960', population: 5.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.440 },
  { year: '1990', population: 5.310 },
  { year: '2000', population: 4.127 },
  { year: '2010', population: 3.930 },
  ];
    return (
      <div className="col-12">
        <div className="card">
          <div className="filter">
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Today
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Month
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Year
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Reports <span>/Today</span>
            </h5>
            {/* Line Chart */}
            <div id="reportsChart" />
            {/* End Line Chart */}
          </div>
          <div class="col-lg-8" style={{ alignSelf: "center" }}>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"> Chart</h5>

                <div id="columnChart">
                  <Paper>
                    <Chart data={data}>
                      <ArgumentAxis />
                      <ValueAxis />

                      <BarSeries valueField="population" argumentField="year" barWidth={0.5} />
                      <EventTracker />
          <HoverState />
                    </Chart>
                  </Paper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}