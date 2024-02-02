---
id: forecasting
title: Forecasting
description: View forecasts on Cost Reports to see where your costs are expected to be by the end of the month.
keywords:
  - Forecasting
---

# Forecasting

For every [Cost Report](/cost_reports), Vantage will produce a forecast of where your costs are expected to be by the end of the current month. These forecasts are based on your account's actual cost data and produced from a Vantage-developed machine learning model. The model is trained anonymously on all Vantage data to be as accurate as possible.

## View Forecast on a Cost Report

To view a forecast on a Cost Report, create a new Cost Report and save it. If you would like to see a forecast for a specific AWS member account, tag, or region, you can create a Cost Report with the dimensions you want, and a forecast will be generated accordingly.

After you create a new Cost Report, a message is displayed that indicates the forecast is generating. Forecasts take some time to generate—typically, about 10 minutes. 

:::note
The time to generate a forecast is dependent on the amount of data on the Cost Report. This process may take up to 15 minutes. If you do not see the forecast, save and refresh the report. 
:::

The forecast includes an upper-expected band and a lower-expected band, with a median forecast that is in the middle of these two ranges. This forecast is updated daily as new cost data arrives. In the below example image, observe the light purple forecast range, with the dark purple dotted line representing the median forecast for that month. 

![Example Cost Forecast](/img/forecasting.png)

## View AWS Service Forecasts

In addition to aggregate forecasts on Cost Reports, you can also view a per-AWS service cost forecast. On any Cost Report, select a row from the table. An individual forecast is displayed for the selected AWS service.
