Dim BrowserExecutable

While Browser("CreationTime:=0").Exist(0)
		Browser("CreationTime:=0").Close
Wend

'BrowserExecutable = DataTable.Value("BrowserName") & ".exe"
SystemUtil.Run "Chrome.exe","","","",3
Set AppContext=Browser("CreationTime:=0")

AppContext.ClearCache
AppContext.Navigate "about:blank"
AppContext.Navigate ("http://advantageonlineshopping.com")
AppContext.Maximize
AppContext.Sync


' AI engine Set context above
AIUtil.SetContext AppContext
AIUtil.RunSettings.AutoScroll.Enable "up",2
wait 5
AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("SPEAKERS").Click
AIUtil("button", "BUY NOW").Click
AIUtil.FindTextBlock("dvantageDEMO").Click
