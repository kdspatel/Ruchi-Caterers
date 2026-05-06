import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, User, MessageCircle, Send, Search } from "lucide-react";

export default function Blog5() {
  // Smooth scroll to top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [comments, setComments] = useState([]);

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
      <section className="relative min-h-[45vh] sm:min-h-[55vh] overflow-hidden flex items-center justify-center pt-16 sm:pt-32">
        <img
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1800&auto=format&fit=crop"
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

          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold max-w-5xl leading-tight">
            THE ULTIMATE CHECKLIST FOR PERFECT EVENT CATERING: 5 MISTAKES TO
            AVOID
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
                <span>Sep 5, 2023</span>
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
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1800&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>

            {/* BLOG CONTENT */}
            <div className="mt-10 sm:mt-12 space-y-6 sm:space-y-8 text-white/75 leading-[2] text-[15px] sm:text-lg">
              <p>
                When aiming to host a formal event, meticulous attention to
                detail is paramount to ensure your catering service captivates
                your guests. However, there are common catering pitfalls that
                you need to steer clear of. For extraordinary events, setting
                aside a large budget for meticulous party planning is
                imperative. While attendees do remember the catering and food,
                their overall experience and engagement are equally pivotal. To
                orchestrate an impeccable event, avoiding specific missteps is
                critical. In this article, we outline seven major mistakes and
                provide guidance on how to avoid them.
              </p>

              <p>
                Opt for the Right Catering Company: The primary mistake to avoid
                while organizing a special event is attempting to manage all
                aspects of catering single-handedly. Culinary skills alone are
                not enough; many other factors extend beyond cooking. Choosing a
                reputed Indian Top Rated Caterer can help manage expenses,
                especially under budget constraints. A skilled catering company
                handles various aspects including food temperature control,
                tableware, utensils, napkins, and even furniture. The success of
                your event largely depends on the quality of your catering
                service. In fact, outsourcing catering services is often more
                cost-effective than self-planning. A professional caterer can
                handle multiple responsibilities, reducing stress and ensuring
                smooth execution.
              </p>

              <p>
                Allocate the Right Catering Budget: Mismanagement of your
                catering budget is the second mistake to avoid. The type of
                catering you choose significantly impacts staffing costs. A
                sit-down meal with a diverse menu is generally well-received and
                can be a cost-effective option. Buffet-style catering is popular
                for large events, especially breakfast and lunch gatherings.
                Including desserts in the menu is a budget-friendly way to
                impress guests and leave a positive impression.
              </p>

              <p>
                Streamline the Schedule: A third mistake is overloading your
                catering schedule. Overextending can compromise service quality.
                The main goal of catering is to create a positive guest
                experience. However, an overloaded schedule can reduce
                efficiency and performance. Typically, catering schedules are
                intense for a week, and handling too many events can drain
                resources. This may negatively affect future opportunities.
                Efficient workload management is essential for delivering
                high-quality service to every client.
              </p>

              <p>
                Align Your Team and Suppliers with Sustainability: A fourth
                mistake is insufficient staffing in terms of both quantity and
                quality. Staff plays a crucial role in the success of catering
                services. Prioritize hiring skilled professionals for delivering
                the Best Catering Services. Staff members handle setup, cooking,
                serving, and cleaning. Cutting down on staff can reduce service
                quality and business sustainability. Hiring experienced
                professionals on a contractual basis is often a better approach.
                Reviewing contract details carefully ensures smooth execution of
                events. The primary goal should always be guest satisfaction and
                quality food service. Ensure sufficient space for guests,
                especially for buffet-style catering, and maintain smooth food
                flow to avoid delays or frustration.
              </p>

              <p>
                Opt for Simplicity in Menus: Remember that guests come from
                diverse cultural backgrounds. Complex menus with unfamiliar
                ingredients may not appeal to everyone. While premium catering
                focuses on taste and quality, simplicity often ensures broader
                acceptance. A simple yet well-prepared menu brings satisfaction
                and enjoyment. Including kid-friendly options and thoughtful
                selections like fruits, appetizers, vegetables, and desserts
                helps create a balanced experience.
              </p>

              <p>
                Conclusion: Organizing a special event is a challenging task.
                Avoiding key mistakes is essential for success. After finalizing
                the guest list and catering service, careful menu planning
                becomes crucial. Food presentation, timely service, and taste
                play a vital role in shaping guest experience. High-quality
                catering ensures a positive impression that guests will remember
                long after the event.
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
