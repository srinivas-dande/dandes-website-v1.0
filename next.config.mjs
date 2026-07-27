/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      
      {
        source: "/terms",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/webinar",
        destination: "/courses/ai-machine-learning-course",
        permanent: true,
      },
       {
        source: "/ai-machine-learning-course",
        destination: "/courses/ai-machine-learning-course",
        permanent: true,
      },
      {
        source: "/webinars/software-engineers-switch-to-ai-career",
        destination: "/courses/ai-machine-learning-course",
        permanent: true,
      },
      {
        source: "/webinars/how-to-become-an-ai-engineer-or-ml-engineer",
        destination: "/courses/ai-machine-learning-course",
        permanent: true,
      },
      
    ];
  },
};

export default nextConfig;