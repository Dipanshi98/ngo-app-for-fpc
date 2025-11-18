import { Link } from 'react-router-dom'
import { Search, Clock, User, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import './Blog.css'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')

  const blogs = [
    {
      id: 1,
      title: 'Education Transforms Lives: The Story of Priya',
      date: 'Nov 10, 2024',
      author: 'Sneha Desai',
      category: 'Education',
      excerpt: 'Meet Priya Sharma, who went from being a school dropout to securing admission in a top university thanks to our education program...',
      content: 'Full story would go here explaining how our education program transformed Priya\'s life and gave her new opportunities.',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Healthcare Camps Reach 500+ Families in Rural Areas',
      date: 'Nov 5, 2024',
      author: 'Dr. Rajesh Singh',
      category: 'Healthcare',
      excerpt: 'Our healthcare initiative conducted 10 medical camps across rural villages, providing free consultations and treatment...',
      content: 'Details about how the healthcare camps improved health outcomes in rural communities.',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Skill Training Leads to Employment Success',
      date: 'Oct 28, 2024',
      author: 'Priya Sharma',
      category: 'Skills',
      excerpt: 'The vocational training program successfully placed 100 youth in meaningful jobs with average salary increase of 3x...',
      content: 'Success metrics and stories from skill development program graduates.',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Women Empowerment Through SHG Initiative',
      date: 'Oct 20, 2024',
      author: 'Neha Gupta',
      category: 'Community',
      excerpt: 'How our Self-Help Group initiative has empowered 2,000+ women to become economically independent...',
      content: 'Detailed account of SHG activities and women\'s success stories.',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'Environment & Sustainability: Our Tree Plantation Drive',
      date: 'Oct 12, 2024',
      author: 'Vikram Kumar',
      category: 'Environment',
      excerpt: 'Planted 10,000 trees across 25 villages, creating green cover and livelihood opportunities...',
      content: 'Environmental impact of our sustainability initiatives.',
      readTime: '4 min read'
    },
    {
      id: 6,
      title: 'Technology in Social Work: Digitalization of Education',
      date: 'Oct 1, 2024',
      author: 'Arun Patel',
      category: 'Technology',
      excerpt: 'How we\'re leveraging technology to provide quality education to remote and rural communities...',
      content: 'Innovative use of technology in bridging education gaps.',
      readTime: '8 min read'
    }
  ]

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categories = ['All', 'Education', 'Healthcare', 'Skills', 'Community', 'Environment', 'Technology']

  return (
    <div className="blog-root min-h-screen">
      {/* Hero Section */}
      <section className="blog-hero bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="blog-hero-content">
            <h1 className="blog-title text-5xl font-bold mb-4">Blog & Stories</h1>
            <p className="blog-subtitle text-xl text-blue-100">Inspiring stories of change, impact, and transformation</p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="blog-featured-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="blog-featured-title text-4xl font-bold text-center mb-12 text-gray-900">Featured Stories</h2>
          <div className="blog-featured-list grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="blog-post-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-2">
              <img src="/src/assets/images/blog/featured1.svg" alt="Featured 1" className="blog-post-img" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  Transforming Education in Rural India
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  Discover how our education initiatives are making a difference in remote villages.
                </p>
                <Link to="#" className="blog-post-link text-blue-600 font-bold hover:text-blue-800 transition">
                  Read More →
                </Link>
              </div>
            </div>
            <div className="blog-post-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-2">
              <img src="/src/assets/images/blog/featured2.svg" alt="Featured 2" className="blog-post-img" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  Healthcare Camps: Impact & Reach
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  See the impact of our healthcare outreach programs across multiple states.
                </p>
                <Link to="#" className="blog-post-link text-blue-600 font-bold hover:text-blue-800 transition">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="blog-posts-title text-4xl font-bold text-center mb-12 text-gray-900">Latest Updates</h2>
          <div className="blog-posts-list grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="blog-post-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-2">
                {/* Featured Image */}
                <div className={`h-48 bg-gradient-to-r ${
                  blog.category === 'Education' ? 'from-blue-400 to-blue-600' :
                  blog.category === 'Healthcare' ? 'from-green-400 to-green-600' :
                  blog.category === 'Skills' ? 'from-purple-400 to-purple-600' :
                  blog.category === 'Community' ? 'from-pink-400 to-pink-600' :
                  blog.category === 'Environment' ? 'from-emerald-400 to-emerald-600' :
                  'from-orange-400 to-orange-600'
                } flex items-center justify-center`}>
                  <span className="text-5xl">
                    {blog.category === 'Education' ? '📚' :
                     blog.category === 'Healthcare' ? '⚕️' :
                     blog.category === 'Skills' ? '🎓' :
                     blog.category === 'Community' ? '👥' :
                     blog.category === 'Environment' ? '🌱' :
                     '💻'}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock size={16} /> {blog.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} /> {blog.author}
                    </div>
                    <p>{blog.date}</p>
                  </div>

                  {/* Read More Button */}
                  <Link to="#" className="blog-post-link text-blue-600 font-bold hover:text-blue-800 transition">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta-section py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="blog-cta-title text-4xl font-bold mb-6 text-gray-900">Want to Share Your Story?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We'd love to hear from beneficiaries, volunteers, and partners about their experiences with us.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition"
          >
            Send Us Your Story
          </Link>
        </div>
      </section>
    </div>
  )
}
