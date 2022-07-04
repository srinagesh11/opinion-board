import React, { useState } from "react";

export default function NewsletterStates() {
  let [newsletter, setNewsletter] = useState(false);
  let [daily, setDaily] = useState(false);
  let [weekly, setWeekly] = useState(false);
  let [monthly, setMonthly] = useState(false);

  const onNewsletterChange = (checked) => {
    setNewsletter(checked);
  };

  return (
    <div>
      <div>
        <ToggleSwitch
          id="newsletter"
          checked={newsletter}
          onChange={onNewsletterChange}
        />
      </div>
    </div>
  );
}
