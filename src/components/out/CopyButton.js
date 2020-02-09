import React from "react";
import Button from "@material-ui/core/Button";

function clickButton(e, targetId) {
  e.preventDefault();
  console.log(targetId)
  copyToClip(document.getElementById(targetId));
}

function copyToClip(str) {
  if (!str) {
    alert("empty data!");
    return;
  }
  function listener(e) {
    e.clipboardData.setData("text/html", str.innerHTML);
    e.clipboardData.setData("text/plain", str.innerHTML);
    console.log(e.clipboardData.__proto__);
    // e.clipboardData.style("cssText", "color: blue;")
    e.preventDefault();
  }
  // div.innerHTML = "your div content";
  // div.style.cssText = document.defaultView.getComputedStyle(p, "").cssText;

  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}

export default function CopyButton({ targetId }) {
  return (
    <Button onClick={e => clickButton(e, targetId)} variant="outlined">
      COPY
    </Button>
  );
}
