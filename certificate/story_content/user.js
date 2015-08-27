function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ds6vc7aDOv":
        Script1();
        break;
  }
}

function Script1()
{
  var iframeElements = document.getElementsByTagName("iframe");

iframeElements[0].contentWindow.generatePDF();
}

