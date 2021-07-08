# Syncing


## Automatic Syncing

Vantage works by retrieving metadata about your infrastructure on a periodic interval that is currently set at a maximum of every hour. Without any action necessary by you, Vantage will determine what resources have been deleted, added and changed and represent them in the Vantage console accordingly. We are sensitive to our impact on AWS API limits and have done considerable work on minimizing the amount of API requests we make to limit impact. That being said, we haven't had a single user mention concerns with API calls we make. 

In the navigation bar at the top of the Vantage console you'll see a refresh icon available to you. When you hover over that refresh icon, Vantage will inform you when the time a sync took place. 

## Manual Syncing

In the event that you're making changes to your infrastructure, it's very common that you'll need to refresh the state with Vantage prior to the one hour interval taking place. To issue a manual account sync, you simply need to click the refresh icon in the top right of the navigation bar. The refresh icon will begin rotating signalling that the sync is in progress. When the sync is complete, the icon will stop rotating. You may need to refresh the page you're currently on to get the latest information after the sync has occured. 

When you issue a sync, Vantage will do a global inspection across all AWS regions and services and perform the following:

* Add new AWS resources in the Vantage console that are newly added.
* Remove any references to out of date or deleted resources.
* Update all attributes with existing resources that have been changed. 

Syncs usually take anywhere from 5 seconds to 30 seconds depending on the size and complexity of your AWS account and we're working on tools 


## Syncing Considerations

Note that syncing only impacts Active Resources and you do not need to worry about syncing your account to see accrued costs which are always up-to-date. 