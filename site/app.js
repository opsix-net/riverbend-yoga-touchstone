/* Riverbend Yoga Studio: class preferences and accessible form validation. */
(() => {
  "use strict";

  const STORAGE_KEY = "riverbend.classPreference.v1";
  const CLASSES = [
    { id: "gentle", title: "Gentle Foundations", details: "45 minutes | Slower pace",
      summary: "Explore seated or standing options with clear instructions and time for questions." },
    { id: "vinyasa", title: "Vinyasa Flow", details: "50 minutes | Steady movement",
      summary: "Link movement with comfortable breathing, with options to pause or simplify." },
    { id: "restorative", title: "Restorative Pause", details: "45 minutes | Time to rest",
      summary: "Use cushions and blocks for supported positions and unhurried transitions." },
    { id: "private", title: "Private session", details: "60 minutes | One-to-one practice",
      summary: "Discuss your goals, access needs, and preferred pace with an instructor." }
  ];
  const INTEREST_IDS = [...CLASSES.map(item => item.id), "first-visit", "desk-reset", "rest-restore"];

  function findClass(id) {
    return CLASSES.find(item => item.id === id) || null;
  }

  function readPreference() {
    try {
      const selected = findClass(window.localStorage.getItem(STORAGE_KEY));
      return { selected, available: true };
    } catch {
      return { selected: null, available: false };
    }
  }

  function updateSavedNotice(selected) {
    document.querySelectorAll("[data-saved-preference]").forEach(notice => {
      notice.hidden = !selected;
      const label = notice.querySelector("[data-saved-class-label]");
      label.textContent = selected ? `Remembered class: ${selected.title}.` : "";
    });
  }

  function renderClass(selected) {
    const result = document.getElementById("class-result");
    result.hidden = !selected;
    document.getElementById("remember-class").disabled = !selected;
    if (!selected) return;
    document.getElementById("chosen-class-title").textContent = selected.title;
    document.getElementById("chosen-class-details").textContent = selected.details;
    document.getElementById("chosen-class-summary").textContent = selected.summary;
    document.getElementById("chosen-class-link").textContent = `Ask about ${selected.title}`;
    document.getElementById("chosen-class-link").href = `events.html?class=${encodeURIComponent(selected.id)}#request-spot`;
  }

  function initClassPicker(preference) {
    const panel = document.getElementById("class-preference");
    if (!panel) return;
    const choice = document.getElementById("class-choice");
    const status = document.getElementById("preference-status");
    const forget = document.getElementById("forget-class");
    panel.hidden = false;
    if (preference.selected) {
      choice.value = preference.selected.id;
      forget.disabled = false;
      status.textContent = `Restored your remembered class: ${preference.selected.title}.`;
    } else if (!preference.available) {
      status.textContent = "You can explore classes, but this browser cannot remember your choice.";
    }
    renderClass(findClass(choice.value));

    choice.addEventListener("change", () => {
      const selected = findClass(choice.value);
      renderClass(selected);
      status.textContent = selected
        ? `Showing ${selected.title}. Choose Remember this class to save this choice.`
        : "Choose a class to see its details.";
    });

    document.getElementById("remember-class").addEventListener("click", () => {
      const selected = findClass(choice.value);
      if (!selected) return;
      try {
        window.localStorage.setItem(STORAGE_KEY, selected.id);
        preference.selected = selected;
        forget.disabled = false;
        updateSavedNotice(selected);
        status.textContent = `Remembered ${selected.title} on this browser. It will be selected on the request form.`;
      } catch {
        status.textContent = "This browser could not remember your choice. You can still use the Ask about link for this class.";
      }
    });

    forget.addEventListener("click", () => {
      try {
        window.localStorage.removeItem(STORAGE_KEY);
        preference.selected = null;
        choice.value = "";
        renderClass(null);
        forget.disabled = true;
        updateSavedNotice(null);
        status.textContent = "Your remembered class has been removed from this browser.";
      } catch {
        status.textContent = "This browser could not remove the remembered class. Please check its site storage settings.";
      }
    });
  }

  const FIELD_RULES = [
    { id: "full-name", error: "full-name-error", validate: values => {
      const name = values["full-name"];
      if (!name) return "Enter your name.";
      return name.length < 2 || name.length > 80 ? "Use 2 to 80 characters for your name." : "";
    } },
    { id: "email", error: "email-error", validate: values => {
      const email = values.email;
      if (!email) return "Enter your email address.";
      if (email.length > 254) return "Use no more than 254 characters for your email address.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Enter an email address such as name@example.com.";
    } },
    { id: "contact-method", error: "contact-method-error", validate: values =>
      ["email", "phone"].includes(values["contact-method"]) ? "" : "Choose how you would like to be contacted." },
    { id: "phone", error: "phone-error", validate: values => {
      const phone = values.phone;
      if (!phone) return values["contact-method"] === "phone"
        ? "Enter a phone number for a phone call, or choose Email." : "";
      const digits = phone.replace(/\D/g, "");
      return phone.length <= 30 && /^[+()\d\s.\-]+$/.test(phone) && digits.length >= 7 && digits.length <= 15
        ? "" : "Use 7 to 15 digits, with spaces, +, -, dots, or parentheses if needed.";
    } },
    { id: "interest", error: "interest-error", validate: values =>
      INTEREST_IDS.includes(values.interest) ? "" : "Choose a class or workshop." },
    { id: "experience", error: "experience-error", validate: values =>
      ["new", "some", "regular"].includes(values.experience) ? "" : "Choose the experience level that fits you." },
    { id: "message", error: "message-error", validate: values => {
      const message = values.message;
      if (!message) return "Enter a short message about your interest.";
      return message.length < 10 || message.length > 1200 ? "Use 10 to 1200 characters for your message." : "";
    } }
  ];

  function readFormValues(form) {
    const values = {};
    FIELD_RULES.forEach(rule => {
      if (rule.id === "experience") {
        const checked = form.querySelector('input[name="experience"]:checked');
        values.experience = checked ? checked.value : "";
      } else {
        values[rule.id] = form.elements.namedItem(rule.id).value.trim();
      }
    });
    return values;
  }

  function collectErrors(values) {
    return FIELD_RULES.map(rule => ({ ...rule, message: rule.validate(values) }))
      .filter(error => error.message);
  }

  function controlsFor(form, id) {
    return id === "experience"
      ? [...form.querySelectorAll('input[name="experience"]')]
      : [form.elements.namedItem(id)];
  }

  function showErrors(form, errors) {
    FIELD_RULES.forEach(rule => {
      const error = errors.find(item => item.id === rule.id);
      document.getElementById(rule.error).textContent = error ? `Error: ${error.message}` : "";
      controlsFor(form, rule.id).forEach(control => {
        if (error) control.setAttribute("aria-invalid", "true");
        else control.removeAttribute("aria-invalid");
      });
    });
    document.getElementById("form-summary").textContent = errors.length
      ? `Please correct ${errors.length} highlighted ${errors.length === 1 ? "field" : "fields"}. Your entries are still here.`
      : "";
  }

  function initInterestForm(preference) {
    const form = document.getElementById("interest-form");
    if (!form) return;
    const interest = document.getElementById("interest");
    const result = document.getElementById("form-result");
    let attempted = false;
    const phone = document.getElementById("phone");
    const contactMethod = document.getElementById("contact-method");
    phone.required = contactMethod.value === "phone";
    const requested = findClass(new URLSearchParams(window.location.search).get("class"));
    const initialClass = requested || preference.selected;
    if (initialClass && !interest.value) {
      interest.value = initialClass.id;
      const notice = document.getElementById("preference-notice");
      notice.textContent = requested
        ? `You chose ${requested.title}. It is selected below, and you can change it.`
        : `Your remembered class, ${initialClass.title}, is selected below. You can change it.`;
      notice.hidden = false;
    }

    form.addEventListener("submit", event => {
      event.preventDefault();
      attempted = true;
      result.textContent = "";
      const errors = collectErrors(readFormValues(form));
      showErrors(form, errors);
      if (errors.length) {
        controlsFor(form, errors[0].id)[0].focus();
        return;
      }
      result.textContent = "Your sample request passes all checks. No booking was sent or reserved.";
      result.tabIndex = -1;
      result.focus();
    });

    function refreshFeedback() {
      phone.required = contactMethod.value === "phone";
      result.textContent = "";
      if (attempted) showErrors(form, collectErrors(readFormValues(form)));
    }
    form.addEventListener("input", refreshFeedback);
    form.addEventListener("change", refreshFeedback);
    // Keep native HTML validation as the fallback when JavaScript is unavailable.
    form.noValidate = true;
  }

  const preference = readPreference();
  updateSavedNotice(preference.selected);
  initClassPicker(preference);
  initInterestForm(preference);
})();
