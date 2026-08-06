import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bix-footer-contact">
              <p>
                &copy; {year} <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.name}</a>, All
                Rights Reserved.
              </p>
              <div className="logo-links">
                <a href={profile.facebook} target="_blank" rel="noreferrer">
                  <i className="ri-facebook-line" />
                </a>
                <a href={profile.twitter} target="_blank" rel="noreferrer">
                  <i className="ri-twitter-line" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <i className="ri-linkedin-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
