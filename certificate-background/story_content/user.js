function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6RFEYuQ09i3":
        Script1();
        break;
  }
}

function Script1()
{
  var iframeElements = document.getElementsByTagName("iframe");

iframeElements[0].contentWindow.generatePDF();
}

