var presence = new Presence({
    clientId: "721730243357835274"
});
var browsingStamp = Math.floor(Date.now() / 1000);
var study;
presence.on("UpdateData", async () => {
    const presenceData = {
        details: "PubMed"
    };
    if (document.location.hostname == "pubmed.ncbi.nlm.nih.gov") {
        if (document.location.pathname == "/") {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing home page";
        }
        else {
            presenceData.startTimestamp = browsingStamp;
            study = document.querySelector("#full-view-heading > h1.heading-title");
            presenceData.details = "Reading study :";
            presenceData.smallImageKey = "reading";
            if (study.innerText.length > 128) {
                presenceData.state = study.innerText.substring(0, 125) + "...";
            }
            else {
                presenceData.state = study.innerText;
            }
        }
        if (presenceData.details == null) {
            presence.setTrayTitle();
            presence.setActivity();
        }
        else {
            presence.setActivity(presenceData);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcmVzZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztJQUN4QixRQUFRLEVBQUUsb0JBQW9CO0NBQ2pDLENBQUMsQ0FBQztBQUVILElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2xELElBQUksS0FBVSxDQUFDO0FBR2YsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFakMsTUFBTSxZQUFZLEdBQWlCO1FBQ3JDLE9BQU8sRUFBRSxRQUFRO0tBRWQsQ0FBQztJQUVMLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUkseUJBQXlCLEVBQUU7UUFDNUQsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxHQUFHLEVBQUU7WUFDdEMsWUFBWSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7WUFDNUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQztTQUMzQzthQUVEO1lBQ0MsWUFBWSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7WUFDNUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUN4RSxZQUFZLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDO1lBQ3pDLFlBQVksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ3ZDLElBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUMvQjtnQkFDQyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDOUQ7aUJBRUQ7Z0JBQ0MsWUFBWSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO2FBQ3JDO1NBQ0Q7UUFDRCxJQUFJLFlBQVksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBRWpDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QixRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUVOLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkM7S0FDRDtBQUNGLENBQUMsQ0FDQSxDQUFDIn0=