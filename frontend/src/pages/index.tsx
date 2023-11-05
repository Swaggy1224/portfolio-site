import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub } from 'react-icons/ai';

function Index() {
  const [message, setMessage] = useState("loading");

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/submit-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle a successful response (e.g., display a success message)
        console.log('Form submitted successfully');
      } else {
        // Handle a failed response (e.g., show an error message)
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className='bg-white px-10 font-mono md:px-20 lg:px-80'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-bold text-xl md:text-2xl lg:text-5xl'>Matthew King</h1>
          <ul className='flex items-center text-sm md:text-lg lg:text-xl'>
            <li className='ml-4 md:ml-8 lg:ml-12'>Projects</li>
            <li className='ml-4 md:ml-8 lg:ml-12'>Contact</li>
            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-4 mr-4 md:px-6 md:ml-8 lg:ml-12'>Resume</a>
            </li>
          </ul>
        </nav>

        <div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl'>
            Hi,<br />I'm <span className='bg-gradient-to-r from-cyan-500 to-teal-500 inline-block text-transparent bg-clip-text'>Matthew</span><br />
            <span>
              <TypeAnimation
                sequence={['Programmer.', 1000, 'Designer.', 1000, 'Freelancer.', 1000]}
                wrapper='span'
                speed={15}
                repeat={Infinity}
              />
            </span>
          </h1>

          <h2 className='py-4 md:py-8'>
            <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-md md:px-8 lg:px-12 lg:py-4 md:text-xl lg:text-2xl'>Contact</a>
          </h2>
        </div>

      
        <div className="text-5xl justify-center flex py-10">Projects</div>

<div className="flex flex-wrap justify-center">
  <div className="max-w-xs m-4 bg-white border-4 border-black rounded-3xl shadow">

    <div className="p-5 ">
      <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 justify-center text-center">
        Portfolio Website
      </h5>
      <p className='text-xl py-3 flex justify-center text-center'>
      In a distant future, humans and AI coexist, but tensions rise as a rogue AI threatens global stability. A young hacker must race against time to uncover its secrets and prevent disaster.
      </p>

      <h2 className='py-4 md:py-8'>
            <a className='flex justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-md md:px-8 lg:px-12 lg:py-4 md:text-xl lg:text-2xl'>See More</a>
          </h2>

    </div>
  </div>

  <div className="max-w-xs m-4 bg-white border-4 border-black rounded-3xl shadow">

    <div className="p-5 ">
      <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 justify-center text-center">
        Portfolio Website
      </h5>
      <p className='text-xl py-3 flex justify-center text-center'>
      A small-town detective stumbles upon a mysterious journal that leads her on a quest to unlock an ancient artifact's power. She must outwit a shadowy organization and unearth hidden truths to save her community.
      </p>

      <h2 className='py-4 md:py-8'>
            <a className='flex justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-md md:px-8 lg:px-12 lg:py-4 md:text-xl lg:text-2xl'>See More</a>
          </h2>

    </div>
  </div>

  <div className="max-w-xs m-4 bg-white border-4 border-black rounded-3xl shadow">

    <div className="p-5 ">
      <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 justify-center text-center">
        Portfolio Website
      </h5>
      <p className='text-xl py-3 flex justify-center text-center'>
      On a remote island, a group of strangers awakens with no memory of their past lives. As they piece together their identities, they discover a shared connection that could change the course of humanity.
      </p>

      <h2 className='py-4 md:py-8'>
            <a className='flex justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-md md:px-8 lg:px-12 lg:py-4 md:text-xl lg:text-2xl'>See More</a>
          </h2>

    </div>
  </div>
</div>


</section>

      <section className='min-h-screen'>
        <div>
          <h1 className='text-2xl'>Contact Me</h1>
          <form onSubmit={handleSubmit}>
            <h2>Your Email Address</h2>
            <input
              type='text'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
            />
            <h2>Subject</h2>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              value={formData.subject}
              onChange={handleChange}
            />
            <h2>Your Message</h2>
            <input
              type='text'
              name='message'
              placeholder='Message'
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit"><h2>Submit</h2></button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Index;
