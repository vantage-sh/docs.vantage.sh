# Forecasting 

For every Cost Report, Vantage will product a forecasts of where your costs are expected to be by the end of the current month. These forecasts are based off of your account's actual cost data and produced from a Vantage-developed machine learning model that is trained anonymously from all Vantage customers to be as accurate as possible. 

Vantage gives a range of an upper-expected-band and a lower-expected-band with a median forecast that is the middle of these two ranges. This forecast is updated daily as new cost data arrives. 

Below is a picture of an example Cost Forecast.

![Example Cost Forecast](/img/forecasting.png)

## AWS Service Forecasts

In addition to seeing forecasts in aggregate for Cost Reports, you can also see a per AWS service cost forecast by clicking the rows in the table below. This will show you forecasts for each individual AWS service. 

## Forecast Generation

Forecasts take some time to generate - typically within 10 minutes but is dependent on the amount of data composing a Cost Report. If you don't see a forecast being generated temporarily after creating your account or creating a new Cost Report check back in after about 10-15 minutes and it should appear. 

## Forecasts for Member Accounts, Tags, or Regions

Forecasts are generated for every [Cost Report](/cost_reports). As a result, if you would like to see a forecast for a specific member account, tag or region you can simply create a Cost Report with the dimensions you desire and a forecast will be generated accordingly. 