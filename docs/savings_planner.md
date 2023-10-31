# Savings Planner

Savings Planner is a forecasting and modeling tool that allows you to see what your on-demand versus committed spend is within your organization and see what the impact would be for purchasing different types of Savings Plans in your account. Vantage will process Cost and Usage Report data to analyze every single instance hour running in your account and has built up a pricing database with millions of different price permutations to calculate your exact savings rate across different EC2 instance types, Lambda functions and Fargate Services.

This data is kept up-to-date as often as a Cost and Usage Report is processed which is typically every 7-8 hours. This allows you to always have the most accurate view of your infrastructure data and corresponding savings. You can also arbitrarily change future expected compute spend either up [or down] to see what the impact would be on your savings plan and reserved instance coverage versus on-demand.

Savings Planner allows you to create "Models" with these scenarios which can be shared with everyone on your team and referenced at future times to analyze. 

![Example of Savings Planner](/img/savings_planner.png)