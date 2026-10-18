(function () {
  var $ = function (s) { return document.querySelector(s); };

  // year
  var y = $("#year"); if (y) y.textContent = new Date().getFullYear();

  // fade-in on scroll
  var els = document.querySelectorAll(".fade");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add("in"); }); }

  // contact form -> Web3Forms
  var form = $("#contact-form"), status = $("#form-status");
  if (!form) return;
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if (form.botcheck.checked) return;
    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true; status.className = ""; status.textContent = "Sending...";
    var f = form.elements;
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: "f4fa783b-e8ba-4a0c-9634-80bc5ff06077",
        subject: "Message from " + f.firstname.value + " (robiharid.co.uk)",
        from_name: f.firstname.value, name: f.firstname.value,
        email: f.email.value, message: f.message.value
      })
    }).then(function (r) { return r.json(); }).then(function (d) {
      if (!d.success) throw new Error(d.message);
      status.className = "ok"; status.textContent = "Thanks! Your message has been sent.";
      form.reset();
    }).catch(function () {
      status.className = "err"; status.textContent = "Sorry, something went wrong. Please email robiharid@gmail.com directly.";
    }).then(function () { btn.disabled = false; });
  });
})();
