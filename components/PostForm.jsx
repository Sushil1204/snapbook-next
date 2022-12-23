/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "./Card";

const PostForm = () => {
  return (
    <Card>
      <div className=" flex items-center">
        <div className="">
          <div className="h-12 w-12 mb-4 lg:mb-0 mr-4">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_6.png"
              alt="avatar"
              className="h-full w-full rounded-full overflow-hidden shadow"
            />
          </div>
        </div>
        <textarea
          name="post"
          id="post"
          cols="30"
          rows="2"
          placeholder={"Whats on your mind Kapil !!"}
          className="focus:outline-none px-5 pt-2 resize-none"
        ></textarea>
      </div>
      <div className="flex mt-2 mx-3 items-center">
        <div className="mr-3">
          <button className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            People
          </button>
        </div>
        <div className=" mr-3">
          <button className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Check in
          </button>
        </div>
        <div className=" mr-3">
          <button className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
            Mood
          </button>
        </div>
        <div className="grow text-right">
          <button className="bg-socialBlue text-white px-6 py-2 rounded-md">
            Share
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PostForm;
