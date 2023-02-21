# Overview 

After you connect your Google Cloud account, create an IAM Role for your AWS account, or create a Service Principal for your Azure account Vantage will automatically begin ingesting billing information for the respective account. Once that is complete, you'll be directed to the main console experience within Vantage. The default landing page in the Vantage console is the 'Overview' page, which you can see an example of above. 

The Overview is meant to be an executive level summary of the cost metrics that you care about most which currently creates high-level cost summaries for three things at the moment:

* A widget that gives you the ability to see your total on-demand versus committed spend. This gives you an idea of how much you're paying for on-demand versus things like Savings Plans, Reserved Instances, Enterprise Discount Programs and Committed Use Discounts.
* A widget that gives you a breakdown of spend for each member account for AWS or project for GCP. You can see the current accrued costs for either projects or member accounts with their cost trends versus the prior month.
* A widget for each one of the [Cost Reports](/cost_reports/) you create. One default Cost Report will be present in your account that is referred to as "All Resources". As you create more Cost Reports in your account, a summary of them will automatically show up in the Overview page. 

Below is an example screenshot of what the overview looks like:

![Example of Overview](/img/overview.png)
