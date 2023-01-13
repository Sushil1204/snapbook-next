/* eslint-disable @next/next/no-img-element */
import React from "react";


const Avatar = ({size}) => {
  let width = 'w-12';
if (size === 'lg') {
  width = 'w-24 md:w-36';
}
  return (
    <div className={`${width} relative`}>
      <div className="rounded-full overflow-hidden"></div>
      <img
        src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_6.png"
        alt="avatar"
        className="w-full"
      />
    </div>
  );
};

export default Avatar;
