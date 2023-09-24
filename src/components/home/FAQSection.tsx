import React from 'react';

const FAQSection = () => {
  const faqData = [
    {
      question: 'What does your architecture firm specialize in?',
      answer:
        'Our firm specializes in a wide range of architectural services, including residential, commercial, and institutional projects. We have extensive experience in designing everything from homes and offices to schools and healthcare facilities.',
    },
    {
      question: 'How do I get started with a project?',
      answer: `Getting started is easy. Simply contact us through our website or give us a call. We'll schedule an initial consultation where we can discuss your project, budget, and design goals.`,
    },
    {
      question: 'What is the typical timeline for a project?',
      answer:
        'Project timelines can vary significantly based on the scope and complexity of the project. We will provide you with a detailed timeline during the consultation phase, outlining key milestones and estimated completion dates.',
    },
    {
      question: 'How do you handle budget constraints?',
      answer:
        'We understand the importance of staying within budget. During the design phase, we work closely with you to establish a realistic budget, and we strive to find cost-effective solutions without compromising quality.',
    },
    {
      question: 'Can you provide 3D renderings of the proposed design?',
      answer:
        'Yes, we utilize advanced 3D modeling and rendering software to provide you with a clear visual representation of the proposed design, helping you to better understand the final product.',
    },
  ];

  const faqHtml = faqData.map((item, i) => {
    return (
      <div
        key={i}
        className='rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200'
        data-te-animation-init
        data-te-animation-start='onScroll'
        data-te-animation='[fade-in-up_1s_ease-in-out]'
      >
        <h2 className='mb-0' id='flush-headingOne'>
          <button
            className='group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] darks:[&:not([data-te-collapse-collapsed])]:text-primary-400'
            type='button'
            data-te-collapse-init
            data-te-collapse-collapsed={i === 0 ? false : true}
            data-te-target={`#flush-collapse-${i}`}
            aria-expanded='false'
            aria-controls={`flush-collapse-${i}`}
          >
            {item.question}
            <span className='ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#003270] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none darks:fill-[#8FAEE0] darks:group-[[data-te-collapse-collapsed]]:fill-[#eee]'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                <path
                  fill-rule='evenodd'
                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id={`flush-collapse-${i}`}
          className='!visible border-0'
          data-te-collapse-item
          data-te-collapse-show={i === 0 ? true : false}
          aria-labelledby={`flush-collapse-${i}`}
          data-te-parent='#faqVisionAccordion'
        >
          <div className='py-4 px-5 text-neutral-500 darks:text-neutral-300'>{item.answer}</div>
        </div>
      </div>
    );
  });
  return (
    <section className='h-screens py-12 mb-12'>
      <div className='container mx-auto'>
        <h2 className='logo-text text-4xl uppercase tracking-widest my-8'>
          Frequently Asked <span className='logo-color'>Questions</span>
        </h2>
        <div className='container mx-auto'>
          <div id='faqVisionAccordion'>{faqHtml}</div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
