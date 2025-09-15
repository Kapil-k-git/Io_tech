"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import axios from "axios";

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1337/api/teams?populate=*"
        );
        const members = res.data.data.map((item) => ({
          name: item.name,
          position: item.role,
          image: item.photo?.[0]?.url || "/actor.png", // fallback image
        }));
        setTeamMembers(members);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team:", error);
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) {
    return <p className="text-center py-16">Loading team members...</p>;
  }

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#4B2E2E]">Our Team</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        loop={true}
        className="max-w-6xl mx-auto px-6"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            {console.log(member)}
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <div className="relative w-full h-60 bg-[#5A3B3B] flex items-center justify-center rounded-md">
                <Image
                  src={
                    member.image.startsWith("http")
                      ? member.image
                      : `http://localhost:1337${member.image}`
                  }
                  alt={member.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>

              <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-wide">
                {member.position}
              </p>

              <div className="flex justify-center gap-4 mt-4 text-gray-700 text-xl">
                <i className="ri-whatsapp-line"></i>
                <i className="ri-phone-line"></i>
                <i className="ri-mail-line"></i>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
