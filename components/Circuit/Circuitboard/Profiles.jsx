import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import Link from "next/link";

function InfiniteCSRPage() {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "infiniteCharacters",
    async ({ pageParam = 1 }) =>
      await fetch(
        `
        https://compsa.ca/api/leaderboard?offset=${
          pageParam * 10 - 10
        }&limit=10`
      ).then((result) => result.json()),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage != "") {
          return pages.length + 1;
        }
      },
    }
  );

  console.log(status);

  if (status == "error") {
    return (
      <div className="text-white text-[3vw]">
        Maybe we don&lsquo;t get enough funds... <br />
        <Link
          href="https://forms.gle/a2AHSGKdCdM7kJ1w9"
          className="flex justify-center align-middle pt-[10%]"
        >
          <button className="transition px-[5vw] py-[2%] transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-white text-[#2e1844] rounded-xl text-[1em] sm:text-[2vw]">
            School of Computing Funding Petition
          </button>
        </Link>
      </div>
    );
  } else if (!data) {
    return <div className="text-white text-[5vw]">Loading...</div>;
  }

  const place = (data) => {
    if (data.place == 1) {
      return "bg-gradient-to-r from-[#a99056] to-[#a99056a0] ";
    } else if (data.place == 2) {
      return "bg-gradient-to-r from-[#9c92a6] to-[#9c92a6a0] ";
    } else if (data.place == 3) {
      return "bg-gradient-to-r from-[#7f5b50] to-[#7f5b50a0] ";
    } else {
      return "bg-[#70558ab9] ";
    }
  };

  // Create an empty dictionary to store player information
  const players = {};

  const populate_players = (value) => {
    // Algorithm to add information from API request into the players dictionary
    // If the a players rank already exists
    if (`${value.place}` in players) {
      // If the player does not exist within the current rank array, add them to it. If they already do, nothing will happen (this helps avoid duplicates)
      if (players[`${value.place}`].includes(value.alias) == false) {
        players[`${value.place}`].push(value.alias);
      }
      // If the players rank doesn't exist within the players dictionary
    } else {
      // Create an empty array for that specific rank and then add the players name to the array
      players[`${value.place}`] = [];
      players[`${value.place}`].push(value.alias);
    }
  };

  const determine_score = (value) => {
    const tied_players = players[`${value.place}`].length; // The number of players tied for a position
    const rank = value.place; // The position that players are tied for
    const displayed_rank = tied_players + rank - 1;
    return displayed_rank;
  };

  return (
    <div className="">
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 10}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<h4>Loading...</h4>}
        >
          {data?.pages.map((page, index) => {
            Array.from(page)?.map((value, index) => (
              <div key={index}>{populate_players(value)}</div>
            ));
          })}
          {data?.pages.map((page) => {
            return (
              <>
                {Array.from(page)?.map((value, index) => (
                  <div
                    className="flex w-[90vw] justify-center justify-self-center"
                    key={index}
                  >
                    <div className="flex w-[80vw] py-[2%] justify-self-center">
                      <div
                        className={
                          place(value) +
                          "flex justify-between text-dark text-[3vw] px-[2%] py-[3%]  w-full rounded-xl"
                        }
                      >
                        <div>
                          <span className="bg-white text-[#eaba7d] p-2 rounded-xl">
                            {determine_score(value)}
                          </span>
                          <span className="">
                            &nbsp;&nbsp;&nbsp;{value.alias}
                          </span>
                        </div>

                        <span className="">{value.points}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
}

export default InfiniteCSRPage;
