import React from "react";
import community from "../../assets/Community/community.jpg";
import { Link } from "react-router-dom";

function Community() {
  return (
    <section className="py-20 bg-[#EEEEEE] ">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-12 p-10">
        <div className="md:w-1/2">
          <img
            src={community}
            alt="Cooking Community"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="md:text-3xl text-2xl text-[#bd5c41] font-extrabold">
            Join Our Cooking Community
          </h2>
          <p className="text-[#4A4A4A] md:text-xl text-lg font-semibold mt-6 inline-block">
            Connect with fellow food lovers, share your recipes, and learn from
            others in our vibrant community!
          </p>
          <Link
            to={"/community"}
            className="inline-block mt-6 py-4 px-10 bg-[#E27D60] hover:bg-[#bd5c41] text-white  rounded-lg font-bold text-lg cursor-pointer"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Community;
