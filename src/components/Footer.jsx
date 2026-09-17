

export const Footer = () => {
  return (
    <footer className="bg-base-200">

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold">
               BookNest
            </h2>

            <p className="mt-2 text-sm">
              Your digital library for discovering and borrowing books.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg">
              Contact Us
            </h3>

            <p className="mt-2 text-sm">
              Email: support@booknest.com
            </p>

            <p className="text-sm">
              Phone: +880 1234-567890
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg">
              Follow Us
            </h3>

            <div className="flex gap-4 mt-2">

              <a href="#" className="link link-hover">
                Facebook
              </a>

              <a href="#" className="link link-hover">
                Instagram
              </a>

              <a href="#" className="link link-hover">
                GitHub
              </a>

            </div>
          </div>

        </div>

      </div>

    </footer>
  );
};