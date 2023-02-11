import React, { useState, useEffect } from "react";
import "chartjs-adapter-date-fns";
import {
  Chart as ChartJS,
  TimeScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import Link from "next/link";
import useSWR from "swr";
import axios from "axios";

ChartJS.register(
  TimeScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      return response.data;
    });

const Circuitboard = () => {
  const dataset0 = {
    label: "We",
    backgroundColor: "rgba(174, 24, 41, 0.4)",
    borderColor: "rgba(174, 24, 41, 1)",
    pointBorderColor: "rgba(174, 24, 41, 1)",
    pointHoverBackgroundColor: "rgba(174, 24, 41, 1)",
    data: [],
  };
  const dataset1 = {
    label: "Are",
    backgroundColor: "rgba(227, 52, 47,0.4)",
    borderColor: "rgba(227, 52, 47,1)",
    pointBorderColor: "rgba(227, 52, 47,1)",
    pointHoverBackgroundColor: "rgba(227, 52, 47,1)",
    data: [],
  };
  const dataset2 = {
    label: "Loading",
    backgroundColor: "rgba(246, 153, 63,0.4)",
    borderColor: "rgba(246, 153, 63,1)",
    pointBorderColor: "rgba(246, 153, 63,1)",
    pointHoverBackgroundColor: "rgba(246, 153, 63,1)",
    data: [],
  };
  const dataset3 = {
    label: "Your",
    backgroundColor: "rgba(255, 237, 74,0.4)",
    borderColor: "rgba(255, 237, 74,1)",
    pointBorderColor: "rgba(255, 237, 74,1)",
    pointHoverBackgroundColor: "rgba(255, 237, 74,1)",
    data: [],
  };
  const dataset4 = {
    label: "Data",
    backgroundColor: "rgba(56, 193, 114,0.4)",
    borderColor: "rgba(56, 193, 114,1)",
    pointBorderColor: "rgba(56, 193, 114,1)",
    pointHoverBackgroundColor: "rgba(56, 193, 114,1)",
    data: [],
  };
  const dataset5 = {
    label: "Please",
    backgroundColor: "rgba(77, 192, 181,0.4)",
    borderColor: "rgba(77, 192, 181,1)",
    pointBorderColor: "rgba(77, 192, 181,1)",
    pointHoverBackgroundColor: "rgba(77, 192, 181,1)",
    data: [],
  };
  const dataset6 = {
    label: "Be",
    backgroundColor: "rgba(52, 144, 220,0.4)",
    borderColor: "rgba(52, 144, 220,1)",
    pointBorderColor: "rgba(52, 144, 220,1)",
    pointHoverBackgroundColor: "rgba(52, 144, 220,1)",
    data: [],
  };
  const dataset7 = {
    label: "Patient",
    backgroundColor: "rgba(101, 116, 205,0.4)",
    borderColor: "rgba(101, 116, 205,1)",
    pointBorderColor: "rgba(101, 116, 205,1)",
    pointHoverBackgroundColor: "rgba(101, 116, 205,1)",
    data: [],
  };
  const dataset8 = {
    label: "<3...",
    backgroundColor: "rgba(149, 97, 226,0.4)",
    borderColor: "rgba(149, 97, 226,1)",
    pointBorderColor: "rgba(149, 97, 226,1)",
    pointHoverBackgroundColor: "rgba(149, 97, 226,1)",
    data: [],
  };
  const dataset9 = {
    label: "Loading...",
    backgroundColor: "rgba(246, 109, 155,0.4)",
    borderColor: "rgba(246, 109, 155,1)",
    pointBorderColor: "rgba(246, 109, 155,1)",
    pointHoverBackgroundColor: "rgba(246, 109, 155,1)",
    data: [],
  };

  const [teams, setTeams] = useState([]);
  const [dataset, setDataset] = useState({
    datasets: [
      dataset0,
      dataset1,
      dataset2,
      dataset3,
      dataset4,
      dataset5,
      dataset6,
      dataset7,
      dataset8,
      dataset9,
    ],
  });

  const { data, error } = useSWR("https://compsa.ca/api/circuitboard", fetcher);

  useEffect(() => {
    if (data) {
      setTeams(circuitOiler(data));
    }
  }, [data]);

  useEffect(() => {
    setDataset((prevState) => {
      for (let i = 0; i < teams.length; i++) {
        prevState.datasets[i].label = teams[i].name;
        prevState.datasets[i].data = teams[i].data;
      }
      return prevState;
    });
  }, [teams]);

  if (error) {
    return (
      <div className="text-white text-[3vw] text-center">
        We are currently experiencing issues. <br /> Please try again later...
        <Link
          href="/circuit/circuitHome"
          className="flex justify-center align-middle pt-[10%]"
        >
          <button className="transition px-[5vw] py-[2%] transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-white text-[#2e1844] rounded-xl text-[1em] sm:text-[2vw]">
            Homepage
          </button>
        </Link>
      </div>
    );
  }

  function circuitOiler(json) {
    var x = json.sort((a, b) => {
      if (a.history != "" && b.history != "") {
        return (
          b.history[b.history.length - 1].points -
          a.history[a.history.length - 1].points
        );
      }
    });

    var teamRank = 1;
    var leaderboard = [];

    for (let i = 0; i < Math.min(10, x.length); i++) {
      var temp = [];
      if (x[i].history != "") {
        for (const k of x[i].history) {
          temp.push({ y: k.points, x: k.snapshot_date });
        }

        leaderboard.push({
          name: x[i].alias,
          rank: teamRank,
          score: x[i].history[x[i].history.length - 1].points,
          data: temp,
        });
      } else {
        leaderboard.push({
          name: x[i].alias,
          rank: teamRank,
          score: 0,
          data: temp,
        });
      }
      teamRank++;
    }
    return leaderboard;
  }
  ChartJS.defaults.font.size = 25;

  const options = {
    fill: false,
    lineTension: 0.1,
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBackgroundColor: "#fff",
    pointBorderWidth: 2,
    pointHoverRadius: 10,
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointHoverBorderWidth: 2,
    pointRadius: 3,
    pointHitRadius: 10,
    scales: {
      x: {
        type: "time",
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-[#ffffff] to-[#dadada] rounded-3xl">
      <Line redraw data={dataset} width={200} height={100} options={options} />
    </div>
  );
};

export default Circuitboard;
