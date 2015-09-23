function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6TNzkAwkK7f":
        Script1();
        break;
  }
}

function Script1()
{
  var iframeElements = document.getElementsByTagName("iframe");

iframeElements[0].contentWindow.generatePDF();
}

