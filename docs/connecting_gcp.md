# Setup

## Connecting Your GCP Account

Vantage integrates with your GCP account through the use of a Google Service Account. A Google Service Account is generated on a per customer basis on the Vantage side and only is granted permissions to read from the specific billing Big Query table present within your account. When you log into the Vantage console and go to add a GCP integration you'll be provided with the Global Name for your Google Service Account and be given instructions for what to do with it. 

After following the instructions you'll need to provide Vantage with your GCP Billing Account ID, the project name and the Big Query dataset name. After Vantage validates the connection, it will begin ingesting your billing data within 24 hours dependent on the amount of cloud costs you have.


## Read Only by Default
For the purpose of being explicit: The Google Service Account is read only by default and does not have permissions nor will ever attempt to make any changes to any of your infrastructure. 
