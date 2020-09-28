const $siteList = $(".siteList");
const $last = $siteList.find("li.last");
const y = JSON.parse(localStorage.getItem("y"));
const hashMap = y || [
  {
    logo:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3500378932,2505168882&fm=26&gp=0.jpg",
    url: "http://www.bilibili.com",
  },
  {
    logo:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=88797792,1181454646&fm=15&gp=0.jpg",
    url: "http://www.taobao.com",
  },
];
const simplifyUrl = (url) => {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .replace(".com", "")
    .replace(/\/.*/, ""); // 删除 / 开头的内容
};
const render = () => {
  $siteList.find("li:not(.last)").remove(); //清空之前的
  hashMap.forEach((node, index) => {
    const $li = $(`
          <li>
              <div class="site">
                  <div class="logo"><img src="${node.logo}"></div>
                  <div class="link">${simplifyUrl(node.url)}</div>
                  <div class="close">
                    <svg class="icon">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                  </div>
              </div>
          </li>`).insertBefore($last);
    $li.on("click", () => {
      window.open(node.url);
    });
    $li.on("click", ".close", (e) => {
      e.stopPropagation();
      hashMap.splice(index, 1);
      render();
    });
  });
};
render();
$(".addButton").on("click", () => {
  let url = window.prompt("请输入要添加的网址");
  if (url.indexOf("http") !== 0 || url.indexOf("https") !== 0) {
    url = "https://" + url;
  }
  let n = Math.ceil(Math.random() * 10);
  let newLogo;
  switch (n) {
    case 1:
      newLogo =
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2504392586,3499308163&fm=15&gp=0.jpg";
      break;
    case 2:
      newLogo =
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3351643673,1921012560&fm=15&gp=0.jpg";
      break;
    case 3:
      newLogo =
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2382351343,687644440&fm=26&gp=0.jpg";
      break;
    case 4:
      newLogo =
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=88797792,1181454646&fm=15&gp=0.jpg";
      break;
    case 5:
      newLogo =
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2302215709,2875734388&fm=15&gp=0.jpg";
      break;
    case 6:
      newLogo =
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3500378932,2505168882&fm=26&gp=0.jpg";
      break;
    case 7:
      newLogo =
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1809374780,2828319758&fm=26&gp=0.jpg";
      break;
    case 8:
      newLogo =
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=357409742,1965222523&fm=26&gp=0.jpg";
      break;
    case 9:
      newLogo =
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1344739748,783129263&fm=26&gp=0.jpg";
      break;
    case 10:
      newLogo =
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=459921552,931547644&fm=26&gp=0.jpg";
      break;
  }

  hashMap.push({
    logo: newLogo,
    url: url,
  });
  render();
});
window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap); //数组变字符串
  localStorage.setItem("y", string);
};
$(".go").on("click", () => {
  if ($(".choose").val() === "google") {
    $(".searchForm").attr("action", "https://www.google.com/search");
    $(".inputSearch").attr("name", "q");
  }
});
