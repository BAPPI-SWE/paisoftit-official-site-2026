import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Member1 from '../../../assets/member1.png';
import Member2 from '../../../assets/member2.png';
import Member3 from '../../../assets/member3.png';
import Member4 from '../../../assets/member4.png';
import Member5 from '../../../assets/member5.png';
import Member6 from '../../../assets/member6.png';
import Member7 from '../../../assets/member7.png';
import Member8 from '../../../assets/md.png';
import Member9 from '../../../assets/bappi.png';
import Member10 from '../../../assets/member10.jpeg';
import Member11 from '../../../assets/member11.jpeg';



const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Md. Kamrul Hasan Kabir', role: 'Founder & CEO', image: Member1 },
    { id: 2, name: 'Md. Kawsar', role: 'Chief Technology Officer (CTO)', image: Member2 },
    { id: 10, name: 'Md. Nazrul Islam', role: 'Director - Public Relations & Government Affairs', image: Member10 },
    { id: 11, name: 'Md Ataour Rhaman', role: 'Senior Advisor', image: Member11 },
    { id: 3, name: 'Shahadat H Sourov', role: 'Project Manager', image: Member3 },
    { id: 4, name: 'Md. Asaduzzaman Asad', role: 'Senior Software Engineer', image: Member4 },
    { id: 5, name: 'Muhammad Sahinur Salafee', role: 'Senior Developer', image: Member5 },
    { id: 6, name: 'Umma Fatima', role: 'Quality Assurance (QA)', image: Member6 },
    { id: 7, name: 'Sojib Hossain Mridha', role: 'Head of Marketing', image: Member7 },
    { id: 8, name: 'Md. Rousin', role: 'Front-End Developer', image: Member8 },
    { id: 9, name: 'Rakibul Islam Bappi', role: 'Android Developer', image: Member9 },
  ];

  // Pagination এর জন্য স্টেট এবং কনফিগ
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // বর্তমান পেজের ডেটা স্লাইস (Slice) করা হচ্ছে
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = teamMembers.slice(indexOfFirstItem, indexOfLastItem);

  // মোট পেজ সংখ্যা হিসাব করা
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  // ডিফল্টভাবে পেজ চেঞ্জ হলে প্রথম মেম্বারকে একটিভ করা
  const [activeImage, setActiveImage] = useState(teamMembers[0].image);
  const [activeId, setActiveId] = useState(teamMembers[0].id);

  // পেজ পরিবর্তন করার ফাংশন
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // নতুন পেজে যাওয়ার পর সেই পেজের প্রথম মেম্বারকে অটোমেটিক সিলেক্ট দেখাবে
    const firstMemberOfPage = teamMembers[(pageNumber - 1) * itemsPerPage];
    if (firstMemberOfPage) {
      setActiveImage(firstMemberOfPage.image);
      setActiveId(firstMemberOfPage.id);
    }
  };

  return (
    <section className="bg-white dark:bg-slate-950 py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* বাম পাশের ইমেজ সেকশন */}
        <div className="lg:col-span-5 relative reveal-left">
          <div className="img-zoom relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-600/10 border border-slate-100 dark:border-slate-800">
            <img
              src={activeImage}
              alt="Team Member"
              className="w-full h-[400px]  object-center transition-all duration-700 ease-out"
            />
          </div>
        </div>

        {/* ডান পাশের মেম্বার লিস্ট সেকশন */}
        <div className="lg:col-span-7 flex flex-col justify-center reveal-right">
          <p className="section-label mb-3">Our Team</p>
          <h2 className="text-h2 text-slate-900 dark:text-white mb-8">
            Meet the people behind <span className="gradient-text">PAISOFT IT</span>
          </h2>
          
          {/* মেম্বার লিস্ট */}
          <div className="divide-y divide-slate-100 dark:divide-slate-800 border-b border-slate-100 dark:border-slate-800">
            {currentMembers.map((member) => {
              const isSelected = activeId === member.id;

              return (
                <div
                  key={member.id}
                  onMouseEnter={() => {
                    setActiveImage(member.image);
                    setActiveId(member.id);
                  }}
                  className={`grid grid-cols-12 items-center py-6 cursor-pointer group/item transition-all duration-300 ${
                    isSelected ? 'pl-2 border-l-2 border-blue-600' : 'border-l-2 border-transparent'
                  }`}
                >
                  <div className="col-span-6">
                    <h3
                      className={`text-base lg:text-lg font-semibold tracking-tight transition-colors duration-300 ${
                        isSelected
                          ? 'text-blue-600'
                          : 'text-slate-900 dark:text-white group-hover/item:text-blue-600'
                      }`}
                    >
                      {member.name}
                    </h3>
                  </div>

                  <div className="col-span-5">
                    <p className="text-slate-500 dark:text-slate-400 text-sm lg:text-base font-medium">
                      {member.role}
                    </p>
                  </div>

                  <div className="col-span-1 flex justify-end">
                    <ArrowUpRight
                      className={`w-6 h-6 transition-all duration-300 ${
                        isSelected
                          ? 'text-blue-600 translate-x-0.5 -translate-y-0.5'
                          : 'text-slate-400 dark:text-slate-600 group-hover/item:text-blue-600 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* প্যাজিনেশন কন্ট্রোলস (Pagination Buttons) */}
          <div className="flex items-center justify-end mt-6">
            {/* <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, teamMembers.length)} of {teamMembers.length} members
            </span> */}
            
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Page Number Buttons */}
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  type="button"
                  onClick={() => handlePageChange(index + 1)}
                  className={`w-9 h-9 text-sm font-semibold rounded-lg transition-all ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 border border-transparent hover:border-slate-200 dark:hover:border-slate-800'
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* Next Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;