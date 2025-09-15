"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setQuery } from "../store/searchSlice";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesData, setServicesData] = useState([]);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(setQuery(input.trim()));
    router.push(`/search?query=${input.trim()}`);
  };
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/services");
        // Make sure there's at least one entry
        if (res.data.data && res.data.data.length > 0) {
          // Get the 'groups' JSON field from the first entry
          setServicesData(res.data.data[0].groups);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    };

    fetchServices();
  }, []);

  console.log(servicesData, "servicesData");
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="mx-auto flex items-center justify-between py-4 px-6 text-white">
        {/* Left Nav */}
        <ul className="flex m-auto items-center justify-between ">
          <Link href="/" className="hover:text-blue-600 transition">
            <li className="cursor-pointer p-[15px]">Home</li>
          </Link>
          <li className="cursor-pointer p-[15px]">About us</li>

          {/* Services with dropdown */}
          <li
            className="cursor-pointer p-[15px]"
            onClick={() => setOpen(!open)}
          >
            <span className="flex items-center gap-1">
              Services <span className="text-sm">{open ? "▲" : "▼"}</span>
            </span>

            {open && servicesData.length > 0 && (
              <div className="absolute left-0 mt-4 bg-[#311e1e] w-[100%] text-white p-10 grid grid-cols-4 gap-4 rounded-md shadow-lg">
                {servicesData.map((group, groupIndex) => (
                  <ul key={groupIndex} className="space-y-2 text-sm">
                    {group.items.map((item, i) => (
                      <li key={i} className="py-2">
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="hover:text-blue-600 transition"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          item.label
                        )}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            )}
          </li>

          <li className="cursor-pointer p-[15px]">Blog</li>
          <li className="cursor-pointer p-[15px]">Our Team</li>
          <li className="cursor-pointer p-[15px]">Contacts us</li>
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border rounded px-2 py-1 text-black"
            />
            <button type="submit" className="absolute right-0 top-0 px-2 py-1">
              🔍
            </button>
          </form>{" "}
          <button className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition">
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}
