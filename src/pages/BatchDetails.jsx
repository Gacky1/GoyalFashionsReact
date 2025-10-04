import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BatchDetails = () => {
  const { batchId } = useParams();
  const navigate = useNavigate();

  const hsrtBatches = [
    {
      id: 1,
      name: "HSRT 2018-19",
      year: "2018-19",
      date: "Aug 12, 2019",
      headerImage: "https://www.jnujaipur.ac.in/Uploads/image/138imguf_23a5e394329e6e1af6938a708f409d1d1.webp",
      courses: [
        {
          batchNo: "MCC03",
          courseName: "Multi Cuisine Cook",
          duration: "500 + 240 (OJT)",
          durationDays: 67,
          students: 30,
          startDate: "12/08/2019",
          endDate: "07/11/2019",
          ojtDuration: 24,
          ojtStart: "9/11/2019",
          ojtEnd: "9/12/2019"
        },
        {
          batchNo: "FBS01",
          courseName: "F&B Service-Steward",
          duration: "300 + 240 (OJT)",
          durationDays: 42,
          students: 30,
          startDate: "27/09/2019",
          endDate: "14/11/2019",
          ojtDuration: 24,
          ojtStart: "16/11/2019",
          ojtEnd: "10/12/2019"
        },
        {
          batchNo: "FBS02",
          courseName: "Room Attendant",
          duration: "300 + 240 (OJT)",
          durationDays: 43,
          students: 30,
          startDate: "14/10/2019",
          endDate: "02/12/2019",
          ojtDuration: 24,
          ojtStart: "4/12/2019",
          ojtEnd: "27/12/2019"
        },
        {
          batchNo: "FBS03",
          courseName: "Front Office Associate",
          duration: "340 + 240 (OJT)",
          durationDays: 48,
          students: 30,
          startDate: "13/09/2019",
          endDate: "07/11/2019",
          ojtDuration: 24,
          ojtStart: "8/11/2019",
          ojtEnd: "1/12/2019"
        }
      ],
      gallery: [
        "https://www.jnujaipur.ac.in/Uploads/image/138imguf_23a5e394329e6e1af6938a708f409d1d1.webp",
        "https://www.jnujaipur.ac.in/Uploads/image/140imguf_04974808ed4fc9b5d0322a77a23b018e2.webp",
        "https://www.jnujaipur.ac.in/Uploads/image/141imguf_c4d4479ae2831105f63f137591325cfa3.webp",
        "https://www.jnujaipur.ac.in/Uploads/image/142imguf_b3562509a2d1dea33eb2120577933ad24.webp",
        "https://www.jnujaipur.ac.in/Uploads/image/143imguf_394f35ca3df61999d0175eb31321b4ab5.webp"
      ]
    },
    {
      id: 2,
      name: "HSRT 2019-20",
      year: "2019-20",
      date: "Mar 15, 2020",
      headerImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=400&fit=crop",
      courses: [],
      gallery: []
    },
    {
      id: 3,
      name: "HSRT 2020-21",
      year: "2020-21",
      date: "Jan 10, 2021",
      headerImage: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&h=400&fit=crop",
      courses: [],
      gallery: []
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
              Skill Development Programme - Ministry of Tourism
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
          <h2 className="text-3xl font-bold mb-4 gradient-text">Programme Details</h2>
          <p className="text-gray-600 mb-4 text-lg">{batch.date}</p>
          <p className="text-gray-700 leading-relaxed">
            School of Hotel Management and Catering Technology (SHMCT) is consequently empanelled for conducting "Hunar Se Rozgar Tak" for the year {batch.year}. This skill development program is an initiative of Ministry of Tourism, Govt. of India under the "Capacity Building for Service Providers" scheme.
          </p>
        </div>
        
        {batch.courses.length > 0 ? (
          <div>
            <h3 className="text-2xl font-bold mb-6">Course Details</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Batch No</th>
                    <th className="px-4 py-3 text-left font-semibold">Course Name</th>
                    <th className="px-4 py-3 text-left font-semibold">Duration</th>
                    <th className="px-4 py-3 text-left font-semibold">Students</th>
                    <th className="px-4 py-3 text-left font-semibold">Start Date</th>
                    <th className="px-4 py-3 text-left font-semibold">End Date</th>
                    <th className="px-4 py-3 text-left font-semibold">OJT Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {batch.courses.map((course, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 border-b font-medium">{course.batchNo}</td>
                      <td className="px-4 py-3 border-b">{course.courseName}</td>
                      <td className="px-4 py-3 border-b">{course.duration}</td>
                      <td className="px-4 py-3 border-b text-center font-semibold">{course.students}</td>
                      <td className="px-4 py-3 border-b">{course.startDate}</td>
                      <td className="px-4 py-3 border-b">{course.endDate}</td>
                      <td className="px-4 py-3 border-b text-center">{course.ojtDuration} days</td>
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
                <p><strong>Ministry:</strong> Tourism, Govt of India</p>
              </div>
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