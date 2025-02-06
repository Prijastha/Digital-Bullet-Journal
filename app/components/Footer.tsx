export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-10 p-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Copyright */}
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()}Digital Bullet Journal. All rights reserved.
        </p>

        {/* Middle Section: Quick Links */}
        <div className="space-x-6 mt-3 md:mt-0">
          <a href="#features" className="text-gray-600 hover:text-blue-600">
            Features
          </a>
          <a href="#faq" className="text-gray-600 hover:text-blue-600">
            FAQ
          </a>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            📘
          </a>{" "}
          {/* Facebook */}
          <a href="#" className="text-gray-600 hover:text-blue-600">
            🐦
          </a>{" "}
          {/* Twitter */}
          <a href="#" className="text-gray-600 hover:text-blue-600">
            📸
          </a>{" "}
          {/* Instagram */}
        </div>
      </div>
    </footer>
  );
}
