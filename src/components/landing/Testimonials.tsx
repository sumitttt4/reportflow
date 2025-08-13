import React from 'react';
import { Star } from 'lucide-react';
import Card from '../ui/Card';

const testimonials = [
  {
    content: "ReportFlow cut our monthly reporting time from 3 days to 30 minutes. The AI insights helped us discover trends we never would have spotted manually.",
    author: "Sarah Chen",
    role: "Operations Manager",
    company: "TechStart Solutions",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5
  },
  {
    content: "As a small business owner, I was drowning in spreadsheets. Now I get comprehensive reports automatically every week. It's like having a data analyst on staff.",
    author: "Michael Rodriguez",
    role: "Founder & CEO",
    company: "Rodriguez Marketing",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5
  },
  {
    content: "The integration with our existing tools was seamless. Setup took minutes, and the automated anomaly detection already caught two billing errors this month.",
    author: "Jennifer Thompson",
    role: "Finance Director",
    company: "GrowthCorp Inc",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5
  }
];

const stats = [
  { value: "10,000+", label: "Reports Generated Monthly" },
  { value: "95%", label: "Time Reduction" },
  { value: "500+", label: "Happy Customers" },
  { value: "99.9%", label: "Uptime Guarantee" }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Trusted by Growing Businesses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how teams across industries are saving time and gaining insights with automated reporting.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-200">
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
