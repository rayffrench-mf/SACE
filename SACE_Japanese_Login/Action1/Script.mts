AIUtil.SetContext Browser("creationtime:=0")

AIUtil("text_box", "SACE Registration Number").Type "499073R"
AIUtil("text_box", "Password").Type "test"
AIUtil.FindTextBlock("South Australlen").CheckExists True
AIUtil("button", "Log in").Click

AIUtil("check_box", "will act appropriately and follow the rules and conditions at all times").SetState "On"
AIUtil("check_box", "will not access any materials that are not allowed").SetState "On"
AIUtil("check_box", "will not copy or accept help from another student").SetState "On"
AIUtil("check_box", "will not allow another student to copy or accept help from me").SetState "On"
AIUtil("check_box", "understand that while l am participating in this examination my activities are monitored by the SACE Board").SetState "On"

AIUtil.FindTextBlock("Agree").Hover
AIUtil("button", "Agree").Click
