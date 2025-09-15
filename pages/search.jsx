"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [open, setOpen] = useState(false);

  const [teamResults, setTeamResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [servicesData, setServicesData] = useState([]);
  const router = useRouter();
  const { slug } = router.query;

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
  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const teamRes = await fetch(
          `http://localhost:1337/api/teams?filters[name][$contains]=${query}&populate=*`
        );

        const teamData = await teamRes.json();
        setTeamResults(teamData.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);
  console.log(teamResults, "teamResults");

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="mx-auto flex items-center justify-between py-4 px-6 text-white">
          {/* Left Nav */}
          <ul className="flex m-auto items-center justify-between relative">
            <Link href="/" className="hover:text-blue-600 transition">
              <li className="cursor-pointer p-[15px]">Home</li>
            </Link>{" "}
            <li className="cursor-pointer p-[15px]">About us</li>
            {/* Services with dropdown */}
            <li
              className="cursor-pointer relative"
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
            <button className="p-2 rounded-full hover:bg-white/20">🔍</button>
            <button className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition">
              Book Appointment
            </button>
          </div>
        </div>
      </nav>
      <Hero />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">
          Search Results for "{query}"
        </h1>

        {teamResults.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamResults.map((t) => {
              const photo =
                t?.photo?.[0]?.formats?.small?.url || t.photo?.[0]?.url;

              return (
                <div
                  key={t.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  {photo ? (
                    <img
                      src={`http://localhost:1337${photo}`}
                      alt={t.name}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}

                  {/* Name & Role */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {t.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300">{t.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-600 mt-4">No team members found.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
