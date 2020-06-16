var presence = new Presence({
    clientId: "721730243357835274" //The client ID of the Application created at 
});

var browsingStamp = Math.floor(Date.now() / 1000);
var study: any;


presence.on("UpdateData", async () => {
    
    const presenceData: PresenceData = {
		details: "PubMed"
  
    }; 
	
	if (document.location.hostname == "pubmed.ncbi.nlm.nih.gov") {
		if (document.location.pathname == "/") {
			presenceData.startTimestamp = browsingStamp;
			presenceData.details = "Viewing home page";
		}
		else
		{
			presenceData.startTimestamp = browsingStamp;
			study = document.querySelector("#full-view-heading > h1.heading-title");
			presenceData.details = "Reading study :";
			presenceData.smallImageKey = "reading";
			if(study.innerText.length > 128)
			{
				presenceData.state = study.innerText.substring(0,125) + "...";
			}
			else
			{
				presenceData.state = study.innerText;
			}
		}	
		if (presenceData.details == null) {
			//This will fire if you do not set presence details
			presence.setTrayTitle(); //Clears the tray title for mac users
			presence.setActivity(); /*Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name*/
		} else {
			//This will fire if you set presence details
			presence.setActivity(presenceData); //Update the presence with all the values from the presenceData object
		}
	}
}
);