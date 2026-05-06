import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, User, MessageCircle, Send, Search } from "lucide-react";

export default function BlogDetails() {
  // Smooth scroll to top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [comments, setComments] = useState([
    {
      name: "ruchigroupkkm",
      text: "Ruchi Caterers",
      date: "January 12, 2024 at 2:27 PM",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  // SEARCH STATES
  const [search, setSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  const recentPosts = [
    {
      blog: "Blog 1",
      title: "Embarking on a Culinary Journey with Ruchi Caterers in Kochi",
      link: "/blog/1",
    },
    {
      blog: "Blog 2",
      title: "Corporate Catering Excellence – Ruchi Caterers Experience",
      link: "/blog/2",
    },
    {
      blog: "Blog 3",
      title: "Crafting Unforgettable Catering Experiences for Every Occasion",
      link: "/blog/3",
    },
    {
      blog: "Blog 4",
      title:
        "Elegant Wedding Catering Services Across Kerala by Ruchi Caterers",
      link: "/blog/4",
    },
    {
      blog: "Blog 5",
      title: "Top Event Catering Mistakes You Must Avoid for a Perfect Event",
      link: "/blog/5",
    },
    {
      blog: "Blog 6",
      title: "Premium Corporate Catering Services in Trivandrum",
      link: "/blog/6",
    },
    {
      blog: "Blog 7",
      title: "Luxury Outdoor & Festive Catering Services by Ruchi Caterers",
      link: "/blog/7",
    },
  ];

  // SEARCH FILTER
  const filteredPosts = recentPosts.filter((post) => {
    // SHOW ALL BLOGS
    if (activeSearch.trim() === "") {
      return true;
    }

    return (
      post.blog.toLowerCase().includes(activeSearch.toLowerCase()) ||
      post.title.toLowerCase().includes(activeSearch.toLowerCase())
    );
  });

  // HANDLE SEARCH
  const handleSearch = () => {
    // SHOW ALL AGAIN WHEN EMPTY
    if (search.trim() === "") {
      setActiveSearch("");
      return;
    }

    setActiveSearch(search);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.comment) {
      return;
    }

    const newComment = {
      name: formData.name,
      text: formData.comment,
      date: new Date().toLocaleString(),
    };

    setComments([...comments, newComment]);

    setFormData({
      name: "",
      email: "",
      website: "",
      comment: "",
    });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[45vh] sm:min-h-[55vh] overflow-hidden flex items-center justify-center pt-20 sm:pt-32">
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1800&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 sm:px-6"
        >
          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-yellow-400 text-xs sm:text-sm mb-4">
            Ruchi Caterers Blog
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-4xl font-bold max-w-5xl leading-tight">
            Embarking on a delightful culinary journey in Kochi promises a
            symphony of flavors and unforgettable experiences
          </h1>
        </motion.div>
      </section>

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          {/* LEFT CONTENT */}
          <div>
            {/* META */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-white/60 mb-8 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>ruchigroupkkm</span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                <span>Jan 9, 2024</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span>
                  {comments.length}{" "}
                  {comments.length === 1 ? "Comment" : "Comments"}
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-[25px] sm:rounded-[35px] border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1800&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>

            {/* BLOG CONTENT */}
            <div className="mt-10 sm:mt-12 space-y-6 sm:space-y-8 text-white/75 leading-[2] text-[15px] sm:text-lg">
              <p>
                Ruchi Caters, standing tall in culinary excellence, transforms
                events into extraordinary affairs, bringing a creative flair to
                every occasion.
              </p>

              <p>
                Savor the sensory symphony as elite caterers craft exquisite
                masterpieces, offering diverse options from traditional Kerala
                delicacies to international flavors. Whether you prefer
                vegetarian or non-vegetarian delights, Kochi’s catering services
                leave an indelible mark on your taste buds.
              </p>

              <p>
                Beyond the delectable dishes, Kochi’s finest caterers prioritize
                exceptional service, ensuring meticulous attention from planning
                to the grand finale. Their knowledgeable and skilled
                professionals go above and beyond to deliver a flawless and
                delightful dining experience.
              </p>

              <p>
                Customization is key, with top catering services in Kochi
                tailoring menus to perfection, accommodating individual tastes,
                dietary restrictions, and cultural considerations. Recognizing
                the uniqueness of every event, they weave culinary magic that
                reflects your vision, enhancing the overall experience.
              </p>

              <p>
                At the apex of catering excellence is Ruchi Caters, reigning
                supreme as the best in Kochi and one of Kerala’s finest. Their
                commitment to quality, passion for perfection, and dedication to
                client happiness set the standard for catering services in the
                state.
              </p>

              <p>
                In conclusion, choosing Kochi’s crème de la crème catering
                services ensures an unforgettable event. With Ruchi Caters
                leading the way, let your occasions transcend the ordinary and
                become treasured memories, spoken of with awe for years to come.
                Entrust your event to the expert hands of Kochi’s premier
                catering services and elevate it to new heights of gourmet
                enjoyment.
              </p>
            </div>

            {/* COMMENTS */}
            <div className="mt-20 sm:mt-24">
              <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12">
                {comments.length}{" "}
                {comments.length === 1 ? "Comment" : "Comments"}
              </h2>

              {/* COMMENT LIST */}
              <div className="space-y-6">
                {comments.map((comment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="min-w-[50px] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold text-lg">
                        {comment.name.charAt(0)}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
                          <h3 className="font-bold text-base sm:text-lg text-white break-all">
                            {comment.name}
                          </h3>

                          <span className="text-white/40 text-xs sm:text-sm">
                            {comment.date}
                          </span>
                        </div>

                        <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                          {comment.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* COMMENT FORM */}
              <div className="mt-16 sm:mt-20">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
                  Leave a Comment
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Write your comment..."
                    rows="6"
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-5 sm:px-6 py-4 sm:py-5 outline-none focus:border-yellow-400 resize-none text-sm sm:text-base"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="bg-white/5 border border-white/10 rounded-full px-5 sm:px-6 py-4 outline-none focus:border-yellow-400 text-sm sm:text-base"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="bg-white/5 border border-white/10 rounded-full px-5 sm:px-6 py-4 outline-none focus:border-yellow-400 text-sm sm:text-base"
                    />

                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Website"
                      className="bg-white/5 border border-white/10 rounded-full px-5 sm:px-6 py-4 outline-none focus:border-yellow-400 text-sm sm:text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 px-6 sm:px-8 py-4 rounded-full bg-yellow-400 text-black font-bold flex items-center gap-3 hover:scale-105 transition duration-300 text-sm sm:text-base"
                  >
                    Post Comment
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div>
            <div className="lg:sticky lg:top-28 space-y-8">
              {/* SEARCH */}
              <div className="bg-white/5 border border-white/10 rounded-[25px] sm:rounded-[30px] p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Search</h3>

                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    // PRESS ENTER
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                    className="flex-1 bg-black border border-white/10 rounded-l-full px-4 sm:px-5 py-3 outline-none text-sm sm:text-base"
                  />

                  <button
                    onClick={handleSearch}
                    className="bg-yellow-400 text-black px-5 sm:px-6 rounded-r-full font-semibold"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </div>

              {/* RECENT POSTS */}
              <div className="bg-white/5 border border-white/10 rounded-[25px] sm:rounded-[30px] p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">
                  Recent Posts
                </h3>

                {/* KEEPING YOUR OLD STYLE + ADDING GAP */}
                <div className="mt-6">
                  {filteredPosts.map((post, index) => (
                    <Link
                      key={index}
                      to={post.link}
                      className="block mt-5 first:mt-0"
                    >
                      <div className="bg-black/40 border border-white/10 rounded-2xl p-4 hover:border-yellow-400/40 hover:bg-yellow-400/5 transition duration-300 cursor-pointer">
                        <p className="text-yellow-400 font-semibold text-sm mb-2">
                          {post.blog}
                        </p>

                        <p className="text-white/70 hover:text-yellow-400 transition leading-relaxed text-sm sm:text-base">
                          {post.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
