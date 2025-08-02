import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation ,Link} from "react-router-dom";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const location = useLocation();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow">
        {isHomePage ? (
          <div className="hero-section py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to WordWeave
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Share your thoughts, read amazing stories, and connect with
                other writers
              </p>

              <div className="flex justify-center gap-4">
                {!authStatus ? (
                  <>
                    <Link
                      to="/login"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                    >
                      Create Account
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/all-posts"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Explore Posts
                  </Link>
                )}
              </div>
            </div>

            <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                icon="📝"
                title="Write Posts"
                description="Create and publish your own blog posts with our easy-to-use editor"
              />
              <FeatureCard
                icon="🔍"
                title="Discover Content"
                description="Find interesting articles from our community of writers"
              />
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      <Footer />
    </div>
  );
}
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <div className="text-6xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default App;
