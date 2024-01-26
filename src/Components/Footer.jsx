import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col flex-wrap gap-8 items-center justify-between sm:footer p-10 bg-base-200/50 text-base-content">
        <nav className="flex flex-col gap-1">
          <h6 className="footer-title">Contact</h6>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:pratyaksh.singh8171@gmail.com"
            className="link link-hover"
          >
            Email - pratyaksh.singh8171@gmail.com
          </a>
          <a className="link link-hover">Phone: 8171275730</a>
        </nav>
        <form>
          <h6 className="footer-title">Blog</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <div className="tooltip" data-tip="Coming Soon">
                <button className="btn btn-primary join-item btn-disabled">
                  Subscribe
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer footer-center p-4 bg-base-200/50 text-base-content">
        <aside>
          <p>Copyright © 2024 - Pratyaksh Singh</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
