# Cost Report Notifications

Vantage has the concept of [Cost Report Notifications](https://console.vantage.sh/report_notifications) which allow you to receive either daily, weekly or monthly reports for one or more Cost Reports delivered either. Customers may choose either a Slack integration or a Microsoft Teams integration but not both. Below are the currently supported methods for receiving a Cost Report Notification:

- **E-Mail**: You can deliver a notification to one or more email addresses.
- **[Slack](/slack_integration/)**: You can deliver a notification to one or more public or private channels in a Slack workspace.
- **[Microsoft Teams](/microsoft_teams_integration/)**: You can deliver a notification to one of more public or private channels in a Microsoft Team account.

Prior to sending you this email, Vantage will automatically issue a sync with your infrastructure accounts to ensure it has an up-to-date representation of your cost data to give you an accurate cost report.

The email report will contain a list of all of your views and a point-in-time cost for each view so you can make sure you don't have any surprises on your next AWS bill. At the bottom of the email it will contain [Cost Recommendations](https://www.vantage.sh/features/cost-recommendations). Cost Recommendations are not sent for Slack or Microsoft Teams.
