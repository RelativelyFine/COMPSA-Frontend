import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";

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

  if (!data) {
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

  return (
    <div className="">
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 10}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<h4>Loading...</h4>}
        >
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
                            {value.place}
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
