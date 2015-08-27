function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mNiRXNTf0E":
        Script1();
        break;
  }
}

function Script1()
{
  var iframeElements = document.getElementsByTagName("iframe");

iframeElements[0].contentWindow.generatePDF();
}

