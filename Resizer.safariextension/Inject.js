window.addEventListener("keydown", fireOnKeypress, false);

function fireOnKeypress()
{
	const s = safari.self.tab;
	const e = event;
	if (event.target.nodeName.toLowerCase() !== 'input')
	{                                                                                       
		if (e.altKey && e.keyCode == "49") { s.dispatchMessage("resize","0"); }
		if (e.altKey && e.keyCode == "50") { s.dispatchMessage("resize","1"); }
		if (e.altKey && e.keyCode == "51") { s.dispatchMessage("resize","2"); }
		if (e.altKey && e.keyCode == "52") { s.dispatchMessage("resize","3"); }
		if (e.altKey && e.keyCode == "53") { s.dispatchMessage("resize","4"); }
		if (e.altKey && e.keyCode == "54") { s.dispatchMessage("resize","5"); }
		if (e.altKey && e.keyCode == "55") { s.dispatchMessage("resize","6"); }
		if (e.altKey && e.keyCode == "56") { s.dispatchMessage("resize","7"); }
		if (e.altKey && e.keyCode == "57") { s.dispatchMessage("resize","8"); }
		if (e.altKey && e.keyCode == "48") { s.dispatchMessage("resize","9"); }
	}
}