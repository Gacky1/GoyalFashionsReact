import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BatchDetails = () => {
  const { batchId } = useParams();
  const navigate = useNavigate();

  const hsrtBatches = [
    {
      id: 1,
      name: "HSRT 2024-25",
      year: "2024-25",
      date: "Current Batch",
      headerImage: "/images/HSRT 2025 Header.png",
      description: "Goyal Fashions Private Limited is empanelled with the Ministry of Tourism, Government of India under the flagship initiative Hunar Se Rozgar Tak (HSRT) — a program dedicated to empowering youth through skill-based training in the hospitality sector. As the parent company of Ananta Hotels and Resorts, Goyal Fashions brings extensive hospitality expertise to this initiative, ensuring that each trainee receives hands-on, industry-relevant training aligned with national standards. Through the HSRT program, we aim to transform potential into performance—by nurturing young talent, especially from underprivileged communities, and preparing them for gainful employment and entrepreneurship in the hospitality and tourism industries.",
      courses: [
        {
          sno: "01",
          batchNo: "MCC01",
          courseName: "Multi-Cuisine Cook (MCC)",
          duration: "500 + 240 (OJT)",
          students: 90
        },
        {
          sno: "02",
          batchNo: "ROT01",
          courseName: "Room Attendant (ROT)",
          duration: "300 + 240 (OJT)",
          students: 90
        },
        {
          sno: "03",
          batchNo: "FBS01",
          courseName: "Food & Beverages Services Steward (FBS)",
          duration: "300 + 240 (OJT)",
          students: 60
        },
        {
          sno: "04",
          batchNo: "FOA01",
          courseName: "Front-Office Associate (FOA)",
          duration: "340 + 240 (OJT)",
          students: 60
        }
      ],
      gallery: [
        "/images/Hsrt 1.1.png",
        "/images/Hsrt 1.2.png",
        "/images/Hsrt 1.3.png",
        "/images/Hsrt 1.4.png",
        "/images/Hsrt 1.5.png"
      ]
    },
    {
      id: 2,
      name: "SAMARTH 2021-Running",
      year: "2021-Running",
      date: "Ministry of Textiles Initiative",
      headerImage: "/images/Samarth MOT.jpg",
      description: "Goyal Fashions Private Limited is empanelled with the Ministry of Textiles, Government of India under the Samarth initiative — a flagship program focused on skilling, reskilling, and upskilling youth for the textile and apparel industry. With strong roots in the textile sector, Goyal Fashions provides industry-relevant, hands-on training that blends traditional craftsmanship with modern techniques. Under the captive employment model, we ensure trained candidates gain sustainable livelihood opportunities within the industry. Empanelled since 2021, we continue to support the vision of 'Skill India – Empowering the Nation through Skills'.",
      courses: [
        {
          sno: "1",
          courseName: "Garment Checker",
          duration: "300 Hours",
          students: 923
        },
        {
          sno: "2",
          courseName: "Sewing Machine Operator (SMO)",
          duration: "300 Hours",
          students: 5698
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?w=400&h=300&fit=crop"
      ]
    }
  ];

  const batch = hsrtBatches.find(b => b.id === parseInt(batchId));

  if (!batch) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Batch Not Found</h2>
          <button
            onClick={() => navigate('/education')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Education
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="h-96 relative overflow-hidden">
        <img 
          src={batch.headerImage} 
          alt={batch.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white hero-text">
            <h1 className="text-5xl font-bold mb-4 animate-fadeInUp text-white">{batch.name}</h1>
            <p className="text-xl animate-fadeInUp text-white" style={{animationDelay: '0.3s'}}>
              {batch.id === 2 ? 'Skill Development Programme - Ministry of Textiles' : 'Skill Development Programme - Ministry of Tourism'}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/education')}
            className="text-blue-600 hover:text-blue-800 mr-4 px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Education
          </button>
        </div>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 gradient-text">{batch.id === 2 ? 'SAMARTH Initiative' : 'Hunar Se Rozgar Tak'}</h2>
          <p className="text-gray-600 mb-4 text-lg">{batch.date}</p>
          {batch.description ? (
            <p className="text-gray-700 leading-relaxed">{batch.description}</p>
          ) : (
            <p className="text-gray-700 leading-relaxed">
              School of Hotel Management and Catering Technology (SHMCT) is consequently empanelled for conducting "Hunar Se Rozgar Tak" for the year {batch.year}. This skill development program is an initiative of Ministry of Tourism, Govt. of India under the "Capacity Building for Service Providers" scheme.
            </p>
          )}
        </div>
        
        {batch.courses.length > 0 ? (
          <div>
            <h3 className="text-2xl font-bold mb-6">Course Details</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-maroon text-white">
                  <tr>
                    {batch.courses[0]?.sno && <th className="px-4 py-3 text-left font-semibold text-white">S.No.</th>}
                    <th className="px-4 py-3 text-left font-semibold text-white">Course Detail</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">Duration</th>
                    <th className="px-4 py-3 text-left font-semibold text-white">No. of Student trained</th>
                    {batch.courses[0]?.startDate && <th className="px-4 py-3 text-left font-semibold text-white">Start Date</th>}
                    {batch.courses[0]?.endDate && <th className="px-4 py-3 text-left font-semibold text-white">End Date</th>}
                    {batch.courses[0]?.ojtDuration && <th className="px-4 py-3 text-left font-semibold text-white">OJT Duration</th>}
                  </tr>
                </thead>
                <tbody>
                  {batch.courses.map((course, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {course.sno && <td className="px-4 py-3 border-b font-medium">{course.sno}</td>}
                      <td className="px-4 py-3 border-b">{course.courseName}</td>
                      <td className="px-4 py-3 border-b">{course.duration}</td>
                      <td className="px-4 py-3 border-b text-center font-semibold">{course.students}</td>
                      {course.startDate && <td className="px-4 py-3 border-b">{course.startDate}</td>}
                      {course.endDate && <td className="px-4 py-3 border-b">{course.endDate}</td>}
                      {course.ojtDuration && <td className="px-4 py-3 border-b text-center">{course.ojtDuration} days</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-blue-800">Batch Summary</h4>
                <p className="mb-2"><strong>Total Students:</strong> {batch.courses.reduce((sum, course) => sum + course.students, 0)}</p>
                <p><strong>Total Courses:</strong> {batch.courses.length}</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-green-800">Program Details</h4>
                <p className="mb-2"><strong>Year:</strong> {batch.year}</p>
                <p><strong>Ministry:</strong> {batch.id === 2 ? 'Ministry of Textiles' : 'Ministry of Tourism'}</p>
              </div>
            </div>
            
            {/* Download Button */}
            <div className="mt-8 text-center">
              <a 
                href={`/data/HSRT_${batch.year}_Data.xlsx`}
                download={`HSRT_${batch.year}_Student_Data.xlsx`}
                className="inline-flex items-center px-6 py-3 bg-maroon text-white rounded-lg hover:bg-golden hover:text-maroon transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-download mr-2"></i>
                Download Data
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <i className="fas fa-info-circle text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-500 text-lg">No detailed course data available for this batch.</p>
          </div>
        )}
      </section>

      {/* Image Gallery */}
      {batch.gallery && batch.gallery.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-8">
            <h3 className="text-2xl font-bold text-center mb-8">Programme Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {batch.gallery.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BatchDetails;