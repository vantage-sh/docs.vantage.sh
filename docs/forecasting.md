---
id: forecasting
title: Forecasting
description: View forecasts on Cost Reports to see where your costs are expected to be by the end of the month.
keywords:
  - Forecasting
---

# Forecasting

For every [Cost Report](/cost_reports), Vantage will produce a forecast that shows where your costs are expected to be by the end of the current month. These forecasts are based on your account's actual cost data and produced from a Vantage-developed machine learning model. The model is trained anonymously on all Vantage data to be as accurate as possible.

## View a Forecast on a Cost Report

To view a forecast on a Cost Report, create a new Cost Report and save it. If you want to see a forecast for a specific account, tag, or region, create a Cost Report with the dimensions you want, and a forecast will be generated accordingly. Forecasts will be visible when a line chart is set to view costs for the current month and in the cumulative view.

After you create a new Cost Report, a message is displayed that indicates the forecast is generating. Forecasts take some time to generate—typically, about 10 minutes.

:::note
The time to generate a forecast is dependent on the amount of data on the Cost Report. This process may take up to 15 minutes.
:::

The forecast includes an upper-expected band and a lower-expected band, with a median forecast that is in the middle of these two ranges. This forecast is updated daily as new cost data arrives.

In the below example image, the light-purple area is the forecast range, with upper and lower bounds. The dark-purple dotted line represents the median forecast for that month. Hover over any future date to see the forecast median and the previous period's costs. Total forecasted costs are displayed above the chart, next to currently accrued costs. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A Cost Report with a forecast for the month and the mouse hovering over a future date point" width="100%" src="/img/forecasting.png" />
</div>

## View Service Forecasts

In addition to aggregate forecasts on Cost Reports, you can also view a per-service cost forecast. On any Cost Report, select a row from the table. An individual forecast is displayed for the selected service.
