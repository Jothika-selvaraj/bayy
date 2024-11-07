import React from 'react';
import Layout from '../../../common/Layout';
import { Cta } from '../home01';

const Pricing = () => {
  const plans = [
    {
      name: 'Elite',
      price: '$16/hour',
      buttonLabel: 'GET STARTED',
      bestLabel: 'Best Experience',
      teachers: {
        nativeTeacher: true,
        certified: true,
        topRated: true,
      },
      academics: {
        certificate: true,
        directChat: true,
        coach: true,
        coachingPlanning: true,
        progressReport: true,
      },
      tools: {
        fullDashboard: true,
        eSyllabus: true,
        welcomePackage: true,
        videoRecordings: true,
      },
      scheduling: {
        unlimitedReschedules: true,
        lessonCancellations: true,
      },
    },
    {
      name: 'Pro',
      price: '$11/hour',
      buttonLabel: 'GET STARTED',
      bestLabel: 'Best Value',
      teachers: {
        nativeTeacher: true,
        certified: true,
        topRated: true,
      },
      academics: {
        certificate: true,
        directChat: true,
        coach: true,
        coachingPlanning: true,
        progressReport: true,
      },
      tools: {
        fullDashboard: true,
        eSyllabus: true,
        welcomePackage: false,
        videoRecordings: true,
      },
      scheduling: {
        reschedules: '4 per month',
        lessonCancellations: '1 per month',
      },
     
    },
    {
      name: 'Essentials',
      price: '$9/hour',
      buttonLabel: 'GET STARTED',
      bestLabel: '',
      teachers: {
        nativeTeacher: true,
        certified: false,
        topRated: false,
      },
      academics: {
        certificate: true,
        directChat: true,
        coach: false,
        coachingPlanning: false,
        progressReport: true,
      },
      tools: {
        limitedDashboard: true,
        eSyllabus: true,
        welcomePackage: true,
        videoRecordings: false,
      },
      scheduling: {
        reschedules: '2 per month',
        lessonCancellations: false,
      },
    },
    {
      name: 'Simple',
      price: '$8/hour',
      buttonLabel: 'GET STARTED',
      bestLabel: '',
      teachers: {
        nativeTeacher: true,
        certified: false,
        topRated: false,
      },
      academics: {
        certificate: false,
        directChat: false,
        coach: false,
        coachingPlanning: false,
        progressReport: false,
      },
      tools: {
        limitedDashboard: true,
        eSyllabus: true,
        welcomePackage: false,
        videoRecordings: false,
      },
      scheduling: {
        reschedules: false,
        lessonCancellations: false,
      },
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-center text-4xl mb-8">Tiered Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${
                plan.name === 'Elite'
                  ? 'bg-[#5694ac] text-white' 
                  : plan.name === 'Pro'
                  ? 'bg-[#f1737f] text-white' 
                  : 'bg-gray-100'
              }`}
            >
              {plan.bestLabel && (
                <div
                  className={`text-center text-sm mb-2 font-bold py-1 px-4 rounded-t-lg relative ${
                    plan.name === 'Elite'
                      ? 'bg-red-700 text-white'
                      : 'bg-red-700 text-white'
                  }`}
                >
                  {plan.bestLabel}
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0 w-0 border-l-8 border-r-8 border-t-8 ${
                      plan.name === 'Elite'
                        ? 'border-t-blue-200'
                        : 'border-t-brown-600'
                    } border-transparent`}
                  />
                </div>
              )}
              <h3
                className={`text-xl font-bold text-center mb-4 ${
                  plan.name === 'Elite' || plan.name === 'Pro'
                    ? 'text-white'
                    : 'text-black'
                }`}
              >
                {plan.name}
              </h3>
              <h4 className="text-2xl font-semibold text-center mb-4">
                {plan.price}
              </h4>
              <button
                className={`w-full py-2 mb-4 ${
                  plan.name === 'Elite'
                    ? 'bg-white text-[#A64D3F] border border-blue-500'
                    : plan.name === 'Pro'
                    ? 'bg-white text-[#A64D3F] border border-[#A64D3F]' 
                    : 'bg-gray-600 text-white'
                } rounded`}
              >
                {plan.buttonLabel}
              </button>

              <div>
                <h5 className="font-bold mb-2">Teachers</h5>
                <ul>
                  <li>Proficient Arabic (Native) Teacher</li>
                  <li>Institutionally Certified</li>
                </ul>

                <h5 className="font-bold mt-4 mb-2">Academics</h5>
                <ul>
                  <li>E-Certificate</li>
                  <li>Direct Chat with Teacher</li>
                  <li>Dedicated Academic Coach</li>
                </ul>

                <h5 className="font-bold mt-4 mb-2">Tools</h5>
                <ul>
                  <li>Full/Limited Dashboard Access</li>
                  <li>E-Syllabus</li>
                </ul>

                <h5 className="font-bold mt-4 mb-2">Scheduling</h5>
                <ul>
                  <li>
                    {plan.scheduling.unlimitedReschedules
                      ? 'Unlimited Reschedules'
                      : plan.scheduling.reschedules
                      ? `Up to ${plan.scheduling.reschedules}`
                      : 'No Reschedules'}
                  </li>
                  <li>
                    {plan.scheduling.lessonCancellations
                      ? `${plan.scheduling.lessonCancellations}`
                      : 'No Lesson Cancellations'}
                  </li>
                </ul>

                
              </div>
            </div>
          ))}
        </div>
      </div>

      <Cta />
    </Layout>
  );
};

export default Pricing;
