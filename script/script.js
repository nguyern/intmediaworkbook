//Credit to https://matildasutho.github.io/InteractiveMedia2024/Week3/script/script.js for showing me how to do this typing effect
var data = [
  {
    html: `
      &lt;!DOCTYPE html&gt;<br/>
      &lt;html lang="en"&gt;<br/>
      &lt;head&gt;<br/>
      <span class="tab1"></span>&lt;meta charset="UTF-8"&gt;<br/>
      <span class="tab1"></span>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;<br/>
      <span class="tab1"></span>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br/>
      <span class="tab1"></span>&lt;title&gt; Interactive Media Workbook 2025 &lt;/title&gt;<br/>
      &lt;style&gt;<br/>
      <span class="tab1"></span>body {<br/>
      <span class="tab2"></span>font-family: monospace;<br/>
      <span class="tab2"></span>color: do i look pretty in pink?;<br/>
      <span class="tab1"></span>}<br/>
      <span class="tab1"></span>body:hover {<br/>
      <span class="tab2"></span>font-family: sloop;<br/>
      <span class="tab2"></span>color: genuinely be honest does this color suit me?;<br/>
      <span class="tab1"></span>}<br/>
      &lt;/style&gt;<br/>
      &lt;/head&gt;<br/>
      &lt;body&gt;<br/>
      <span class="tab1"></span>&lt;h1&gt; Hello World! &lt;/h1&gt;<br/>
      <span class="tab1"></span>&lt;h2&gt; Welcome to my Interactive Media Workbook! &lt;/h2&gt;<br/>
      <span class="tab1"></span>&lt;p&gt; Have a look inside. &lt;/p&gt;<br/>
      <a href="./weekone/"><span class="tab1">&lt;button&gt; <span id="sloop">Week One</span> &lt;/button&gt;</span></a><br/>
      <a href="./weektwo/"><span class="tab1">&lt;button&gt; <span id="sloop">Week Two</span> &lt;/button&gt;</span></a><br/>
      <a href="./weekthree/"><span class="tab1">&lt;button&gt; <span id="sloop">Week Three</span> &lt;/button&gt;</span></a><br/>
      &lt;/body&gt;<br/>
      &lt;/html&gt;<br/>
    `,
  },
];

var allElements = document.getElementsByClassName("monospace");
for (var j = 0; j < allElements.length; j++) {
  var currentElementId = allElements[j].id;
  var currentElementIdContent = data[0][currentElementId];
  var element = document.getElementById(currentElementId);
  var devTypeText = currentElementIdContent;

  var i = 0,
    isTag,
    text;
  (function type() {
    text = devTypeText.slice(0, ++i);
    element.innerHTML = text + `<span class='typing-caret'>|</span>`;
    var char = text.slice(-1);
    if (char === "<") isTag = true;
    if (char === ">") isTag = false;
    if (isTag) return type();
    if (text === devTypeText) return;
    setTimeout(type, 15);
  })();
}