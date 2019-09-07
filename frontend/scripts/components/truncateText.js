function truncateText(selector) {
  if ($(selector).length === 0) return;

  const box = $(selector + ":first");
  const text = box.text();
  const clone = $(document.createElement("div"));

  $(clone).css("fontSize", box.css("fontSize"));

  clone.css({
    fontSize: box.css("fontSize"),
    position: "absolute",
    width: box.width() + "px"
  });
  clone.text(text);
  document.body.appendChild(clone[0]);

  let length = text.length;

  for (; length >= 0 && $(clone).height() > box.height(); --length) {
    $(clone).text(text.substring(0, length) + "...");
  }

  $(selector).text(clone.text());
  clone.remove();
}
