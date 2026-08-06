"use client";

import { ContactForm } from "@/components/contact/ContactForm";

export function HireMeModal() {
  return (
    <div className="bix-modal modal fade" id="bid">
      <div className="bix-modal-dialog modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="bix-contact-tabs">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link active"
                    id="freelancer-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#freelancer"
                    role="tab"
                    aria-controls="freelancer"
                    aria-selected="true"
                  >
                    Freelancer
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link"
                    id="job-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#job"
                    role="tab"
                    aria-controls="job"
                    aria-selected="false"
                  >
                    Job
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="freelancer" role="tabpanel" aria-labelledby="freelancer-tab">
                  <div className="col-12">
                    <ContactForm
                      type="freelancer"
                      rateOptions={["Fixed Rate", "Hourly Rate"]}
                      budgetPlaceholder="Offer ex $1900"
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="job" role="tabpanel" aria-labelledby="job-tab">
                  <div className="col-12">
                    <ContactForm
                      type="job"
                      rateOptions={["Virtual Job", "Office Job"]}
                      budgetPlaceholder="Offer Salary ex $1500/Mo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
